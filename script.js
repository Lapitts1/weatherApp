// JavaScript Instructions
//  1. projected high and low temperatures (as whole integers)
//  2. sky condition
//  3. wind (in mph)
//  4. precipitation probability (as a %)

//  Bonus:
//  1. Based on each day's weather, recommend an activity for the user — e.g., 
// "A great day for golfing," or "Reading a book inside might be nice."

// weather object 
const weather = {
    high: ['86','90','92'],
    low: ['66','72','70'],
    sky: ['Sunny','Partly Cloudy','Cloudy'],
    wind: ['0 mph','5 mph','15 mph'],
    precipitation: ['2%','13%','10%'],
    // activity: ["Today is a good day to swim", "Today is a good day to have a picnic", "Today is a good day to read a book"]
};

//This function allows me to get random value 
function randomSelectValue (items) {
    const random = items[Math.floor(Math.random() * items.length)];
    return random;
};

//This function allows me to get random value from weather object and assign it to a new object
function forecast(options) {
    return Object.keys(options).reduce((newWeather, key) => {
        const value = options[key];
        const selectedItem = randomSelectValue(value);
        newWeather[key] = selectedItem;
        return newWeather;
    }, {});
};

// This logic allows me to assign the values in the day array as keys and the keys in the weather object as values in a new object
const days = ['Friday', 'Saturday', 'Sunday'];
const weekendWeather = days.reduce((initialValue, currentKey) => {
    initialValue[currentKey] = forecast(weather);
    return initialValue;
}, {});

// Bonus Activity based on weather
// const activity = ["Swimming", "A picnic", "A BBQ"];
// const activity = ["Today is a good day to swim", "Today is a good day to have a picnic", "Today is a good day to read a book"]
// };

// function getActivity(act) {
//     return Object.keys(act).reduce((newActivity, Finalkey) => {
//       const activity = act[Finalkey];
//       const randomActivity = conditional statement ??
      
//       return newActivity;
//   }, {});
// };

if (Object.values(weather.sky).includes('Sunny') > -1) {
   console.log('Today is a good day to swim');
}

if (Object.values(weather.sky).includes('Partly Cloudy') > -1) {
   console.log('Today is a good day to have a picnic');
}

if (Object.values(weather.sky).includes('Cloudy') > -1) {
   console.log('Today is a good day to read a book');
}

//conditional statement
if (weather === 'Sunny') {
  console.log("It's sunny, today is a good day to go swimming");
} else if (weather === 'Partly Cloudy') {
  console.log("It's partly cloudy, today is a good day to have a picnic");
} else if (weather === 'Cloudy') {
  console.log("It's cloudy, today is a good day to stay in and read a book");
} else {
  console.log("I'm just going to chill today")
}

// const randomActivity = Object.values(weather).forEach(val => console.log(val));



// const randomActivity = weather.reduce((activity, weather) => {
//   activity[weather.sky] = weather.high;
//   return activity;
// }, {});

// switch (weather.sky) {
//   case "Sunny":
//     console.log("Today is a good day to swim");
//     break;
//   case "Partly Cloudy":
//     console.log("Today is a good day to have a picnic");
//     break;
//   case "Cloudy":
//     console.log("Today is a good day to read a book");
//     break;
//   deafault:
//     console.log("Today is a good day to do whatever you want");
//     break;  
// }

// const activity = function(act) {
//   if (act === "Sunny") {
//     return "Today is a good day to swim";
//   } else if (act === "Partly Cloudy") {
//     return "Today is a good day to have a picnic";
//   } else if (act === "Cloudy") {
//     return "Today is a good day to read a book";
//   } else {
//     return "Today is a good day to do whatever you want"
//   }
// };



// for (let prop in weather) {
//   console.log(prop);
// };

// for (let prop in weather) {
//   console.log(`${prop}: ${weather[prop]}`);
// };


const btn = document.querySelector('.btn');

// event listener for forecast button
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
});
//This prints out and empty object to the console.
document.getElementById("btn").onclick = function() {
  document.getElementById("weather").innerHTML = weekendWeather;
}

//Example using this 
const button = document.getElementById('test');
button.addEventListener('click' , function() {
  console.log(this);
  setTimeout(function() {
    console.log(this);
  }, 500)
})
