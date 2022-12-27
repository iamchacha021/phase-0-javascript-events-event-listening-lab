function addingEventListener() {
    let input=document.querySelector('#input')
    input.addEventListener('click', clickFn)
    function clickFn(){
        alert('i have been clicked')
    }
}
addingEventListener()