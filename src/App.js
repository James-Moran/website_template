import styled from 'styled-components'

import Cover from './Cover';
import IdeaFlow from './IdeaFlow';
import Subscribe from './Subscribe';


const Container = styled.div`
background: linear-gradient(#e66465, #9198e5);
display: flex;
flex-direction: column;
`

const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

const IFrame = styled.iframe`
display:none;
`

function App() {
  return (
    <>
    <Container>
      <Cover />
      <ScreenContainer>
        <IdeaFlow />
        <Subscribe />
      </ScreenContainer>
    </Container>
    <IFrame name="hidden_iframe" id="hidden_iframe" />
    </>
  );
}

export default App;
