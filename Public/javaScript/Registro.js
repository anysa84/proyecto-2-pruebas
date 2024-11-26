
// const nombre = document.querySelector('input[name="nombre"]').value;
// const apellido = document.querySelector('input[name="apellido"]').value;
// const apodo = document.querySelector('input[name="apodo"]').value;
// const mail = document.querySelector('input[name="mail"]').value;
// const repeatMail = document.querySelector('input[name="repeatMail"]').value;
// const password = document.querySelector('input[name="password"]').value;
// const repeatPassword = document.querySelector('input[name="repeatPassword"]').value;

// if (nombre && apellido && apodo && mail && repeatMail && password && repeatPassword) {
//     if (mail !== repeatMail) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Los correos electrónicos no coinciden'
//         });
//     } else if (password !== repeatPassword) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Las contraseñas no coinciden'
//         });
//     } else {
//         Swal.fire({
//             icon: 'success',
//             title: 'Formulario enviado',
//             text: 'Tu formulario ha sido enviado exitosamente'
//         });
//         // Aquí puedes añadir el código para enviar el formulario al servidor
//     }
// } else {
//     Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Por favor, completa todos los campos'
//     });
// }


// // mongo//
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.json());

// // Conexión a MongoDB
// mongoose.connect('mongodb+srv://magnus87:root1234@intro.tuyod.mongodb.net/canciones?retryWrites=true&w=majority&appName=intro', {});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Error de conexión:'));
// db.once('open', () => {
//     console.log('Conectado a la base de datos MongoDB');
// });

// // Esquema y modelo de Usuario
// const userSchema = new mongoose.Schema({
//     nombre: String,
//     apellido: String,
//     apodo: String,
//     mail: String,
//     password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Ruta para registrar usuarios
// app.post('/users', async (req, res) => {
//     const { nombre, apellido, apodo, mail, password } = req.body;

//     const user = new User({
//         nombre,
//         apellido,
//         apodo,
//         mail,
//         password
//     });

//     try {
//         const newUser = await user.save();
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Ruta para obtener todos los usuarios
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Ruta para eliminar un usuario
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) return res.status(404).send('El usuario no fue encontrado.');

//         await user.remove();
//         res.json({ message: 'El usuario fue eliminado' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// });

document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        apodo: document.getElementById('apodo').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
    };

    if (formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        alert('Usuario registrado con éxito');
        document.getElementById('userForm').reset();
    } else {
        alert('Hubo un error al registrar al usuario');
    }
});