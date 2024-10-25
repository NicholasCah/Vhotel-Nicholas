function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const room = document.getElementById("room").value;
    const Age = document.getElementById("Age").value;

    if (name.length < 4) {
        alert("Name must be at least 4 characters long");
    } else if (!email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
    } else if (checkin === "") {
        alert("Please enter your check-in date");
    } else if (checkout === "") {
        alert("Please enter your check-out date");
    } else if (Age < 18){
        alert("You must be 18 or older!!")
    }
    
    else {
        alert("Thank you for reserving");
        window.location.href = "reservation.html";
    }
}