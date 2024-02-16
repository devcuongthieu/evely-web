"use client";

import {
  Box,
  Button as ButtonMUI,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/libs/components/Form/Input";
import { Grid } from "@mui/material";
import Button from "@/libs/components/Form/Button/Button";
import { signIn } from "next-auth/react";

interface SignIn {
  email: string;
  password: string;
}

const validate = z.object({
  email: z
    .string()
    .min(1, { message: "Email chứa ít nhất 1 kí tự" })
    .email({ message: "Định dạng email không chính xác" })
    .trim(),
  password: z.string().min(1, { message: "Ít nhất 1 kí tự" }).trim(),
});

const LoginForm = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<SignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(validate),
  });
  const [isLoading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/");
    }
    setLoading(false);
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "80%",
          width: "98%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <h1 className="ml6">
            <span className="text-wrapper">
              <span
                className="letters"
                style={{
                  fontSize: "44px",
                  fontWeight: "bold",
                  fontFamily: "'Comic Sans MS', cursive",
                  color: "#007DFB",
                  marginBottom: 2,
                }}
              >
                Eve-ly
              </span>
            </span>
          </h1>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            Đăng nhập vào tài khoản của bạn
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#999" }}>
            Chào mừng bạn đã trở lại! Vui lòng họn phương thức đăng nhập:
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
              paddingY: 2,
            }}
          >
            <ButtonMUI fullWidth startIcon={<GoogleIcon />} variant="outlined">
              Google
            </ButtonMUI>
            <ButtonMUI
              fullWidth
              startIcon={<FacebookIcon />}
              variant="outlined"
            >
              Facebook
            </ButtonMUI>
          </Box>
          <Divider
            sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: "Roboto, sans-serif",
            }}
            textAlign="center"
          >
            hoặc tiếp tục với email
          </Divider>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onSubmit}>
            <Input
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              controlProps={{
                sx: {
                  mb: 2,
                },
              }}
              control={control}
            />
            <Input
              fullWidth
              label="Mật khẩu"
              name="password"
              autoComplete="current-password"
              control={control}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Checkbox defaultChecked sx={{ padding: 0 }} />
                <Typography sx={{ fontSize: "16px", color: "#000" }}>
                  Lưu tài khoản
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: "16px", color: "#007DFB", cursor: "pointer" }}
              >
                Quên mật khẩu?
              </Typography>
            </Box>
            <Grid container justifyContent="center" marginTop={3}>
              <Button
                title="Đăng nhập"
                type="submit"
                variant="contained"
                loading={isLoading}
                sx={{ width: "100%", height: "42px" }}
              />
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 2,
            }}
          >
            <Typography sx={{ fontSize: "16px", color: "#000" }}>
              Bạn đã có tài khoản chưa?
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#007DFB", cursor: "pointer" }}
            >
              Tạo tài khoản
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
