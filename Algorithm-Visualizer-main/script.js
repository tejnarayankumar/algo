function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}


function disableSizeSlider(){
    document.querySelector("#size").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#size").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector("#newarray").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector("#newarray").disabled = false;
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

var size=document.querySelector('#size');
size.addEventListener('input',function(){
  createNewArray(parseInt(size.value));
});

var delay=260;
var speed=document.querySelector('#speed');
speed.addEventListener('input',function(){
  delay=320-parseInt(speed.value);
});

let arr=[];

createNewArray();
function createNewArray(noOfBars = 60) {
  deleteChild();
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    const bars = document.querySelector("#bars");
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}



function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector("#newarray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(size.value);
});
