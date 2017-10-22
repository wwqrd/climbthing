import moment from 'moment';

const ADD_SET = 'ADD_SET';
const ATTEMPT_ROUTE = 'ATTEMPT_ROUTE';
const COMPLETE_ROUTE = 'COMPLETE_ROUTE';

const initialState = [
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
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_SET:
      return [
        ...state,
        {
          id: new Date().getTime(),
          color: action.color,
          date: moment().format("MMM Do YY"),
          routes: [
          ]
        }
      ];
    case ATTEMPT_ROUTE:
      return state.map((set) => {
        if (set.id !== action.setId) { return set; }

        const routes = set.routes.map((route) => {
          if (route.id !== action.routeId) { return route; }

          return {
            ...route,
            attempts: route.attempts += 1,
          }
        });

        return {
          ...set,
          routes,
        };
      });
    case COMPLETE_ROUTE:
      return state.map((set) => {
        if (set.id !== action.setId) { return set; }

        const routes = set.routes.map((route) => {
          if (route.id !== action.routeId) { return route; }

          return {
            ...route,
            complete: !route.complete,
          }
        });

        return {
          ...set,
          routes,
        };
      });
    default:
      return state;
  }
}

function addSet(color, routes) {
  return {
    type: ADD_SET,
    color,
    routes,
  };
}

function attemptRoute(setId, routeId) {
  return {
    type: ATTEMPT_ROUTE,
    setId,
    routeId,
  };
}

function completeRoute(setId, routeId) {
  return {
    type: COMPLETE_ROUTE,
    setId,
    routeId,
  };
}

const actionCreators = {
  addSet,
  attemptRoute,
  completeRoute,
};

const actionTypes = {
  ADD_SET,
  ATTEMPT_ROUTE,
  COMPLETE_ROUTE,
};

export {
  actionCreators,
  actionTypes,
};
