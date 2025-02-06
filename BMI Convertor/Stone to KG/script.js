let stoneInput = document.getElementById('stoneInput');
let calBtn = document.getElementById('calBtn');
let result = document.getElementById('result');

calBtn.addEventListener('click', () => {
    let KG = stoneInput.value * 6.35029;
    let KGO = KG.toFixed(2);

    result.textContent = `Result: ${KGO} KG`;
})