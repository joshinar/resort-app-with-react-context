import React from "react";
import Room from "./Room";
export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately, no rooms rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room, index) => {
          return <Room key={index} room={room} />;
        })}
      </div>
    </section>
  );
}
