const privacyPolicy = () => {

  const forms = document.querySelectorAll(`.feedback-form`);
  const popup = document.querySelector(`.checkbox-popup`);
  const acceptBtn = document.getElementById(`accept-btn`);
  const declineBtn = document.getElementById(`decline-btn`);

  for (const form of forms) {
    const checkbox = form.querySelector(`input[type=checkbox]`);
    const btn = form.querySelector(`.privacy-policy-link`);

    btn.addEventListener(`click`, () => {
      popup.style.display = `block`;
    });

    acceptBtn.addEventListener(`click`, () => {
      checkbox.checked = true;
      checkbox.parentElement.classList.remove(`input-wrapper--error`)
      popup.style.display = `none`;
    });

    declineBtn.addEventListener(`click`, () => {
      checkbox.checked = false;
      popup.style.display = `none`;
    });

  }
};

export {privacyPolicy};
