import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { FC, useState } from "react";
import styles from "./InputStyles";

// Extend TextInputProps to include the necessary types
type InputProps = {
  value: string;
  placeholder?: string;
  outerStyles?: ViewProps["style"];
  rightButton?: React.ReactNode;
  onTextChange: (value: string) => void;
  secureTextEntry?: boolean;
  autofocus?: boolean;
  inputMode?: TextInputProps["inputMode"]; // Using the correct type
  maxLength?: number;
  textContentType?: TextInputProps["textContentType"]; // Using the correct type
  keyboardType?: TextInputProps["keyboardType"]; // Using the correct type
};

const Input: FC<InputProps> = ({
  value,
  onTextChange,
  placeholder,
  outerStyles,
  rightButton,
  inputMode,
  autofocus = false,
  secureTextEntry = true,
  maxLength,
  textContentType,
  keyboardType,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.input, isFocused && styles.focused, outerStyles]}>
      <TextInput
        value={value}
        autoFocus={autofocus}
        onChangeText={onTextChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.text}
        autoCapitalize="none"
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength} // Use the maxLength prop here
        inputMode={inputMode} // Now uses the correct type
        textContentType={textContentType} // Now uses the correct type
        keyboardType={keyboardType} // Now uses the correct type
      />
      {rightButton}
    </View>
  );
};

export default Input;
