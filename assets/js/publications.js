$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     // Toggle the abstract block
//     document.querySelectorAll('a.abstract').forEach(function (el) {
//         el.addEventListener('click', function (e) {
//             e.preventDefault();
//             var container = el.closest('.col-sm-8') || el.parentElement.parentElement;
//             var hidden = container && container.querySelector('.abstract.hidden');
//             if (hidden) hidden.classList.toggle('open');
//         });
//     });

//     // Toggle the bibtex block
//     document.querySelectorAll('a.bibtex').forEach(function (el) {
//         el.addEventListener('click', function (e) {
//             e.preventDefault();
//             var container = el.closest('.col-sm-8') || el.parentElement.parentElement;
//             var hidden = container && container.querySelector('.bibtex.hidden');
//             if (hidden) hidden.classList.toggle('open');
//         });
//     });
// });
