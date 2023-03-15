import { Page } from "../components/Page";
import { LoginForm } from "./LoginForm";
import "./LoginPage.css";


export const LoginPage = () => {
    return <Page className="loginPage">
        <LoginForm />
    </Page>
}