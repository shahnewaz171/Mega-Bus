//Final Function
function ticketChange(isIncrease){
    const ticketQuantity = document.getElementById('firstClass-quantity');
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
    //For ticket price
    const totalTicketPrice = totalQuantity * 150;
    document.getElementById('sub-total').innerText = totalTicketPrice;
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

