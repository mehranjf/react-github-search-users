import {Wrapper} from "./style";
import loginImg from '../../assets/images/login-img.svg'
const Login = () => {
    return(
        <Wrapper>
            <div className="container">
                <img src={loginImg} alt="Login images"/>
                <h1>
                    Login
                </h1>
                <button className="btn">Login</button>
            </div>

        </Wrapper>
    )
}
export default Login;