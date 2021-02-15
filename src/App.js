import styled from 'styled-components'

import Cover from './Cover';
import IdeaFlow from './IdeaFlow';
import Subscribe from './Subscribe';


const Container = styled.div`
display: flex;
flex-direction: column;
`

function App() {
  return (
    <Container>
    <Cover />
    <IdeaFlow />
    <Subscribe />
    </Container>
  );
}

export default App;
