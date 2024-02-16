import { FormControl, FormControlProps } from "@mui/material";
import { memo } from "react";
import type { FieldError } from "react-hook-form";
import { FormHelperText, FormLabel } from "./styled";

export type AddControlProps = {
  helperText?: string | JSX.Element;
  label?: string;
  fieldError?: FieldError | boolean;
};

export type InputControlProps = FormControlProps<"div", AddControlProps>;

function RawInputControl({
  fieldError,
  fullWidth,
  label,
  helperText,
  children,
  required,
  ...props
}: InputControlProps) {
  return (
    <FormControl fullWidth={fullWidth} error={!!fieldError} {...props}>
      {label && <FormLabel>{label}</FormLabel>}

      {children}

      {!!fieldError && (
        <FormHelperText error>
          {typeof fieldError === "boolean" ? helperText : fieldError?.message}
        </FormHelperText>
      )}
      {helperText && (
        <FormHelperText error={false}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

const InputControl = memo(RawInputControl) as typeof RawInputControl;

export { InputControl };
