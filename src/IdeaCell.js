import styled from 'styled-components'

const imageWidth = 200;
const containerWidth = "350px";

const Container = styled.div`
width: ${props => props.width};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const Text = styled.div`
    display: flex;
    justify-items: flex-start;
    width: 250px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1em;
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 2.5em;
`

function IdeaCell(props){
    return (
    <Container width={containerWidth}>
        <img src={props.src} alt={props.alt} width={imageWidth}/>
        <Text>
        <b>{props.title}</b>
            {props.text}
        </Text>
    </Container>
    )
}

export default IdeaCell;