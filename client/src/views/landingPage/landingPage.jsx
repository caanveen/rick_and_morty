import LoginForm from "../../components/Form/loginForm";
import style from "./landingPage.module.css";

function LandingPage({login}) {
    return ( 
        <div className={style.landingContainer}>
            <LoginForm login={login}/>
        </div> 
    );
}

export default LandingPage;