import React from 'react';
import { FilePlus, Layers, Keyboard, Zap } from 'lucide-react';
import Slideshow from '../components/Slideshow';

export const meta = {
  title: 'Getting Started',
  subtitle: 'How this slide deck is organized',
};

const Frame = ({ children }) => (
  <div className="h-full min-h-full bg-[#0f172a] text-slate-100 p-8 md:p-12">
    {children}
  </div>
);

const IntroSlide = () => (
  <Frame>
    <div className="flex items-center gap-3 text-amber-400 mb-6">
      <Zap className="w-7 h-7" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase">Power System</span>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
      Build slides, drop them in sections
    </h1>
    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
      Each topic is a file in <code className="text-amber-300">sections/</code>.
      Inside a topic, you compose slide components and pass them to{' '}
      <code className="text-amber-300">Slideshow</code>. No App.jsx changes needed.
    </p>
  </Frame>
);

const FileSlide = () => (
  <Frame>
    <div className="flex items-center gap-2 text-blue-400 mb-6">
      <FilePlus className="w-5 h-5" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase">Add a topic</span>
    </div>
    <h2 className="text-3xl font-bold mb-6">Name files with a trailing number</h2>
    <p className="text-slate-400 mb-6 max-w-2xl">
      PascalCase plus the order index. Vite discovers every <code className="text-amber-300">.jsx</code> file automatically.
    </p>
    <pre className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-200 overflow-x-auto">
{`sections/PowerFlow1.jsx
sections/FaultAnalysis2.jsx
sections/TransientStability3.jsx`}
    </pre>
  </Frame>
);

const PatternSlide = () => (
  <Frame>
    <div className="flex items-center gap-2 text-emerald-400 mb-6">
      <Layers className="w-5 h-5" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase">Section pattern</span>
    </div>
    <h2 className="text-3xl font-bold mb-6">Export meta, then a Slideshow</h2>
    <pre className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-200 overflow-x-auto leading-relaxed">
{`import Slideshow from '../components/Slideshow';

export const meta = {
  title: 'Power Flow',
  subtitle: 'Newton-Raphson on the bus network',
};

const Intro = () => <div className="p-10">...</div>;

export default function PowerFlow() {
  return (
    <Slideshow
      theme="dark"
      slides={[{ component: Intro, title: 'Intro' }]}
    />
  );
}`}
    </pre>
  </Frame>
);

const NavSlide = () => (
  <Frame>
    <div className="flex items-center gap-2 text-violet-400 mb-6">
      <Keyboard className="w-5 h-5" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase">Navigation</span>
    </div>
    <h2 className="text-3xl font-bold mb-6">Two levels of movement</h2>
    <ul className="space-y-4 text-slate-300 text-lg max-w-2xl">
      <li>
        <span className="font-semibold text-white">Top bar</span> — switch topics
        (dropdown, Prev / Next).
      </li>
      <li>
        <span className="font-semibold text-white">Bottom bar</span> — switch slides
        inside this topic. Arrow keys work too.
      </li>
      <li>
        Do not add your own page shell, header, or progress bar — App and Slideshow
        already own those.
      </li>
    </ul>
  </Frame>
);

export default function GettingStarted() {
  return (
    <Slideshow
      theme="dark"
      slides={[
        { component: IntroSlide, title: 'Intro' },
        { component: FileSlide, title: 'Files' },
        { component: PatternSlide, title: 'Pattern' },
        { component: NavSlide, title: 'Navigation' },
      ]}
    />
  );
}
