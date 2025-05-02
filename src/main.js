const input = document.getElementById('input')
const errorMsg = document.getElementById('error-msg')
const errorIcon = document.getElementById('error-icon')
const submit = document.getElementById('submit')

let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

submit.addEventListener('click' , () => {
    !emailFormat.test(input.value) ? displayType("block") : displayType("none");
})

const displayType = (type) => {
    errorMsg.style.display = `${type}`
    errorIcon.style.display = `${type}`
};