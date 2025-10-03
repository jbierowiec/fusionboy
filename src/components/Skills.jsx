import { Icon } from "@iconify/react";

const tools = [
  { name: "Tinkercad", icon: "simple-icons:tinkercad", color: "#FF6F00" },
  { name: "Fusion 360", icon: "simple-icons:autodesk", color: "#FF6A00" },
  { name: "AutoCAD", icon: "simple-icons:autocad", color: "#E4002B" },
  { name: "Revit", icon: "simple-icons:autodeskrevit", color: "#0078D7" },
  { name: "SolidWorks", icon: "simple-icons:solidworks", color: "#E2231A" },
  { name: "Onshape", icon: "simple-icons:onshape", color: "#1B5FAA" },
];

export default function Skills() {
  return (
    <>
      <h2 className="mb-2">Skills &amp; Tooling</h2>
      <p className="text-secondary mb-4">
        Parametric modeling, assemblies, technical drawings, STL/STEP prep, CAM
        toolpaths, and fabrication handoff.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {tools.map((t) => (
          <div className="col" key={t.name}>
            <div className="bg-white border rounded-4 shadow-sm p-4 h-100 d-flex align-items-center">
              <div
                className="me-4 d-flex align-items-center justify-content-center rounded-3 bg-body-secondary"
                style={{ width: 96, height: 96 }}
              >
                <Icon
                  icon={t.icon}
                  width="56"
                  height="56"
                  style={{ color: t.color }}
                />
              </div>
              <div>
                <h4 className="mb-1">{t.name}</h4>
                <div className="text-secondary small">
                  Production-ready models • Tolerances • Export: STEP / STL /
                  DXF
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
