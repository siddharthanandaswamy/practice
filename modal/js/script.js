// 'use strict';
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');


// for(let i=0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click',function(){
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }); 

// const closeModal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// btnCloseModal.addEventListener('click' ,closeModal);
// overlay.addEventListener('click',closeModal);



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const  showModal = function(e){
         e.preventDefault();       //it restrict to scroll up ,when anchor tag is clicked.
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
       };

for ( i=0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click',showModal); 

    // btnsOpenModal.forEach(btn =>btn.addEventListener('click',showModal)); 

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click' ,closeModal);
overlay.addEventListener('click' ,closeModal);


document.addEventListener('keydown',function(e){
  console.log(e.key); //it will show in console what we press on keyboard.
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){

        closeModal();
    }
});
