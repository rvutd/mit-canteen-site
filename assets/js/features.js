// --- Sign In Modal ---
const signInModalbtn = document.querySelectorAll('#sign-modal');
const signModal = document.querySelector('.sign-modal');

// --- Sign Up Modal ---
const signUpModalbtn = document.querySelectorAll('#signup-modal');
const signUpModal = document.querySelector('.signup-modal');

// --- Cart Modal ---
const cartOverlay = document.querySelector('.cart-overlay');
const cartInnerlay = document.querySelector('.cart-innerlay');
const cartBtn = document.querySelectorAll('#cart-btn');

// LogIn Modal
signInModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signModal.classList.toggle('show'); 
        signIn_UI();
        console.log(element);
    });
});
// Registration Modal
signUpModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signUpModal.classList.toggle('show');
        signUp_UI(); 
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

// --- Creating Modals ---
function signUp_UI(){
    signUpModal.innerHTML = `
        <div class="modal-container">
            <!-- Written Stuff -->
            <div class="modal-content">
                <div class="md">Welcome to <br><span class="clr-red md">Mit</span> <span class="clr-green md">Canteen</span></div>
                <div><i onclick="signUpModal.classList.remove('show');" class="fas fa-times"></i></div>
            </div>
            <!-- Other way of LogIn's -->
            <ul class="modal-icons flex">
                    <li><button><i class="fab fa-google" id="google-signUpIn"></i></button></li>
                    <li><button><i class="fab fa-github" id="github-signUpIn"></i></button></li>
                    <li><button><i class="fab fa-facebook" id="facebook-signUpIn"></i></button></li>
            </ul>
            <!-- Sign Up Input's -->
            <form class="modal-form grid py-1 text-center" id="main-form">
                <input type="text" placeholder="Full Name" id="sign-up-full-name">
                <input type="text" placeholder="email id" id="sign-up-email">
                <input type="text" placeholder="Password" id="sign-up-password">
                <input type="text" placeholder="Re - Enter Password" id="sign-up-repassword">
                <input type="text" placeholder="Mobile Number" id="sign-up-number">

                <button type="submit" class="btn">Register</button>
            </form>
            <!-- Remember Me CheckBox -->
            <label class="text-center">
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
            <!-- Written Stuff -->
            <div class="modal-content m-content-2 py-1">
                Click “Register” to agree to Terms of Service and acknowledge 
                that Privacy Policy applies to you. Have account? 
                <a id="sign-modal" 
                onclick="signUpModal.classList.remove('show');
                         signModal.classList.add('show');
                         signIn_UI();" 
                style="cursor: pointer;">
                    <span class="clr-green">Log In</span>
                </a>
            </div>
        </div>
    `;
}

function signIn_UI() {
    signModal.innerHTML = `
        <!-- Main Card -->
        <div class="modal-container">
            <!-- Written Stuff -->
            <div class="modal-content">
                <div class="md">Welcome back!</div>
                <div><i onclick="signModal.classList.remove('show');" class="fas fa-times"></i></div>
            </div>
            <!-- Other way of LogIn's -->
            <ul class="modal-icons flex">
                <li><button><i class="fab fa-google" id="google-signUpIn"></i></button></li>
                <li><button><i class="fab fa-github" id="github-signUpIn"></i></button></li>
                <li><button><i class="fab fa-facebook" id="facebook-signUpIn"></i></button></li>
            </ul>
            <!-- Sign In Input's -->
            <form class="modal-form grid py-1 text-center" id="signIn-form">
                <input type="text" placeholder="Email Id" id="sign-in-email">
                <input type="text" placeholder="Password" id="sign-in-password">

                <button type="submit" class="btn">Login</button>
            </form>
            <!-- Remember Me CheckBox -->
            <label class="text-center">
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
            <!-- Written Stuff -->
            <div class="modal-content m-content-2 py-1">
                Click “Sign In” to agree to Terms of Service and acknowledge 
                that Privacy Policy applies to you. No account? 
                <a id="signup-modal" 
                    onclick="signModal.classList.remove('show');
                             signUpModal.classList.add('show');
                             signUp_UI();" 
                    style="cursor: pointer;">
                    <span class="clr-green">Create one</span>
                </a>
            </div>
        </div>
    `;
}
