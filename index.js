/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Tag!
@author: Majd
@tags: [two-player]
@addedOn: 2024-00-00
*/

const tagger = "t"
const wall = "w"
const runner = "r"

setLegend(
  [ tagger, bitmap`
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
3333333333333333` ],
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

let level = 0
const levels = [
  map`
....................
....................
....................
....................
....................
....................
....................
....................
.....w..wwwww.......
.....ww.w...ww......
......w.w....w......
......www...ww......
...........ww.......
..........ww........
........ww..........
....t..w...r........
.....www............`
]

setMap(levels[level])

setPushables({
  [ tagger ]: []
})

let intervalTagger = 0
let intervalRunner = 0

function checkIfTagged(){
  if (getFirst(tagger).x + 1 == getFirst(runner).x || getFirst(tagger).x - 1 == getFirst(runner).x){
    if(getFirst(tagger).y + 1 == getFirst(runner).y || getFirst(tagger).y - 1 == getFirst(runner).y){
      addText("Tagged!", {x: 10, y: 4, color: color`3`})

    }
  }
}

function moveTagger(direction){
  clearInterval(intervalTagger)
  intervalTagger = setInterval(() => {
  
  if (direction == "w"){
    getFirst(tagger).y -= 1
  } else if (direction == "a"){
      getFirst(tagger).x -= 1
  } else if (direction == "s"){
      getFirst(tagger).y += 1
  } else {
      getFirst(tagger).x += 1
  }
    
  }, 133)
}

function moveRunner(direction){
  clearInterval(intervalRunner)
  intervalRunner = setInterval(() => {
  if (direction == "i"){
    getFirst(runner).y -= 1
  } else if (direction == "j"){
      getFirst(runner).x -= 1
  } else if (direction == "k"){
      getFirst(runner).y += 1
  } else {
      getFirst(runner).x += 1
  }
    
  }, 150)
}

onInput("w", () => {
  moveTagger("w")
})

onInput("a", () => {
  moveTagger("a")
})


onInput("s", () => {
  moveTagger("s")
})

onInput("d", () => {
  moveTagger("d")
})


onInput("i", () => {
  moveRunner("i")
})

onInput("j", () => {
  moveRunner("j")
})


onInput("k", () => {
  moveRunner("k")
})

onInput("l", () => {
  moveRunner("l")
})


afterInput(() => {
})