import {useContext} from 'react'
import {AppContext} from "../../../../context/context";
import {Wrapper} from './style';
import {MdBusiness, MdLink, MdLocationOn} from "react-icons/all";


const Card = () => {
    const {users} = useContext(AppContext);
    const {
        avatar_url,
        company,
        name,
        blog,
        bio,
        html_url,
        location,
        twitter_username
    } = users;
     return(
        <Wrapper>
            <header>
                <img src={avatar_url} alt={name}/>
                <div>
                    <h4>
                        {name}
                    </h4>
                    <p>
                        @{twitter_username || `noName`}
                    </p>
                </div>
                <a href={html_url}>Follow</a>
            </header>
            <p>{bio}</p>
            <div className={`links`}>
                <p>
                    <MdBusiness></MdBusiness> {company}
                </p>
                <p>
                    <MdLocationOn></MdLocationOn> {location || "earth"}
                </p>
                <a href={`https://${blog}`}>
                    <MdLink></MdLink>
                    {blog}
                </a>
            </div>
        </Wrapper>
     )
}
export default Card;