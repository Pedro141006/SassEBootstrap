/*
 * classes: titleCard || resultCard
 */
let $titleCard = document.querySelector('.titleCard')
let $resultCard = document.querySelector('.resultCard')
let $btnBack = document.querySelector('.back')
let numbersOfHits = 0
let $btnverify1 = document.querySelector('.verify1')
let $questionBox1 = document.querySelector('.box1')
let $btnverify2 = document.querySelector('.verify2')
let $questionBox2 = document.querySelector('.box2')
let $btnverify3 = document.querySelector('.verify3')
let $questionBox3 = document.querySelector('.box3')
const toastLiveExample = document.getElementById('liveToast')
//esse erro não interfere em nada
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
$btnverify1.addEventListener('click', () => {
  let inputElement = $questionBox1.querySelectorAll('.form-check-input')
  let toastText = document.querySelector('.toast-body')
  inputElement.forEach(inputElement => {
    if (inputElement.checked && inputElement.value !== 'correct') {
      inputElement.parentElement.classList.add('wrong')
      toastText.innerHTML = "You're Wrong!"
      setTimeout(() => {
        window.location.href = '#2'
      }, 1000)
    } else if (inputElement.checked && inputElement.value === 'correct') {
      inputElement.parentElement.classList.add('correct')
      toastText.innerHTML = "You're Right, Nice!"
      setTimeout(() => {
        window.location.href = '#2'
      }, 1000)
      numbersOfHits += 1
    }
  })
  console.log(numbersOfHits)
  toastBootstrap.show()
})
$btnverify2.addEventListener('click', () => {
  let inputElement = $questionBox2.querySelectorAll('.form-check-input')
  let toastText = document.querySelector('.toast-body')
  inputElement.forEach(inputElement => {
    if (inputElement.checked && inputElement.value !== 'correct') {
      inputElement.parentElement.classList.add('wrong')
      toastText.innerHTML = "You're Wrong!"
      setTimeout(() => {
        window.location.href = '#3'
      }, 1000)
    } else if (inputElement.checked && inputElement.value === 'correct') {
      inputElement.parentElement.classList.add('correct')
      toastText.innerHTML = "You're Right, Nice!"
      setTimeout(() => {
        window.location.href = '#3'
      }, 1000)
      numbersOfHits += 1
    }
  })
  console.log(numbersOfHits)
  toastBootstrap.show()
})
$btnverify3.addEventListener('click', () => {
  let inputElement = $questionBox3.querySelectorAll('.form-check-input')
  let toastText = document.querySelector('.toast-body')
  inputElement.forEach(inputElement => {
    if (inputElement.checked && inputElement.value !== 'correct') {
      inputElement.parentElement.classList.add('wrong')
      toastText.innerHTML = "You're Wrong!"
      setTimeout(() => {
        window.location.href = '#end'
      }, 1000)
    } else if (inputElement.checked && inputElement.value === 'correct') {
      inputElement.parentElement.classList.add('correct')
      toastText.innerHTML = "You're Right, Nice!"
      setTimeout(() => {
        window.location.href = '#end'
      }, 1000)
      numbersOfHits += 1
    }
  })
  toastBootstrap.show()
  switch (numbersOfHits) {
    case 0:
      $titleCard.innerHTML = 'damm!... Good Luck in the next:'
      break
    case 1:
      $titleCard.innerHTML = 'Well done!:'
      break
    case 2:
      $titleCard.innerHTML = 'Congratulations!:'
      break
    case 3:
      $titleCard.innerHTML = "WOW! You're very Smart:"
      break
  }
  $resultCard.innerHTML = `${numbersOfHits}/3`
})
$btnBack.addEventListener('click', () => {
  window.location.href = '#'
  window.location.reload()
})
