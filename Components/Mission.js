import { useContext } from "react";
import DemoContext from "../Helpers/DemoContext";
import UserContext from "../Helpers/UserContext";

const Mission = ()=>{

    const demoContect=useContext(DemoContext);
    const {user}=useContext(UserContext);

    const newUser={
        name:"new",
        email:"jjj"
    }

    return (
        <div>
            
            <p>
                our mission is to porive online food to everyone

                {user.name} ----- {user.email}

            </p>
        </div>
    )
}

export default Mission;