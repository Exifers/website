import React, {Component} from "react";
import HeaderPanel from "../panels/HeaderPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import FooterPanel from "../panels/FooterPanel";
import BasicLayout from "../layouts/BasicLayout";

class AdsPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<div>Ads</div>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
                />
        );
    }
}

export default AdsPage;