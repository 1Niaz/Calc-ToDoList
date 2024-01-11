const Button = document.querySelector('.btn input')
let Field = document.querySelector('.field input')

// Как сделал ChatGPT
let delTag = '<span class="del" onclick="Delete(this)">Удалить</span>'

let Del = document.querySelector('.delete')
let List = document.querySelector('.list ul')
let ListItem = document.querySelector('.list ul li')

Button.addEventListener('click', ()=>{
    let li = document.createElement('li')

    // Как пытался сделать я
    // let delTag = document.createElement('span')
    // delTag.textContent = 'Удалить'
    // delTag.classList.add('del')
    // li.appendChild(delTag)
    
    if(Field.value != ''){
        li.innerHTML = Field.value + delTag
        List.appendChild(li)
        Field.value=''
    } else{
        alert('Пустая строка')
    }
    li.addEventListener('click', () => {
        li.classList.toggle('active')
    })
})

function Delete(span){
    let li = span.parentElement
    li.style.display = 'none'
}















