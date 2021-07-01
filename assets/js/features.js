//  --- Intro NavBar ---
const previewNavbar = document.querySelector('#preview-navbar')
if (previewNavbar) {
    previewNavbar.innerHTML = `
        <div class="container flex text-center jc-ai-center">
            <!-- Left Navigation -->
            <div class="site-title flex align-item-center">
                <div>
                    <a href="index.html"><h1><span class="clr-red">Mit</span> <span class="clr-green">Canteen</span></h1></a>
                </div>
                <!-- Toggle Bars -->
                <div class="toggle-bars mybar">
                    <div class="bars bar-1"></div>
                    <div class="bars bar-2"></div>
                    <div class="bars bar-3"></div>
                </div>
            </div>
            <!-- Right Navigation -->
            <nav class="site-nav flex left-nav align-item-center">                
                <ul class="flex">
                    <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="our-vision.html"><i class="far fa-eye"></i> Our Vision</a></li>
                    <button  class="btn" id="sign-modal">Log In</button>
                    <button  class="btn" id="signup-modal">Sign Up</button>
                </ul>
            </nav>
        </div>
    `
}

//  --- Intro Mobile NavBar ---
const mobPreviewNavbar = document.querySelector('#mob-preview-navbar')
if (mobPreviewNavbar) {
    mobPreviewNavbar.innerHTML = `
        <nav class="nav container">
            <ul class="mob-ul">
                <li><a href="index.html">Home</a></li> 
                <li><a href="our-vision.html">Our Vision</a></li>
                <button class="btn" id="sign-modal">Log In</button>
                <button class="btn" id="signup-modal">Sign Up</button>
            </ul>
        </nav>
    `
}

// Toggle Bars Switch
const toggleBars = document.querySelector('.toggle-bars');
const mobUI = document.querySelector('.mob-ul');

// Toggle Close/Open Function
if (toggleBars) {
    toggleBars.addEventListener('click', () => {
        toggleBars.classList.toggle('change');
        mobUI.classList.toggle('mob-nav-active');
    });
}

