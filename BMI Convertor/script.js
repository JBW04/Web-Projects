let heightInput = document.getElementById('heightInput');
let weightInput = document.getElementById('weightInput');
let calculateBtn = document.getElementById('calBtn');
let result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    let height = heightInput.value;
    let weight = weightInput.value;

    var height_in_m = height / 100;
    var bmi = weight / (height_in_m * height_in_m);
    var bmio = bmi.toFixed(2);

    if (bmio < 18.5){
        result.textContent = "Result: " + bmio + " (Underweight Range)"
    }

    if (bmio > 18.5 && bmio < 24.9){
        result.textContent = "Result: " + bmio + " (Healthy Range)"
    };

    if (bmio > 25 && bmio < 29.9){
        result.textContent = "Result: " + bmio + " (Overweight Range)"
    } ;

    if (bmio > 30 && bmio < 39.9){
        result.textContent = "Result: " + bmio + " (Obesity Range)"
    };

    if (bmio > 40) {
        result.textContent = "Result: " + bmio + " (Severe Obesity Range"
    };

    

})