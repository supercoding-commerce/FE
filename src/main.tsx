import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import Chat from '@/components/chat/Chat';
import GlobalStyle from '@/styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Chat />
    <App />
  </React.StrictMode>,
);
