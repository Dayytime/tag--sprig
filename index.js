/*
@title: Tag!
@author: Majd
@tags: [two-player]
@addedOn: 2024-00-00
*/

const tagger = "t"
const wall = "w"
const runner = "r"

const tagSFX = tune`
124.48132780082987: C4^124.48132780082987 + D4^124.48132780082987 + E4^124.48132780082987 + F4^124.48132780082987 + G4^124.48132780082987,
124.48132780082987: C4^124.48132780082987 + D4^124.48132780082987 + E4^124.48132780082987 + F4^124.48132780082987 + G4^124.48132780082987,
3734.4398340248963`
const runnerWinSFX = tune`
143.54066985645932: C5^143.54066985645932 + C4-143.54066985645932,
143.54066985645932: A5^143.54066985645932 + A4-143.54066985645932,
143.54066985645932: G5^143.54066985645932 + G4-143.54066985645932,
143.54066985645932: B4^143.54066985645932 + C4-143.54066985645932,
143.54066985645932: C5^143.54066985645932 + C4-143.54066985645932,
3875.5980861244016`
const endGameSFX = tune`
300: B4/300 + G4/300 + D4/300 + E5/300,
300: B4/300 + G4/300 + D4/300 + E5/300,
300: B4/300 + G4/300 + D4/300 + E5/300,
300: B4/300 + G4/300 + D4/300 + E5/300,
300: D5/300 + A4/300 + F4/300 + D4/300,
300: D5/300 + A4/300 + F4/300 + D4/300,
300: D5/300 + A4/300 + F4/300 + D4/300,
300: D5/300 + A4/300 + F4/300 + D4/300,
300: A4/300 + E4/300 + C4/300,
300: A4/300 + E4/300 + C4/300,
300: A4/300 + E4/300 + C4/300,
300: A4/300 + E4/300 + C4/300,
300: C4/300 + E4/300 + A4/300,
300: C4/300 + E4/300 + G4/300 + C5/300,
300: C4/300 + E4/300 + G4/300 + C5/300,
300: C5/300 + G4/300 + E4/300 + C4/300,
300: E5~300 + B4~300 + G4~300 + D4~300,
300: E5^300 + B4^300 + G4^300 + D4^300,
300: E5~300 + B4~300 + G4~300 + D4~300,
300: E5^300 + B4^300 + G4^300 + D4^300,
300: E5~300 + B4~300 + G4~300 + D4~300,
300: D5^300 + A4^300 + F4^300 + D4^300,
300: D5~300 + A4~300 + F4~300 + D4~300,
300: D5^300 + A4^300 + F4^300 + D4^300,
300: D5~300 + A4~300 + F4~300 + D4~300,
300: A4^300 + E4^300 + C4^300,
300: A4~300 + E4~300 + C4~300,
300: A4^300 + E4^300 + C4^300,
300: A4~300 + E4~300 + C4~300,
300: C5^300 + C4^300 + E4^300 + G4^300,
300: C5~300 + C4~300 + E4~300 + G4~300,
300: C5^300 + C4^300 + E4^300 + G4^300`

