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


function getActivity (sky) {
        if (sky === 'Sunny') {
    return "It's sunny, today is a good day to go swimming.";
    } else if (sky === 'Partly Cloudy') {
    return "It's partly cloudy, today is a good day to have a picnic.";
    } else if (sky === 'Cloudy') {
    return "It's cloudy, today is a good day to stay in and read a book." ;
    } else {
    return "I'm just going to chill today."
    }
}

// This logic allows me to assign the values in the day array as keys and the keys in the weather object as values in a new object
const days = ['Friday', 'Saturday', 'Sunday'];
const weekendWeather = days.reduce((initialValue, currentKey) => {
    const currentForecast = forecast(weather);
    currentForecast.activity = getActivity(currentForecast.sky);
    initialValue[currentKey] = currentForecast;
    return initialValue;
}, {});


function getWeatherString (day, currentWeather) {
    return `${day}: ${currentWeather.sky} with a high of ${currentWeather.high} and a low of ${currentWeather.low}. The wind speed is ${currentWeather.wind} with a ${currentWeather.low} chance of precipitation. ${currentWeather.activity}`;
}

const btn = document.querySelector('.btn');

// event listener for forecast button
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("title").innerHTML = `Weekend Forecast is`;
    document.getElementById("friday").innerHTML = getWeatherString('Friday', weekendWeather.Friday);
    document.getElementById("saturday").innerHTML = getWeatherString('Saturday', weekendWeather.Saturday);
    document.getElementById("sunday").innerHTML = getWeatherString('Sunday', weekendWeather.Sunday);
});



// //This prints out and empty object to the console.
// document.getElementById("btn").onclick = function() {
//   document.getElementById("weather").innerHTML = weekendWeather;
// }

// //Example using this 
// const button = document.getElementById('test');
// button.addEventListener('click' , function() {
//   console.log(this);
//   setTimeout(function() {
//     console.log(this);
//   }, 500)
// })
