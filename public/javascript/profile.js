function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('active');
}

function confirmDelete() {
    // Implement the delete account functionality
    alert("Delete account functionality not implemented.");
}

function confirmLogout() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function logout() {
    // Implement the logout functionality
    // You could redirect to a logout URL or perform other actions
    window.location.href = '/logout';  // Example: redirect to logout URL
}
