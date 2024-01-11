const answer = document.querySelector('.answer')
const firstNum = document.querySelector('.field1 input')
const secondNum = document.querySelector('.field2 input')

// Знаки
const plus = document.querySelector('.button1 input')
const minus = document.querySelector('.button2 input')
const umn = document.querySelector('.button3 input')
const del = document.querySelector('.button4 input')



plus.addEventListener('click', () => {
    const sum = (+firstNum.value) + (+secondNum.value)
    answer.textContent = sum
})
minus.addEventListener('click', () => {
    const sum = (+firstNum.value) - (+secondNum.value)
    answer.textContent = sum
})
umn.addEventListener('click', () => {
    const sum = (+firstNum.value) * (+secondNum.value)
    answer.textContent = sum
})
del.addEventListener('click', () => {
    const sum = (+firstNum.value) / (+secondNum.value)
    answer.textContent = sum
    if(+secondNum.value === 0){
        answer.textContent = 'Ошибка'
    }
})

















