import App from './App.svelte';

import { registerSW } from 'virtual:pwa-register';

import './style.css';

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
});

if (typeof window !== 'undefined') {
  import('./pwa');
}

const app = new App({
  target: document.getElementById('app')
});

export default app;