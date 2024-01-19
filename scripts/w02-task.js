/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Steven Ssebuma";
/*document.getElementById('name').innerHTML = fullName;*/
const profilePicture = "images/SSEBUMA.jpg";

const currentYear = new Date().getFullYear();

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const imageElement = document.getElementById("profile-picture");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.src = profilePicture;

imageElement.alt = "Profile image of" + fullName;

yearElement.innerHTML = currentYear;


/* Step 5 - Array */
const favoriteFoods = ["Chicken", "Pasta", "Chips", "Tacos", "Pizza", "Beef", "Pineapples"]

// Modify the HTML element with the id of "food" to display favorite foods array

foodElement.innerHTML = favoriteFoods;

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = "Ice Cream";

// Add the new food item to the favorite foods array
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of "food"
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;



