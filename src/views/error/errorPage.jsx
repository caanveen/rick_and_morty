import errorImage from "../../assets/rym1.png"
import style from "./error.module.css"

function ErrorPage() {
    return <div className={style.img}>
        <img src={errorImage} alt="error404" />
    </div>;
}

export default ErrorPage;