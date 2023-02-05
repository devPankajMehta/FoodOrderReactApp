import { useContext } from "react";
import DemoContext from "../Helpers/DemoContext";
import UserContext from "../Helpers/UserContext";
import "../style.css";

const Mission = ()=>{

    const demoContect=useContext(DemoContext);
    const {user}=useContext(UserContext);

    const newUser={
        name:"new",
        email:"jjj"
    }

    return (
       
        <div class="flex flex-row bg-gray-200">
        <div class="text-white text-center bg-purple-600 px-4 py-2 m-2 rounded-lg">1</div>
        <div class="text-white text-center bg-purple-600 px-4 py-2 m-2 rounded-lg">2</div>
        <div class="text-white text-center bg-purple-600 px-4 py-2 m-2 rounded-lg">3</div>
        <div class="text-white text-center bg-purple-600 px-4 py-2 m-2 rounded-lg">4</div>
      </div>
    )
}

export default Mission;