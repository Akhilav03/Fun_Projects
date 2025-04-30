const items_string = localStorage.getItem('tasks');
const items = items_string ? JSON.parse(items_string) : [];
if (items){
    for (const item of items){
        addfn(item);
    };
};

function addfn(val = null){
    if (!val){
        val = document.getElementById('new-task').value;
        if (!val) return;
        items.push(val);
    };
    const lst = document.createElement('li');
    lst.innerText = val;
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-trash"></i>';
    btn.setAttribute('class', 'delete-task') 
    btn.addEventListener('click', function (){
        lst.remove();
        //remove val item from items when delete button is clicked
        const i = items.indexOf(val);
        items.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(items));
    });
    lst.appendChild(btn);
    // or use lst.append(val, btn) instaed of adding .innerText in lst
    document.getElementById('task-list').append(lst);
    document.getElementById('new-task').value = ''; 
    localStorage.setItem('tasks', JSON.stringify(items));
};

localStorage.setItem('tasks', JSON.stringify(items));
