import {useContext} from 'react'
import Pie3d from "./pie3d";
import {Wrapper} from "./style";
import {AppContext} from "../../../context/context";

const Report = () => {
    const {repos} = useContext(AppContext);
    const pie3dData = repos.reduce((total,item)=>{
        if(item.language){
            if(! (item.language in total)){
                total[item.language] = {
                        label: item.language,
                        value : 0
                    }
            }

            total[item.language].value ++
        }
        return total;
    },{});
    const dataPie3d = Object.values(pie3dData)
    return(
        <section className="section">
            <Wrapper className="section-center">
                <Pie3d data={dataPie3d}></Pie3d>
            </Wrapper>
        </section>
    )

}
export default Report;