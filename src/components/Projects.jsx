// src/components/Projects.jsx
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const projects = [
  {
    title: "Chess Set",
    img: "https://images.unsplash.com/photo-1604948501466-4e9b2c0f1b4a?q=80&w=1600&auto=format&fit=crop",
    desc: "Parametric chess pieces with printable tolerances; board with snap-fit inserts.",
  },
  {
    title: "Bike Tire Lever",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
    desc: "Ergonomic lever with reinforced spine; PETG print optimized for strength.",
  },
  {
    title: "Bike 360° Camera Holder (X4)",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    desc: "Handlebar mount for Insta360 X4; M5 hardware, isolators, cable routing.",
  },
  {
    title: "Assembly Sub-Part Bracket",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    desc: "CNC-ready subcomponent with datum scheme; STEP + DXF for integration.",
  },
  {
    title: "Gear Train Prototype",
    img: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=1600&auto=format&fit=crop",
    desc: "Printed spur gears; parametric module & ratio; press-fit hubs.",
  },
  {
    title: "Storage Organizer Bin",
    img: "https://images.unsplash.com/photo-1586201375754-1421e0aa2fda?q=80&w=1600&auto=format&fit=crop",
    desc: "Stackable container with label slot and interlocking rails.",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="mb-4 engrave">Projects</h2>

      <div className="metal metal-panel p-3 grid-bg">
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((p) => (
            <Col key={p.title}>
              <Card className="h-100 card-elevate">
                <div className="ratio ratio-16x9">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-100 h-100 object-fit-cover border-bottom"
                    loading="lazy"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text className="text-secondary">{p.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
