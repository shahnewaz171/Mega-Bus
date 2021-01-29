//For Increase
document.getElementById('firstClass-increase').addEventListener('click', function(){
    const ticketQuantity = document.getElementById('firstClass-quantity');
    const ticketQuantityNumber = parseInt(ticketQuantity.value);
    const totalQuantity = ticketQuantityNumber + 1;
    ticketQuantity.value = totalQuantity;
    //For ticket price
    const totalTicketPrice = totalQuantity * 150;
    document.getElementById('sub-total').innerText = totalTicketPrice;
});
