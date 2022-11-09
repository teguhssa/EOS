// navbar
$(document).ready(() => {
    $(document).scroll(() => {
        $(".navbar").toggleClass("nav-scroll", $(this).scrollTop() > $(".navbar").height())
    })
})

// date time
const getDatePickerTitle = elem => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
        titleText = label.textContent;
    } else {
        titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
}

const elems = document.querySelectorAll('.datepicker_input');
for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
        'format': 'dd/mm/yyyy', // UK format
        title: getDatePickerTitle(elem)
    });
}

// profile picture
let coverPreview = document.getElementById('coverPreview');
let cover = document.getElementById('cover');
let btn = document.getElementById("btn-hapus")
btn.disabled= true

// cover.addEventListener("click", (e) => {
//     btn.disabled =!btn.disabled
// })

coverPreview.addEventListener('click',_=>cover.click());

cover.addEventListener("change",_=>{
    let file = cover.files[0];
    btn.disabled =!btn.disabled
    let reader = new FileReader();
    reader.onload = function (){
        coverPreview.src = reader.result;
    }
    reader.readAsDataURL(file);
});

// list addres
var address = document.querySelector('.name-address');
var card = document.querySelector('#card');
let newSpan = document.createElement("span")
let btnUbah = document.querySelector("#ubah")

newSpan.innerText = "Dipilih"
newSpan.classList.add("text-primary")


btnUbah.addEventListener("click", () => {
	card.classList.add("card-bg")
    address.appendChild(newSpan)
})

// dropdown pembelian
function myFunction() {
    document.querySelector(".dropdown-menu-dot").classList.toggle("show")
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementsByClassName("dropdown-menu-dot");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }