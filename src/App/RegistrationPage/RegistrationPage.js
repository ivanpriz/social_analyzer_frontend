import { Page } from "../components/Page";
import { RegistrationForm } from "./RegistrationForm";
import "./RegistrationPage.css";


export const RegistrationPage = () => {
    return <Page className="register-page">
        <RegistrationForm />
    </Page>
}