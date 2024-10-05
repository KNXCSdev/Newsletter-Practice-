const subscribeBtn = document.querySelectorAll(".btn");
const emailInput = document.querySelector("#email");
const emailSpan = document.querySelector(".email-owner");

const confirmation = document.querySelector(".confirmation");
const container = document.querySelector(".container");

const invalidLabel = document.querySelector(".cta-label-invalid");

subscribeBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailInput.value && emailInput.value.includes("@") && emailInput.value.includes(".")) {
      const ownEmail = emailInput.value;
      emailSpan.textContent = ownEmail;

      confirmation.classList.toggle("hidden");
      container.classList.toggle("hidden");
    } else {
      emailInput.style.backgroundColor = "var(--Tomatoop)";
      emailInput.style.outline = "1px solid var(--Tomato)";
      emailInput.style.color = "var(--Tomato)";
      invalidLabel.style.opacity = 100;
    }
  });
});
