import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex:1;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
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

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: 2px solid ${props => props.sent ? "darkgreen" : "palevioletred"};
  border-radius: 3px;
  width: 15em;
  max-width: 50%;
`;

function IdeaFlow() {
  const [sent, setSent] = useState(false);
  const [tried, setTried] = useState(false);

  const text = sent ? <b>Sent</b> : tried ? <b>Check Email</b> : <b>Get Updates</b>;

  const onButtonPress = () => {
    if (!sent && validateEmail(document.getElementById('input').value)) {
      console.log(sent);
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSdiCZuRN9uj73fsQ3PfwoXuXYkn3UG7_939S7clrSWpIH5_EQ/formResponse?usp=pp_url&entry.903693314='.concat(document.getElementById('input').value), "hidden_iframe");
      setSent(true);
    } else {
      setTried(true)
    }
  }

  const onEnterPress = (e) => {
    if (e.keyCode === 13 /* Enter */) {
      e.preventDefault();
      onButtonPress(true);
    }
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <>
      <Container>
        <Input id='input' placeholder="Email Address" onKeyUp={onEnterPress} />
        <Button sent={sent} onClick={onButtonPress}>{text}</Button>
      </Container>
    </>);
};

export default IdeaFlow;