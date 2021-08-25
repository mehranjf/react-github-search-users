import {useContext} from 'react';
import {AppContext} from "../../../context/context";
import {Wrapper} from "./style";
import {FiUser, FiUserPlus} from "react-icons/fi";
import {GoGist, GoRepo} from "react-icons/go";
const Info = () => {
    const {users} = useContext(AppContext);
    const {followers,following,public_gists,public_repos} = users;
    console.log(followers,following,public_gists,public_repos);
    const items = [
        {
            id:1,
            name: "followers",
            icon: <FiUser classname="icon"/> ,
            value:followers,
            color:"pink"
        },
        {
            id:2,
            name: "following",
            icon: <FiUserPlus classname="icon"/> ,
            value:following,
            color:"green"
        },
        {
            id:3,
            name: "public_gists",
            icon: <GoGist classname="icon"/> ,
            value:public_gists,
            color:"purple"
        },
        {
            id:4,
            name: "public_repos",
            icon: <GoRepo classname="icon"/> ,
            value:public_repos,
            color:"yellow"
        }
    ]
    return(
        <section className="section">
            <Wrapper className="section-center">
                {
                    items.map(item=> {
                        return(
                            <article className="item" key={item.id}>
                                <span className={item.color}>
                                    {item.icon}
                                </span>
                                <div>
                                    <h3>
                                        {item.value}
                                    </h3>
                                    <p>
                                        {item.name}
                                    </p>
                                </div>
                            </article>
                        )
                    })
                }
            </Wrapper>
        </section>
    )
}
export default Info;