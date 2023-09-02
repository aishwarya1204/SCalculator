let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ""
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string.replace(/×/g, '*').replace(/÷/g, '/'));
            input.value = addCommas(string);
            adjustFontSize();
        }

        else if(e.target.innerHTML == 'C'){
            string = ""
            input.value = string
            resetFontSize(); // Call the function to reset font size
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1);
            input.value = addCommas(string);
            adjustFontSize();
        }
        else if (e.target.innerHTML === '⌫') { // Added code for the "Delete" button
            string = string.slice(0, -1);
            input.value = addCommas(string);
            adjustFontSize();
        }
        else {
            if (e.target.innerHTML === '×' || e.target.innerHTML === '÷') {
                string += e.target.innerHTML;
            } else {
                string += e.target.innerHTML;
            }
            input.value = addCommas(string);
            adjustFontSize();
        }
    })
})

function adjustFontSize() {
    if (input.scrollWidth > input.clientWidth) {
        let currentSize = parseFloat(window.getComputedStyle(input, null).getPropertyValue('font-size'));
        let newSize = currentSize * 0.9; // Decrease font size by 10%
        input.style.fontSize = newSize + 'px';
    }
}

function resetFontSize() {
    input.style.fontSize = ''; // Reset font size to default
}

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}