import React, {Component} from "react";

class DownloadPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="mt-5">Download</h1>
                <div className="d-flex flex-column download-container mx-auto mb-5">
                    <a
                        href={windows_build_file_url}
                        download="cyberstories_windows.zip"
                        className="card bg-success mx-auto my-3 download">
                        <div
                            className="card-body">
                            WINDOWS <br/>
                            <i className="fas fa-download"/>
                        </div>
                    </a>
                    <a href={mac_build_file_url} download="cyberstories_mac.zip"
                       className="card bg-success mx-auto my-3 download">
                        <div className="card-body">
                            MAC<br/>
                            <i className="fas fa-download"/>
                        </div>
                    </a>
                    <a
                        href={linux_build_file_url}
                        download="cyberstories_linux.zip"
                        className="card bg-success mx-auto my-3 download">
                        <div className="card-body">LINUX<br/><i className="fas fa-download"/>
                        </div>
                    </a>
                </div>
                <p>
                    Once
                    you
                    've downloaded, checkout the documentation.
                </p>
            </React.Fragment>
        );
    }
}

export default DownloadPanel;