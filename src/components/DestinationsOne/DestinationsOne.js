import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";
import Link from "next/link";

const DestinationsOne = ({data}) => {
  return (
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Hot Destination</span>
          <h2 className="section-title__title">
            Here you can find experiences by destination
          </h2>
        </div>
        <div style={{ textAlign:"right" }}>
        <Link href="/destinations">View All</Link>
        </div>
        <Row className="masonary-layout">
          {data?.tribeRegions?.slice(0, 6)?.map((item) => (
            <SingleDestination key={item._id} destination={item} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
