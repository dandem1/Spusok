// let elem = document.querySelector("#blink");
// console.log(elem.hidden);

// setInterval(blink, 1000);


// function blink(){
//     elem.hidden = !elem.hidden;
// }

let count = 1;

function change(){
let input = document.getElementById("text");
let text = document.getElementById("mainText");
text.innerText += count + ". " + input.value + "\n";
count++;
input.value = "";

}

function clearList(){
    mainText.innerText = "";
    count = 1;
}

