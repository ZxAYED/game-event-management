import { useRouteError } from "react-router-dom";
import warn from "../../images/warn.png"
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-[100vh] " >
    <div className="flex justify-center items-center gap-5 h-[90vh] mx-10 md:mx-auto flex-col">
<img src={warn} alt="" />
<h1 className="font-bold text-3xl text-center "> Oops! <br />
    Sorry, an unexpected error has occurred.</h1>
    <p>You have done something Wrong</p>
    
    <p>
      <i>{error.statusText || error.message}</i>
    </p> </div>
   
  </div>
  );
}