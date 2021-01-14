const url = "http://localhost:5000"
function signup() {
    axios({
        method: 'post',
        url: "http://localhost:5000/signup",
        data: {
            uname: document.getElementById("aname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            phone: document.getElementById("number").value,
            gender: document.getElementById("gender").value
        }
    })
        .then(function (response) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "login.html"
        })
        .catch(function (error) {
            console.log(error);
        });
    return false;
}

function login() {
    axios({
        method: 'post',
        url: "http://localhost:5000/login",
        data: {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        },
        withCredentials: true
    })
        .then(function (response) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "profile.html";

        })
        .catch(function (error) {
            console.log(error);
        });

    return false;
}

function profile() {
    axios.get('http://localhost:5000/profile').then(resp => {
        document.getElementById("b-name").innerHTML = resp.data.profile.uname;
        document.getElementById("b-email").innerHTML = resp.data.profile.email;
        document.getElementById("b-phone").innerHTML = resp.data.profile.phone;
        document.getElementById("b-gender").innerHTML = resp.data.profile.gender;
    });
}