/*
@title: Tag!
@author: Majd
@tags: [two-player]
@addedOn: 2024-00-00
*/

const tagger = "t"
const wall = "w"
const runner = "r"
const clock = "c"
const invert = "i"
const background = "b"

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
const endGameTune = tune`
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
const roundTune = tune`
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: A4^126.58227848101266 + F4^126.58227848101266,
126.58227848101266: A4^126.58227848101266 + F4^126.58227848101266,
126.58227848101266: A4^126.58227848101266 + F4^126.58227848101266,
126.58227848101266: A4^126.58227848101266 + F4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: E5^126.58227848101266 + C5^126.58227848101266,
126.58227848101266: E5^126.58227848101266 + C5^126.58227848101266,
126.58227848101266: E5^126.58227848101266 + C5^126.58227848101266,
126.58227848101266: C5^126.58227848101266 + E5^126.58227848101266,
126.58227848101266: F4^126.58227848101266 + A4^126.58227848101266,
126.58227848101266: A4^126.58227848101266 + F4^126.58227848101266,
126.58227848101266: A4^126.58227848101266 + F4^126.58227848101266,
126.58227848101266: A4^126.58227848101266 + F4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: B4^126.58227848101266 + G4^126.58227848101266,
126.58227848101266: B4^126.58227848101266 + G4^126.58227848101266,
126.58227848101266: B4^126.58227848101266 + G4^126.58227848101266,
126.58227848101266: D5^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: D5^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: D5^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: D5^126.58227848101266 + B4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + E4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + E4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + E4^126.58227848101266,
126.58227848101266: G4^126.58227848101266 + E4^126.58227848101266`
const roundFastTune = tune`
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: A4^83.33333333333333 + F4^83.33333333333333,
83.33333333333333: A4^83.33333333333333 + F4^83.33333333333333,
83.33333333333333: A4^83.33333333333333 + F4^83.33333333333333,
83.33333333333333: A4^83.33333333333333 + F4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: E5^83.33333333333333 + C5^83.33333333333333,
83.33333333333333: E5^83.33333333333333 + C5^83.33333333333333,
83.33333333333333: E5^83.33333333333333 + C5^83.33333333333333,
83.33333333333333: C5^83.33333333333333 + E5^83.33333333333333,
83.33333333333333: F4^83.33333333333333 + A4^83.33333333333333,
83.33333333333333: A4^83.33333333333333 + F4^83.33333333333333,
83.33333333333333: A4^83.33333333333333 + F4^83.33333333333333,
83.33333333333333: A4^83.33333333333333 + F4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: B4^83.33333333333333 + G4^83.33333333333333,
83.33333333333333: B4^83.33333333333333 + G4^83.33333333333333,
83.33333333333333: B4^83.33333333333333 + G4^83.33333333333333,
83.33333333333333: D5^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: D5^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: D5^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: D5^83.33333333333333 + B4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + E4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + E4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + E4^83.33333333333333,
83.33333333333333: G4^83.33333333333333 + E4^83.33333333333333`

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
LLLLLLLLLLLLLLLL`],
  [clock, bitmap`
................
....33333333....
..333333333333..
.33322200222333.
.33222222222233.
3322222222222233
3322222022222233
3322222022222233
3302222000022033
3322222222222233
3322222222222233
3322222222222233
.33222222222233.
.33322200222333.
..333333333333..
....33333333....`],
  [invert, bitmap`
...........7....
...........77...
...........777..
777777777777777.
7777777777777777
777777777777777.
...........777..
....3......77...
...33......7....
..333...........
.333333333333333
3333333333333333
.333333333333333
..333...........
...33...........
....3...........`],
  [background, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`]
)

setSolids([tagger, runner, wall])


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
wbbbbbbbbbbbbbbbbbbbbw
wbwbwbbwwbwwbwbwbwbwbw
wbbbbbbbbbbbbwbbbbbbbw
wbbbwbbbbbbbbwbbbbwbbw
wwbwwbwwwbbbbbbbbbbbbw
wbbbbbbbwwwbbbbbwbbbbw
wbbwwbbbwbwwwbbbwbbbbw
wbwwwwbbwbbbbbwbwwbwww
wbbwbbbbbbbwbbbbwbbbbw
wbbbbbwbwwwwbbwbwbwbbw
wwbwbbwbbbwwbbbbwbbbbw
wbbwbbwbbwbwwbwwwwbbww
wbwwwbwwbbbbwbbbbbbbbw
wbbwwbbwwbbbbwbbbbbbbw
wbwbwwbbbbwbbbwbbbbwbw
wbtbwbbwwwwbbbbbbrbbbw
wbwbbbbwbbbbwbbwbbbbbw
wbbbwbbbbbwbbbbbbbbbbw
wwwwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwwwww
w....wwww....wwwwwwwww
w....wwww....wwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwbbbwbbbbbbbbbbbbbw
wbbbbwbwwwwbwbwbwwwwbw
wbbwwbbbbbbbbbbbbbbwbw
wbbwbbbwbwbbwbwbbwbbbw
wbbwbbbbwbbbbwbbbwbwbw
wbwwwbbbbbbbbbbwbbbwbw
wbbbbbwbbwbwwbwbwbrbbw
wbwwbbbbbwbwbbbbbbbbww
wbbwbbwwwwbwbbwbwbwbbw
wbbwbbbbbwbwwbbbbbbwww
wbbbwbwbbwbwbbwbbbbwbw
wbbbbbbwbbbbbwbbwwbwbw
wbwwwwbbbbwbwwbbwbbbbw
wbbbbwbwbbwbbwbbbbwwbw
wbbwbwbbbbwbbwbwbbbwbw
wbtbbwbwwwbbbwbbbbbbbw
wbbbbbbwbwbwwwwbwwwwbw
wwwwwwwwbbbbbbbbbbbbbw
wwwwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwwwww
w....wwww....wwwwwwwww
w....wwww....wwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wtbwbbbwbbbbbbwbbbbbbw
wbbbbwbbbbbwbbbbwbbwbw
wwbwbwbwbbbbbbwbbwbwbw
wbbbbbbbwwwbwwbbbbbwbw
wbwwwbwbwbbbbwbwbwbbbw
wbbbwbbbwwbwbwbbwbbwbw
wwwbwbwwwbbbwwbwbbw.ww
wbbbbbbbbbwwbwbbbwbwbw
wbwwbwwbwbbbbwbbbbbbbw
wbbwbbbbwwbbwwwwwwbwww
wwbbbwbwwbbbbwwwwwbbbw
wbbbwwbbwbwwbbbbbbwbww
wbwbbbbbwbbbbwwbwbbbbw
wbwwwwwbwbbwbwbbwwwbbw
wbwbbbbbwwbbwwbbbbbbbw
wbbbwbbwbbbbbbwbwbwbww
wwbbwbbbbwbwwbbbwbbbbw
wbbbwbbwbbbbbbbbbbwbrw
wwwwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwwwww
w....wwww....wwwwwwwww
w....wwww....wwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wbbbbbbbbbwwbwwwwwwwww
wbwwwwwwwbbbbwbbbwbbbw
wbbbbbbbbbwwbwbwbwbwbw
wbwwwbbwbwwwbbbwbbbwbw
wbwwwbbbbbwwbwbwbwbwbw
wbbbbbwbwbwwbwbbbwbwbw
wbwwwbwbwbbbbwwwwwwwbw
wbwwbbwbwbwwbwwbbbbbbw
wbbbbbbbbbwwbbbrbwwbww
wbwwbwwbwwwwwbwwbwwbww
wbwwbwbbbbbbbbwwbbbbbw
wtbbbwwbwbwwwbbbbwwbww
wwbbwwwbbbwwbbbwbwwbww
wwwbbwwwbwwwwbwwbwbbww
wwwwbbwbbbwwwbwwbwbwww
wwwwwbbbwbwwbbbbbbbwww
wwwwwwwbbbbbbwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwwwww
w....wwww....wwwwwwwww
w....wwww....wwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwww
wtbbbbbbbbwbbbbbbbbbbw
wwbwwwwbwwwwbwwwwbwwww
wbbbbwbbbbbwbbbbbbbbbw
wbwwbwwwbwwwwwwbwbwwww
wbbbbbwbbbbbbbbbwbbbbw
wwwbwbwwwbwwwbwbwwwbww
wbbbbbbbbbbbbbbbbbbbbw
wwbwwwbwbwwbwwwbwwbwww
wbbbbbbbbbbbbbwbbbbbbw
wwbwbwbwbwbwbwwwwbwwww
wbbbbbbbbbbbbbbbbbbbbw
wwwbwwwbwwwwbwwbwwwwbw
wbbbbbbbbbbbbbbbbbbbbw
wwwbwbwwwwbwwwwwbwbwbw
wbbbbbbbbbbbbbbbbbbbbw
wbwwbwwwbwwwwbwbwwwwbw
wbbbbbbbbbbbwbbbbbbbrw
wwwwwwwwwwwwwwwwwwwwww`
]

