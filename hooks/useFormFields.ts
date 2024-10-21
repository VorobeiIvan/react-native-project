import { useState } from "react";
import { handleInputChange } from "../utils/formHelpers";
import { Field } from "../utils/types";

const useFormFields = (withLogin: boolean) => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const onChangeLogin = handleInputChange(setLogin);
  const onChangeEmail = handleInputChange(setEmail);
  const onChangePassword = handleInputChange(setPassword);

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fields: Field[] = [
    withLogin
      ? {
          value: login,
          placeholder: "Логін",
          onChange: onChangeLogin,
          inputMode: "text",
          maxLength: 20,
        }
      : null,
    {
      value: email,
      placeholder: "Адреса електронної пошти",
      onChange: onChangeEmail,
      inputMode: "email",
      maxLength: 50,
    },
    {
      value: password,
      placeholder: "Пароль",
      onChange: onChangePassword,
      secureTextEntry: !passwordVisible,
      maxLength: 20,
    },
  ].filter(Boolean) as Field[];

  return { fields, passwordVisible, togglePasswordVisible };
};

export default useFormFields;
