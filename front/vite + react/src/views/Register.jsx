import { useState } from "react";
import styles from "../styles/Register.module.css";
import validate from "../utils/validate";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const initialState = {
    name: "",
    nDni: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  };

  const [registerForm, setRegisterForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const postData = async () => {
    try {
      await axios.post("http://localhost:3000/users/register", registerForm);
      Swal.fire({
        title: "Usuario registrado!",
        text: "You clicked the button!",
        icon: "success",
      });
    } catch (error) {
      alert(error, "user register failed");
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(registerForm)) {
      postData();
      setRegisterForm(initialState);
    } else {
      alert("Parece que algun dato es incorrecto");
    }
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <h2>Registrarme</h2>
      {[
        { label: "Nombre", name: "name", type: "text" },
        { label: "DNI", name: "nDni", type: "text" },
        { label: "Fecha de nacimiento", name: "birthdate", type: "date" },
        { label: "Email", name: "email", type: "text" },
        { label: "Nombre de usuario", name: "username", type: "text" },
        { label: "Contraseña", name: "password", type: "password" },
      ].map(({ label, name, type }) => {
        return (
          <div key={name} className={styles.registerForm}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              onChange={handleOnChange}
              value={registerForm[name]}
            />
            {errors[name] && <span key={name}>{errors[name]}</span>}
          </div>
        );
      })}
      <button>Registrarme</button>
    </form>
  );
};

export default Register;
