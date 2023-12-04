import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kakao from "../../assets/img/kakao_login_large_narrow.png"

const SERVER_BASE_URL = "http://localhost:8080"

const AuthComponents = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const client_id = `f0b4f24a2ad7ba45d098699cb492a30c`;
    const redirect_id = "http://localhost:3000/signin";
    const response_type = "code";
    const KakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_id}`;
    sessionStorage.setItem("provider", "kakao");
    window.location.href = KakaoURL;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let credentailcode;
    if (sessionStorage.getItem("provider") === "kakao") {
      credentailcode = searchParams.get("code");
      sessionStorage.removeItem("provider");
      axios
        .post(SERVER_BASE_URL + `/oauth`, {
          provider: "kakao",
          Code: credentailcode,
        })
        .then((resp) => {
          sessionStorage.setItem("accessToken", resp.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }
  }, []);

  return (
    <img
      src={kakao}
      height={"80px"}
      alt="kakao_icon"
      className="login-icon cursor"
      onClick={handleLogin}
      
    ></img>
  );
};
export default AuthComponents;
