import {validateForm} from './getValidateForm';

const validateFooterForm = () => {
  const formList = document.querySelectorAll(`.feedback-form`);

  for (const form of formList) {
    if (form) {
      const constraints = {
        name: {
          presence: true,
        },
        email: {
          presence: true,
        },
      };

      validateForm(form, constraints);
    }
  }
};

export {validateFooterForm};
