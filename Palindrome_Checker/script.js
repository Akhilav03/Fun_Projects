function checkPalindrome(){
    const val = document.getElementById('textInput').value;
    const cleanedVal = val.toLowerCase().replace(/[^a-z0-9]/g, '');
    const rev = cleanedVal.split('').reverse().join('');
    
    if (rev == cleanedVal){
        alert("Palindrome Found!");
    }
    else{
        alert("It's not a Palindrome");
    };
};

