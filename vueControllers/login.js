auth.onAuthStateChanged(user =>{
    if(user){
        console.log("Signed in as: " + user.email);
    } else{
        console.log("Not signed in");
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

var app = new Vue({
    el: '#login',
    data: {
        sample: 'Login',
        emailField: "",
        passwordField: "",
        wait: ""
    },
    methods: {
        registerUser(){
            var email = this.emailField;
            this.emailField = null;

            var password = this.passwordField;
            this.passwordField = null;

            const promise = auth.signInWithEmailAndPassword(email, password);
            promise.catch(e => {alert(e.message)});
            this.sample = 'Logged In!';
            
            // // Still need to figure out how to handle errors, 
            // // this code will send the user to the login screen regardless if they have entered a valid email
            // this.wait = "Please wait while we redirect you to the login page."
            // sleep(5000).then(() => {
            //     window.location.href = "./login.html";
            // });
        }
    }
});

// auth.onAuthStateChanged(function(user){
//     if(user){
//         alert("Signed in as: " + user.email);
//     }else{
//         alert("No active user");
//     }
// });

