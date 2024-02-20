/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
  // Fetch JSON temple data
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  // Convert fetch response to a JavaScript object and assign it to templeList
  templeList = await response.json();
  // Call the displayTemples function with the templeList
  displayTemples(templeList);
}

/* reset Function */
const reset = () => {
  // Clear the displayed list of temples
  templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
  // Call the reset function to clear the output
  reset();
  // Obtain the value of the filtered element
  const filter = document.getElementById("filtered").value;
  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
      case "notutah":
      displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
      break;
      case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
    default:
      displayTemples(temples);
  }
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

getTemples();
