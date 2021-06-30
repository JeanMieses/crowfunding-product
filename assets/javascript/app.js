const buttons = document.querySelectorAll('.reward');
const project = document.querySelector('.back-project');
const body = document.querySelector('body');
const inputs = document.querySelectorAll('.radioInputs');
const forms = document.querySelectorAll('form');
const close = document.querySelector('#close');
const continueButton = document.querySelectorAll('.continue');
const message = document.querySelector('.thanks-message');
const closeMessageButton = document.querySelector('.got-it')
const donations = document.querySelectorAll('.donations')
const showDonations= document.querySelector('.show-donations')
const showBackers = document.querySelector('.show-backers')
const backProject = document.querySelector('#back-project')


let moneyTotal = 0;
let backersTotal = 0;


for (button of buttons) {
  button.addEventListener('click', () => {
    project.style.display = 'flex';
    body.classList.toggle('overlay');
    window.scrollTo(300, 0);
  })
}

for (let i = 0; i < forms.length; i++) {
  inputs[i].addEventListener('click', () => {
    forms[i].classList.toggle('hide');
  })
}

backProject.addEventListener('click', () => {
  body.classList.toggle('overlay');
  project.style.display = 'flex';
})

for (let i = 0; i < continueButton.length; i++) {
  continueButton[i].addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(300, 0);
    project.style.display = 'none';
    message.classList.toggle('hide');
    moneyTotal = moneyTotal + parseInt(donations[i].value);
    backersTotal = backersTotal + 1;
    showDonations.innerText = moneyTotal;
    showBackers.innerText = backersTotal;
  })
}

close.addEventListener('click', () => {
  reset();
})

closeMessageButton.addEventListener('click', () => {
  reset();
})

function reset() {
  for (let i = 0; i < forms.length; i++) {
    forms[i].classList.add('hide');
    inputs[i].checked = false;
    project.style.display = 'none';
    body.classList.remove('overlay');
    message.classList.add('hide');
  }
}
