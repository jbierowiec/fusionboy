// src/components/Services.jsx
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const services = [
  {
    title: "3D Modeling",
    lead: "Clean, parametric CAD for ready-to-make parts.",
    bullets: [
      "Parts/enclosures/assemblies",
      "Fits & tolerances",
      "STEP / STL / drawings",
    ],
    cta: "Start a Model",
  },
  {
    title: "3D Design",
    lead: "From idea to manufacturable design package.",
    bullets: [
      "Requirements & materials",
      "DFM for print/CNC",
      "BOM & revisions",
    ],
    cta: "Discuss Design",
  },
  {
    title: "3D Printing",
    lead: "Functional FDM prints with tuned profiles.",
    bullets: ["PLA / PETG / ABS", "Strength-oriented setup", "Post-processing"],
    cta: "Request a Print",
  },
  {
    title: "CNC Parts",
    lead: "CAM toolpaths and machined components.",
    bullets: [
      "Stock/fixturing/probing",
      "Tools, feeds & speeds",
      "Fit checks & iteration",
    ],
    cta: "CNC Quote",
  },
];

export default function Services() {
  return (
    <>
      <h2 className="mb-2">Services &amp; Pricing</h2>
      <p className="text-secondary mb-4">
        Every project is unique—materials, tolerances, and complexity drive
        cost. Get a free quote.
      </p>

      {/* 2×2 on md+, 1× on mobile */}
      <Row className="row-cols-1 row-cols-md-2 g-4">
        {services.map((s) => (
          <Col key={s.title}>
            <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex flex-column">
              <div className="d-flex align-items-start mb-2">
                <div
                  className="rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center me-3"
                  style={{ width: 52, height: 52 }}
                >
                  <span className="fw-bold text-primary">3D</span>
                </div>
                <div>
                  <h4 className="mb-1">{s.title}</h4>
                  <div className="text-secondary">{s.lead}</div>
                </div>
              </div>

              <ul className="mt-3 mb-4 ps-4">
                {s.bullets.map((b, i) => (
                  <li key={i} className="mb-1">
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button href="#contact" variant="primary">
                  {s.cta}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}
