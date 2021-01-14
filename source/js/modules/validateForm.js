import {validateForm} from './getValidateForm';

const validateFooterForm = () => {
  const formList = document.querySelectorAll(`.feedback-form`);

  for (const form of formList) {
    if (form) {
      const constraints = {
        phone: {
          presence: true,
        },
        email: {
          presence: true,
          format: {
            pattern: /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/
          }
        },
        checkbox: {
          presence: {
          },
          inclusion: {
            within: [true],
          }
        }
      };

      validateForm(form, constraints);
    }
  }
};

export {validateFooterForm};
