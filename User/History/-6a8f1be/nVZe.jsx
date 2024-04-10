import React from "react";
import "swiper/css";
import { Input } from "@/components";
import { SwiperSlide } from "swiper/react";

const LoginSlide = () => {
  return (
    <SwiperSlide className="login__card">
      <img src="/assets/medbot.png" alt="medbot" />
      <Input inputProps={{ type: "text" }} />
      <Input inputProps={{ type: "password" }} />
    </SwiperSlide>
  );
};

export default LoginSlide;
