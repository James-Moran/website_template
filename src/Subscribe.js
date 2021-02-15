import styled from 'styled-components'

const Container = styled.div`
background-color: #ffdd00;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const Input = styled.input`
  padding: 1em;
  margin: 0.5em;
  color: white;
  background: palevioletred;
  font-size: 1.5em;
  width: 15em;
  max-width: 75%
`;

function IdeaFlow() {
    return (
    <Container>
        <h1>Get Updates</h1>
        <Input placeholder="Email Address"/>
    </Container>);
};

export default IdeaFlow;