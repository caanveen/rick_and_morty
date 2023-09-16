const validation = (user) => {
    const errors={};
    
    if(!/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(user.email)){
        errors.email = 'El email ingresado no es valido';
    }
    if(!user.email){
        errors.email = "Debe ingresar un email";
    }
    if(user.email.length >= 35){
        errors.email = "El email no debe superar los 35 caracteres";
    }
    if(!/^[A-Za-z]\w{7,14}$/.test(user.password)){
        errors.password = "La contraseña debe tener un Numero y una Mayuscula"
    }
    if(user.password.length < 7 || user.password.length > 14){
        errors.password = "Entre 6 y 15 caracteres"
    }

    return errors;
}

export default validation;