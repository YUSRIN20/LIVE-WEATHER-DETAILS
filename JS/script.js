// Create a main container div and append it to the body
const maincontainer = document.createElement("div")
document.body.appendChild(maincontainer)
maincontainer.className = "main-container"

// Create a search box div and append it to the main container
const searchbox = maincontainer.appendChild(document.createElement("div"))
searchbox.className = "search-box"

// Create an icon for the search box and append it to the search box div
const mapicon = searchbox.appendChild(document.createElement("i"))
mapicon.className = "bx bxs-map"

// Create an input element for the search box and append it to the search box div
const searchinput = searchbox.appendChild(document.createElement("input"))
searchinput.type = "search"
searchinput.placeholder = "enter your location"
searchinput.id = "search-Input"
// searchinput.className = "form-control me-2"

// Create a search button and append it to the search box div
const SearchBtn = searchbox.appendChild(document.createElement("button"))
SearchBtn.className = "bx bx-search"

// Create a div for displaying information and append it to the main container
const informationdiv = maincontainer.appendChild(document.createElement("div"))
informationdiv.className = "text-center"
informationdiv.id = "information-div"

// Create a heading for weather details and append it to the information div
const information = informationdiv.appendChild(document.createElement("h4"))
information.textContent = "WEATHER DETAILS"

// Create a paragraph for instruction and append it to the information div
const informationpara = informationdiv.appendChild(document.createElement("p"))
informationpara.textContent = "Enter your location to know weather details"

// Create a weather box div and append it to the main container
const weatherbox = maincontainer.appendChild(document.createElement("div"))
weatherbox.className = "weather-box"

// Create a box div for weather information and append it to the weather box div
const box = weatherbox.appendChild(document.createElement("div"))
box.className = "box"

// Create an info weather div and append it to the box div
const infoweather = box.appendChild(document.createElement("div"))
infoweather.className = "info-weather"

// Create a div for weather data and append it to the info weather div
const weather = infoweather.appendChild(document.createElement("div"))
weather.className = "weather"

// Create an image element for the weather icon and append it to the weather div
const image = weather.appendChild(document.createElement("img"))
image.src = "images/404.png"

// Create a paragraph element for the temperature and append it to the weather div
const temperature = weather.appendChild(document.createElement("p"))
temperature.className = "temparature"

// Create a span element for the temperature unit and append it to the temperature paragraph
const span = temperature.appendChild(document.createElement("span"))

// Create a paragraph element for the weather description and append it to the weather div
const description = weather.appendChild(document.createElement("p"))
description.className = "description"

// for weather details
// Create a div for weather details and append it to the main container
const weatherdetails = maincontainer.appendChild(document.createElement("div"))
weatherdetails.className = "weather-details"

// for humidity 
// Create a div for humidity information and append it to the weather details div
const humidity = weatherdetails.appendChild(document.createElement("div"))
humidity.className = "humidity"

// Create an icon for humidity and append it to the humidity div
const watericon = humidity.appendChild(document.createElement("i"))
watericon.className = "bx bx-water"

// Create a div for text content related to humidity and append it to the humidity div
const text = humidity.appendChild(document.createElement("div"))
text.className = "text"

// Create a div for humidity info and append it to the text div
const infohumidity = text.appendChild(document.createElement("div"))
infohumidity.className = "info-humidity"

// Create a span for the humidity value and append it to the humidity info div
const humidityvalue = infohumidity.appendChild(document.createElement("span"))


// Create a paragraph for displaying 'Humidity' text and append it to the text div
const humiditypara = text.appendChild(document.createElement("p"))
humiditypara.textContent = "Humidity"


// for wind
// Create a div for wind information and append it to the weather details div
const wind = weatherdetails.appendChild(document.createElement("div"))
wind.className = "wind"

// Create an icon for wind and append it to the wind div
const windicon = wind.appendChild(document.createElement("i"))
windicon.className = "bx bx-wind"

// Create a div for text content related to wind and append it to the wind div
const windtext = wind.appendChild(document.createElement("div"))
windtext.className = "windtext"

// Create a div for wind info and append it to the windtext div
const infowind = windtext.appendChild(document.createElement("div"))
infowind.className = "info-wind"