setLegend(
  [tagger, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [runner, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [wall, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`]
)

setSolids([tagger, runner, wall])

let level = 1
const levels = [
  map`
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwwwww
w....wwww....wwwwwwwww
w....wwww....wwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
w....................w
w.w.w..ww.ww.w.w.w.w.w
w............w.......w
w...w........w....w..w
ww.ww.www............w
w.......www.....w....w
w..ww...w.www...w....w
w.wwww..w.....w.ww.www
w..w.......w....w....w
w.....w.wwww..w.w.w..w
ww.w..w...ww....w....w
w..w..w..w.ww.wwww..ww
w.www.ww....w........w
w..ww..ww....w.......w
w.w.ww....w...w....w.w
w.t.w..wwww......r...w
w.w....w....w..w.....w
w...w.....w..........w
wwwwwwwwwwwwwwwwwwwwww`
]

setMap(levels[level])

setPushables({
  [tagger]: []
})

let intervalPlayerOne = 0
let intervalPlayerTwo = 0
let intervalRunnerTimer = 0
let canMove = true
let start = false

let isRunner = false
let isTagger = false

let playerOneScore = 0
let playerTwoScore = 0

let runnerTimer = 30

let getPlayerOneSprite = 0
let getPlayerTwoSprite = 0

let playerOneSpeed = 0
let playerTwoSpeed = 0


function endGame(playerWhoWon){
  clearText()
  setMap(levels[0])
  playTune(endGameSFX, Infinity)
  if (playerWhoWon == 1){
    addText("Player One Wins!", {x: 2, y: 7, color: color`3`})
  } else {
    addText("Player Two Wins!", {x: 2, y: 7, color: color`3`})
  }
}

function startTimer(){
  runnerTimer -= 1
  addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
  intervalRunnerTimer = setInterval(() => {
  clearText()
  addText(String(playerOneScore) + "-" + String(playerTwoScore), { x: 3, y: 1, color: color`3` })
  runnerTimer -= 1
  addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
  if (runnerTimer <= 0) {
    playTune(runnerWinSFX)
    if (isRunner){roundEnd(1)} else {roundEnd(2)}
  }
  }, 1000)
} 


function roundEnd(playerWhoWon){
  clearInterval(intervalPlayerOne)
  clearInterval(intervalPlayerTwo)
  clearInterval(intervalRunnerTimer)
  canMove = false
  if (playerWhoWon == 1){
    playerOneScore += 1
    addText("Player One Wins!", { x: 2, y: 7, color: color`3` })
  } else {
    playerTwoScore += 1
    addText("Player Two Wins!", { x: 2, y: 7, color: color`3` }) 
  }
  
  addText(String(playerOneScore) + "-" + String(playerTwoScore), { x: 3, y: 1, color: color`3` })
  if (playerOneScore >= 5){
    endGame(1)
  } else if (playerTwoScore >= 5){
    endGame(2)
  } else {
    setTimeout(() => {
    clearText()
    setMap(levels[level])
    runnerTimer = 30
    addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
    addText(String(playerOneScore) + "-" + String(playerTwoScore), { x: 3, y: 1, color: color`3` })
    isRunner = !isRunner
    isTagger = !isTagger
    start = false
    canMove = true
  
    }, 3000)
  }
  
}



function checkIfTagged(player) {
  if ((getFirst(tagger).x + 1 == getFirst(runner).x || getFirst(tagger).x - 1 == getFirst(runner).x) && getFirst(tagger).y == getFirst(runner).y) {
    playTune(tagSFX)
    if (player == 1){roundEnd(1)} else {roundEnd(2)}
  } else if ((getFirst(tagger).y + 1 == getFirst(runner).y || getFirst(tagger).y - 1 == getFirst(runner).y) && getFirst(tagger).x == getFirst(runner).x) {
    playTune(tagSFX)
    if (player == 1){roundEnd(1)} else {roundEnd(2)}
  }
}


function movePlayerOne(direction, role) {
  if (role == "tagger"){
    getPlayerOneSprite = getFirst(tagger)
    playerOneSpeed = 145
  } else {
    getPlayerOneSprite = getFirst(runner)
    playerOneSpeed = 150
  }
  clearInterval(intervalPlayerOne)
  if (canMove == true){
    intervalPlayerOne = setInterval(() => {
    if (role == "tagger"){checkIfTagged(1)}
    if (direction == "w") {
      getPlayerOneSprite.y -= 1
    } else if (direction == "a") {
      getPlayerOneSprite.x -= 1
    } else if (direction == "s") {
      getPlayerOneSprite.y += 1
    } else {
      getPlayerOneSprite.x += 1
    }

    }, playerOneSpeed)
  }
}

function movePlayerTwo(direction, role) {
  if (role == "tagger"){
    getPlayerTwoSprite = getFirst(tagger)
    playerTwoSpeed = 145
  } else {
    getPlayerTwoSprite = getFirst(runner)
    playerTwoSpeed = 150
  }
  clearInterval(intervalPlayerTwo)
  if (canMove == true){
    intervalPlayerTwo = setInterval(() => {
    if (role == "tagger"){checkIfTagged(2)}
    if (direction == "i") {
      getPlayerTwoSprite.y -= 1
    } else if (direction == "j") {
      getPlayerTwoSprite.x -= 1
    } else if (direction == "k") {
      getPlayerTwoSprite.y += 1
    } else {
      getPlayerTwoSprite.x += 1
    }
    }, playerTwoSpeed)
  }
}

addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
addText(String(playerOneScore) + "-" + String(playerTwoScore), { x: 3, y: 1, color: color`3` })

onInput("w", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isRunner){
    movePlayerOne("w", "tagger")
  } else {movePlayerOne("w", "runner")}
  
})

onInput("a", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isRunner){
    movePlayerOne("a", "tagger")
  } else {movePlayerOne("a", "runner")}
})


onInput("s", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isRunner){
    movePlayerOne("s", "tagger")
  } else {movePlayerOne("s", "runner")}
})

onInput("d", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isRunner){
    movePlayerOne("d", "tagger")
  } else {movePlayerOne("d", "runner")}
})


onInput("i", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isTagger){
    movePlayerTwo("i", "runner")
  } else {movePlayerTwo("i", "tagger")}
})

onInput("j", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isTagger){
    movePlayerTwo("j", "runner")
  } else {movePlayerTwo("j", "tagger")}
  
})


onInput("k", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isTagger){
    movePlayerTwo("k", "runner")
  } else {movePlayerTwo("k", "tagger")}
})

onInput("l", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!isTagger){
    movePlayerTwo("l", "runner")
  } else {movePlayerTwo("l", "tagger")}
})




afterInput(() => {

})