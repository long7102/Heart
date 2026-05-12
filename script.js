document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("customModal");
    var closeButton = document.querySelector(".close-btn");
    var cancelBtn = document.getElementById("cancelBtn");
    var closeModal = document.getElementById("closeModal");

    modal.style.display = "flex";

    function closeModalFunc() {
        if (modal) modal.style.display = "none";
    }

    // Dùng kỹ thuật kiểm tra tồn tại (Optional Chaining hoặc If) để không bị crash code
    if (closeButton) closeButton.addEventListener("click", closeModalFunc);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModalFunc);
    if (closeModal) closeModal.addEventListener("click", closeModalFunc);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });
});