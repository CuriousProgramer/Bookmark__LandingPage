const answerBox = document.querySelectorAll('.questions__box__answer');
const questionsArrow = document.querySelectorAll('.question__arrow');
questionsArrow.forEach((item=>{
  item.addEventListener('click',()=>{
    item.classList.toggle('active');
    const clicked = item.dataset.tab;
    const answerElement = document.querySelector(`.questions__box__${clicked}`);
    answerElement.classList.toggle('active');
    console.log(answerElement);
  })
}))


//////////////
const featuresBtn = document.querySelectorAll('.features__button');
const featuresText = document.querySelectorAll('.features__text');

featuresBtn.forEach((item=>{
  item.addEventListener('click',()=>{
    RemoveActiveButtons();
    RemoveActiveText();
    item.classList.add('active');
    const clicked = item.dataset.tab;
    const text = document.querySelector(`.features__${clicked}`);
    text.classList.add('active');
  })
}))

function RemoveActiveButtons(){
  featuresBtn.forEach((item=>{
    if(item.classList.contains('active')) item.classList.remove('active');
  }))
}

function RemoveActiveText(){
  featuresText.forEach((item=>{
    if(item.classList.contains('active')) item.classList.remove('active');
  }))
}


///nav
const navBtn = document.querySelector('.nav__mob__btn');
const mobNav = document.querySelector('.mob__nav__list');
navBtn.addEventListener('click',()=>{
  mobNav.classList.toggle('active');
})


const input = document.querySelector('.contact__form__input');
const submit = document.querySelector('.contact__form__btn');
submit.addEventListener('click',()=>{

  // e.preventDefault();
  if(input.value === '') alert('Please fill email form!!!');
})