import '../src/style.css'

document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addButton');
  const container = document.getElementById('container');

  let divCount = 1;

  addButton?.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = `Div ${divCount}`;
    newDiv.classList.add('dynamic-div');
    
    container?.appendChild(newDiv);

    divCount++;
  });
});

