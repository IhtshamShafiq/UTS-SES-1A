function signOut(){
    auth.signOut();
};

auth.onAuthStateChanged(user =>{
    if(user){
        console.log("Signed in as: " + user.email);
    } else{
        console.log("Not signed in");
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var app = new Vue({
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



