// Create Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

// Openbtn function
function openBtnClick () {
     modalContainer.style.display = "block";
}

openBtn.addEventListener("click", openBtnClick);


// Closebtn function
function closeBtnClick () {
    modalContainer.style.display = "none";

}

closeBtn.addEventListener("click", closeBtnClick);

// Window object

function windowClick (e) {
      if(e.target === modalContainer) {
        modalContainer.style.display = "none";
      }
}

window.addEventListener("click", windowClick);