// Create a span for the wind speed value and append it to the wind info div
const windspeedvalue = infowind.appendChild(document.createElement("span"))
// windspeedvalue .textContent = "0km/h"

// Create a paragraph for displaying 'Wind Speed' text and append it to the windtext div
const windpara = windtext.appendChild(document.createElement("p"))
windpara.textContent = "Wind Speed"

// Create a div for the back button and append it to the main container
const backbuttondiv = maincontainer.appendChild(document.createElement("div"));
backbuttondiv.className = "text-center";
backbuttondiv.id = "button-div";

// Create the back button and append it to the back button div
const backbtn = backbuttondiv.appendChild(document.createElement("button"));
backbtn.className = "btn btn-primary";
backbtn.id = "back-btn";
backbtn.textContent = "Back";

// Create a div for displaying errors and append it to the main container
const errordiv = maincontainer.appendChild(document.createElement("div"));

// Set the initial state of weather details and back button to not displayed
weatherdetails.style.display = "none";
backbuttondiv.style.display ="none";

// Function to handle the search action
function search() {
    // Display the back button
    backbuttondiv.style.display = "block";

    // API key for weather data
    const APIkey = 'bed07dfaa979d1db91b31df75bb22f88';
    // Get the city from the search input
    const city = searchinput.value;

    // Fetch weather data from OpenWeatherMap API
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" + APIkey + "&units=metric")
        .then(response => {
            // Clear any previous error messages
            errordiv.innerHTML = "";
            // Check if the response is ok
            if (!response.ok) {
                // Display an error message
                let error = `Unable to Fetch the Weather Details. Please Try Another location`;
                errordiv.style.display = "block";
                weatherdetails.style.display = "none";
                image.src = "images/404.png";
                temperature.style.display = "none";
                description.style.display = "none";
                const errortext = errordiv.appendChild(document.createElement("h3"));
                errortext.innerText = error;
                errortext.className = "text-center";
                errortext.style.color = "black";
                informationdiv.style.display = "none";

                // Throw an error for handling
                throw new Error('Failed to fetch weather data. Please try again later.');
            }

            // Return the response as JSON
            return response.json();
        })
        .then(weatherResponse => {
            console.log(weatherResponse);

            // Check if the city name is empty
            if (city === '') {
                throw new Error('Please enter a valid city name');
            }

            // Display weather details if not already displayed
            if ((weatherbox.style.display = "block")
                && (weatherdetails.style.display = "flex")) {
                informationdiv.style.display = "none";
                temperature.style.display = "block";
                description.style.display = "block";
            }

            // Extract weather data from the response
            const temperaturedetails = weatherResponse.main.temp;
            temperature.textContent = `${temperaturedetails}°C`;

            const descriptiondetails = weatherResponse.weather[0].description;
            description.textContent = `${descriptiondetails}`;

            const humiditydetails = weatherResponse.main.humidity;
            humidityvalue.textContent = `${humiditydetails}%`;

            const windspeeddetails = weatherResponse.wind.speed;
            windspeedvalue.textContent = `${windspeeddetails}km/h`;

            // Set weather icon based on weather description
            if (weatherResponse.weather[0].description === 'clear sky') {
                image.src = "images/clear.png";
            } else if (weatherResponse.weather[0].description === 'mist') {
                image.src = "images/mist.png";
            } else if ((weatherResponse.weather[0].main === 'Clouds') && (weatherResponse.main.temp > 0)) {
                image.src = "images/cloud.png";
            } else if ((weatherResponse.main.temp < 0)) {
                image.src = "images/snow.png";
            } else if (weatherResponse.weather[0].main === 'Rain') {
                image.src = "images/rain.png";
            } else {
                image.src = "images/cloud.png";
            }
        });

    // Event listener for the back button
    backbtn.addEventListener("click", () => {
        // Reset display states and clear error messages
        weatherdetails.style.display = "none";
        image.src = "images/404.png";
        informationdiv.style.display = "block";
        temperature.style.display = "none";
        description.style.display = "none";
        backbuttondiv.style.display = "none";
        errordiv.style.display = "none";
    });
}

// Event listener for the search button
SearchBtn.addEventListener("click", search);

// Event listener for pressing Enter key in the search input
const locationlookup = document.getElementById("search-Input");
locationlookup.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        search();
    }
});

