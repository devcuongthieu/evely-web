import { FormControlProps, OutlinedInputProps } from "@mui/material";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";
import { InputStyled } from "./styled";
import type { AddControlProps } from "./InputControl";
import { InputControl } from "./InputControl";

export type BaseInputProps<T extends FieldValues> = UseControllerProps<T> &
  AddControlProps & {
    controlProps?: FormControlProps;
  };

export type InputProps<T extends FieldValues> = BaseInputProps<T> &
  OutlinedInputProps;

function Input<T extends FieldValues>({
  name,
  control,
  defaultValue,
  fullWidth,
  label,
  helperText,
  controlProps,
  required,
  ...props
}: InputProps<T>) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({ name, control, defaultValue });

  return (
    <InputControl
      fieldError={error}
      fullWidth={fullWidth}
      label={label}
      required={required}
      helperText={helperText}
      {...controlProps}
    >
      <InputStyled {...inputProps} {...props} inputRef={ref} />
    </InputControl>
  );
}

export { Input };
