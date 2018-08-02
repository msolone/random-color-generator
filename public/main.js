// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const colorNumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const colorCodeArray = []

const randomColor = () => {
  console.log('this works')
  for (i = 0; i < 6; i++) {
    const randomIndex = colorNumbers[Math.floor(Math.random() *15)]
    colorCodeArray.push(randomIndex)
    colorCode = colorCodeArray.join('')

  }
}

document.querySelector('.change-color-button').addEventListener('click', randomColor)