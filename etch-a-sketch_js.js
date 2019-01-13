const container = document.querySelector('#container');
const btn = document.querySelector('#button');


for (var i=0;i<256;i++) {
  const div = document.createElement('div');
  container.appendChild(div);
  div.textContent = 'div';

  div.addEventListener('mouseover', (e) => {
    e.target.style.background = 'blue';
  });
  button.addEventListener('click', (e) => {
      div.style.background = 'initial';
    });
}
