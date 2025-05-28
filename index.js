
const buttons = document.querySelectorAll('.dropdownBtn');

buttons.forEach(button => {
    button.onclick = () => {
        const parent = button.closest('.dropdownText');
        const content = parent.querySelector('.dropdownContent');
        content.style.display = content.style.display === 'none'? 'block' : 'none'
    
        
        const isVisible = getComputedStyle(content).display !== 'none'

        if(isVisible){
            content.classList.add('hidden');
            button.textContent = '\u25BC'
            button.style.color = 'red';
          
        }
        else{
            content.classList.remove('hidden');
            button.textContent = '\u25B6';
            button.style.color = 'white'
           
        }
        
    }
})



