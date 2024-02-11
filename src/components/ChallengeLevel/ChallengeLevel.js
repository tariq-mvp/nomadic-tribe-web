import challengeLevel from "@/data/challengeLevel";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleChallengeLevel from "./SingleChallengeLevel";

const ChallengeLevel = () => {
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
          {challengeLevel.slice(0, 6).map((destination) => (
            <SingleChallengeLevel key={destination.id} destination={destination} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChallengeLevel;
