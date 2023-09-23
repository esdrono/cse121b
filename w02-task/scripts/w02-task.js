// Step 2 - Variables
const fullName = "Alan A Rios";
const currentYear = new Date().getFullYear();
const profilePicture = "images/alan.jpg";

// Step 3 - Element Variables
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

// Step 4 - Adding Content
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

// Step 5 - Array
const favoriteFoods = ["Pizza", "Sushi", "Pasta"];
// Initially displaying favorite foods
foodElement.innerHTML = favoriteFoods.join("<br>");

// Adding a new favorite food
const newFavoriteFood = "Tacos";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;
