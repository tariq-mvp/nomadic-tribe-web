import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleChallengeLevel = ({ challenge }) => {
  return (
    <Col xl={4} lg={4}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
            src={challenge?.image}
            alt=""
          />
          <div className="destinations-one__content">
            <h2 className="destinations-one__title">
              <Link href="/destinations-details">{challenge?.name}</Link>
            </h2>
          </div>
          <div className="destinations-one__button">
            <a href="#">{"11"} tours</a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleChallengeLevel;
