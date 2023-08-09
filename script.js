
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7dbe0fd69dmsh6762f7676e9910dp1862afjsn6c1941492b19',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWether = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWether(city.value)
})
getWether("Kolkata")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London' , options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			cloud_pct_london.innerHTML = response.cloud_pct
			temp_london.innerHTML = response.temp
			
			feels_like_london.innerHTML = response.feels_like
			humidity_london.innerHTML = response.humidity
			
			min_temp_london.innerHTML = response.min_temp
			max_temp_london.innerHTML = response.max_temp
			wind_speed_london.innerHTML = response.wind_speed
			
			wind_degrees_london.innerHTML = response.wind_degrees
			
		})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york' , options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			cloud_pct_Newyork.innerHTML = response.cloud_pct
			temp_Newyork.innerHTML = response.temp
			
			feels_like_Newyork.innerHTML = response.feels_like
			humidity_Newyork.innerHTML = response.humidity
			
			min_temp_Newyork.innerHTML = response.min_temp
			max_temp_Newyork.innerHTML = response.max_temp
			wind_speed_Newyork.innerHTML = response.wind_speed
			
			wind_degrees_Newyork.innerHTML = response.wind_degrees
			
		})
		.catch(err => console.error(err));

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			cloud_pct_Delhi.innerHTML = response.cloud_pct
			temp_Delhi.innerHTML = response.temp
			
			feels_like_Delhi.innerHTML = response.feels_like
			humidity_Delhi.innerHTML = response.humidity
			
			min_temp_Delhi.innerHTML = response.min_temp
			max_temp_Delhi.innerHTML = response.max_temp
			wind_speed_Delhi.innerHTML = response.wind_speed
			
			wind_degrees_Delhi.innerHTML = response.wind_degrees
			
		})
		.catch(err => console.error(err));

