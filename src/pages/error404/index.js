import {Link} from 'react-router-dom'
import {Wrapper} from "./style";
const Error404 = () => {
    return(
        <Wrapper>
            <h1>404</h1>
            <div>
                <h3>
                    Oops..!
                </h3>
                <h3>
                    Page Not Found
                </h3>
            </div>
            <Link to="/" className="btn">Go to home</Link>
        </Wrapper>
    )
}
export default Error404;