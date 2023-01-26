import { Container, Content } from "./styles";

export function Header() {
    return(
        <Container>
            <Content> 
            <h1>App <span>Money</span> </h1>
            <button type="button">Nova Transação</button>
            </Content>
        </Container>
    );
}