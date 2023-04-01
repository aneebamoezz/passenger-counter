
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countStr = count + " - "
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0; 
     // NB: Make sure to not delete the existing content of the paragraph
     console.log(count)
}

