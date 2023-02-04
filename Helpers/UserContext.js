import { createContext } from "react";


const UserContext = createContext({
    user:{
        name:"pankaj",
        email:"pankaj_meh"
    }
});

export default UserContext;