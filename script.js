"use strict";

function averageAge(ages) {
    const ageValues = Object.values(ages);
    const totalAge = ageValues.reduce((sum, age) => sum + age, 0);
    return totalAge / ageValues.length;
}
    
document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("myButton");
    button.addEventListener("click", testFunction);
});

function testFunction() {
    const superHeroes = {
        Tony: 42,
        Peter: 18,
        Steve: 104,
        Bruce: 38,
        Thor: 1055
    };

    const avgAge = averageAge(superHeroes);
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `The average age is ${avgAge.toFixed(2)}`;
}
