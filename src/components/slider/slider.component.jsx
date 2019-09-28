import React, { Component } from "react";
import Window from "../window/window.component";
import Input from "../input/input";
import queryString from "query-string";
import Button from "../button/button";

export class Slider extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      currentImageIndex: 0,
      size: 130,
      radius: 5
    };
  }

  componentDidMount() {
    const images = [];
    const values = queryString.parse(this.props.location.search);
    const count = parseInt(values.count) || 5;
    for (let i = 0; i < count; i++) {
      const id = Math.floor(Math.random() * 999);
      images.push({ imgUrl: `https://picsum.photos/${id}`, id: Math.random() });
    }
    this.setState({ images,  });
  }

  handleButtonClick = action => {
    const index = this.state.currentImageIndex;
    if (this.state.images.length > index + 1 && action === "NEXT") {
      this.setState({ currentImageIndex: index + 1 });
    } else if (index !== 0 && action === "PREV") {
      this.setState({ currentImageIndex: index - 1 });
    } else {
      return;
    }
  };

  sizeHandler = e => {
    const size = e.target.value;
    if (!size || size < 50 || size > 250) {
      return;
    }
    this.setState({ size: parseInt(e.target.value) });
  };

  radiusHandler = e => {
    if (!e.target.value) {
      return;
    }
    this.setState({ radius: parseInt(e.target.value) });
  };

  addImage = () => {
    const id = Math.floor(Math.random() * 999);
    const images = [...this.state.images];
    images.splice(this.state.currentImageIndex, 0, {
      imgUrl: `https://picsum.photos/${id}`,
      id
    });
    this.setState({ images });
  };

  render() {
    const { images, currentImageIndex, size, radius } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-end">        
            <Window
              images={images}
              size={size}
              radius={radius}
              currentImageIndex={currentImageIndex}
            />
          <div className="col-sm mt-4 ml-3">
            <Input
              handler={this.sizeHandler}
              placeholder={"Box size (50-250)"}
              type={"number"}
            />
            <Input
              handler={this.radiusHandler}
              placeholder={"Border Radius"}
              type={"number"}
            />
            <div className="row justify-content-start">
              <Button name={"ADD SQUARE"} handler={this.addImage} />
            </div>
            <div className="row justify-content-start mt-2">
              <Button
                name="NEXT"
                handler={() => this.handleButtonClick("NEXT")}
              />
              <Button
                name="PREV"
                handler={() => this.handleButtonClick("PREV")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
