let inputValue = document.getElementById("cal-display")
console.log(inputValue.value);

const display = (num) =>{
    inputValue.value += num

}

const calculate = () =>{
    try{
        inputValue.value = eval(inputValue.value)

    }catch(err){
        alert("please Give Valied Input")
        inputValue.value = "";
    }

}
const clears = () => {
    inputValue.value = ""
}

const del=()=>{
    inputValue.value=inputValue.value.slice(0,-1)
}


let Input=document.querySelector("input");
Input.addEventListener("keypress",enter)
     
function enter(){
    Input.value=eval(inputValue.value)
}

