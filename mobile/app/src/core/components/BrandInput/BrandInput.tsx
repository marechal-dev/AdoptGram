import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInput,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  View,
} from "react-native"

import { styles } from "./style"
import { colors } from "../../../theme/colors"

type BrandInputProps = {
  value: string
  placeholder: string
  returnKeyType: ReturnKeyTypeOptions
  isPasswordField?: boolean
  keyboardType?: KeyboardTypeOptions
  autoCapitalizeOption?: "none" | "sentences" | "words" | "characters"
  onChangeHandler: (text: string) => void
  onBlurHandler: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onSubmitEditingHandler: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void
}

// TODO: This shit is bloated, I need to find a proper way to create a reusable input
export function BrandInput({
  value,
  placeholder,
  returnKeyType,
  isPasswordField,
  autoCapitalizeOption = "none",
  keyboardType = "default",
  onChangeHandler,
  onBlurHandler,
  onSubmitEditingHandler,
}: BrandInputProps) {
  return (
    <View style={styles.brandInputContainer}>
      <TextInput
        style={styles.brandInputText}
        cursorColor={colors.text.mainText90}
        placeholderTextColor={colors.text.mainText90}
        textAlign="left"
        value={value}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        onChangeText={onChangeHandler}
        secureTextEntry={isPasswordField}
        multiline={false}
        onBlur={onBlurHandler}
        autoCapitalize={autoCapitalizeOption}
        onSubmitEditing={onSubmitEditingHandler}
      />
    </View>
  )
}
