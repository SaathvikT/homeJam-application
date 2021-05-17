import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaClipboardList } from 'react-icons/fa';
import './UpcomingShowCard.scss';

// Component displaying the upcoming show.
// The component contains info about the musician
// and can be reused multiple times.

const UpcomingShowCard = ({ mus }) => {
  return (
  <>
    <div className="item">
      <div className="show-card" >
        <div className="show-performer">
          <img src={mus.label} alt="Benny" />
          <div className="musician-info">
            <div className="genre">
              <span>{mus.genre}</span>
              <p className="name">{mus.name}</p>
            </div>
          </div>
          <div className="extra-links">
            <div className="more-info">
              <a href="/">
                More Info
                <AiOutlineArrowRight />
              </a>
            </div>
            <div className="performer-schedule">
              <a href="/"><FaClipboardList /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))
  </>
);
};

export default UpcomingShowCard;
