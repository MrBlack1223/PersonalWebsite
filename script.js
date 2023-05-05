//alert('JD')
const body = document.querySelector('body')
const homepage = document.querySelector('.homepage')
const projects = document.querySelector(".projectsPage")
const arrowDown1 = document.querySelector(".arrowDownHomepage")
const arrowDown2 = document.querySelector(".arrowDownProjects")
const arrowUp1 = document.querySelector(".arrowUpProjects")
const arrowUp2 = document.querySelector('.arrowUpContactMe')
const contactMe = document.querySelector('.contactMePage')
console.log(arrowDown1)
const createIconElement = (iconType)=>{
    const div = document.createElement('div')
    div.classList.add(iconType)

    const randomizer = Math.round(Math.random())
    div.style.left = randomizer === 1 ? `${  Math.round(Math.random() *8)}%` : `${ 92+ Math.round(Math.random() * 8)}%`
	div.style.animationDuration = Math.random() * 3 + 5 + 's'
	div.style.opacity = Math.random()
    div.style.transform = `rotate(${Math.round(Math.random() * 720) - 360}deg)`

    const size = `${Math.round(Math.random() * 26) + 20}px`
    div.style.width = size
    div.style.height = size

    body.appendChild(div)

    setTimeout(() => {
		div.remove()
	}, 8000)
}

arrowDown1.addEventListener('click',()=>{
    projects.scrollIntoView({behavior: "smooth"});
    document.querySelector('.chess').classList.add('slideRightAnimationMedium')
    document.querySelector('.randomBlogs').classList.add('slideLeftAnimationMedium')
    document.querySelector('.randomVideos').classList.add('slideUpAnimationMedium')
})
arrowDown2.addEventListener('click',()=>{
    contactMe.scrollIntoView({behavior: "smooth"});
    document.querySelector('.chess').classList.remove('slideRightAnimationMedium')
    document.querySelector('.randomBlogs').classList.remove('slideLeftAnimationMedium')
    document.querySelector('.randomVideos').classList.remove('slideUpAnimationMedium')
})
arrowUp1.addEventListener('click',()=>{
    homepage.scrollIntoView({behavior:"smooth"})
    document.querySelector('.chess').classList.remove('slideRightAnimationMedium')
    document.querySelector('.randomBlogs').classList.remove('slideLeftAnimationMedium')
    document.querySelector('.randomVideos').classList.remove('slideUpAnimationMedium')
})
arrowUp2.addEventListener('click',()=>{
    projects.scrollIntoView({behavior: "smooth"});
    document.querySelector('.chess').classList.add('slideRightAnimationMedium')
    document.querySelector('.randomBlogs').classList.add('slideLeftAnimationMedium')
    document.querySelector('.randomVideos').classList.add('slideUpAnimationMedium')
})
setInterval(()=>{

    const element = Math.round(Math.random() * 5)
    const possibleIcons = ['reactIcon','cssIcon','jsIcon','htmlIcon','expressIcon']

    createIconElement(possibleIcons[element])


}, 200)

