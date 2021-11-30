import React from "react";

const Card = ({ title, price, feature1, feature2, feature3, isFeatured }) => {
  return (
    <>
      <div
        className={`card d-flex flex-column align-items-center ${
          isFeatured === true && "bg-secondary text-white featured"
        }`}
        style={
          { width: "18rem", marginBottom: ".5rem" }}
      >
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text price">${price}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li
            className={`list-group-item `}
            style={{ background: "transparent" }}
          >
            {feature1}
          </li>
          <li
            className={`list-group-item `}
            style={{ background: "transparent" }}
          >
            {feature2}
          </li>
          <li
            className={`list-group-item `}
            style={{ background: "transparent" }}
          >
            {feature3}
          </li>
        </ul>
        <div className="card-body">
          <a
            href="/"
            className={`card-link btn btn-primary ${
              isFeatured === true && "btn-custom"
            }`}
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
