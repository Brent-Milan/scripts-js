import document from 'index.html';

const body = document.body;
body.append('hello, world');

const div = document.createElement('div');
body.appendChild(div);
div.innerText = 'Div Text Here';
// div.textContent = 'Div Text Here 2';

const referenceDiv = document.querySelector('div');
console.log(referenceDiv.innerText);

const div2 = document.createElement('div');
body.append(div2);
div2.innerHTML = "<strong>This is bold</strong>";

div.remove();
body.removeChild(div2);

div.setAttribute('id', '123');
console.log(div.id);
div.removeAttribute('id');

const span = document.createElement('span');

// creates new attribute named new-data in specified element
span.dataset.newData = 'some data here';

// add classes to element -- or add/remove with toggle
span.classList.add('h1');
span.toggle('h1');

// set styles by referencing attribute in camel case
span.style.backgroundColor = 'red';
