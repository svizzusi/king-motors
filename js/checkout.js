let checkOutForm = document.querySelector('.checkout-form')
let submitButton= document.getElementById('button-submit')
let submitContainer = document.querySelector('.submit-pop-up-container')
let closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', () => {
    submitContainer.style.display = "none";
    localStorage.removeItem('selectedCarImage')
    localStorage.removeItem('selectedCarName')
    localStorage.removeItem('selectedCarPrice')
    location.reload()
})

checkOutForm.addEventListener('submit',(event) => {
    event.preventDefault();
    // netlify website form handler
    submitContainer.style.display = "flex";
    checkOutForm.reset();
})

// (function() {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init('If7t9Q2qS_tvKYRZR');
//     alert('message')
// })();

// window.onload = function() {
//     checkOutForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = Math.random() * 100000 | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm('service_iznybsu', 'template_vajrc3o', this)
//             .then(function() {
//                 submitContainer.style.display = "flex";
//                 checkOutForm.reset();
//             }, function(error) {
//                 alert('FAILED...', error);
//             });
//     });
// }