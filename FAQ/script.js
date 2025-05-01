const lists = [
    {"question": "Abc", "answer": "mnpsdfghjklm npsdfghjklmnpsdfghjk lmnpsdf ghjklmnpsdf ghjklmn psdfgh jklm npsdf ghjk lm npsd fghjk lvmnp sdf gh jkl m nps dfghjklmn ps dfgh jkl mnp sdfg hjkl mnpsd fgh jklmnp sdfgh jklm npsdfg hjkl"},
    {"question": "Abc", "answer": "mnp"},
    {"question": "Abc", "answer": "mnp"},
    {"question": "Abc", "answer": "mnp"},
    {"question": "Abc", "answer": "mnp"},
];

let allAnswers = []
lists.forEach(item => {
    const container = document.querySelector('.faq-container');

    //question div tag
    const question = document.createElement('div');
    question.innerText = item.question;
    question.classList.add('question');

    //buttons
    const btn1 = document.createElement('span');
    btn1.innerHTML = '<i class="fas fa-plus"></i>';
    btn1.classList.add('btn1');
    const btn2 = document.createElement('span');
    btn2.innerHTML = '<i class="fas fa-minus"></i>';
    btn2.classList.add('btn2');

    //answer div tag
    const answer = document.createElement('div');
    answer.innerText = item.answer;
    answer.classList.add('answer')

    //appending all
    question.append(btn1, btn2)
    question.appendChild(answer);
    container.appendChild(question);

    //Event Handlers
    allAnswers.push(answer)
    btn1.addEventListener('click', function(){
        allAnswers.forEach(ans => {
            if (ans !== answer && ans.classList.contains('show')){
                ans.classList.remove('show');
                ans.parentElement.classList.remove('show');
            };
        });
        answer.classList.add('show');
        question.classList.add('show');        
    });
    btn2.addEventListener('click', function(){
        answer.classList.remove('show');
        question.classList.remove('show');
    });


    // question.addEventListener('click', function(e) {
    //     allAnswers.forEach(ans => {
    //         if (ans !== answer && ans.classList.contains('show')){
    //             ans.classList.remove('show');
    //         };
    //     });
    //     if (e.target === e.currentTarget){
    //     answer.classList.toggle('show');
    //     };
    // });
});

//dark/light mode
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } 
  else {
    toggleBtn.textContent = '🌙 Dark Mode';
  };
});
