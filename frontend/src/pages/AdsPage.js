import React, {Component} from "react";
import HeaderPanel from "../panels/HeaderPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import FooterPanel from "../panels/FooterPanel";
import BasicLayout from "../layouts/BasicLayout";
import AdsPanel from "../panels/AdsPanel";

class AdsPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<AdsPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
                />
        );
    }
}

export default AdsPage;