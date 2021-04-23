// --- Sign In Modal ---
const signInModalbtn = document.querySelectorAll('#sign-modal');
const signUpModalbtn = document.querySelectorAll('#signup-modal');
const signModal = document.querySelector('.sign-modal');
const signUpModal = document.querySelector('.signup-modal');

// --- Cart Modal ---
const cartOverlay = document.querySelector('.cart-overlay');
const cartInnerlay = document.querySelector('.cart-innerlay');
const cartBtn = document.querySelectorAll('#cart-btn');

// LogIn Modal
signInModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signModal.classList.toggle('show'); 
    });
});
// Registration Modal
signUpModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signUpModal.classList.toggle('show'); 
    });
});

// Cart Button
cartBtn.forEach(element => {
    element.addEventListener('click', () => {
        cartOverlay.classList.add('show');
        cartInnerlay.classList.add('showCart');
    });
})

// When the user clicks anywhere outside of the modal, closes it
window.onclick = function(event) {
    if (event.target == signModal || event.target == signUpModal) {
        signModal.classList.remove('show');
        signUpModal.classList.remove('show');
    }
    if (event.target == cartOverlay ) {
        cartOverlay.classList.remove('show');
        cartInnerlay.classList.remove('showCart');
    }
}
