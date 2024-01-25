document.addEventListener("DOMContentLoaded", function() {
 
    const storedData = localStorage.getItem("informations");

    if (storedData) {
        const user = JSON.parse(storedData);

        const storedEmail = user.email;
        const storedPassword = user.password;

        console.log(`Email: ${storedEmail}, Password: ${storedPassword}`);
    }
});
