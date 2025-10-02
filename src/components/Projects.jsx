import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const projects = [
  { title: 'Gearbox Bracket', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop', desc: 'CNC-ready aluminum bracket with parametric hole spacing and chamfers.' },
  { title: 'Custom Enclosure', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', desc: '3D printed PETG enclosure with snap-fit lid and standoffs.' },
  { title: 'Assembly Fixture', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop', desc: 'Fusion 360 assembly, exploded view, and manufacturing drawings.' },
]

export default function Projects() {
  return (
    <>
      <h2 className="mb-4">Projects</h2>
      <Row className="g-4">
        {projects.map(p => (
          <Col md={6} lg={4} key={p.title}>
            <Card className="h-100">
              <div className="ratio ratio-16x9">
                <img src={p.img} alt={p.title} className="w-100 h-100 object-fit-cover border-bottom" />
              </div>
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text className="text-secondary">{p.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
