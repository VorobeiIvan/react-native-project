import React from "react";
import Form from "./Form";
import { useFormFields } from "../../hooks";


const AuthorizationForm = () => {
  const { fields, passwordVisible, togglePasswordVisible } = useFormFields(false); 

  const handleAuthorization = () => {
    const email = fields[0].value;
    const password = fields[1].value;

    if (!email || !password) {
      console.log("Заповніть всі поля.");
      return;
    }

    console.log("Авторизація", { email, password });
  };

  const handleRegistration = () => {
    console.log("Перехід на сторінку реєстрації");
  };

  return (
    <Form
      fields={fields}
      passwordVisible={passwordVisible}
      togglePasswordVisible={togglePasswordVisible}
      handleSubmit={handleAuthorization}
      submitText="Увійти"
      alternativeText="Немає акаунту?"
      alternativeActionText="Зареєструватися"
      handleAlternativeAction={handleRegistration}
    />
  );
};

export default AuthorizationForm;
