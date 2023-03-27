import { Component } from "react";

class ImageComponent extends Component {
    render() {
        const { url, description } = this.props
        return <img src={url} alt={description} />
    }
}

export default ImageComponent