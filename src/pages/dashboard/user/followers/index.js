import {useContext} from 'react';
import {AppContext} from "../../../../context/context";
import {Wrapper} from "./style";

const Followers = () => {
    const {follower} = useContext(AppContext);
    return(
        <Wrapper>
            <div className="followers">
                {
                    follower.map((item,index)=>{
                        const {avatar_url:img,html_url,login} = item;
                        return(
                            <article key={index}>
                                <img src={img} alt={login} />
                                <div>
                                    <h4>
                                        {login}
                                    </h4>
                                    <a href={html_url}>{html_url}</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}
export default Followers;