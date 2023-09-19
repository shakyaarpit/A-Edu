barger = document.querySelector('.barger')
navbar = document.querySelector('.navbar')
navright = document.querySelector('.nav-right')
navList = document.querySelector('.nav-list')

barger.addEventListener('click', ()=>{
navright.classList.toggle('v-class');
navList.classList.toggle('v-class');
navbar.classList.toggle('h-nav');
})