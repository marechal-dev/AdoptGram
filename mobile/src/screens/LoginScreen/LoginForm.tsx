import { View } from "react-native"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { PressableText } from "../../core/components/PressableText/PressableText"
import { BrandButton } from "../../core/components/BrandButton/BrandButton"
import { ControlledInput } from "../../core/components/ControlledInput/ControlledInput"

import { styles } from "./style"

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
type LoginFormData = z.infer<typeof loginFormSchema>

type LoginFormProps = {
  onForgotPasswordPressHandler: () => void
}

export function LoginForm({ onForgotPasswordPressHandler }: LoginFormProps) {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  function handleLoginFormSubmit(data: LoginFormData) {
    console.log(data)
  }

  return (
    <View style={styles.inputsContainer}>
      <ControlledInput
        name="email"
        control={control}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
      />
      <ControlledInput
        name="password"
        control={control}
        placeholder="Senha"
        keyboardType="default"
        returnKeyType="done"
        secureTextEntry
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
        onPressHandler={handleSubmit(handleLoginFormSubmit)}
      >
        Entrar
      </BrandButton>
    </View>
  )
}
