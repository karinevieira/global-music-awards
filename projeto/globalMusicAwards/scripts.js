let button = document.querySelectorAll('button')

for (let btn of button){
    btn.addEventListener('click', function voted(){
        btn.innerHTML = 'Voted'
        btn.style.backgroundColor = 'green'
    })
}





