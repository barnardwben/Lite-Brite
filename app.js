const container = document.getElementById('container');

const drk = document.getElementById('drk');
const lit = document.getElementById('lit');


const rst = document.getElementById('reset');

let colorInput = document.getElementById('farb');
const circleNum = 920;


for(let i = 0; i < circleNum; i++) {
	const circle = document.createElement('div');
	circle.classList.add('circle');
	
	circle.addEventListener('click', () => {
		setColorToEl(circle);
	});
	
	circle.addEventListener('dblclick', () => {
		removeColorFromEl(circle);
  });
  
  reset.addEventListener('click', () => { 
    resetPg(circle);
  });

  lit.addEventListener('click', () => { 
    liteMode(circle)
  });

  drk.addEventListener('click', () => { 
    darkMode(circle)
  });
	
	container.appendChild(circle);
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