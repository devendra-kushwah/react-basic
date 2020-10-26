import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="smaller">
          {photos.map((photo, index) => (
            <img
              src={photo}
              key={index}
              onClick={clickHandle}
              data-index={index}
              className={index === active ? "active" : ""}
              atl="animal"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
