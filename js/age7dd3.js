// Calculate and update the age
function updateAge() {
    const birthday = new Date("2002-09-30");
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    document.getElementById("age").textContent = age + " years";
}

// Call the function to update the age
updateAge();
