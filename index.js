/*
@title: Tag!
@author: Majd
@tags: [two-player]
@addedOn: 2024-00-00
*/

const tagger = "t"
const wall = "w"
const runner = "r"

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

let intervalTagger = 0
let intervalRunner = 0
let intervalRunnerTimer = 0
let canMove = true
let start = false

let isRunner = false
let isTagger = false

let taggerScore = 0
let runnerScore = 0

let runnerTimer = 30

function endGame(playerWhoWon){
  clearText()
  setMap(levels[0])
  if (playerWhoWon == "tagger"){
    addText("Tagger Wins!", {x: 5, y: 7, color: color`3`})
  } else {
    addText("Runner Wins!", {x: 5, y: 7, color: color`3`})
  }
}

function startTimer(){
  runnerTimer -= 1
  addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
  intervalRunnerTimer = setInterval(() => {
  clearText()
  addText(String(taggerScore) + "-" + String(runnerScore), { x: 3, y: 1, color: color`3` })
  runnerTimer -= 1
  addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
  if (runnerTimer <= 0) {
    roundEnd("runner")
  }
  }, 1000)
} 


function roundEnd(playerWhoWon){
  clearInterval(intervalTagger)
  clearInterval(intervalRunner)
  clearInterval(intervalRunnerTimer)
  canMove = false
  if (playerWhoWon == "tagger"){
    taggerScore += 1
    addText("Tagged!", { x: 7, y: 7, color: color`3` })
  } else {
    runnerScore += 1
    addText("Runner Wins!", { x: 7, y: 7, color: color`3` }) 
  }
  
  addText(String(taggerScore) + "-" + String(runnerScore), { x: 3, y: 1, color: color`3` })
  if (taggerScore >= 5){
    endGame("tagger")
  } else if (runnerScore >= 5){
    endGame("runner")
  } else {
    setTimeout(() => {
    clearText()
    setMap(levels[level])
    runnerTimer = 30
    addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
    addText(String(taggerScore) + "-" + String(runnerScore), { x: 3, y: 1, color: color`3` })
    start = false
    canMove = true
  
    }, 3000)
  }
  
}



function checkIfTagged() {
  if ((getFirst(tagger).x + 1 == getFirst(runner).x || getFirst(tagger).x - 1 == getFirst(runner).x) && getFirst(tagger).y == getFirst(runner).y) {
    roundEnd("tagger")
  } else if ((getFirst(tagger).y + 1 == getFirst(runner).y || getFirst(tagger).y - 1 == getFirst(runner).y) && getFirst(tagger).x == getFirst(runner).x) {
    roundEnd("tagger")
  }
}


function moveTagger(direction) {
  clearInterval(intervalTagger)
  if (canMove == true){
    intervalTagger = setInterval(() => {
    checkIfTagged()
    if (direction == "w") {
      getFirst(tagger).y -= 1
    } else if (direction == "a") {
      getFirst(tagger).x -= 1
    } else if (direction == "s") {
      getFirst(tagger).y += 1
    } else {
      getFirst(tagger).x += 1
    }

    }, 145)
  }
}

function movePlayerTwo(direction) {
  clearInterval(intervalRunner)
  if (canMove == true){
    intervalRunner = setInterval(() => {
    if (direction == "i") {
      getFirst(runner).y -= 1
    } else if (direction == "j") {
      getFirst(runner).x -= 1
    } else if (direction == "k") {
      getFirst(runner).y += 1
    } else {
      getFirst(runner).x += 1
    }
    }, 150)
  }
}

addText(String(runnerTimer), {x: 9, y: 1, color: color`9`})
addText(String(taggerScore) + "-" + String(runnerScore), { x: 3, y: 1, color: color`3` })

onInput("w", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerOne("w")
})

onInput("a", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerOne("a")
})


onInput("s", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerOne("s")
})

onInput("d", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerOne("d")
})


onInput("i", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerTwo("i")
})

onInput("j", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerTwo("j")
})


onInput("k", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerTwo("k")
})

onInput("l", () => {
  if (!start){
    start = true
    startTimer()
  }
  movePlayerTwo("l")
})




afterInput(() => {

})