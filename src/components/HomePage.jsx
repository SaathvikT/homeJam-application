import React from 'react';
import { MdSearch } from "react-icons/md";
import { FaBars, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ShowCards from './UpcomingShowCards/UpcomingShowCard';
import ReviewCards from './ReviewCards/ReviewCards';
import Stroke from '../images/Stroke.png';
import musicians, { reviews } from './HomeItems';
import Overlay from '../images/HomeJamLogo.png';

const HomePage = () => {
  return (
    <>
    {/* Landing Page Section */}

    <section class="header">
      <nav>
        <a href="/">
          <img src={Overlay} alt="HomeJam" className="nav-brand" />
        </a>
        <div className="nav-links">
          <ul>
            <li>
              <MdSearch />
              <a href="/">
                Search
              </a>
            </li>
            <li><a href="/">Help</a></li>
            <li><a href="/">Account</a></li>
          </ul>
        </div>
        <MdSearch className="fa" />
        <li className="stroke-item">
          <a href="/">
            <img src={Stroke} alt="Account" />
          </a>
        </li>
        <FaBars className="fa" />
      </nav>

      <div className="text-box">
        <h1>Cari Cari</h1>
        <p>
          Live from their sofa to yours. Get closer to your favorite
          artists, and never miss out.
        </p>
      </div>
    </section>

    {/* Upcoming Shows Section */}

    <section className="slider">
      <div className="slider-card">
        <h2>Upcoming shows</h2>
        <a href="/" className="viewAll">View all</a>
      </div>
      <div className="horizontal_slider">
        <div className="slider_container">
        {musicians.map((mus) => {
          return (
            <ShowCards mus={mus} />
          );
        })}
        </div>
      </div>
    </section>

    {/* Customer Review Section */}

    <section className="slider">
      <div className="slider-card">
        <h2>Reviews</h2>
        <a href="/">
          1/12
          <FaArrowLeft />
          <FaArrowRight />
        </a>
      </div>
      <div className="horizontal_slider">
        <div className="slider_container">
        {reviews.map((rev) => {
          return (
            <ReviewCards rev={rev} />
          );
        })}
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;
