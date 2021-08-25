import styled from 'styled-components';
import Card from "./card";
import Followers from "./followers";
const User = () => {
    return(
        <section className="container section-center">
            <Wrapper>
                <Card></Card>
                <Followers></Followers>
            </Wrapper>
        </section>
    )
}
export default User;
const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;