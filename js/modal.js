var link = document.querySelector(".hotel-search");
var form = document.querySelector(".modal-search-form");

form.classList.toggle("modal-hide");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-hide");
  form.classList.add("roll");
})
