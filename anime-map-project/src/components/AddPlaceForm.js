import React from "react";
import PropTypes from "prop-types";

class AddPlaceForm extends React.Component {
  nameRef = React.createRef();
  longitudeRef = React.createRef();
  latitudeRef = React.createRef();
  animeImgRef = React.createRef();
  realImgRef = React.createRef();

  static propTypes = {
    addPlace: PropTypes.func
  };
 
  createPlace = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    //define place and refs for values
    const place = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [parseFloat(this.longitudeRef.current.value), parseFloat(this.latitudeRef.current.value)],
        },
        properties: {
          placeName: this.nameRef.current.value,
          animeImg: this.animeImgRef.current.value,
          realImg: this.realImgRef.current.value
        },
      }
      // placeName: this.nameRef.current.value,
      // longitude: parseFloat(this.longitudeRef.current.value),
      // latitude: parseFloat(this.latitudeRef.current.value),
      // animeImg: this.animeImgRef.current.value,
      // realImg: this.realImgRef.current.value
    this.props.addPlace(place);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="place-edit" onSubmit={this.createPlace}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name of the place" />
        <input
          name="longitude"
          ref={this.longitudeRef}
          type="text"
          placeholder="longitude"
        />
        <input
          name="latitude"
          ref={this.latitudeRef}
          type="text"
          placeholder="latitude"
        />
        <input
          name="animeImg"
          ref={this.animeImgRef}
          type="text"
          placeholder="Image from the anime"
        />
          <input
          name="realImg"
          ref={this.realImgRef}
          type="text"
          placeholder="Real image"
        />
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <button type="submit">+ Add Place</button>
      </form>
    );
  }
}

export default AddPlaceForm;
