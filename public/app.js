const url = "http://localhost:3000"

function signup() {

    var uname = (document.getElementById("aname").value);
    var email = (document.getElementById("email").value);
    var password = (document.getElementById("password").value);
    var phone = (document.getElementById("number").value);
    // var gender = (document.getElementById("gender").value);


    // axios({
    //     method: 'post',
    //     url: "http://localhost:3000/signup",
    //     data: {
    //         uname: uname,
    //         email: email,
    //         password: password,
    //         phone: phone,
    //         gender :gender
    //     }
    // })
    // .then(function (response) {
    //     console.log(response.data.message);
    //     alert(response.data.message);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    
    window.location.href = "./login.html"
    // window.location.href = "./login.html"
    return false;
}

function login() {
    var email= (document.getElementById("email").value);
     var password= (document.getElementById("password").value)
    
    // axios({
    //     method: 'post',
    //     url: "http://localhost:3000/login",
    //     data: {
    //         email: document.getElementById("email").value,
    //         password: document.getElementById("password").value,
    //     },
    //     withCredentials: true
    // })
    //     .then(function (response) {
    //         console.log(response.data.message);
    //         alert(response.data.message);
            
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
        
        window.location.href = "profile.html";
    return false;
}


function profile() {
    // axios.get('http://localhost:3000/profile').then(resp => {
    //     document.getElementById("b-name").innerHTML = resp.data.profile.uname;
    //     document.getElementById("b-email").innerHTML = resp.data.profile.email;
    //     document.getElementById("b-phone").innerHTML = resp.data.profile.phone;
    //     document.getElementById("b-gender").innerHTML = resp.data.profile.gender;
    // });
    window.location.href ="./forggten.html"
    return false;
}

function forGet(){
    window.location.href ="./otp.html"
    return false;
}
function opt(){
    window.location.href ="./newPassword.html"
    return false;
}