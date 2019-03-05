import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchAjaxStoreData} from "../actions/actions";

export const withAjaxStoreData = (id, url) => (WrappedComponent) => {

    const mapStateToProps = state => ({
        loading: state.ajax[id] && state.ajax[id].loading,
        error: state.ajax[id] && state.ajax[id].error,
        response: state.ajax[id] && state.ajax[id].response
    });

    const mapDispatchToProps = dispatch => ({
        fetch: () => dispatch(fetchAjaxStoreData(id, url))
    });

    return (
        connect(mapStateToProps, mapDispatchToProps)(
            class extends Component {
                componentDidMount() {
                    if (!this.props.response) {
                        this.props.fetch(id, url);
                    }
                }

                render() {
                    if (this.props.response) {
                        return <WrappedComponent {...{[id]:this.props.response}} {...this.props}/>
                    }

                    if (this.props.error) {
                        return (
                            <div>An error has occurred : {String(this.props.error)}</div>
                        );
                    }

                    if (this.props.loading) {
                        return (
                            <div className="lds-ring mt-5">
                                <div/>
                                <div/>
                                <div/>
                                <div/>
                            </div>
                        );
                    }

                    return null;
                }
            }
        )
    );
};