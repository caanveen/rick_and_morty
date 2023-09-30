import { useState } from "react";
import validation from "../Validation/Validate";
import style from "./loginForm.module.css"

function LoginForm({login}) {

    const[user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors]= useState({
        email: "",
        password: "",
    });

    function handleChange(event){
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
        
        setErrors(validation({
            ...user,
            [event.target.name]: event.target.value,
        }))

    }

    function handleSubmit(event){
        event.preventDefault(user) // se renderiza en cada submit para que refresque la pagina en caso de que algo este mal 
    
        if(!errors.email && !errors.password){
            login(user)
        } else {
            alert("Datos Incorrectos")
        }
    }

    return ( 
    
    <div className={style.formContainer}>
        <div className={style.formTitle}>
            <h1>Credenciales</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={style.credentials}>
                <label>Usuario</label>
                <input 
                type="text" 
                placeholder="alakasam@gmail.com" 
                name="email"
                value={user.email}
                onChange={handleChange}
                />
            {errors.email && <span>{errors.email}</span>}
            </div>
            <div className={style.credentials}>
                <label>Contraseña</label>
                <input 
                type="password" 
                name="password"
                value={user.password}
                onChange={handleChange}
                />
            {errors.password && <span>{errors.password}</span>}
            </div>
            <button className={style.submitBtn}>INICIAR</button>
        </form>
    </div>   
    );
}

export default LoginForm;