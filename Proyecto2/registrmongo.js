
//MONGO 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://magnus87:root1234@intro.tuyod.mongodb.net/canciones?retryWrites=true&w=majority&appName=intro', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

// Esquema y modelo de Usuario
const userSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  apodo: String,
  mail: String,
  password: String,
});

const User = mongoose.model('user', userSchema);

// Ruta para registrar usuarios
app.post('/users', async (req, res) => {
  const { nombre, apellido, apodo, mail, password } = req.body;

  const user = new User({
    nombre,
    apellido,
    apodo,
    mail,
    password
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// // Modelo de usuario
// const userSchema = new mongoose.Schema({
//     nombre: String,
//     apellido: String,
//     apodo: String,
//     email: String,
//     password: String,
// });

// const user = mongoose.model('user', userSchema);

// // Ruta para registrar usuarios
// app.post('/register', async (req, res) => {
//     try {
//         const { nombre, apellido, apodo, email, password } = req.body;
//         const user = new user({ nombre, apellido, apodo, email, password });
//         await user.save();
//         res.status(201).send('Usuario registrado con éxito');
//     } catch (error) {
//         res.status(500).send('Error al registrar el usuario');
//     }
// });
