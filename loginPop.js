document.addEventListener('DOMContentLoaded', () => {
    const openLogin = document.getElementById('loginLink');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('close');
    const phoneNo = document.getElementById('phoneNo');
    const validPho = document.getElementById('validPho');

    // Show the modal when "Login" link is clicked
    openLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    // Hide the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Hide the modal when clicking outside the modal
    window.addEventListener('click', (e) => {
        if (e.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Enable the button and change color when input length is 10
    phoneNo.addEventListener('input', () => {
        if (phoneNo.value.length === 10) {
            validPho.disabled = false;
            validPho.classList.add('active'); // Add green active class
        } else {
            validPho.disabled = true;
            validPho.classList.remove('active'); // Remove green active class
        }
    });

    validPho.addEventListener('click', () => {
        if (phoneNo.value.length === 10) { // Simulate a valid login condition
            window.location.href = 'menu.html'; // Redirect to the menu page
        }
    });
});