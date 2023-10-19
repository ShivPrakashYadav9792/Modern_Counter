const countvalue = document.getElementById('ss');
function increment() {
   
    let value = parseInt(countvalue.innerText);
    value = value + 1;
    countvalue.innerHTML = value;
};
function decrement(){
    let value = parseInt(countvalue.innerText);
    value = value - 1;
    countvalue.innerHTML = value;
    
};