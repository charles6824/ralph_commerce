import React from "react";
import event1 from "../../images/event1.jpg";

const Events = () => {
  return (
    <section className="events">
      <hr className="line" />
      <div className="row-card">
        <div className="card1">
          <img src={event1} alt="" width='100%' />
          <h6 className="event-date">FROM 08 FEB 2024 08:00</h6>
          <h6 className="event-title">ERTHBOX YOGA: Body & Mind</h6>
          <p className="event-address">
            Lourensford Wine Estate, Somerset West
          </p>
          <h6 className="ticket-price">R160 - R2200</h6>
        </div>
        <div className="card1">
          <img src={event1} alt="" width='100%' />
          <h6 className="event-date">FROM 08 FEB 2024 08:00</h6>
          <h6 className="event-title">ERTHBOX YOGA: Body & Mind</h6>
          <p className="event-address">
            Lourensford Wine Estate, Somerset West
          </p>
          <h6 className="ticket-price">R160 - R2200</h6>
        </div>
        <div className="card1">
          <img src={event1} alt="" width='100%' />
          <h6 className="event-date">FROM 08 FEB 2024 08:00</h6>
          <h6 className="event-title">ERTHBOX YOGA: Body & Mind</h6>
          <p className="event-address">
            Lourensford Wine Estate, Somerset West
          </p>
          <h6 className="ticket-price">R160 - R2200</h6>
        </div>
        <div className="card1">
          <img src={event1} alt="" width='100%' />
          <h6 className="event-date">FROM 08 FEB 2024 08:00</h6>
          <h6 className="event-title">ERTHBOX YOGA: Body & Mind</h6>
          <p className="event-address">
            Lourensford Wine Estate, Somerset West
          </p>
          <h6 className="ticket-price">R160 - R2200</h6>
        </div>
      </div>
    </section>
  );
};

export default Events;
