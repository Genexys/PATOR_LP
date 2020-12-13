const inputValue = () => {

  const form = document.querySelectorAll('.feedback-form');

  for (const formElement of form) {
    const inputList = formElement.querySelectorAll('input');

    inputList.forEach(function (el) {

      el.addEventListener("focus", function () {

        this.parentElement.classList.add("input-wrapper--focus");
      });

      el.addEventListener("blur", function () {
        if (el.value !== "") {
          el.parentElement.classList.add("input-wrapper--focus");
        } else {
          el.parentElement.classList.remove("input-wrapper--focus");
        }
      });
    });
  }
};

export {inputValue};
