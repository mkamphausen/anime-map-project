import React from "react";
import PropTypes from "prop-types";

class AddPlaceForm extends React.Component {
  animeTitleRef = React.createRef();
  longitudeRef = React.createRef();
  latitudeRef = React.createRef();
  animeImgRef = React.createRef();
  realImgRef = React.createRef();
  placeNameRef = React.createRef();
  cityRef = React.createRef();
  descRef = React.createRef();

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
          animeTitle: this.animeTitleRef.current.value,
          animeImg: this.animeImgRef.current.value,
          realImg: this.realImgRef.current.value,
          placeName: this.placeNameRef.current.value,
          city: this.cityRef.current.value,
          description: this.descRef.current.value
        },
      }
    console.log(place);
    this.props.addPlace(place);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <form className="place-edit" onSubmit={this.createPlace}>
          <p>
            <input 
              name="title" 
              ref={this.animeTitleRef} 
              type="text" 
              placeholder="Anime title" 
            />
            <input 
              name="name" 
              ref={this.placeNameRef} 
              type="text" 
              placeholder="place name" 
            />
            <input 
              name="city" 
              ref={this.cityRef} 
              type="text" 
              placeholder="City or area" 
            />
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
          <p>
          <textarea name="desc" ref={this.descRef} placeholder="Desc" />
          </p>
          <button type="submit">+ Add Place</button>
        </form>
      </div>
    );
  }
}

export default AddPlaceForm;
