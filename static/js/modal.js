// Modals

 var root = document.documentElement;
 var $modals = getAll('.modal');
 var $modalButtons = getAll('.modal-button');
 var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');


 if ($modalButtons.length > 0) {
   $modalButtons.forEach(function ($el) {
     $el.addEventListener('click', function () {
       var target = $el.dataset.target;
       openModal(target);
     });
   });
 }

 if ($modalCloses.length > 0) {
   $modalCloses.forEach(function ($el) {
     $el.addEventListener('click', function () {
       closeModals();
     });
   });
 }

 function openModal(target) {
   var $target = document.getElementById(target);
   root.classList.add('is-clipped');
   $target.classList.add('is-active');
 }

 function closeModals() {
   root.classList.remove('is-clipped');
   $modals.forEach(function ($el) {
     $el.classList.remove('is-active');
   });
 }
