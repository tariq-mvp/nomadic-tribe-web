import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour, userSelect = false }) => {
  console.log("tour", tour)
  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={tour?.banner}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {"8.0"} Superb
          </div>
          <h3 className="popular-tours__title">
            <Link href={`/program-detail/${tour?.id}`}>{tour?.name}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>${tour?.starting_from}</span> / Per Person
          </p>
          <ul className="popular-tours__meta list-unstyled">
              <li>
                <Link href={`/program-detail/${tour?.id}`}>{(tour?.tribe_no_of_days || "5") + " " + "Days" + " " + tour?.tribe_region}</Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
