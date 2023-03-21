import React from "react";
import people from "./Data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const next = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex + 1;

      return checkNumber(newIndex);
    });
  };

  const prev = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight></FaChevronRight>
        </button>
        <br></br>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default Review;
