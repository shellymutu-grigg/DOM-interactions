// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault()
})

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
    // SMG 09/09/2020: clear other states from classList array if greater than 1
function clearClassList(evt){
  if(evt.target.classList[1] === 'blue'){
    evt.target.classList.toggle('blue')
  }else if(evt.target.classList[1] === 'green'){
    evt.target.classList.toggle('green')
  }
  else if(evt.target.classList[1] = 'invisible'){
    evt.target.classList.toggle('invisible')
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  if(evt.target.classList.length > 1&& evt.target.classList[1] !== 'green'){
    clearClassList(evt)
  }
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  if(evt.target.classList.length > 1 && evt.target.classList[1] !== 'blue'){
    clearClassList(evt)
  }
    evt.target.classList.toggle('blue')
    updateCounts()
}
// CREATE FUNCTION hide HERE

function hide (evt) {
  if(evt.target.classList.length > 1&& evt.target.classList[1] !== 'invisble'){
    clearClassList(evt)
  }
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


  for(var i =0; i < document.getElementsByClassName('board')[0].children.length; i++){
    if(document.getElementsByClassName('board')[0].children[i].classList[1]==='blue'){
      totals['blue'] = totals['blue'] + 1
    }else if(document.getElementsByClassName('board')[0].children[i].classList[1] === 'green'){
      totals['green'] = totals['green']+ 1
    }else if(document.getElementsByClassName('board')[0].children[i].classList[1] === 'invisible'){
      totals['invisible'] = totals['invisible']+1
    }
  }
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