let level = Math.floor(Math.random() * (levels.length - 1) + 1)

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

let playerOneInverted = false
let playerTwoInverted = false

let roundFastTunePlayback = ``

let blankSpots = getAll(background)

const powerUps = ["clock", "invert"]


function endGame(playerWhoWon){
  clearText()
  setMap(levels[0])
  roundTunePlayback.end()
  playTune(endGameTune, Infinity)
  if (playerWhoWon == 1){
    addText("Player One Wins!", {x: 2, y: 7, color: color`3`})
  } else {
    addText("Player Two Wins!", {x: 2, y: 7, color: color`3`})
  }
}

function spawnPowerUp(){
  let powerUpIndex = Math.floor(Math.random() * 2)
  console.log(powerUpIndex)
  let index = Math.floor(Math.random() * (blankSpots.length))
  if (powerUps[powerUpIndex] == "clock"){
    addSprite(blankSpots[index].x, blankSpots[index].y, clock)
  } else if (powerUps[powerUpIndex] == "invert"){
    addSprite(blankSpots[index].x, blankSpots[index].y, invert)
  }
  
  
}

function startTimer(){
  let played = false
  let randomTimeOne = Math.floor(Math.random() * (25 - 15 + 1) + 15)
  let randomTimeTwo = Math.floor(Math.random() * (randomTimeOne - 10) + 10) - 5
  console.log(randomTimeOne)
  console.log(randomTimeTwo)
  runnerTimer -= 1
  addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
  intervalRunnerTimer = setInterval(() => {
  clearText()
  addText(String(playerOneScore) + "-" + String(playerTwoScore), { x: 3, y: 1, color: color`3` })
  runnerTimer -= 1
  addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
  if (runnerTimer <= 5 && !played){
    played = true
    roundTunePlayback.end()
    roundFastTunePlayback = playTune(roundFastTune, Infinity)
  }
  if (runnerTimer <= 0) {
    roundFastTunePlayback.end()
    playTune(runnerWinSFX)
    if (isRunner){roundEnd(1)} else {roundEnd(2)}
  }
  if (runnerTimer == randomTimeOne){
    randomTimeOne = -11
    spawnPowerUp()
  }
  if (runnerTimer == randomTimeTwo){
    randomTimeTwo = -11
    spawnPowerUp()
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
    level = Math.floor(Math.random() * (levels.length - 1) + 1)
    setMap(levels[level])
    blankSpots = getAll(background)
    roundTunePlayback = playTune(roundTune, Infinity)
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
    roundTunePlayback.end()
    playTune(tagSFX)
    if (player == 1){roundEnd(1)} else {roundEnd(2)}
  } else if ((getFirst(tagger).y + 1 == getFirst(runner).y || getFirst(tagger).y - 1 == getFirst(runner).y) && getFirst(tagger).x == getFirst(runner).x) {
    roundTunePlayback.end()
    playTune(tagSFX)
    if (player == 1){roundEnd(1)} else {roundEnd(2)}
  }
}


function clockPowerUp(role){
  if (role == "tagger"){
    runnerTimer += 6
  } else {
    runnerTimer -= 6
  }
  getFirst(clock).remove()
}

function invertPowerUp(player){
  if (player == 1){
    playerTwoInverted = true
    setTimeout(() => {playerTwoInverted = false}, 3000)
  } else if (player == 2){
    playerOneInverted = true
    setTimeout(() => {playerOneInverted = false}, 3000)
  }
  getFirst(invert).remove()
}

function checkPowerUp(player){
  if (tilesWith(tagger, clock).length >= 1){
    clockPowerUp("tagger")
  } 
  if (tilesWith(runner, clock).length >= 1){
    clockPowerUp("runner")
  }
  if (tilesWith(tagger, invert).length >= 1){
    invertPowerUp(player)
  }
  if (tilesWith(runner, invert).length >= 1){
    invertPowerUp(player)
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
    checkPowerUp(1)
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
    checkPowerUp(2)
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
let roundTunePlayback = playTune(roundTune, Infinity)

onInput("w", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerOneInverted){
    if (!isRunner){
      movePlayerOne("w", "tagger")
    } else {movePlayerOne("w", "runner")}
  } else {
    if (!isRunner){
      movePlayerOne("s", "tagger")
    } else {movePlayerOne("s", "runner")}
  }
  
})

onInput("a", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerOneInverted){
    if (!isRunner){
      movePlayerOne("a", "tagger")
    } else {movePlayerOne("a", "runner")}
  } else {
    if (!isRunner){
      movePlayerOne("d", "tagger")
    } else {movePlayerOne("d", "runner")}
  }
})


