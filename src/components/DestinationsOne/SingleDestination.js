import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination }) => {
  const { image, name } = destination;

  return (
    <Col xl={4} lg={4}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
            src={image}
            alt=""
          />
          <div className="destinations-one__content">
            <h2 className="destinations-one__title">
              <Link href="/destinations-details">{name}</Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;
