document.getElementById('update').addEventListener('submit', async (e) => {
    e.preventDefault();

    const user2 = document.getElementById('user2').value;
    const user1 = document.getElementById('user1').value;
    const password2 = document.getElementById('password2').value;
    const password1 = document.getElementById('password1').value;

        try {
            const response = await fetch('../update/delete', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user2, user1, password1, password2 })
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message); 
                if (data.redirect) {
                    window.location.href = data.redirect;
                }
            } else {
                alert(data.message);
                if (data.redirect) {
                    window.location.href = data.redirect;
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al procesar la solicitud');
        }
    });

    document.getElementById('delete').addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const Email = document.getElementById('Email').value;
        const password = document.getElementById('password').value;
    
            try {
                const response = await fetch('../update/delete', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ Email, password })
                });
        
                const data = await response.json();
    
                if (data.success) {
                    alert(data.message); 
                    if (data.redirect) {
                        window.location.href = data.redirect;
                    }
                } else {
                    alert(data.message);
                    if (data.redirect) {
                        window.location.href = data.redirect;
                    }
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al procesar la solicitud');
            }
        });