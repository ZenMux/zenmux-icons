import { createRoot } from 'react-dom/client';
import { LazyIcon } from '../src/lazy.js';
function App() {
 return <main>
  <h1>Viewport loading verification</h1>
  <p>Top icon: Claude. Bottom icon: Gemini, initially outside the viewport.</p>
  <LazyIcon name="claude" size={48} />
  <div style={{height:1600}}>Scroll down to load Gemini.</div>
  <LazyIcon name="gemini" size={64} />
 </main>;
}
createRoot(document.getElementById('root')!).render(<App />);
