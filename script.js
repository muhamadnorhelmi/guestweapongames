const weaponSpecialists = [
    { name: "Sniper", clue: "This weapon is precise and used from long distances." },
    { name: "Shotgun", clue: "This weapon is powerful at close range." },
    { name: "Pistol", clue: "This weapon is lightweight and easy to carry." },
    { name: "Rifle", clue: "This weapon is versatile and effective at mid-range." },
    { name: "Bazooka", clue: "This weapon is explosive and used for heavy damage." }
];

let currentSpecialist = weaponSpecialists[Math.floor(Math.random() * weaponSpecialists.length)];
document.getElementById("clue").textContent = `Clue: ${currentSpecialist.clue}`;

document.getElementById("submit-guess").addEventListener("click", function () {
    const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
    const correctAnswer = currentSpecialist.name.toLowerCase();
    const resultElement = document.getElementById("result");

    if (userGuess === correctAnswer) {
        resultElement.textContent = "🎉 Correct! You guessed my weapon specialist.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "❌ Incorrect! Try again.";
        resultElement.style.color = "red";
    }
});
