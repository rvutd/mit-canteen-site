  // --- Authentication Part ---
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBn5GMIvsqhTPMVAeylq-I_2R8SSJYzmI",
    authDomain: "js-login-form.firebaseapp.com",
    projectId: "js-login-form",
    storageBucket: "js-login-form.appspot.com",
    messagingSenderId: "1039987076182",
    appId: "1:1039987076182:web:e51f940647b55c0cd7dff7",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  
  
  // SignUp Form ID's -
  const myForm = document.getElementById("main-form");
  const googleSignUp = document.querySelectorAll("#google-signUpIn");
  const githubSignUp = document.querySelectorAll("#github-signUpIn");
  const facebookSignUp = document.querySelectorAll("#facebook-signUpIn");
  
  // SignIn Form ID's -
  const signInForm = document.getElementById('signIn-form');

  // Sign Up Methods -
  class signUpMethods {
    // Basic LogIn System
    builtInSignUp(){
      const userName = myForm["sign-up-full-name"].value;
      const email = myForm["sign-up-email"].value;
      const password = myForm["sign-up-password"].value;
      const repassword = myForm["sign-up-repassword"].value;
      const phoneNumber = myForm["sign-up-number"].value;

      // CheckStuff -
      if (password != repassword || password === ''){
        Swal.fire('Re Entered password is not same as entered password or field empty')
      }
      else if (phoneNumber.length != 10){
        Swal.fire('Phone Number is not valid')
      }
      else {
        // Firebase Auth
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          // Save Data to firebase storage -
          saveDatabase.UserfirebaseDatabase(userName, email, password, phoneNumber);
          this.notifyUser();
          this.firebaseAuthRedirect();
        })
        .catch((error) => Swal.fire("" + error));
      }
    }
  
    // Google SignUp Method -
    googleSignUpIn(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.notifyUser();
          this.firebaseAuthRedirect();
        })
        .catch((error) => Swal.fire("" + error));

    }
  
    // FaceBook SignUp Method -
    facebookSignUpIn(){
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("email, user_birthday");
  
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          this.notifyUser();
          this.firebaseAuthRedirect()
        })
        .catch((error) => Swal.fire("" + error));
    }
  
    // GitHub SignUp Method -
    githubSignUpIn(){
      var provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("email, password");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          this.notifyUser();
          this.firebaseAuthRedirect()
        })
        .catch((error) => Swal.fire("" + error));
    }

    static authRedirecting() {
      window.setTimeout(() => {
        window.location.replace('https://mit-canteen.netlify.app/client-side');
      }, 500)
    }

    // Notify User
    notifyUser() {
      Swal.fire({
        icon: 'success',
        title: 'Account Created/Signed In Successfully',
      })
    }

    firebaseAuthRedirect(){
      firebase.auth().onAuthStateChanged(function(user) {
        // If user is registered -
        user ?  window.location.replace('https://mit-canteen.netlify.app/client-side.html') : console.log('none');
      });
    }
  }

  // Sign In Methods -
  class signInMethods {
    builtInSignIn(){
    const email =  document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    console.log('called');

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        alert("Logged In");
        signUpMethods.authRedirecting()
    })
    .catch(error => {
        alert("Log In Failed: ", error);
    });
    }
  }

  // Save Data - To Firebase
  class saveDatabase {
    // Authentication Details -
    static UserfirebaseDatabase(userName, email, password, phoneNumber) {

      const userID = makeUserDataID(email);
      
      // Create User data in firebase -
      console.log('database called');
      firebase.database().ref('User_Data/' + userID).set({
        User_Name: userName,
        Email: email,
        Password: password,
        Phone_Number: phoneNumber,
      });
    }

    // Cart Detailes
  }

  // When HTML & Other code is done -
  document.addEventListener("DOMContentLoaded", () => {
    // Sign Up Mehtods -
    const signUp = new signUpMethods();

    // Main Sign Up Form
    if (myForm) {
      myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        signUp.builtInSignUp();
      });
    }

    // Google Sign Up Form
    if (googleSignUp) {
      googleSignUp.forEach(element => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          signUp.googleSignUpIn();
        });
      });
    }

    // GitHub Sign Up Form
    if (githubSignUp) {
      githubSignUp.forEach(element => {
        element.addEventListener("click", (e) => {
        e.preventDefault();
        signUp.githubSignUpIn();
      })
    });
    }

    // Facebook Sign Up Form
    if (facebookSignUp) {
      facebookSignUp.forEach(element => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          signUp.facebookSignUpIn();
        });
      });
    }

    // Sign In Methods -
    const signIn = new signInMethods();
    if (signInForm){
      // Main Sign In Form
      signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        signIn.builtInSignIn();
      });
    }

    // LogOut User -
    const logout = document.getElementById('userlogout');
    if (logout){
      logout.addEventListener('click', (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Logged Out Successfully',
          })
          window.location.replace("https://mit-canteen.netlify.app/index.html")
        });
      });
    }
    
  });

function getUserDetails(){
    var userTrimedlID = '';
    var userEmailID = '';
    // To know if user have logged in -
    firebase.auth().onAuthStateChanged(function(user) {
      // User is signed in.
      if (user) {
        userTrimedlID = user.email;
        makeUserDataID(userTrimedlID);
        userEmailID = user.email;
      } 
      // No user is signed in.
      else { console.log('No user Logged In');}
    });

    return userEmailID, userTrimedlID
}

a = getUserDetails()
console.log(a);

function makeUserDataID(userTrimedlID){
  let userDataID = '';
  for (i=0; userTrimedlID.length; i++){
    if (userTrimedlID[i] != '@') { userDataID = userDataID + userTrimedlID[i] }
    else { break }
  }
  return userDataID
}
    