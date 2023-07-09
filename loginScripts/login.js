function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });
}

function logout() {
    firebase.auth().signOut().then(() => {
        alert("You have been logged out");
    }).catch((error) => {
        alert("Error: " + error.message);
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("login_div").style.display = "none";
        if (!user.emailVerified) {
            user.sendEmailVerification().then(function() {
                // Email Verification sent!
            });
        }

        // Fetching user type from Firestore
        console.log(user.uid);
        db.collection('users').doc(user.uid).get().then(function(doc) {
            if (doc.exists) {
                var userType = doc.data().userType; // use 'userType' instead of 'type'
                if(userType === 'student') {
                    window.location.href = "/student_profile.html";
                } else if (userType === 'company') {
                    window.location.href = "/company_profile.html";
                } else {
                    console.error("Invalid user type");
                }
            } else {
                console.error("No such user!");
            }
        }).catch(function(error) {
            console.error("Error getting user type:", error);
        });
    } else {
        document.getElementById("login_div").style.display = "block";
    }
});

document.getElementById("logout").addEventListener("click", logout);
