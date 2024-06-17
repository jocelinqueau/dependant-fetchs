
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


// </React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Theme>
    <App />
  </Theme>
)
