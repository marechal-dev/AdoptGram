import { useRef } from "react"

import { View } from "react-native"

import { Formik } from "formik"

import { BrandInput } from "../../core/components/BrandInput/BrandInput"
import { PressableText } from "../../core/components/PressableText/PressableText"
import { BrandButton } from "../../core/components/BrandButton/BrandButton"

import { styles } from "./style"

type LoginFormFields = {
  email: string
  password: string
}

type LoginFormProps = {
  onForgotPasswordPressHandler: () => void
}

export function LoginForm({ onForgotPasswordPressHandler }: LoginFormProps) {
  const ref = useRef<JSX.Element>(null)

  const initialValues: LoginFormFields = {
    email: "",
    password: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: LoginFormFields) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.inputsContainer}>
          <BrandInput
            onChangeHandler={handleChange("email")}
            placeholder="Email"
            value={values.email}
            returnKeyType="next"
            onBlurHandler={() => handleBlur("email")}
            keyboardType="email-address"
          />
          <BrandInput
            onChangeHandler={handleChange("password")}
            placeholder="Senha"
            value={values.password}
            returnKeyType="done"
            isPasswordField={true}
            onBlurHandler={() => handleBlur("password")}
            keyboardType="default"
          />
          <PressableText
            onPressHandler={onForgotPasswordPressHandler}
            pressableStyle={styles.forgotPasswordWrapper}
            textStyle={styles.forgotPasswordText}
          >
            Esqueci minha senha
          </PressableText>

          <BrandButton
            paddingOverride={{
              paddingHorizontal: 10,
            }}
            onPressHandler={handleSubmit}
          >
            Entrar
          </BrandButton>
        </View>
      )}
    </Formik>
  )
}
