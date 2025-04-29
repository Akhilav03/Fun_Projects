const buttons = document.querySelectorAll('button');
for (const button of buttons) {
  button.addEventListener('click', myFunction);
}
function myFunction(){
    const buttonText = this.innerText;
    switch (buttonText) {
        case 'Green':
            document.body.style.backgroundColor = 'green';
            break;
        case 'Red':
            document.body.style.backgroundColor = 'red';
            break;
        case 'Blue':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'Yellow':
            document.body.style.backgroundColor = 'yellow';
            break;
        case 'Random':
            document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            break;
    }
  
}