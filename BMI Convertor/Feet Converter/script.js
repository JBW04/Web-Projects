let feetInput = document.getElementById('feetInput');
let calBtn = document.getElementById('calBtn');
let result = document.getElementById('result');



calBtn.addEventListener('click', () => {
    let feet = feetInput.value;
    let cm = feet * 30.48;
    let cmo = cm.toFixed(2);

    result.textContent = `Result: ${cmo} CM`
})
