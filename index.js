let homeCount = 0
let awayCount = 0
let roundCount = 0


// Home functions
function addOneHome() {
    homeCount += 1
    document.getElementById("homeScore").textContent = homeCount
    checkScore()
}

function addTwoHome() {
    homeCount += 2
    document.getElementById("homeScore").textContent = homeCount
    checkScore()
}

function addThreeHome() {
    homeCount += 3
    document.getElementById("homeScore").textContent = homeCount
    checkScore()
}


// Away functions
function addOneAway() {
    awayCount += 1
    document.getElementById("awayScore").textContent = awayCount
    checkScore()
}

function addTwoAway() {
    awayCount += 2
    document.getElementById("awayScore").textContent = awayCount
    checkScore()
}

function addThreeAway() {
    awayCount += 3
    document.getElementById("awayScore").textContent = awayCount
    checkScore()
}

//Rounds
function addRound() {
    roundCount += 1
    document.getElementById("addRound").textContent = roundCount
}

//Deleting
function clearAll() {
    homeCount = 0
    awayCount = 0
    roundCount = 0
    document.getElementById("homeScore").textContent = homeCount
    document.getElementById("awayScore").textContent = awayCount
    document.getElementById("addRound").textContent = roundCount
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showWinModal(team) {
    const modalId = team === 'home' ? 'homeWinModal' : 'awayWinModal';
    document.getElementById(modalId).style.display = 'block';
}

function endGameHome() {
    showWinModal('home');
    homeCount = 0
    awayCount = 0
    roundCount = 0
    document.getElementById("homeScore").textContent = homeCount
    document.getElementById("awayScore").textContent = awayCount
    document.getElementById("addRound").textContent = roundCount
}

function endGameAway() {
    showWinModal('away');
    homeCount = 0
    awayCount = 0
    roundCount = 0
    document.getElementById("homeScore").textContent = homeCount
    document.getElementById("awayScore").textContent = awayCount
    document.getElementById("addRound").textContent = roundCount
}

// Проверка счета после каждого изменения
function checkScore() {
    if (homeCount >= 21) {
        endGameHome()
    }
    if (awayCount >= 21) {
        endGameAway()
    }
}