// const form = document.getElementById("songForm");
// const tableBody = document.getElementById("songsTable").querySelector("tbody");

// // Cargar canciones
// async function loadSongs() {
//   const response = await fetch( "mongodb+srv://magnus87:root1234@intro.tuyod.mongodb.net/canciones?retryWrites=true&w=majority&appName=intro" );
//   const songs = await response.json();
//   tableBody.innerHTML = "";
//   songs.forEach((song) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${song.id}</td>
//         <td>${song.title}</td>
//         <td>${song.album}</td>
//         <td>${song.year}</td>
//         <td><img src="${song.coverUrl}" alt="${song.title}" width="100"></td>
//         <td><a href="${song.youtubeUrl}" target="_blank">Ver en YouTube</a></td>
//         <td>
//           <button onclick="deleteSong('${song._id}')">Eliminar</button>
//           </td>
//     `;
//     tableBody.appendChild(row);
//   });
  
// }

// // Guardar canción
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const song = {};
//   formData.forEach((value, key) => {
//     song[key] = value;
//   });

//    const response = await fetch(" mongodb+srv://magnus87:root1234@intro.tuyod.mongodb.net/canciones?retryWrites=true&w=majority&appName=intro", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(song),
//   });

//   if (response.ok) {
//     alert('Usuario registrado con éxito');
//     form.reset();
//     loadSongs();
// } else {
//     alert('Hubo un error al registrar al usuario');
// }

//   form.reset();
//   loadSongs();
// });


// // Eliminar canción
// async function deleteSong(id) {
//   await fetch(`http://localhost:3001/songs/${id}`, { method: "DELETE" });
//   loadSongs();
// }



// // Inicializar
// loadSongs();



const form = document.getElementById("songForm");
const tableBody = document.getElementById("songsTable").querySelector("tbody");

// Cargar canciones
async function loadSongs() {
  try {
    const response = await fetch("https://proyectofinal2-f11b.onrender.com/songs");
    if (!response.ok) throw new Error('Error al cargar las canciones');
    const songs = await response.json();
    tableBody.innerHTML = "";
    songs.forEach((song) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${song.id}</td>
        <td>${song.title}</td>
        <td>${song.album}</td>
        <td>${song.year}</td>
        <td><img src="${song.coverUrl}" alt="${song.title}" width="100"></td>
        <td><a href="${song.youtubeUrl}" target="_blank">Ver en YouTube</a></td>
        <td>
          <button onclick="deleteSong('${song._id}')">Eliminar</button>
          </td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error al cargar las canciones:', error);
  }
}

// Guardar canción
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const song = {};
  formData.forEach((value, key) => {
    song[key] = value;
  });

  try {
    const response = await fetch("https://proyectofinal2-f11b.onrender.com/songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    });

    if (response.ok) {
      alert('Usuario registrado con éxito');
      form.reset();
      loadSongs();
    } else {
      alert('Hubo un error al registrar al usuario');
    }
  } catch (error) {
    console.error('Error al guardar la canción:', error);
    alert('Hubo un error al registrar al usuario');
  }
});

// Eliminar canción
async function deleteSong(id) {
  try {
    const response = await fetch(`https://proyectofinal2-f11b.onrender.com/songs/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error('Error al eliminar la canción');
    loadSongs();
  } catch (error) {
    console.error('Error al eliminar la canción:', error);
  }
}

// Inicializar
loadSongs();
