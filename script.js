// Create the Person class
// Use the constructor to initialize the new object
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // BONUS: Generate user's name in bird years

    birdYearsConversion() {
        return this.age * 9;
    }
}

// Function to create a new Person object and display the message
function inputMessage() {
    // Get the entered input values 
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;

    // Create the new Person object
    const newPerson = new Person(firstName, lastName, age);

    // Take the input and display the message
    document.getElementById("alertMessage").textContent =
    (`Hello, ${newPerson.firstName} ${newPerson.lastName}! You are ${newPerson.age} in human years,
     which makes you ${newPerson.birdYearsConversion()} in bird years.`);
}

//////////////////////////////// SUBMIT BUTTON //////////////////////////////////

// Add an event listener to the submit button
document.getElementById("submit").addEventListener("click", inputMessage); 

