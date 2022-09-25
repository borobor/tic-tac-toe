const cells = document.querySelectorAll('.js-cell');
const buttonX = document.getElementById('js-player-x');
const buttonO = document.getElementById('js-player-o');

buttonX.addEventListener('click', choosePlayer, {once: true})
buttonO.addEventListener('click', choosePlayer, {once: true})

const classes = {
  x: 'player-x',
  o: 'player-o',
}


function choosePlayer({ target }) {
  (target === buttonX) ? 
    currentClass = classes.x : 
    currentClass = classes.o;
  const buttons = target.closest('.user-choice');
  buttons.parentNode.removeChild(buttons);
  cells.forEach(cell => {
    cell.addEventListener('click', play, {once : true});
    } 
  );
}

function play({ target }) {
  target.classList.add(currentClass);
  changeTurn();
}

function changeTurn() {
  (currentClass === classes.x) ? 
    currentClass = classes.o : 
    currentClass = classes.x; 
}