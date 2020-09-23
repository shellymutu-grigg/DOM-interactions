// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  console.log("start()")
  bindEventListeners(document.getElementsByClassName('board')[0].children)

}
var triggered = Date.now()
function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)

    // SMG 09/09/2020: makeBlue Event Listener
    dots[i].addEventListener('click', makeBlue)
      
    // SMG 09/09/2020: hide Event Listener
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.remove("blue")
  evt.target.classList.remove("invisible")
  evt.target.classList.toggle('green')
  updateCounts()
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  )
}
// CREATE FUNCTION makeBlue HERE

async function makeBlue (evt) {
  await sleep(200)
  var currentTime = Date.now() 
  if(currentTime-triggered > 500){
    //This means that the time between the last hide event that set a new triggered value and the makeBlue call is greater than 500 milliseconds therefore cannot be part of a dblclcik event 
    evt.target.classList.remove("invisible")
    evt.target.classList.remove("green")
    evt.target.classList.toggle("blue")
    updateCounts()
  } 
}
// CREATE FUNCTION hide HERE

function hide (evt) {
  triggered = Date.now()
  evt.target.classList.remove("blue")
  evt.target.classList.remove("green")
  evt.target.classList.toggle('invisible')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  totals.blue = document.getElementsByClassName('blue').length
  totals.green = document.getElementsByClassName('green').length
  totals.invisible = document.getElementsByClassName('invisible').length

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}

