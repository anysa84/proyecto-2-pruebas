document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('Inicio de sesión exitoso');
            // Redirigir al usuario a la página principal o dashboard
            window.location.href = '/dashboard';
        } else {
            alert(data.message);
        }
     } 
    catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        alert('Error durante el inicio de sesión. Intenta de nuevo.');
    }
})
