const bmi = document.querySelector('.bmi');
const ans = document.querySelector('.ans');
const ans1 = document.querySelector('.ans1');
bmi.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = bmi.elements[0].value;
    const weight = bmi.elements[1].value;
    const calBmi = Math.round(((weight / (height * height)) + Number.EPSILON) * 100) / 100;
    ans.innerText = `BMI : ${calBmi}`;
    ans.style.color = 'black'

    if (calBmi < 18.5) {
        ans1.innerText = `You are Underweight`;
        ans1.style.color = "orange";
    }
    else if (calBmi < 24.9) {
        ans1.innerText = `You are Healthy`;
        ans1.style.color = "green";
    }
    else if (calBmi < 30) {
        ans1.innerText = `You are Overweight`;
        ans1.style.color = "orange";
    }
    else {
        ans1.innerText = `You are Obese`;
        ans1.style.color = "red";
    }
    // ans1.style.backgroundColor = "white";

    bmi.elements[0].value = "";
    bmi.elements[1].value = "";




})

