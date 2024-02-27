import challengeLevel from "@/data/challengeLevel";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleChallengeLevel from "./SingleChallengeLevel";

const ChallengeLevel = ({data}) => {
  return (
    <section className="destinations-one challenge-level">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Challenge Level</span>
          <h2 className="section-title__title">
            Reaching tribes varies between an easy journey to a challenging journey
          </h2>
        </div>
        <Row className="masonary-layout">
          {data?.tribeChallenges?.map((item) => (
            <SingleChallengeLevel key={item._id} challenge={item} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChallengeLevel;
