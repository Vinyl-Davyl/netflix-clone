const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
// Add border to current tab
    this.classList.add('tab-border');
// Grab content item from DOM
const tabContentItem = document.querySelector(`#${this.id}-content`);
// Add show class
tabContentItem.classList.add(`show`);
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
 
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));




//Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}