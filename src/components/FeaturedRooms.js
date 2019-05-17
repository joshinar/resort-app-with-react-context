import React, { Component } from "react";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  render() {
    return (
      <RoomConsumer>
        {value => {
          let { loading, rooms, featuredRooms } = value;

          rooms = featuredRooms.map(room => {
            return <Room key={room.id} room={room} />;
          });
          return (
            <section className="featured-rooms">
              <Title title="featured rooms" />
              <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
              </div>
            </section>
          );
        }}
      </RoomConsumer>
    );
  }
}