// Best Dishes Section
var bestDishes = [
    {
        title: 'Masala Sandwich',
        rating: 4,
        imgURL: "assets/images/s2.jpg",
        description: "Sumptuous delicious food baked in our cafe with curated ingredients",
        price: 30
    },
    {
        title: 'Red Pasta',
        rating: 5,
        imgURL: "assets/images/pasta.jpg",
        description: "Sumptuous delicious food baked in our cafe with curated ingredients",
        price: 45
    },
    {
        title: 'White Pasta',
        rating: 5,
        imgURL: "assets/images/white-pasta.jpg",
        description: "Sumptuous delicious food baked in our cafe with curated ingredients",
        price: 25
    },
    {
        title: 'French Fries',
        rating: 4,
        imgURL: "assets/images/shezuan.jpg",
        description: "Sumptuous delicious food baked in our cafe with curated ingredients",
        price: 35
    }
]
const bestDishesCont = document.querySelector('#best-dishes-container');
function bestDishesHero(){
    bestDishes.forEach(index => {
        var div = document.createElement('div')
        div.innerHTML = `
            <a href="#" class="card text-center m-2">
                <h2>${index.title}</h2>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <img src="${index.imgURL}" loading="lazy" alt="Canteen Dishes">
                <p>${index.description}</p>
                <h3 class="md">&#8377; ${index.price}</h3>
            </a>
        `
        if (bestDishesCont) {bestDishesCont.appendChild(div)}
    })
}
bestDishesHero()

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
        return signIn_UI
    });
});
// Registration Modal
signUpModalbtn.forEach(element => {
    element.addEventListener('click', () => {
        signUpModal.classList.toggle('show');
        return signUp_UI
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

// Sign Up Modal
var signUp_UI, signIn_UI;
if (signUpModal){
    signUp_UI = signUpModal.innerHTML = `
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
        <form class="modal-form grid py-1 text-center" id="main-form" required>
            <input type="text" placeholder="Full Name" id="sign-up-full-name" required>
            <input type="email" placeholder="email id" id="sign-up-email" required>
            <input type="password" placeholder="Password" id="sign-up-password" required>
            <input type="password" placeholder="Re - Enter Password" id="sign-up-repassword" required>
            <input type="tel" placeholder="Mobile Number" id="sign-up-number" required>

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
                    signModal.classList.add('show');" 
            style="cursor: pointer;">
                <span class="clr-green">Log In</span>
            </a>
        </div>
    </div>
`;
}

// Log In Modal
if (signModal) {
    signIn_UI = signModal.innerHTML = `
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
            <input type="email" placeholder="Email Id" id="sign-in-email" required>
            <input type="password" placeholder="Password" id="sign-in-password" required>

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
                         signUpModal.classList.add('show');" 
                style="cursor: pointer;">
                <span class="clr-green">Create one</span>
            </a>
        </div>
    </div>
`;
}

// Home/Vision Footer
var customerFooter = document.querySelectorAll('.customer-footer');
function customerFooterUI() {
    if (customerFooter){
        customerFooter.forEach(element => {
            element.innerHTML = `
            <section class="container-min">
            <!-- Upper Footer -->
                <main class="grid grid-3">
                    <!-- About College -->
                    <article class="about">
                        <h1 class="sm">about</h1>
                        <p>Malwa Institute of Technology is governed by Indus 
                        Global Educational & Welfare Society which was founded 
                        in 2003 by a group of industrialists and educationalists
                        who shared a vision of establishing centers of scientific
                        learning around the country.</p>
                        <ul class="py-1">
                            <li><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/malwainstitute/" target="_blank"> Facebook</a></li>
                            <li><i class="fab fa-instagram"></i><a href="https://www.instagram.com/malwa_institute_of_technology/" target="_blank">Instagram</a></li>
                        </ul>
                    </article>
                    <!-- Navigation Links -->
                    <article class="quick-links">
                        <ul>
                            <h1 class="sm">Quick Links</h1>
                            <li><a href="index.html">Canteen Home</a></li>
                            <li><a href="our-vision.html">Our Vision</a></li>
                            <li><a href="https://github.com/rvutd/mit-canteen-site" target="_blank">Git Repository</a></li>
                            <li><a href="https://mitindore.co.in/" target="_blank">MIT Indore</a></li>
                        </ul>
                    </article>
                    <!-- Contact Details -->
                    <article class="contact">
                        <ul>
                            <h1 class="sm">Contact Information</h1>
                            <li> <i class="fas fa-phone-alt"></i> <p>+91-731-2810001-08</p></li>
                            <li> <i class="fas fa-envelope"></i> <p>admission@mitindore.co.in</p></li>
                            <li> <i class="fas fa-map-marker-alt"></i> <p>Indore-Dewas Bypass Road, Indore (MP)-452016</p></li>
                            <li> <i class="fas fa-globe-asia"></i> <p>For Professional Courses, Visit: www.altius.ac.in</p></li>
                        </ul>
                    </article>
                </main>
                <!-- Deep Devs Info -->
                <main class="deep-devs flex">
                    <div>© Copyright 2020 - 2021. All Rights Reserved</div>
                    <div class="">Designed & Developed with <i class="fas fa-heart clr-red"></i> By <a href="#">Deep Devs</a></div>
                </main>
            </section>
        `;
        })
    }
}
customerFooterUI()

// Authenticated User Footer
var userFooter = document.querySelectorAll('#user-footer');
function userFooterUI() {
    if (userFooter){
        userFooter.forEach(element => {
            element.innerHTML = `
            <section class="container-min">
            <!-- Upper Footer -->
                <main class="grid grid-3">
                    <!-- About College -->
                    <article class="about">
                        <h1 class="sm">about</h1>
                        <p>Malwa Institute of Technology is governed by Indus 
                        Global Educational & Welfare Society which was founded 
                        in 2003 by a group of industrialists and educationalists
                        who shared a vision of establishing centers of scientific
                        learning around the country.</p>
                        <ul class="py-1">
                            <li><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/malwainstitute/" target="_blank"> Facebook</a></li>
                            <li><i class="fab fa-instagram"></i><a href="https://www.instagram.com/malwa_institute_of_technology/" target="_blank">Instagram</a></li>
                        </ul>
                    </article>
                    <!-- Navigation Links -->
                    <article class="quick-links">
                        <ul>
                            <h1 class="sm">Quick Links</h1>
                            <li><a href="client-side.html">Menu</a></li>
                            <li><a href="user-orders.html">Your Orders</a></li>
                            <li><a href="https://github.com/rvutd/mit-canteen-site" target="_blank">Git Repository</a></li>
                            <li><a href="https://mitindore.co.in/" target="_blank">MIT Indore</a></li>
                        </ul>
                    </article>
                    <!-- Contact Details -->
                    <article class="contact">
                        <ul>
                            <h1 class="sm">Contact Information</h1>
                            <li> <i class="fas fa-phone-alt"></i> <p>+91-731-2810001-08</p></li>
                            <li> <i class="fas fa-envelope"></i> <p>admission@mitindore.co.in</p></li>
                            <li> <i class="fas fa-map-marker-alt"></i> <p>Indore-Dewas Bypass Road, Indore (MP)-452016</p></li>
                            <li> <i class="fas fa-globe-asia"></i> <p>For Professional Courses, Visit: www.altius.ac.in</p></li>
                        </ul>
                    </article>
                </main>
                <!-- Deep Devs Info -->
                <main class="deep-devs flex">
                    <div>© Copyright 2020 - 2021. All Rights Reserved</div>
                    <div class="">Designed & Developed with <i class="fas fa-heart clr-red"></i> By <a href="#">Deep Devs</a></div>
                </main>
            </section>
        `;
        })
    }
}
userFooterUI()

// Client Orders Detals
const showOrderDetails = document.querySelectorAll('#show-order-details');
const descriptiveDetails = document.querySelector('.descriptive-details');
const orderInner = document.querySelector('.order-inner');

if (showOrderDetails){
    showOrderDetails.forEach(btn => {
        btn.addEventListener('click', ()=>{
            descriptiveDetails.classList.toggle('display-none')
        })
    })
}

function setOrderDetails(trimedEmailID){
    // Get Cart Items already stored
    firebase.database()
    .ref('Users_Order/' + trimedEmailID + '_Orders')
    .on('value', function(snapshot){
        if (snapshot.exists()){
            // Gets Data
            var data = snapshot.val();
            // Get Encrytion Keys
            var userOrder = Object.keys(data)

            // Puts keys & extracts values -
            let i = 0
            userOrder.forEach(key => {
                // All Required Stuff
                var total = data[key].User_Cart.Total_Amount
                var date = data[key].Order_Date
                var time = data[key].Order_Time
                var deliveryStatus = data[key].Delivery_Status
                var UserCart = data[key].User_Cart.Details
                var orderStatus = data[key].Order_Status
                var trimedID = '';
                var orderID = 'UO' + date

                // Creates Order ID
                for (let j = 0; j < orderID.length; j++){
                    if (orderID[j] != '/'){
                        trimedID += orderID[j]
                    }
                }
                if (data[key].Order_Status === true){
                    i += 1
                    
                    // Check Order If accepted or not
                    if (orderStatus === true){ orderStatus = 'Cooking' } 
                    else { orderStatus = 'Not Available' }

                    if (deliveryStatus === true){ orderStatus = 'Ready' }

                    // --- Creates Main Container ---
                    const div = document.createElement('main');
                    div.classList.add('current-details');

                    div.innerHTML = `
                        <!-- Current Order Main Titles -->
                        <table class="main-details">
                            <div class="flex" style="justify-content: space-between;">
                                <div><button class="table-btn my-1">Ordered Detail</button></div>
                                <div class="md">${'#'+i}</div>
                            </div>
                            <thead>
                                <tr>
                                    <th><i class="fas fa-th-list" style="margin-right: 5px;"></i> Order ID</th>
                                    <th><i class="fas fa-tenge" style="margin-right: 5px;"></i> Total</th>
                                    <th><i class="fas fa-calendar-alt" style="margin-right: 5px;"></i> Ordered Date</th>
                                    <th><i class="fas fa-clock" style="margin-right: 5px;"></i> Ordered Time</th>
                                    <th><i class="fas fa-calendar-check" style="margin-right: 5px;"></i> Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label= "Order ID">${trimedID}</td>
                                    <td data-label= "Total">&#8377; ${total}</td>
                                    <td data-label= "Date">${date}</td>
                                    <td data-label= "Time">${time}</td>
                                    <td data-label= "Order Status">${orderStatus}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="table-btn" id="show-order-details">More Details</button>
                    `
                    orderInner.appendChild(div)

                    // --- Creates table of Current Order ---
                    let sID = 0
                    const currentDiv = document.createElement('table')
                    currentDiv.classList.add('descriptive-details')
                    currentDiv.innerHTML = `
                        <thead>
                            <tr>
                                <th><i class="fas fa-coins" style="margin-right: 5px;"></i> ${'S. No'}</th>
                                <th><i class="fas fa-th-list" style="margin-right: 5px;"></i> ${'Food'}</th>
                                <th><i class="fas fa-money-bill-alt" style="margin-right: 5px;"></i> ${'Price'}</th>
                                <th><i class="fab fa-buffer" style="margin-right: 5px;"></i> ${'Quantity'} </th>
                                <th><i class="fas fa-tenge" style="margin-right: 5px;"></i> ${'Sub Total'}</th>
                            </tr>
                        </thead>
                    `
                    // Create table Data Body
                    var tbody = document.createElement('tbody');
                    // Puts data in Table
                    UserCart.forEach(itemID => {
                        sID += 1
                        let foodID = itemID.FoodID
                        let subTotal = newMenu[foodID-1].fields.price * itemID.Quantity
                        // Creates Table Fields 
                        var tr = document.createElement('tr');
                        tr.classList.add('my-1')
                        tr.innerHTML = `
                            <td data-label= "S. No">${sID}</td>
                            <td data-label= "Item">${newMenu[foodID-1].fields.title}</td>
                            <td data-label= "Price">&#8377 ${newMenu[foodID-1].fields.price}</td>
                            <td data-label= "Quantity">${itemID.Quantity}</td>
                            <td data-label= "Sub Total">&#8377 ${subTotal}</td>
                        `                        
                        tbody.appendChild(tr)
                    })

                    // Line Seperating Two Orders -
                    var lineHR = document.createElement('hr')
                    lineHR.style.margin = '2rem auto 0rem auto';
                    lineHR.classList.add('hrStyle')
                    // Structures Container & other stuff
                    currentDiv.appendChild(tbody)
                    div.appendChild(currentDiv)
                    orderInner.appendChild(div)
                    orderInner.appendChild(lineHR)

                }
                // If order isn't accepted by administrator
                else if (data[key].Order_Status === false){
                    i += 1

                    // --- Creates Main Container ---
                    const div = document.createElement('main');
                    div.classList.add('current-details');

                    div.innerHTML = `
                        <!-- Current Order Main Titles -->
                        <table class="main-details">
                            <div class="flex" style="justify-content: space-between;">
                                <div><button class="table-btn my-1">Ordered Detail</button></div>
                                <div class="md">${'#'+i}</div>
                            </div>
                            <thead>
                                <tr>
                                    <th><i class="fas fa-th-list" style="margin-right: 5px;"></i> Order ID</th>
                                    <th><i class="fas fa-tenge" style="margin-right: 5px;"></i> Total</th>
                                    <th><i class="fas fa-calendar-alt" style="margin-right: 5px;"></i> Ordered Date</th>
                                    <th><i class="fas fa-clock" style="margin-right: 5px;"></i> Ordered Time</th>
                                    <th><i class="fas fa-calendar-check" style="margin-right: 5px;"></i> Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label= "Order ID">${trimedID}</td>
                                    <td data-label= "Total">&#8377; ${total}</td>
                                    <td data-label= "Date">${date}</td>
                                    <td data-label= "Time">${time}</td>
                                    <td data-label= "Order Status">${'Not Confirmed Yet'}</td>
                                </tr>
                            </tbody>
                        </table>
                    `
                    orderInner.appendChild(div)
                }
            })
        } else {
            console.log('no orders');
        }
    })
}