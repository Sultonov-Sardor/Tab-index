let elForm = document.querySelector('.js-form');
let elList = document.querySelector('.js-list');
let elInput = document.querySelector('.js-input');
let elResults = document.querySelector('.results');

elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if(elInput.value == 1){
    elResults.textContent = 'Positive Content';
    document.querySelector('.item-1').classList.add('font-style');
    document.querySelector('.item-2').classList.remove('font-style');
    document.querySelector('.item-3').classList.remove('font-style');
  }else if(elInput.value == 2){
    elResults.textContent = 'Negative Content';
    document.querySelector('.item-1').classList.remove('font-style');
    document.querySelector('.item-2').classList.add('font-style');
    document.querySelector('.item-3').classList.remove('font-style');
  }else if(elInput.value == 3){
    elResults.textContent = 'Nautral Content';
    document.querySelector('.item-1').classList.remove('font-style');
    document.querySelector('.item-2').classList.remove('font-style');
    document.querySelector('.item-3').classList.add('font-style');
  }else{
    alert('Incorrect index was written');
  }

  elInput.innerHTML = '';
});

elList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if(evt.target.matches('.item-1')){
    elResults.textContent = 'Positive Content';
    item = document.querySelector('.item-1').classList.add('font-style');
    document.querySelector('.item-2').classList.remove('font-style');
    document.querySelector('.item-3').classList.remove('font-style');
  }
  if(evt.target.matches('.item-2')){
    elResults.textContent = 'Negative Content';
    document.querySelector('.item-1').classList.remove('font-style');
    document.querySelector('.item-2').classList.add('font-style');
    document.querySelector('.item-3').classList.remove('font-style');
  }
  if(evt.target.matches('.item-3')){
    elResults.textContent = 'Nautral Content';
    document.querySelector('.item-1').classList.remove('font-style');
    document.querySelector('.item-2').classList.remove('font-style');
    document.querySelector('.item-3').classList.add('font-style');
  }
});

console.log(elList)