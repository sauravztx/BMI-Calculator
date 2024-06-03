const form = document.querySelector('form');
form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Error: ${height}, Please give a valid height`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Error: ${weight}, Please give a valid weight`;
    }
    else{
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
        if(bmi < 18.6){
            result.innerHTML = `<span>Your BMI is ${bmi}. You are underweight.</span>`;
        } else if(bmi < 25){
            result.innerHTML = `<span>Your BMI is ${bmi}. You are in the normal range.</span>`;
        } else {
            result.innerHTML = `<span>Your BMI is ${bmi}. You are overweight.</span>`;
        }
    }
});