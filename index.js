const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require('dotenv');
const miURL = "mongodb+srv://magnus87:root1234@intro.tuyod.mongodb.net/canciones?retryWrites=true&w=majority&appName=intro";

const route = express.Router();

const userRoute = require("./user.route");
const albumRoute = require("./album.route");

//



const app = express();
const PORT = 3001;

dotenv.config();

app.use(express.static(path.join(__dirname,"./Public")))

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect(miURL, {
  //useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error("Error al conectar con MongoDB Atlas:", error));


app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "https://proyectofinal2-f11b.onrender.com",
//        "http://localhost:3001",
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS Baby!"));
    },
  })
);
app.disable("x-powered-by"); // Oculta el nobre de la biblioteca Express



// Esquema de Canciones
const songSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  album: { type: String, required: true },
  year: { type: Number, required: true },
  coverUrl: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
});

const Song = mongoose.model("Song", songSchema);

// Rutas
app.get("/songs", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

app.post("/songs", async (req, res) => {
  const newSong = new Song(req.body);
  await newSong.save();
  res.json(newSong);
});

app.delete("/songs/:id", async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.json({ message: "Canción eliminada" });
});

// Modelo de usuario
const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    apodo: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Ruta para registrar usuarios
app.post('/register', async (req, res) => {
    try {
        const { nombre, apellido, apodo, email, password } = req.body;
        const user = new User({ nombre, apellido, apodo, email, password });
        await user.save();
        res.status(201).send('Usuario registrado con éxito');
    } catch (error) {
        res.status(500).send('Error al registrar el usuario');
    }
});

// Endpoint para verificar login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email, password });
      if (user) {
          res.json({ success: true, message: 'El usuario existe' });
      } else {
          res.json({ success: false, message: 'Lo siento, ese usuario o contraseña no son válidos' });
      }
  } catch (error) {
      res.status(500).json({ success: false, message: 'Error en el servidor', error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});




