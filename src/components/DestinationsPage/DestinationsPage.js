import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleDestination from "../DestinationsOne/SingleDestination";

const DestinationsPage = ({data}) => {
  return (
    <section className="destinations-one destinations-page">
      <Container>
        <Masonry className="row position-relative">
          {data?.tribeRegions?.map((item) => (
            <SingleDestination key={item._id} destination={item} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default DestinationsPage;
