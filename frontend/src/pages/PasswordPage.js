import React, {Component} from "react";
import HeaderPanel from "../panels/HeaderPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import FooterPanel from "../panels/FooterPanel";
import BasicLayout from "../layouts/BasicLayout";
import PasswordPanel from "../panels/PasswordPanel";

class PasswordPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<PasswordPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
                />
        );
    }
}

export default PasswordPage;