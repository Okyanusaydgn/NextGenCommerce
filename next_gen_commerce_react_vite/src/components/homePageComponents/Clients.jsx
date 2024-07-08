import hooli from "../../assets/hooli.png";
import lyft from "../../assets/lyft.png";
import ship from "../../assets/ship.png";
import stripe from "../../assets/stripe.png";
import aws from "../../assets/aws.png";
import robot from "../../assets/robot.png";

const Clients = () => {
    return(
        <div className="flex flex-col items-center space-y-10 mt-20 md:flex-row md:justify-center ">
            <img src= {hooli} alt="hooli_mark" />
            <img src={lyft} alt="lyft_mark" />
            <img src={ship} alt="ship_mark" />
            <img src={stripe} alt="stripe_mark" />
            <img src={aws} alt="aws_mark" />
            <img src={robot} alt="robot_mark" />

        </div>
    )
}

export default Clients;