// JavaScript Instructions
//  1. projected high and low temperatures (as whole integers)
//  2. sky condition
//  3. wind (in mph)
//  4. precipitation probability (as a %)

//  Bonus:
//  1. Based on each day's weather, recommend an activity for the user — e.g., 
// "A great day for golfing," or "Reading a book inside might be nice."

const wind = ['0 mph','5 mph','15 mph'];
const sky = ['Sunny','Partly Cloudy','Cloudy'];
const high = ['86','90','92'];
const low = ['66','72','70'];
const precip = ['2%','13%','10%'];

// I thought it would be better to put variables inside an object
const weather = {
    wind: ['0 mph','5 mph','15 mph'],
    sky: ['Sunny','Partly Cloudy','Cloudy'],
    high: ['86','90','92'],
    low: ['66','72','70'],
    precip: ['2%','13%','20%'],
};
// Looping over the weather object to get 1 random match up for all key values
for (const key in weather) {
    //const randomWind = wind[Math.floor(Math.random() * wind.length)];
};


const btn = document.querySelector('.btn');

// event listener for forecast button
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
});

// Bonus Activity based on weather
const activity = ["Swimming", "A picnic", "A BBQ"];