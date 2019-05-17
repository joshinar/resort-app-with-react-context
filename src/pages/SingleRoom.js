import React, { Component } from "react";
import defaultBcg from "../images/room-2.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such Room Found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      extras,
      breakfast,
      pets,
      images,
      price
    } = room;

    return (
      <>
        <Hero hero="roomsHero">
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </Hero>

        <section className="single-room">
          <div className="single-room-images">
            {images.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article>
              <div className="article-in">
                <h3>info</h3>
                <h6>Price: ${price}</h6>
                <h6>Size: {size} SQFT</h6>
                <h6>
                  max capacity :{" "}
                  {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                <h6>{breakfast && "Free breakfast included"}</h6>
              </div>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
