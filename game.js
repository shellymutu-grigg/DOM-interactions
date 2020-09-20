// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)


function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}


function bindEventListeners(dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE

      // SMG 09/09/2020: makeBlue Event Listener
      dots[i].addEventListener('click', makeBlue)
      
      // SMG 09/09/2020: hide Event Listener
      dots[i].addEventListener('dblclick', hide)

    // The first one is provided for you
      dots[i].addEventListener('contextmenu', makeGreen)
    
  }
}
    // SMG 09/09/2020: clear other states from classList array if greater than 1
    function setState(evt, state){
      if(evt.target.classList.length > 2){
        console.log("setState() evt.target.classList.length > 2: " + evt.target.classList.length)
        console.log("setSate() evt.target.classList: " + evt.target.classList +" ")
        evt.target.classList = []
        evt.target.classList.toggle(state) 
        evt.target.classList.toggle(state)
        //evt.target.classList.remove(1)
        console.log("setState() After remove last element: " + evt.target.classList.length)
        console.log("setState() evt.target.classList: " + evt.target.classList +"\n\n")
      } else{
        // if(evt.target.classList.contains('invisible') && evt.target.classList.contains('blue')){
        //   evt.target.classList.remove('blue')
        // }else if(evt.target.classList.contains('invisible') && evt.target.classList.contains('green')){
        //   evt.target.classList.remove('green')
        // }
        console.log("setState() evt.target.classList.length: " + evt.target.classList.length)
        console.log("setState() evt.target.classList: " + evt.target.classList +"\n\n")

        // if(evt.target.classList.contains(state)){
        //   console.log("evt.target.classList.contains("+state+"): " + evt.target.classList.contains(state) +"\n\n")
        //   evt.target.classList.toggle(state)
        //   console.log("evt.target.classList.length: " + evt.target.classList.length)
        //   console.log("evt.target.classList: " + evt.target.classList +"\n\n")
        // } 
        evt.target.classList.toggle(state) 
    }
      //  }else{
      //   evt.target.classList.toggle(state) 
      // }
    }

function makeGreen (evt) {
  evt.preventDefault()
  console.log("makeGreen(evt) evt.detail: " + evt.detail)
  setState(evt, 'green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  console.log("makeBlue(evt) evt.detail: " + evt.detail)
  setState(evt, 'blue')
  updateCounts()
}
// CREATE FUNCTION hide HERE

function hide (evt) {
  console.log("hide(evt) evt.detail: " + evt.detail)
  setState(evt, 'invisible')
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


