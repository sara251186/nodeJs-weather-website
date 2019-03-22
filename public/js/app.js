console.log('loaded from app.js from public/js folder')



const weatherForm = document.querySelector('form')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); // to prevent the browsers to be refreshed
    const location = document.querySelector('input');
    const weatherSuccess = document.querySelector('#weatherSuccess')
    const weatherFailure = document.querySelector('#weatherFailure')

    //initialize the value
    weatherSuccess.textContent =''
    weatherFailure.textContent =''

    const url = 'http://localhost:3000/weather?address=' + location.value;
    weatherSuccess.textContent = 'loading....'

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                weatherSuccess.textContent =''
                weatherFailure.textContent = data.error.message
            }
            else {
                
                weatherSuccess.textContent = `Temperature is ${data.temperature} & Forecast is ${data.summary}`
            }
        })
    })

})