// dom is provided by window object which is then provided by the browser to interact with web page

// single selector

// document.getElementById()
// document.querySelector()

// // multiple selector 

// document.querySelectorAll()

// each of the above method allow to select a specific html element and add logic t oit 
// we with DOM we can add, remove, and even style elements 

// const HTMLElement = document.querySelector("h2")
// HTMLElement.style.background = 'red'

// event listerners
const btn  = document.querySelector('button')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    alert("button clicked")
    console.log(e.target)

})

//  we are given a event object, when pssed as a parameter into the event listerners's function's parameter
