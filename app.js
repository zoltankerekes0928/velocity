const images = [
  {id:1, 
   img :'./assets/tabs1.jpg',
   title:'Some dynamic title for tab one',
   desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, sapien id feugiat fermentum, ex ex semper erat, non varius neque elit quis elit. Curabitur. '
  },
  {id:2, 
   img :'./assets/tabs2.jpg',
   title:'Some dynamic title for tab two',
   desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque urna orci, volutpat at ligula sed, placerat fringilla justo. Vestibulum ut sem felis. Pellentesque scelerisque faucibus. '
  },
  {id:3, 
   img :'./assets/tabs3.jpg',
   title:'Some dynamic title for tab three',
   desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie tincidunt tempor. Duis vel sagittis massa. Nam in porta erat. Proin dui nisi, posuere a. '
  }

]


const image = document.getElementById('image')
const tabTitle = document.querySelector('.tab-title')
const tabDescrition = document.querySelector('.tab-description')
const buttons = document.querySelectorAll('button')
const btnDefault = document.getElementById(0)
const burgerBtn = document.getElementById('burgeBtn')
const navBar = document.querySelector('.navbar')
const navContainer = document.querySelector('.nav-container')
let currentTarget = 0
let button = 0
let num = 0


window.addEventListener('DOMContentLoaded', ()=>{
  show(num)
  btnDefault.classList.add('focus')
  burgerBtn.addEventListener('click', showMenu)
  

})

function showMenu(){
  
  navBar.classList.toggle('show-menu')

}


function show(num){
  image.src = images[num].img
  tabTitle.innerText = images[num].title
  tabDescrition.innerText = images[num].desc
}



  buttons.forEach(btn=>btn.addEventListener('click', (e)=>{
    
    buttons.forEach(btns=>btns.classList.remove('focus'))

  button = e.target
  let target = e.target.id
  currentTarget = target
  
  if(target == 0 || target == 1 || target == 2){
  show(target)
  button.classList.add('focus')
  }
  
}))




 


