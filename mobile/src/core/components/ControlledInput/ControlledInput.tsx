import { BrandInput, BrandInputProps } from "../BrandInput/BrandInput"

import { Control, Controller } from "react-hook-form"

type ControlledInputProps = BrandInputProps & {
  control: Control<any>
  name: string
}

export function ControlledInput({
  control,
  name,
  ...props
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <BrandInput onChangeText={onChange} value={value} {...props} />
      )}
    />
  )
}
