var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectplanbuttons = document.querySelectorAll('.plan button');
var closemodel = document.querySelector('.modal__action--negative');
var toggel = document.querySelector(".toggle-button");
var side_menu = document.querySelector(".mobile-nav")


for(var i=0 ; i<selectplanbuttons.length; i++) {
    selectplanbuttons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}
if(closemodel){
closemodel.addEventListener('click', closeme)}
    
backdrop.addEventListener('click',function(){
    side_menu.classList.remove('open');
    closeme();
})


function closeme(){
    if(modal){
    modal.classList.remove('open');}
    backdrop.classList.remove('open');
}

toggel.addEventListener('click', function(){
    side_menu.classList.add('open');
    backdrop.classList.add('open');
  })