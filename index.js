let randomNumber1 = Math.floor(Math.random() * 6 + 1)
let randomNumber2 = Math.floor(Math.random() * 6 + 1)
let dicePlayer1 = document.querySelector(".img1")
let dicePlayer2 = document.querySelector(".img2")
let h1 = document.querySelector("h1")
let img1Source = "images/dice" + randomNumber1 + ".png"
let img2Source = "images/dice" + randomNumber2 + ".png"

dicePlayer1.setAttribute("src", img1Source)
dicePlayer1.setAttribute("src", img2Source)


if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins!"
} else if (randomNumber1 === randomNumber2) { 
    h1.innerHTML = "Draw!"
}