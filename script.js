let string = "";

const targetDiv = document.getElementById("extra");
const btn = document.getElementById("toggle");

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'BSp'){
            string = Math.floor(string/10)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string/100;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'sin'){
            string = Math.sin(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'cos'){
            string = Math.cos(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'tan'){
            string = Math.tan(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'log'){
            string = Math.log(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'ln'){
            string = Math.log10(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'pi'){
            string = 3.1415926535897;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'e'){
            string = 2.7182818284590;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'root'){
            string = Math.pow(string,0.5);
            document.querySelector('input').value = string;
        }        
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
    } else {
      targetDiv.style.display = "block";
    }
};