import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = (data) => {
    console.log('Contact form:', data)
    setSent(true)
    reset()
  }

  return (
    <>
      <h2 className="mb-3">Contact</h2>
      <p className="text-secondary mb-4">
        Tell me about your project—share dimensions, materials, tolerance needs, and target timeline. I’ll reply with a tailored quote.
      </p>

      {sent && (
        <Alert variant="success" onClose={() => setSent(false)} dismissible>
          Thanks! Your message was captured (console demo). Hook this up to your email/API next.
        </Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Your name" {...register('name')} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="you@domain.com" {...register('email')} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="topic">
              <Form.Label>Topic</Form.Label>
              <Form.Control placeholder="e.g., CNC part quote, 3D print" {...register('topic')} required />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Project details…" {...register('message')} required />
            </Form.Group>
          </Col>
          <Col xs={12} className="pt-2">
            <Button type="submit" variant="primary">Send</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
