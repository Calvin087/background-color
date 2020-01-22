const button = document.querySelector('button')
const body = document.querySelector('body')
const images = [
    "url('https://wallpapercave.com/wp/wp4694696.png')",
    "url('https://wallpapercave.com/wp/wp4887720.jpg')",
    "url('https://wallpapercave.com/wp/wp4437267.png')",
    "url('https://wallpapercave.com/wp/wp4410476.jpg')",
    "url('https://wallpapercave.com/wp/wp5190042.jpg')",
]

// console.log(colors.length)

body.style.backgroundImage = "url('https://wallpaperaccess.com/full/87215.jpg')"
button.addEventListener('click', changeBackground)

function changeBackground () {
    const index = parseInt(Math.random() * images.length + 1)
    body.style.backgroundImage = images[index]
}


