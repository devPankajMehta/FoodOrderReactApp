import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{

    const error=useRouteError();

    console.log(error.statusText);

    return(
    <div>
        <div>
            {error.status +"   :   " +error.statusText} 
        </div>
    </div>
)
}

export default ErrorPage;