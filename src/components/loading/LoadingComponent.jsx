import { Component } from "react";
import './Loading.scss';

class LoadingComponent extends Component {
    render() {
        return (
            <div className={"loading-container " + (this.props.loading ? "" : "hidden")}>
                <div className="loading">
                    <div className="loading-background"></div>
                    <div>Loading...</div>
                </div>
            </div>
        );
    }
}

export default LoadingComponent;