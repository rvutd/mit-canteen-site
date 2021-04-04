// ------------------ Sign In Modal ---------------------------
const signModalbtn = document.querySelectorAll('#sign-modal');
const signModal = document.querySelector('.sign-modal');

signModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        console.log('toglle');
        signModal.classList.toggle('show'); 
    })
});

 // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signModal) {
        signModal.classList.remove('show');
    }
}
// ------------------ Sign In Modal ---------------------------