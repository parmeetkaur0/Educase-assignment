import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  Heading  from "../components/Heading";
import  Input  from "../components/Input";
import  Button  from "../components/Button";

export function Login() {
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    useEffect(() => {
        if (email !== "" && password !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, password])

    function handleSubmit(e) {
        e.preventDefault();

        navigate("/profile");
    }

    return (
        <div className="w-full h-full flex p-5">
            <div>
                <Heading content="Signin to your PopX account" className="leading-9 pr-25" />
                <p className="text-primary opacity-[.6] pr-21.25 mt-2 text-[18px] leading-6.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <form className="text-[13px]" onSubmit={handleSubmit}>
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter email address"
                        onChange={handleEmail}
                        value={email}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        onChange={handlePassword}
                        value={password}
                    />

                    <Button
                        name={"Login"}
                        type="submit"
                        category={"primary"}
                        disabled={disabled}
                        className="mt-3.5 text-[16px]"
                    />
                </form>
            </div>
        </div>
    )
}