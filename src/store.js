import { createStore } from 'redux';

const demoState = {
  sets: [
    {
      id: '1',
      color: 'grey',
      date: new Date().toString(),
      routes: [
        { id: '1', attempts: 0, complete: false },
        { id: '2', attempts: 2, complete: false },
      ]
    },
      {
        id: '2',
        color: 'purple',
        date: new Date().toString(),
        routes: [
          { id: '1', attempts: 0, complete: false },
          { id: '2', attempts: 2, complete: false },
          { id: '3', attempts: 1, complete: true },
        ]
      },
  ],
};

const store = createStore(() => demoState);

export default store;
