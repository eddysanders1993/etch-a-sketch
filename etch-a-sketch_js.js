
const container = document.querySelector('#container');


function createSixteenElements(){
for (var i=0;i<256;i++) {
  let div = document.createElement('div');
  div.textContent = 'div';
  container.appendChild(div);
  }
}

createSixteenElements();

div.addEventListener('mouseover', (e) => {
  e.target.style.background = 'blue'
});
