const weatherForm = document.querySelector('form')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); // to prevent the browsers to be refreshed
    const location = document.querySelector('input');
    const weatherSuccess = document.querySelector('#weatherSuccess')
    const weatherFailure = document.querySelector('#weatherFailure')

    //initialize the value
    weatherSuccess.textContent =''
    weatherFailure.textContent =''

    //give relative path
    const url = '/weather?address=' + location.value;
    weatherSuccess.textContent = 'loading....'

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                weatherSuccess.textContent =''
                weatherFailure.textContent = data.error.message
            }
            else {
                
                weatherSuccess.textContent = `Temperature is ${data.temperature} in ${data.cityName} & Forecast is ${data.summary}`
            }
        })
    })

})