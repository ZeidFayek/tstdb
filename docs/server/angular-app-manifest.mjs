
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/tstdb"
  }
],
  assets: new Map([
['index.csr.html', {size: 5700, hash: 'f57fcac1ed3a24f5c70de2de27f22861e7e1e5b84e9b831de46679c91490d33f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1198, hash: 'af55b83b8e2fb4cf2561f2b0a4c99721b2dfa0252438169bd35b221a9fd306bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 62605, hash: '5b8590bd5541a6b69f8682ca76acc9e5b70ac1351a8231f9f19c4f9a3307423e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['main-IIO3AIVH.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)}], 
['main.server.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)}], 
['styles-B3SA6HC3.css', {size: 265112, hash: 'Qc6lqRfUEFg', text: () => import('./assets-chunks/styles-B3SA6HC3_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
