/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Steven Ssebuma",
    photo: "images/SSEBUMA.jpg",
    favoriteFoods: ["Chicken", "Pasta", "Chips", "Tacos", "Pizza", "Beef", "Pineapples"],
    hobbies: ["Football", "Coding", "Eating", "Travelling", "Dancing", "Parting"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: ["Kampala, Uganda"],
        length: "20 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
var img = document.getElementById("photo");
img.src = myProfile.photo;
img.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = "Places: " + place.place.join(", ");
    
    let dd = document.createElement('dd');
    dd.textContent = "Length: " + place.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
    
  });
