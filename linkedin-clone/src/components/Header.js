import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content>Header</Content>
        </Container>
    );
};

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: o;
padding: 0 24px;
position: fixed;
top: 0;
width: 100uw;

`;

const Content = styled.div``;


export default Header;