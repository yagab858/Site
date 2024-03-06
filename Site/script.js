const firstModal = document.getElementById('first-modal');
const secondModal = document.getElementById('second-modal');
const closeButtons = document.querySelectorAll('.close');
const imageTiles = document.querySelectorAll('.image');
let isFirstModalClosed = false;

window.onload = function() {
  firstModal.style.display = 'block';
}

imageTiles.forEach((imageTile, index) => {
  imageTile.addEventListener('click', function() {
    if (!isFirstModalClosed) {
      return;
    }
    let message = imageTile.getAttribute('data-message');
    document.querySelector('.modal-content .message').textContent = message;
    secondModal.style.zIndex = '9999';
    secondModal.style.display = 'block';
  });
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', function() {
    const modalId = this.parentNode.parentNode.getAttribute('id');
    if (modalId === 'first-modal') {
      isFirstModalClosed = true;
    }
    this.parentNode.parentNode.style.display = 'none';
  });
});
