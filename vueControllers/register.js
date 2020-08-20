var LOGGEDIN = true;

// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-in');

// const setUpUI = (user) => {
//     if(user){
//         loggedInLinks.forEach(item => item.style.display = 'block');
//         loggedOutLinks.forEach(item => item.style.display = 'none');
//     } else{
//         loggedInLinks.forEach(item => item.style.display = 'none');
//         loggedOutLinks.forEach(item => item.style.display = 'block');
//     }
// };

var nav = new Vue({
    el: '#navID',
    data: {
        log: true
    }
});


function signOut(){
    auth.signOut();
};

auth.onAuthStateChanged(user =>{
    if(user){
        console.log("Signed in as: " + user.email);
        nav.log = true;
        // setUpUI(user);
    } else{
        console.log("Not signed in");
        nav.log = false;
        // setUpUI(user);
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var register = new Vue({
    el: '#register',
    data: {
        sample: 'Register Account',
        emailField: "",
        passwordField: "",
        addressField: "",
        phoneField: "",
        wait: "",
    },
    methods: {
        registerUser(){
            var email = this.emailField;
            this.emailField = null;

            var password = this.passwordField;
            this.passwordField = null;

            auth.createUserWithEmailAndPassword(email, password).then(user => {
                this.wait = "Please wait while we register your account and sign you in.";
                sleep(5000).then(() => {
                    this.sample = 'Account Registered!';
                    this.wait = "";
                    console.log(user);
                });
            }).catch(e => {alert(e.message)});
        },
        
    }
});





