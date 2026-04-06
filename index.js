var emojis = ["🎉", "🎈", "🍭", "🍬", "🎲", "🎨", "🧸", "🧁", "🪄", "🍦"];

function getEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function forwardCounting() {
    let start = parseInt(prompt("Enter starting number:"));
    let end = parseInt(prompt("Enter ending number:"));

    let output = document.getElementById("output");
    output.innerHTML = "";

    if (!isNaN(start) && !isNaN(end) && start <= end) {
        output.innerHTML += `<h2>🔢 Forward Counting (${start} to ${end})</h2>`;
        for (let i = start; i <= end; i++) {
            output.innerHTML += `<p>${getEmoji()} ${i}</p>`;
        }
    } else {
        output.innerHTML = `<p class="error">❌ Invalid Input!</p>`;
    }
}

function backwardCounting() {
    let start = parseInt(prompt("Enter starting number:"));
    let end = parseInt(prompt("Enter ending number:"));

    let output = document.getElementById("output");
    output.innerHTML = "";

    if (!isNaN(start) && !isNaN(end) && start >= end) {
        output.innerHTML += `<h2>🔙 Backward Counting (${start} to ${end})</h2>`;
        for (let i = start; i >= end; i--) {
            output.innerHTML += `<p>${getEmoji()} ${i}</p>`;
        }
    } else {
        output.innerHTML = `<p class="error">❌ Invalid Input!</p>`;
    }
}

function table() {
    let num = parseInt(prompt("Enter number:"));

    let output = document.getElementById("output");
    output.innerHTML = "";

    if (!isNaN(num)) {
        output.innerHTML += `<h2>✖ Table of ${num}</h2>`;
        for (let i = 1; i <= 10; i++) {
            output.innerHTML += `<p>${getEmoji()} ${num} × ${i} = ${num * i}</p>`;
        }
    } else {
        output.innerHTML = `<p class="error">❌ Invalid Input!</p>`;
    }
}