onInput("s", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerOneInverted){
    if (!isRunner){
      movePlayerOne("s", "tagger")
    } else {movePlayerOne("s", "runner")}
  } else {
    if (!isRunner){
      movePlayerOne("w", "tagger")
    } else {movePlayerOne("w", "runner")}
  }
})

onInput("d", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerOneInverted){
    if (!isRunner){
      movePlayerOne("d", "tagger")
    } else {movePlayerOne("d", "runner")}
  } else {
    if (!isRunner){
      movePlayerOne("a", "tagger")
    } else {movePlayerOne("a", "runner")}
  }
})


onInput("i", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerTwoInverted){
    if (!isTagger){
      movePlayerTwo("i", "runner")
    } else {movePlayerTwo("i", "tagger")}
  } else {
    if (!isTagger){
      movePlayerTwo("k", "runner")
    } else {movePlayerTwo("k", "tagger")}
  }
})

onInput("j", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerTwoInverted){
    if (!isTagger){
      movePlayerTwo("j", "runner")
    } else {movePlayerTwo("j", "tagger")}
  } else {
    if (!isTagger){
      movePlayerTwo("l", "runner")
    } else {movePlayerTwo("l", "tagger")}
  }
  
})


onInput("k", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerTwoInverted){
    if (!isTagger){
      movePlayerTwo("k", "runner")
    } else {movePlayerTwo("k", "tagger")}
  } else {
    if (!isTagger){
      movePlayerTwo("i", "runner")
    } else {movePlayerTwo("i", "tagger")}
  }
})

onInput("l", () => {
  if (!start){
    start = true
    startTimer()
  }
  if (!playerTwoInverted){
    if (!isTagger){
      movePlayerTwo("l", "runner")
    } else {movePlayerTwo("l", "tagger")}
  } else {
    if (!isTagger){
      movePlayerTwo("j", "runner")
    } else {movePlayerTwo("j", "tagger")}
  }
})




afterInput(() => {

})