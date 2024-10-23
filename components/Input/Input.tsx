import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { FC, useState } from "react";
import styles from "./InputStyles";


type InputProps = {
  value: string;
  placeholder?: string;
  outerStyles?: ViewProps["style"];
  rightButton?: React.ReactNode;
  onChangeText?: (text: string) => void; 
  secureTextEntry?: boolean;
  autofocus?: boolean;
  inputMode?: TextInputProps["inputMode"];
  maxLength?: number;
  textContentType?: TextInputProps["textContentType"];
  keyboardType?: TextInputProps["keyboardType"];
};

const Input: FC<InputProps> = ({
  value,
  onChangeText,
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
        onChangeText={onChangeText} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.text}
        autoCapitalize="none"
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        inputMode={inputMode}
        textContentType={textContentType}
        keyboardType={keyboardType}
      />
      {rightButton}
    </View>
  );
};

export default Input;
