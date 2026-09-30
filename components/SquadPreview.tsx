import SquadPreview from "../components/SquadPreview";

const steps = [
  "Upload de captura",
  "Vision AI",
  "Resolución de jugadores",
  "Datos de cartas",
  "Analysis Engine",
  "Recomendación del AI Coach",
];

const metrics = [
  { label: "Eficiencia", value: "94%" },
  { label: "Tiempo", value: "12s" },
  { label: "Confianza", value: "8.7/10" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-coach-bg text-slate-100">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-coach-blue to-coach-blue2 font-black text-white shadow-glow">
              AC
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">eFootball</p>
              <h1 className="text-lg font-semibold text-white">AI Coach</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#workflow" className="transition hover:text-white">Workflow</a>
            <a href="#insights" className="transition hover:text-white">Insights</a>
          </nav>

          <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
            Demo
          </button>
        </header>

        <section className="grid items-center gap-12 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-coach-blue/40 bg-coach-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-coach-blue2">
              Tactical analysis
            </div>

            <h2 className="max-w-xl text-5xl font-black leading-tight tracking-[-0.06em] text-white md:text-6xl">
              Diagnóstico instantáneo de tu XI ideal.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Sube una captura, analiza el once, compara roles y recibe recomendaciones de
              mejora basadas en rendimiento real del equipo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-gradient-to-r from-coach-blue to-coach-blue2 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
                Analizar mi plantilla
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                Ver demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-coach-panel/80 px-4 py-3 backdrop-blur">
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-coach-blue/20 via-transparent to-coach-blue2/20 blur-2xl" />
            <SquadPreview />
          </div>
        </section>

        <section id="features" className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "IA de visión",
              body: "Lee la plantilla y extrae nombres, posiciones, valoraciones y roles visibles en la captura.",
            },
            {
              title: "Optimizador táctico",
              body: "Genera el once más equilibrado según formación, posición y contribución por rol.",
            },
            {
              title: "Recomendaciones claras",
              body: "Indica qué jugador encaja mejor en cada slot y qué cambia si pones un perfil diferente.",
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-coach-panel p-6 shadow-[0_0_30px_rgba(47,123,255,0.08)]">
              <div className="mb-4 h-10 w-10 rounded-xl bg-coach-blue/20" />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.body}</p>
            </div>
          ))}
        </section>

        <section id="workflow" className="mt-24 rounded-[2rem] border border-white/10 bg-coach-panel p-6 md:p-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Flujo</p>
              <h3 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white">Análisis completo</h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
              MVP
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-coach-panel2 p-5">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-coach-blue text-xs font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-base font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
