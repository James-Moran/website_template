import styled from 'styled-components'
import creditcard from './images/credit-card-svgrepo-com.svg'
import phone from './images/phone-svgrepo-com.svg'
import graph from './images/increasing-chart-svgrepo-com.svg'

import IdeaCell from './IdeaCell'

const Container = styled.div`
display: flex;
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

const cardText = "Easily spend your money through both your app and card";
const phoneText = "See what your money is doing and how you're spending it";
const graphText = "We keep your money invested in the fund of your choice";

function IdeaFlow() {
    return (<Container>
        <IdeaCell src={creditcard} alt="Credit card" title={"Immediate Access"} text={cardText}/>
        <IdeaCell src={phone} alt="Phone screen" title={"Clear Information"} text={phoneText}/>
        <IdeaCell src={graph} alt="Graph" title={"Keep Invested"} text={graphText}/>
    </Container>);
};

export default IdeaFlow;