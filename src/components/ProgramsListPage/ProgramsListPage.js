import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToursListLeft from "./ProgramsListLeft";
import ToursListRight from "./ProgramsListRight";

const ProgramListPage = ({data}) => {
  return (
    <section className="tours-list">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <ToursListLeft />
          </Col>
          <Col xl={8} lg={7}>
            <ToursListRight data={data}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramListPage;
