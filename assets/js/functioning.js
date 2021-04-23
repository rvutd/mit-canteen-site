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
  const googleSignUp = document.getElementById("google-signUpIn");
  const githubSignUp = document.getElementById("github-signUpIn");
  const facebookSignUp = document.getElementById("facebook-signUpIn");
  
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
      if (password != repassword){
        alert("Re Entered password is not same as entered password");
      }
      else if (phoneNumber.length != 10){
        alert("Phone Number is not valid");
      }
      else {
        // Save Data to firebase storage -
        
        // Firebase Auth
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          alert('Account Created Successfully');
          saveDatabase.UserfirebaseDatabase(userName, email, password, phoneNumber);
          this.authRedirecting()
        })
        .catch((error) => {
          alert("failed, error is => ", error);
        });
      }
    }
  
    // Google SignUp Method -
    googleSignUpIn(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var credential = result.credential;
          console.log(result);
          console.log("Google success");
          this.authRedirecting()
        })
        .catch((error) => {
          console.log("Google Sign Up Failed", error);
        });

    }
  
    // FaceBook SignUp Method -
    facebookSignUpIn(){
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("email, user_birthday");
  
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          console.log(result);
          alert("Logeed In with facebook successfully");
          this.authRedirecting()
        })
        .catch((error) => {
          alert("ohhh no oh noo noo no no", error);
        });
    }
  
    // GitHub SignUp Method -
    githubSignUpIn(){
      var provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("email, password");
  
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          console.log(result);
          alert("Logeed In with github successfully");
          this.authRedirecting()
        })
        .catch((error) => {
          alert("Log In with github failed", error);
        });
    }

    static authRedirecting() {
      // window.setTimeout(() => {
      //   // window.location.replace('http://127.0.0.1:5501/client-side.html');
      //   window.location.replace('https://mit-canteen.netlify.app/client-side');
      // }, 1000)
      window.location.replace('https://mit-canteen.netlify.app/client-side');
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
      // Create User data in firebase -
      console.log('database called');
      firebase.database().ref('User_Data/' + userName).set({
        User_Name: userName,
        Email: email,
        Password: password,
        Phone_Number: phoneNumber,
      });
    }

    // Cart Detailes
  }

  // Fuction that passes stuff -
  document.addEventListener("DOMContentLoaded", () => {
    // Sign Up Mehtods -
    const signUp = new signUpMethods();

    // Main Sign Up Form
    if (myForm) {
      myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        signUp.builtInSignUp();
      });

      // Google Sign Up Form
      googleSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        signUp.googleSignUpIn();
      });
    
      // GitHub Sign Up Form
      githubSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        signUp.githubSignUpIn();
      });
    
      // Facebook Sign Up Form
      facebookSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        signUp.facebookSignUpIn();
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
          console.log('You have logged out successfully');
          alert('You have logged out successfully');
          window.location.replace("http://127.0.0.1:5501/index.html")
        });
      });
    }
    
  });

  // To know if user have logged in -
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.email);
    } else {
      // No user is signed in.
      console.log('none');
    }
  });

  // --- Cart Functioning ---

  