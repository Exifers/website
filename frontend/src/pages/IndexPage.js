import React, {Component} from "react";
import BasicLayout from "../layouts/BasicLayout";
import FooterPanel from "../panels/FooterPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import HeaderPanel from "../panels/HeaderPanel";
import IndexPanel from "../panels/IndexPanel";

class IndexPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<IndexPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
                />
        );
    }
}

export default IndexPage;