const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navlink = document.getElementsByClassName('nav-link')[0]

toggleButton.addEventListener('click',()=>{
    navlink.classList.toggle('active')
})