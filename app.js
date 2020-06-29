const container = document.getElementById('container');

const drk = document.getElementById('drk');
const lit = document.getElementById('lit');

const header = document.getElementById('header');

const rst = document.getElementById('reset');

let colorInput = document.getElementById('farb');
const SQUARES_NR = 920;


for(let i = 0; i < SQUARES_NR; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	
	square.addEventListener('click', () => {
		setColorToEl(square);
	});
	
	square.addEventListener('dblclick', () => {
		removeColorFromEl(square);
  });
  
  reset.addEventListener('click', () => { 
    resetPg(square);
  });

  lit.addEventListener('click', () => { 
    liteMode(square)
  });

  drk.addEventListener('click', () => { 
    darkMode(square)
  });
	
	container.appendChild(square);
}



function liteMode(element) {
  element.style.backgroundColor = "#ffb";
}


function darkMode(element) {
  element.style.backgroundColor = "#1d1d1d";
}

function resetPg(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function setColorToEl(element) {
	const color = chooseColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function chooseColor(element) {
  let color = colorInput.value;
  return color;
}

function removeColorFromEl(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}