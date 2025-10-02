import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const services = [
  { title: '3D Modeling', desc: 'Clean parametric CAD for parts, enclosures, brackets, and assemblies with proper tolerances.', cta: 'Start a Model' },
  { title: '3D Design', desc: 'Concept to manufacturable design: requirements, sketches, materials, fasteners, BOM.', cta: 'Discuss Design' },
  { title: '3D Printing', desc: 'FDM prints (PLA/PETG/ABS) with tuned profiles. Post-processing available.', cta: 'Request a Print' },
  { title: 'CNC Parts', desc: 'CAM toolpaths and machining for metals/plastics. Fit checks and iteration included.', cta: 'CNC Quote' },
]

export default function Services() {
  return (
    <>
      <h2 className="mb-2">Services &amp; Pricing</h2>
      <p className="text-secondary mb-4">
        Every project is unique—materials, tolerances, and complexity drive cost. Click below to get a free quote.
      </p>

      <Row className="g-4">
        {services.map(s => (
          <Col md={6} lg={3} key={s.title}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{s.title}</Card.Title>
                <Card.Text className="text-secondary flex-grow-1">{s.desc}</Card.Text>
                <Button href="#contact" variant="primary">{s.cta}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-4 p-3 border rounded bg-white">
        <strong>Pricing note:</strong> Quotes consider modeling time, revisions, print hours/material, and CNC toolpaths/setup.
      </div>
    </>
  )
}
