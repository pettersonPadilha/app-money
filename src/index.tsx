import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  //Dados pre-cadastrado
  seeds(server) {
    server.db.loadData({
      transactions : [
        {
          id: 1,
          title: 'freenlace de website',
          type: 'deposit',
          category: 'dev',
          amount: 3500,
          createAt: new Date('2022-05-10 10:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1500,
          createAt: new Date('2022-05-10 15:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
