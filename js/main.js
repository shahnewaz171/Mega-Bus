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

    //Sub-total Price
    const subTotalPrice = firstClassQuantityNumber * 150 + economyQuantityNumber * 100;
    document.getElementById('sub-total').innerText = subTotalPrice;

    //Total Tax
    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    
    //Total Amount
    const total = subTotalPrice + tax;
    document.getElementById('total-amount').innerText = total;
    
    //Total Fare
    const ticketFare = total;
    document.getElementById('total-fare').innerText = ticketFare;
     
    //Total Ticket
    const totalQuantity = firstClassQuantityNumber + economyQuantityNumber;
    document.getElementById('total-quantity').innerText = totalQuantity;
}

function getQuantityValue(ticket){
    const ticketQuantity  = document.getElementById(ticket + '-quantity');
    const ticketQuantityNumber = parseInt(ticketQuantity.value);
    return ticketQuantityNumber;
}


// Connected Another Page
function submitInfo(){
    document.getElementById('booking-info').style.display = 'none';
    document.getElementById('ticket-info').style.display = 'block';
}
