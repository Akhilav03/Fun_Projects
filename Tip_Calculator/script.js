function handleTipChange(){
    const val = document.getElementById('tip').value;
    if (val === 'custom'){
        document.getElementById('customTipContainer').style.display = 'block';
    }
    else{
        document.getElementById('customTipContainer').style.display = 'none';
    }
};

function calculateTip(){
    const bill = parseFloat(document.getElementById('billAmount').value);
    const split = parseInt(document.getElementById('split').value);
    let tip;
    if (document.getElementById('tip').value === 'custom'){
        tip = parseFloat(document.getElementById('customTip').value);
    }
    else{
        tip = parseFloat(document.getElementById('tip').value);
    }


    if (isNaN(bill) || isNaN(tip) || bill < 0 || tip < 0 || tip > 1) {
        alert('Please enter valid positive numbers for bill and tip.');
        return;
    }

    const tipAmount = bill * tip;
    const totalAmount = bill + tipAmount;
    const amountPerPerson = totalAmount/split;
    document.getElementById('tipAmount').innerText = `Tip Amount: ${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `Total Amount: ${totalAmount.toFixed(2)}`;
    document.getElementById('amountPerPerson').innerText = `Amount per person: ${amountPerPerson.toFixed(2)}`;
}