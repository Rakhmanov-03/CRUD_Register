
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const year = document.getElementById("year");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const button = document.getElementById("button");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (username.value == "" || password.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        const user = {
            firstName: firstname.value,
            lastName: lastname.value,
            year: year.value,
            email: email.value,
            userName: username.value,
            password: password.value,
        };

        localStorage.setItem("informations", JSON.stringify(user));
        window.location.href = 'login.html';
        console.log(`This form has a username of ${username.value} and password of ${password.value}`);

        username.value = "";
        password.value = "";
    }
});


//     if(validate({firstname, lastname, year, email, username, password, repassword, })){
//         const user = {
//             firstname: firstname.value,
//             lastname: lastname.value,
//             email: email.value,
//             year: year.value,
//             username: username.value,
//             password: password.value,
//         }
//         const data = getData();
//         data.push(user);
//         localStorage.setItem("informations", JSON.stringify(data));
//         const url = window.location.href;
//         const index = url.search("html");  
//         const nextPage = url.substring(0, index) 
        
//         window.location.assign("${nextPage}/html/login.html")
// }