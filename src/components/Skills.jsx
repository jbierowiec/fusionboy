// src/components/Skills.jsx
import { Icon } from '@iconify/react'

const tools = [
  { name: 'Tinkercad', icon: 'simple-icons:tinkercad' },
  { name: 'Fusion 360', icon: 'simple-icons:autodesk' }, // closest official brand
  { name: 'AutoCAD', icon: 'simple-icons:autocad' },
  { name: 'Revit', icon: 'simple-icons:autodeskrevit' },
  { name: 'SolidWorks', icon: 'simple-icons:solidworks' },
]

export default function Skills() {
  return (
    <>
      <h2 className="mb-3">Skills &amp; Tooling</h2>
      <p className="text-secondary mb-4">
        Parametric modeling, assemblies, technical drawings, STL/STEP prep, CAM toolpaths, and fabrication handoff.
      </p>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {tools.map(t => (
          <div key={t.name} className="col">
            <div className="border rounded-3 bg-white d-grid place-items-center py-4 text-center shadow-sm h-100">
              <Icon icon={t.icon} width="64" height="64" />
              <div className="fw-semibold mt-2">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
