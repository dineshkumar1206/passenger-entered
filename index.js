
let saveEl = document.getElementById("save-el");
let countON = document.getElementById("count-on");
let count = 0

function increment(){
       count += 1
       countON.textContent = count;
       
}

function save(){
    let countSong = count + " - ";
    saveEl.textContent += countSong;
    countON.textContent = 0;
    count = 0;
    
}






