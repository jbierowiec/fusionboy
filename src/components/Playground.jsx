import "@google/model-viewer";

export default function Playground() {
  return (
    <>
      <h2 className="mb-2">Interactive Playground</h2>
      <p className="text-secondary mb-4">
        Inspect this part—zoom, orbit, and pan to explore details.
      </p>

      <div className="bg-white border rounded-4 shadow-sm p-3">
        <model-viewer
          src="/free_3d_model_wire_chair_harry_bertoia_knoll.glb"
          alt="Wire chair CAD model"
          camera-controls
          auto-rotate
          interaction-prompt="auto"
          environment-image="neutral"
          exposure="1"
          shadow-intensity="0.6"
          touch-action="pan-y"
          style={{ width: "100%", height: "65vh", background: "transparent" }}
        ></model-viewer>
      </div>
    </>
  );
}
