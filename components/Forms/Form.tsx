import React from "react";
import { Field } from "../../utils/types";


interface FormProps {
  fields: Field[];
  passwordVisible: boolean;
  togglePasswordVisible: () => void;
  handleSubmit: () => void;
  submitText: string;
  alternativeText: string;
  alternativeActionText: string;
  handleAlternativeAction: () => void;
}

const Form: React.FC<FormProps> = ({
  fields,
  passwordVisible,
  togglePasswordVisible,
  handleSubmit,
  submitText,
  alternativeText,
  alternativeActionText,
  handleAlternativeAction,
}) => {
  return (
    <div>
      {fields.map((field, index) => (
        <input
          key={index}
          type={field.secureTextEntry ? "password" : "text"}
          value={field.value}
          placeholder={field.placeholder}
          onChange={field.onChange}
          maxLength={field.maxLength}
          inputMode={field.inputMode}
        />
      ))}
      <button type="button" onClick={togglePasswordVisible}>
        {passwordVisible ? "Сховати пароль" : "Показати пароль"}
      </button>
      <button type="button" onClick={handleSubmit}>
        {submitText}
      </button>
      <p>
        {alternativeText}{" "}
        <span role="button" onClick={handleAlternativeAction}>
          {alternativeActionText}
        </span>
      </p>
    </div>
  );
};

export default Form;
