let h2 = document.getElementsByTagName('h2')

console.log(h2[0].innerText);

h2[0].innerText = 'Cowboys won!'

h2[1].innerText = 'JSU won too. Did Alcorn???'

let green = document.getElementsByClassName('green');

console.log(green);

green[0].style.color = '#00ff00';
console.log(green[0]
)
green[1].style.color = 'green';

let sans = document.querySelectorAll('.sans');
console.log(sans);

// for each element in the sans nodelist give it the font family 'sans-serif'
sans.forEach(element => {
    element.style.fontFamily = 'sans-serif';
})



let myName = document.getElementById('myName');
console.log(myName);

myName.innerText = 'Colin Green';

let root = document.getElementById('root');

let h3 = document.createElement('h3')

let text = document.createElement('p');

h3.innerText = 'Sub header';

root.appendChild(h3);



root.innerHTML = `<p> This is some text! Written by ${myName.innerText} </p>`;

// root.appendChild(text);

