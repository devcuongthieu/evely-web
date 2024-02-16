import {
  FormHelperText as MuiFormHelperText,
  FormLabel as MuiFormLabel,
  OutlinedInput,
  styled,
} from "@mui/material";

const FormHelperText = styled(MuiFormHelperText)(({ theme }) => ({
  marginLeft: 0,
  fontSize: 15,
  lineHeight: "18px",
  color: theme?.palette?.base?.red,
  marginRight: 0,
}));

const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
  ...theme?.typography?.body1,
  color: theme?.palette?.base?.black,
  marginBottom: 11,
  "&.Mui-focused": {
    color: theme?.palette?.base?.black,
  },
  "&.Mui-error": {
    color: theme?.palette?.base?.red,
    "&.Mui-focused": {
      color: theme?.palette?.base?.red,
    },
  },
}));

const InputStyled = styled(OutlinedInput)(({ theme }) => ({
  ...theme?.typography?.body1,
  background: theme?.palette?.base?.white,
  color: theme?.palette?.common?.black,
  outline: "none",
  "& .MuiOutlinedInput-input": {
    borderRadius: 5,
    fontWeight: 400,
    padding: "8px 12px",
    "&::placeholder": {
      color: theme?.palette?.base?.textSecondGray,
    },
  },
  "&.MuiOutlinedInput-root": {
    minHeight: 42,
    fieldset: {
      borderColor: theme?.palette?.base?.borderInput,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme?.palette?.base?.borderInput}`,
    },
    "&:hover fieldset": {
      border: `1px solid ${theme?.palette?.base?.borderInput}`,
    },
  },
  "&.Mui-error": {
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme?.palette?.base?.red}`,
    },
    "&:hover fieldset": {
      border: `1px solid ${theme?.palette?.base?.red}`,
    },
  },
}));

export { FormHelperText, FormLabel, InputStyled };
