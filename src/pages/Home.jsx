import  {Link} from "react-router";
import  Heading  from "../components/Heading";
import  Button  from "../components/Button";

export function Home() {
  return (
    <div className="w-full h-full flex p-5">
      <div className="mt-auto">
        <Heading content="Welcome to PopX" />
        <p className="text-primary opacity-[.6] pr-21.25 mb-7 text-[18px] leading-6.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link to="/signup">
          <Button name={"Create Account"} type="button" category={"primary"} disabled={false} />
        </Link>
        <Link to="/login">
          <Button name={"Already Registered? Login"} type="button" category={"secondary"} disabled={false} />
        </Link>
      </div>
    </div>
  )
}