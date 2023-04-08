const popupButtons = document.querySelectorAll(".popup-button");
const popups = document.querySelectorAll(".popup");
const closeButton = document.querySelectorAll(".close-button");

popupButtons.forEach((popupButton) => {
  popupButton.addEventListener("click", () => {
    const popupId = popupButton.getAttribute("data-popup-id");
    const popup = document.getElementById(popupId);
    popup.classList.add("show");
  });
});

closeButton.forEach((close) => {
  close.addEventListener("click", () => {
    popups.forEach((popup) => {
      popup.classList.remove("show");
    });
  });
});
