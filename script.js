document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("customModal");
    var closeButton = document.querySelector(".close-btn");
    var cancelBtn = document.getElementById("cancelBtn");
    var closeModal = document.getElementById("closeModal");

    // Hiển thị modal khi mở trang
    modal.style.display = "flex";

    // Đóng modal khi nhấn vào nút "X", "Hủy", hoặc "Đóng"
    function closeModalFunc() {
      modal.style.display = "none";
    }

    closeButton.addEventListener("click", closeModalFunc);
    cancelBtn.addEventListener("click", closeModalFunc);
    closeModal.addEventListener("click", closeModalFunc);

    // Đóng modal khi click ra ngoài
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModalFunc();
      }
    });
  });


  const audio = document.getElementById('bg-music');
  const button = document.getElementById('toggle-audio');

  button.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      button.textContent = '🔊';
    } else {
      audio.pause();
      button.textContent = '🔇';
    }
  });