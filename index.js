let countHome = 0
let countGuest = 0

let scoreHome = document.getElementById("score-home")
scoreHome.innerText = 0

let scoreGuest = document.getElementById("score-guest")
scoreGuest.innerText = 0

function plus1Home () {
    countHome += 1
    scoreHome.innerText = countHome
}

function plus2Home () {
    countHome += 2
    scoreHome.innerText = countHome
}

function plus3Home () {
    countHome += 3
    scoreHome.innerText = countHome
}

function plus1Guest () {
    countGuest += 1
    scoreGuest.innerText = countGuest
}

function plus2Guest () {
    countGuest += 2
    scoreGuest.innerText = countGuest
}

function plus3Guest () {
    countGuest += 3
    scoreGuest.innerText = countGuest
}