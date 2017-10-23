import moment from 'moment';
import { uniqueId, fill } from 'lodash';

const ADD_SET = Symbol('ADD_SET');
const UPDATE_SET = Symbol('UPDATE_SET');
const ATTEMPT_ROUTE = Symbol('ATTEMPT_ROUTE');
const COMPLETE_ROUTE = Symbol('COMPLETE_ROUTE');

const date = moment().format('YYMMDD');

const initialState = [
  {
    id: '1',
    color: 'grey',
    date: moment().format("MMM Do YY"),
    routes: [
      { id: '1', name: '1', attempts: 0, complete: false },
      { id: '2', name: '2', attempts: 2, complete: false },
    ]
  },
  {
    id: '2',
    color: 'purple',
    date: moment().format("MMM Do YY"),
    routes: [
      { id: '1', name: '1', attempts: 0, complete: false },
      { id: '2', name: '2', attempts: 2, complete: false },
      { id: '3', name: '3', attempts: 1, complete: true },
    ]
  },
];

const emptyRoutes = (routes) =>
  fill(new Array(routes), {}).map((_, index) => ({
    id: uniqueId(),
    name: index,
    attempts: 0,
    complete: false,
  }));

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_SET:
      console.log(action);
      return [
        ...state,
        {
          id: uniqueId(`${date}_`),
          color: action.color,
          date: action.date,
          routes: emptyRoutes(action.routes),
        }
      ];
    case UPDATE_SET:
      return state.map((set) => {
        if (set.id !== action.setId) { return set; }

        return {
          ...set,
          ...action.set,
        };
      });
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

function addSet({ color, routes, date }) {
  return {
    type: ADD_SET,
    color,
    date,
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
