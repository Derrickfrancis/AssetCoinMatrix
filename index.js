

let dropdownBtn = document.getElementById('dropdownBtn');
let dropdownContent = document.getElementById('content');

dropdownBtn.onclick = function(){
    if(dropdownContent.style.display === 'none'){
        dropdownContent.style.display = 'block'
       dropdownBtn.style.color = ' hsl(0, 44.30%, 40%)'
    //    dropdownBtn.textContent =  '\u2304' 

    }
    else{
        dropdownContent.style.display = 'none'
        dropdownBtn.style.color = 'hsla(34, 78%, 91%, 0.83)'
        // dropdownBtn.textContent = '\u203a';
        
    }
}
