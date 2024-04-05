"use client";

import "./styles.scss";

import { useState } from "react";

import axios from "axios";

const PageRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/user/register", {
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
        setSucess(res.data.msg);
        setError("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
        setSucess("");
      });
  };

  return (
    <main>
      <div id="login-register-container">
        <div id="logo-and-description">
          <picture id="logo-insta-container">
            <img src="/instagram_logo.jpg" alt="Logo do instagram" />
          </picture>
          <p>Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
        </div>
        <a href="/login">Faça login</a>
        <div id="separate-form">
          <span></span>OU<span></span>
        </div>
        <form id="form" onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value.toString())}
            value={email}
          ></input>
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value.toString())}
            value={password}
          ></input>
          <input
            type="password"
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value.toString())}
            value={confirmPassword}
          ></input>
          <p>
            As pessoas que usam nosso serviço podem ter enviado suas informações
            de contato para o Instagram.{" "}
            <a
              href="https://www.facebook.com/help/instagram/261704639352628"
              target="_blank"
            >
              Saiba mais
            </a>
          </p>
          <p>
            Ao se cadastrar, você concorda com nossos{" "}
            <a
              href="https://help.instagram.com/581066165581870/?locale=pt_BR"
              target="_blank"
            >
              Termos
            </a>
            ,{" "}
            <a href="https://www.facebook.com/privacy/policy" target="_blank">
              Política de Privacidade
            </a>{" "}
            e{" "}
            <a
              href="https://privacycenter.instagram.com/policies/cookies/"
              target="_blank"
            >
              Política de Cookies
            </a>
            .
          </p>
          <div id="form-btn">
            <button type="submit">Cadastre-se</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PageRegister;
