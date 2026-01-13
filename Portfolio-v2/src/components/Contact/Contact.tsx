import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
            <header>
        <h2>Contact</h2>
        <p>Have an idea or opportunity in mind?</p>
        <p>Let’s connect and discuss how we can work together.</p>
      </header>

      <div className="contacts">
            <div>
        <a href="mailto:tushar7042919748@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="mailto:tushar7042919748@gmail.com">
          tushar7042919748@gmail.com
        </a>
      </div>

        <div>
        <a href="tel:+917042919748"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917042919748">(+91) 7042919748</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}