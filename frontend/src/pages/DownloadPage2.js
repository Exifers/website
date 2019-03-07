import React, {Component} from "react";
import BasicLayout from "../layouts/BasicLayout";
import HeaderPanel from "../panels/HeaderPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import FooterPanel from "../panels/FooterPanel";
import DownloadPanel from "../panels/DownloadPanel";

class DownloadPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<DownloadPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
                />
        );
    }
}

export default DownloadPage;