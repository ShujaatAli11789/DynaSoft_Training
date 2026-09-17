const input = document.querySelector('#input')
const btn = document.querySelector("button")
const itemsContainer = document.querySelector("#items")
const form = document.querySelector("form")
const topMsg = document.getElementById('top')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputVal = input.value.trim()
    if(inputVal!= ''){
    const item = document.createElement('div')
    item.innerText = inputVal 
     item.classList.add("item")
     input.value = ''
     itemsContainer.appendChild(item)
    }else{
        topMsg.innerText = "The input cannot be empty"
        topMsg.classList.add("error")
        setTimeout(()=>{
            topMsg.innerText = "Hi, add a Name"
        topMsg.classList.remove("error")
        },2000)
    }

})
 