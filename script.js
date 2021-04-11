const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 15500 
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
  text.innerHTML = 'Breathe In!'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold'

    setTimeout(() => {
      text.innerText = 'Breathe Out!'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}

setInterval(breatheAnimation, totalTime) 

// # notes: possible add-on features
// 1. setbutton for time-length of breathe cycle, maybe a toggle
// 2. scale -> for how big you want circle to get 
// 3. being able to customize background but maybe too myspace-y
// 4. add music for spotify
