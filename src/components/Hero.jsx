// src/components/Hero.jsx
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useMemo } from 'react'

export default function Hero() {
  // inline styles for cube only (no external CSS)
  const styles = useMemo(() => {
    const size = 200
    const face = {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      border: '1px solid rgba(0,0,0,.08)',
      display: 'grid',
      placeItems: 'center',
      background: 'white',
      boxShadow: '0 8px 24px rgba(13,110,253,.08)',
      fontWeight: 600,
    }
    return {
      hero: {
        minHeight: '90vh',
      },
      cubeScene: {
        width: `${size + 50}px`,
        height: `${size + 50}px`,
        perspective: '900px',
        margin: '0 auto',
      },
      cube: {
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        margin: '0 auto',
        transformStyle: 'preserve-3d',
        animation: 'spin 12s linear infinite',
      },
      faces: {
        front: { ...face, transform: `translateZ(${size / 2}px)` },
        back: { ...face, transform: `rotateY(180deg) translateZ(${size / 2}px)` },
        right: { ...face, transform: `rotateY(90deg) translateZ(${size / 2}px)` },
        left: { ...face, transform: `rotateY(-90deg) translateZ(${size / 2}px)` },
        top: { ...face, transform: `rotateX(90deg) translateZ(${size / 2}px)` },
        bottom: { ...face, transform: `rotateX(-90deg) translateZ(${size / 2}px)` },
      },
      // keyframes injected via <style> tag below
    }
  }, [])

  return (
    <section className="bg-body-tertiary d-flex align-items-center text-center" style={styles.hero}>
      {/* keyframes inlined so no CSS file is needed */}
      <style>{`
        @keyframes spin {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          50% { transform: rotateX(360deg) rotateY(180deg); }
          100% { transform: rotateX(720deg) rotateY(360deg); }
        }
      `}</style>

      <Container>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <h1 className="display-5 fw-bold mb-3">CAD • 3D Modeling • Prototyping</h1>
          <p className="lead text-secondary mb-4">
            I design, model, and prototype parts in TinkerCAD, Fusion 360, AutoCAD, Revit, and SolidWorks.
            Need a 3D print or CNC-milled piece? Get a free quote—pricing varies by complexity and material.
          </p>

          <div className="d-flex justify-content-center gap-2 mb-5">
            <Button href="#services" variant="primary">See Services</Button>
            <Button href="#contact" variant="outline-primary">Get a Free Quote</Button>
          </div>
        </div>

        {/* Centered cube */}
        <div className="d-flex justify-content-center">
          <div style={styles.cubeScene} aria-hidden="true">
            <div style={styles.cube}>
              <div style={styles.faces.front}>FusionBoy</div>
              <div style={styles.faces.back}>CAD</div>
              <div style={styles.faces.right}>3D</div>
              <div style={styles.faces.left}>Print</div>
              <div style={styles.faces.top}>CNC</div>
              <div style={styles.faces.bottom}>Design</div>
            </div>
          </div>
        </div>

        <small className="text-secondary d-inline-block mt-3">
          Want a real model here? Export <code>.glb</code> and use &lt;model-viewer&gt;.
        </small>
      </Container>
    </section>
  )
}
