# Validation

This is a Validation library for React. This validation allows you to validate your SignIn form and SignUp form.

For SignIn form, you can validate your email and password.  
For SignUp form, you can validate your first name, last name, email, password and confirm password.

## Installation

```bash
npm i @jimenezraul/form-validation
```

or

```bash
yarn add @jimenezraul/form-validation
```

## Usage

### SignIn form

```javascript
import validation from '@jimenezraul/form-validation';

function Login() {
  const { loginValidation } = validation; // destructuring loginValidation

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = loginValidation(values, setErrors);

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    // submit values to the server
    // ...

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button {...(isSubmitting && { disabled: true })} type='submit'>
        Submit
      </button>
    </form>
  );
}
```

### SignUp form

```javascript
import validation from '@jimenezraul/form-validation';

function SignUp() {
  const { signUpValidation } = validation; // destructuring signUpValidation

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = signUpValidation(values, setErrors);

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    // submit values to the server
    // ...

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='firstName'
        value={values.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p>{errors.firstName}</p>}
      <input
        type='text'
        name='lastName'
        value={values.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p>{errors.lastName}</p>}
      <input
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <input
        type='password'
        name='confirmPassword'
        value={values.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      <button {...(isSubmitting && { disabled: true })} type='submit'>
        Submit
      </button>
    </form>
  );
}
```


