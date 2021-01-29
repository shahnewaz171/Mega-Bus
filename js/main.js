//Ticket Increase and Decrease Count with Validation
function handleTicketChange(ticket, isIncrease){
    const ticketQuantityNumber = getQuantityValue(ticket);

    let totalQuantity = ticketQuantityNumber;
    if(isIncrease == true){
        totalQuantity = ticketQuantityNumber + 1;
    }
    if(isIncrease ==  false && totalQuantity > 0){
        totalQuantity = ticketQuantityNumber - 1;
    }
    document.getElementById(ticket + '-quantity').value = totalQuantity;
    totalCalculate();
}


//The total amount has been calculated
function totalCalculate(){
    const firstClassQuantityNumber = getQuantityValue('firstClass');
    const economyQuantityNumber = getQuantityValue('economy');

    const subTotalPrice = firstClassQuantityNumber * 150 + economyQuantityNumber * 100;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const total = subTotalPrice + tax;
    document.getElementById('total-amount').innerText = total;
}

function getQuantityValue(ticket){
    const ticketQuantity  = document.getElementById(ticket + '-quantity');
    const ticketQuantityNumber = parseInt(ticketQuantity.value);
    return ticketQuantityNumber;
}
