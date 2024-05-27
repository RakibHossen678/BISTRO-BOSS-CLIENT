import { loadStripe } from "@stripe/stripe-js";
import Title from "../../Shared/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);
const Payment = () => {
  return (
    <div>
      <div>
        <Title
          Heading={"Payment"}
          subHeading={"---Please pay to eat---"}
        ></Title>
      </div>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
