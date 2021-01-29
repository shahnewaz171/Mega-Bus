//Final Function
function handleTicketChange(ticket, isIncrease){
    const ticketQuantity = document.getElementById(ticket + '-quantity');
    const ticketQuantityNumber = parseInt(ticketQuantity.value);
    // const totalQuantity = ticketQuantityNumber - 1;
    let totalQuantity = ticketQuantityNumber;
    if(isIncrease == true){
        totalQuantity = ticketQuantityNumber + 1;
    }
    if(isIncrease ==  false && totalQuantity > 0){
        totalQuantity = ticketQuantityNumber - 1;
    }
    ticketQuantity.value = totalQuantity;
    // //For ticket price
    // const totalTicketPrice = totalQuantity * 150;
    // document.getElementById('sub-total').innerText = totalTicketPrice;
    totalCalculate();
}

function totalCalculate(){
    const firstClassInput = document.getElementById('firstClass-quantity');
    const firstClassInputNumber = parseInt(firstClassInput.value);

    const economyInputNumber = getInputValue('economy');

    const subTotalPrice = firstClassInputNumber * 150 + economyInputNumber * 100;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const total = subTotalPrice + tax;
    document.getElementById('total-amount').innerText = total;
}

function getInputValue(ticket){
    const ticketInput  = document.getElementById(ticket + '-quantity');
    const ticketInputNumber = parseInt(ticketInput.value);
    return ticketInputNumber;
}



// //Use function
// document.getElementById('firstClass-increase').addEventListener('click', function(){
//   ticketChange(true);
// });

// document.getElementById('firstClass-decrease').addEventListener('click', function(){
//     ticketChange(false);
// });


// function ticketChange(isIncrease){
//     const ticketQuantity = document.getElementById('firstClass-quantity');
//     const ticketQuantityNumber = parseInt(ticketQuantity.value);
//     // const totalQuantity = ticketQuantityNumber - 1;
//     let totalQuantity = ticketQuantityNumber;
//     if(isIncrease == true){
//         totalQuantity = ticketQuantityNumber + 1;
//     }
//     if(isIncrease ==  false && totalQuantity > 0){
//         totalQuantity = ticketQuantityNumber - 1;
//     }
//     ticketQuantity.value = totalQuantity;
//     //For ticket price
//     const totalTicketPrice = totalQuantity * 150;
//     document.getElementById('sub-total').innerText = totalTicketPrice;
// }






// //For Increase
// document.getElementById('firstClass-increase').addEventListener('click', function(){
//     const ticketQuantity = document.getElementById('firstClass-quantity');
//     const ticketQuantityNumber = parseInt(ticketQuantity.value);
//     const totalQuantity = ticketQuantityNumber + 1;
//     ticketQuantity.value = totalQuantity;
//     //For ticket price
//     const totalTicketPrice = totalQuantity * 150;
//     document.getElementById('sub-total').innerText = totalTicketPrice;
// });


// //For Decrease
// document.getElementById('firstClass-decrease').addEventListener('click', function(){
//     const ticketQuantity = document.getElementById('firstClass-quantity');
//     const ticketQuantityNumber = parseInt(ticketQuantity.value);
//     const totalQuantity = ticketQuantityNumber - 1;
//     ticketQuantity.value = totalQuantity;
//     //For ticket price
//     const totalTicketPrice = totalQuantity * 150;
//     document.getElementById('sub-total').innerText = totalTicketPrice;
// });

