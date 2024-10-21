import React from "react";
import Form from "./Form";
import { useFormFields } from "../../hooks";
import { isValidEmail } from "../../utils/formHelpers";

const RegistrationForm: React.FC = () => {
  const { fields, passwordVisible, togglePasswordVisible } = useFormFields(true); 

  const handleRegistration = () => {
    const login = fields[0].value;
    const email = fields[1].value;
    const password = fields[2].value;

    if (!login || !email || !password) {
      console.log("Заповніть всі поля.");
      return;
    }

    if (!isValidEmail(email)) {
      console.log("Невірний формат електронної пошти.");
      return;
    }

    console.log("Реєстрація", { login, email, password });
  };

  const handleAuthorization = () => {
    console.log("Перехід на сторінку авторизації");
  };

  return (
    <Form
      fields={fields}
      passwordVisible={passwordVisible}
      togglePasswordVisible={togglePasswordVisible}
      handleSubmit={handleRegistration}
      submitText="Зареєструватися"
      alternativeText="Вже є акаунт?"
      alternativeActionText="Увійти"
      handleAlternativeAction={handleAuthorization}
    />
  );
};

export default RegistrationForm;
