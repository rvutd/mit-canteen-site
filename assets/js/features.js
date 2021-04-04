// ------------------ Sign In Modal ---------------------------
const signInModalbtn = document.querySelectorAll('#sign-modal');
const signUpModalbtn = document.querySelectorAll('#signup-modal');
const signModal = document.querySelector('.sign-modal');
const signUpModal = document.querySelector('.signup-modal');

signInModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signModal.classList.toggle('show'); 
    })
});

signUpModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signUpModal.classList.toggle('show'); 
    })
});

 // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signModal) {
        signModal.classList.remove('show');
        signUpModal.classList.remove('show');
    }
}
// ------------------ Sign In Modal ---------------------------