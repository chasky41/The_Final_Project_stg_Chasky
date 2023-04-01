import "./index.scss";
import {Container, Row, Col, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}>
          <Card className="p-1 bg-secondary">
            <h2>RENDS NOUS VISITE</h2>
            <p>
              <FaMapMarkerAlt /> Immeuble café Rihab, 6eme étage - 60000 Oujda
            </p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-4 bg-secondary">
            <h2>APPELLE NOUS</h2>
            <p>
              <FaPhone /> +212 704-338109
            </p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-4 bg-secondary">
            <h2>SUIS-NOUS</h2>
            <p>
              <FaInstagram /> @home_of_gaming_48
            </p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-4 bg-secondary">
            <h2>CONTACTE NOUS</h2>
            <p>
              <FaEnvelope /> homeofgamiing@gmail.com
            </p>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={12}>
          <h2 className="local">Trouvez Nous :</h2>
          <Card>
            <iframe
              title="Our Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.060996493095!2d-1.9212659843297897!3d34.6784099804402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7865f32f74d8c3%3A0x98cffbbb7881d50!2sHome%20of%20gaming!5e0!3m2!1sen!2sma!4v1679681892271!5m2!1sen!2sma`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;