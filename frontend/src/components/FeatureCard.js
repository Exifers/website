import React, {Component} from "react";
import propTypes from "prop-types";

class FeatureCard extends Component {
    render() {
        return (
            <div
                className="col">
                <div
                    className="card mx-auto my-4"
                    style={{width: '18rem'}}>
                    <div
                        className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

FeatureCard.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
};

export default FeatureCard;
