const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo =async(event)=>{
    
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===" ")
    {
        city_name.innerText = `You did not enter your city`;
    }
    else
    {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b2da5987fd81d12f04d2959330d2e755`;
     
            const response =  fetch(url);  //Here we are fetching the data from the API
            console.log('hello');
            const dataobj =   response.json() ; //Here we converting JSON data into an object
            console.log(dataobj);
            const arraydata = [dataobj]; //Here we are converting Object data into an array Data.
            
            //  Now we will just insert values into specific locations
            temp.innerText = arraydata[0].main.temp;
            temp_status.innerText = arraydata[0].weather[0].main;

        }catch{
            city_name.innerText = `Please Enter Correct City Name`;
        }
    }
};
submitBtn.addEventListener('click', getInfo());

submitBtn.addEventListener('click',getInfo); 