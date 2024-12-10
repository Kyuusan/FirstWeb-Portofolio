document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const form = e.target;
    const notification = document.getElementById('notification');
    const formData = new FormData(form);

    try {
        
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        });


        if (response.ok) {
            notification.style.display = 'block';
            notification.style.animation = 'fadeIn 1s forwards'; 

          
            notification.innerHTML = '<p>Your message has been sent successfully!</p>';

            form.reset();

           
            setTimeout(() => {
                notification.style.animation = 'fadeOut 1s forwards'; 
            }, 7000); 
        } else {
            alert('Terjadi kesalahan, coba lagi nanti.');
        }
    } catch (error) {
        alert('Terjadi kesalahan saat mengirim pesan.');
    }
});
