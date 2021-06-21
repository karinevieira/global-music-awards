let button = document.querySelectorAll('button')
for(let i=0; i<=5; i++){
    button.addEventListener('click', () => {
        button.innerHTML = 'Voted'
        button.style.backgroundColor = 'green'
    })
}




