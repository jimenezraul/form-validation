const regex = {
  validEmailRegex: RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  ),
  validNameRegex: RegExp(/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/),
  validPasswordRegex: RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
  ),
};

const validateForm = (formState, setFormState, isLogin) => {
  let isValid = true;
  const error = {};

  if (isLogin) {
    if (!formState.email || !formState.password) {
      (error.email = !formState.email ? 'Email is required' : ''),
        (error.password = !formState.password ? 'Password is required' : ''),
        (isValid = false);
    }
    if (
      !regex.validEmailRegex.test(formState.email) ||
      !regex.validPasswordRegex.test(formState.password)
    ) {
      error.email =
        !regex.validEmailRegex.test(formState.email) && 'Email is invalid';
      error.password =
        !regex.validPasswordRegex.test(formState.password) &&
        'Password is invalid (min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)';
      isValid = false;
    }
  } else {
    if (
      !formState.given_name ||
      !formState.family_name ||
      !formState.email ||
      !formState.password ||
      !formState.confirm_password
    ) {
      error.given_name = !formState.given_name && 'First name is required';
      error.family_name = !formState.family_name && 'Last name is required';
      error.email = !formState.email && 'Email is required';
      error.password = !formState.password && 'Password is required';
      error.confirm_password =
        !formState.confirm_password && 'Confirm password is required';
      isValid = false;
    } else if (
      !regex.validNameRegex.test(formState.given_name) ||
      !regex.validNameRegex.test(formState.family_name) ||
      !regex.validEmailRegex.test(formState.email) ||
      formState.password !== formState.confirm_password ||
      !regex.validPasswordRegex.test(formState.password)
    ) {
      error.given_name =
        !regex.validNameRegex.test(formState.given_name) &&
        'First name is invalid';
      error.family_name =
        !regex.validNameRegex.test(formState.family_name) &&
        'Last name is invalid';
      error.email =
        !regex.validEmailRegex.test(formState.email) && 'Email is invalid';
      error.password =
        formState.password !== formState.confirm_password &&
        'Passwords do not match';
      error.confirm_password =
        formState.password !== formState.confirm_password &&
        'Passwords do not match';
      error.password =
        !regex.validPasswordRegex.test(formState.password) &&
        'Password is invalid (min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)';
      isValid = false;
    }
  }

  setFormState({ ...formState, error });
  return isValid;
};

export const loginValidation = (formState, setFormState) => {
  return validateForm(formState, setFormState, true);
};

export const registerValidation = (formState, setFormState) => {
  return validateForm(formState, setFormState, false);
};

export const isPasswordValid = (password) => {
  if (!regex.validPasswordRegex.test(password)) {
    return false;
  }
  return true;
};