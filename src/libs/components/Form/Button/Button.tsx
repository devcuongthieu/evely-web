import React from "react";
import {
  Button as ButtonBase,
  CircularProgress,
  SxProps,
  Theme,
} from "@mui/material";

type Props = {
  title: string;
  sx?: SxProps<Theme>;
  loading?: boolean;
  onClick?: () => void;
  type?: "reset" | "submit" | "button";
  variant?: "text" | "contained" | "outlined" | undefined;
  size?: "small" | "medium" | "large" | "extra" | undefined;
};

const getCustomStyles = (): SxProps<Theme> => ({
  backgroundColor: "#007DFB",
  "&:hover": {
    opacity: 0.99,
  },
});

const Button = ({
  title,
  onClick,
  sx,
  loading,
  type,
  variant,
  size,
}: Props) => {
  const customStyles = getCustomStyles();
  const mergedStyles = sx ? Object.assign({}, customStyles, sx) : customStyles;

  const buttonStyles = {
    width: "auto",
    overflow: "hidden",
    whiteSpace: "nowrap",
    ...mergedStyles,
    ...(size === "small" && { fontSize: "0.8rem", padding: "6px 12px" }),
    ...(size === "medium" && { fontSize: "1rem", padding: "8px 16px" }),
    ...(size === "large" && { fontSize: "1rem", padding: "10px 20px" }),
    ...(size === "extra" && { fontSize: "1rem", padding: "10px 30px" }),
  };

  const startIcon = loading && <CircularProgress color="inherit" size={12} />;

  return (
    <ButtonBase
      sx={buttonStyles}
      onClick={onClick}
      type={type}
      variant={variant}
      startIcon={startIcon}
    >
      {title}
    </ButtonBase>
  );
};

export default Button;
