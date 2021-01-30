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
    const totalTax = Math.round(subTotalPrice * 0.1);
    document.getElementById('tax-amount').innerText = totalTax;
    
    //Total Amount
    const totalAmount = subTotalPrice + totalTax;
    document.getElementById('total-amount').innerText = totalAmount;
    
    //Total Fare
    const ticketFare = totalAmount;
    document.getElementById('total-fare').innerText = ticketFare;
     
    //Total Ticket
    const totalTicket = firstClassQuantityNumber + economyQuantityNumber;
    document.getElementById('total-ticket').innerText = totalTicket;
}

function getQuantityValue(ticket){
    const ticketQuantity  = document.getElementById(ticket + '-quantity');
    const ticketQuantityNumber = parseInt(ticketQuantity.value);
    return ticketQuantityNumber;
}


// Connected Another Page
function submitInformation(){
    document.getElementById('booking-information').style.display = 'none';
    document.getElementById('ticket-information').style.display = 'block';
}
