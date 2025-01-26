import React from "react";
import "./styles.css";
import imgLogin from "../../images/imgLogin.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authApi } from "../../hooks/useAuth";
import { Alerta } from "../../utils/mensajes";
import { setAll } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
export default function Login() {
    
    const Router = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) =>{
        data = {
            correo: data.email,
            clave: data.password,
        };
        const response = await authApi(data);
        if(response.code === 200){
            Alerta({
                title: "success",
                text: "Login exitoso",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            setAll(response.data.token, response.data.usuario, response.data.rol, response.data.external_id);
            Router("/principal");
        }else{
            Alerta({
                title: "Error",
                text: response.tag,
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };
    

  return (
    <div className="login">
    <div className="login-container">
      <div className="login-form">
        <h1>Tiempo Digital</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email address</label>
          <input {...register("email")}type="email" id="email" placeholder="Enter your email" />
            <p className="error">{errors.email?.message}</p>

          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" placeholder="Enter your password" />
            <p className="error">{errors.password?.message}</p>

          <button type="submit">Ingresar</button>
        </form>
      </div>
      <div className="login-image">
        <img src={imgLogin} alt="Imagen de Login" />
      </div>
    </div>
    </div>
  );
}
