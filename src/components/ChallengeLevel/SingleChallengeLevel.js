import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleChallengeLevel = ({ challenge }) => {
  const router = useRouter();

  return (
    <Col xl={4} lg={4}>
      <div className="destinations-one__single">
        <div className="destinations-one__img" style={{ cursor: "pointer" }} onClick={() => router.push(`/challenge-program/${challenge?.name}`)}>
          <Image
            src={challenge?.image}
            alt=""
          />
          <div className="destinations-one__content">
            <h2 className="destinations-one__title">
              <Link href={`/challenge-program/${challenge?.name}`}>{challenge?.name}</Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleChallengeLevel;
