if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/ascii-table/sw.js', { scope: '/ascii-table/' })})}