let myProfile = {
    name: "Alan Rios",
    photo: "alan.jpg", 
    favoriteFoods: [
      'Sushi',
      'Pizza',
      'Burgers',
      'Tamales',
      'Chiles en nogada'
    ],
    hobbies: [
      'Blockchain mining',
      'Game development',
      'Studying web & software development',
    ],
    placesLived: [
      {
        place: 'Guadalajara, Mexico',
        length: '24 years' 
      },
      {
        place: 'Antofagasta, Chile',
        length: '2 years' 
      },
      {
        place: 'Fresno, California',
        length: '1 year' 
      }
    ]
  };
  
  // Assigning name
  document.querySelector('#name').textContent = myProfile.name;
  
  // Assigning photo attributes
  let photoElement = document.querySelector('#photo');
  photoElement.src = myProfile.photo;
  photoElement.alt = myProfile.name;
  
  // Populating favorite foods
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Populating hobbies
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Populating places lived
  myProfile.placesLived.forEach(placeObj => {
    let dt = document.createElement('dt');
    dt.textContent = placeObj.place;
    let dd = document.createElement('dd');
    dd.textContent = placeObj.length;
  
    let placesLivedElement = document.querySelector('#places-lived');
    placesLivedElement.appendChild(dt);
    placesLivedElement.appendChild(dd);
  });
  