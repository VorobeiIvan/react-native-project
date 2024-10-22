// import React from "react";
// import { View, Button, Text, TouchableOpacity } from "react-native";
// import styles from "./FormStyles";
// import { Field } from "../../utils/types";
// import Input from "../Input/Input";

// interface FormProps {
//   fields: Field[];
//   passwordVisible: boolean;
//   togglePasswordVisible: () => void;
//   handleSubmit: () => void;
//   submitText: string;
//   alternativeText: string;
//   alternativeActionText: string;
//   handleAlternativeAction: () => void;
// }

// const Form: React.FC<FormProps> = ({
//   fields,
//   passwordVisible,
//   togglePasswordVisible,
//   handleSubmit,
//   submitText,
//   alternativeText,
//   alternativeActionText,
//   handleAlternativeAction,
// }) => {
//   return (
//     <View>
//       {fields.map((field, index) => (
//         <Input
//           key={index}
//           secureTextEntry={field.secureTextEntry && !passwordVisible} // Правильна логіка
//           value={field.value}
//           placeholder={field.placeholder}
//           maxLength={field.maxLength}
//           inputMode={field.inputMode} // Це вже правильний тип
//         />
//       ))}
//       <Button
//         title={passwordVisible ? "Сховати пароль" : "Показати пароль"}
//         onPress={togglePasswordVisible}
//       />
//       <Button title={submitText} onPress={handleSubmit} />
//       <Text>
//         {alternativeText}{" "}
//         <TouchableOpacity onPress={handleAlternativeAction}>
//           <Text>{alternativeActionText}</Text>
//         </TouchableOpacity>
//       </Text>
//     </View>
//   );
// };

// export default Form;
