function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var app = new Vue({
    el: '#register',
    data: {
        sample: 'Register Account',
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

            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise.catch(e => {alert(e.message)});
            this.sample = 'Account Registered!';
            // // Still need to figure out how to handle errors, 
            // // this code will send the user to the login screen regardless if they have entered a valid email
            // this.wait = "Please wait while we redirect you to the login page."
            // sleep(5000).then(() => {
            //     window.location.href = "./login.html";
            // });
        }
    }
})


