import { Page } from "../components/Page";
import { RegisterForm } from "./RegisterForm";
import "./RegisterPage.css";


export const RegisterPage = () => {
    return <Page className="registerPage">
        <RegisterForm />
    </Page>
}