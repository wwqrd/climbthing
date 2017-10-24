import moment from 'moment';
import { fill, reject } from 'lodash';
import uniqueId from '../utils/uniqueId';

const ADD_SET = Symbol('ADD_SET');
const DELETE_SET = Symbol('DELETE_SET');
const UPDATE_SET = Symbol('UPDATE_SET');
const ATTEMPT_ROUTE = Symbol('ATTEMPT_ROUTE');
const DEATTEMPT_ROUTE = Symbol('DEATTEMPT_ROUTE');
const COMPLETE_ROUTE = Symbol('COMPLETE_ROUTE');
const UNCOMPLETE_ROUTE = Symbol('UNCOMPLETE_ROUTE');

const blankRoutes = (routes) =>
  fill(new Array(routes), {}).map((_, index) => ({
    id: uniqueId(),
    name: index + 1,
    attempts: 0,
    lastAttemptDate: null,
    complete: false,
  }));

const initialState = [
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_SET:
      return [
        ...state,
        {
          id: uniqueId(),
          color: action.color,
          date: action.date,
          routes: blankRoutes(action.routes),
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
    case DELETE_SET:
      console.log(action.id);
      return reject(state, ['id', action.id]);
    case ATTEMPT_ROUTE:
      return state.map((set) => {
        if (set.id !== action.setId) { return set; }

        const routes = set.routes.map((route) => {
          if (route.id !== action.routeId) { return route; }

          return {
            ...route,
            lastAttemptDate: moment().unix(),
            attempts: route.attempts += 1,
          }
        });

        return {
          ...set,
          routes,
        };
      });
    case DEATTEMPT_ROUTE:
      return state.map((set) => {
        if (set.id !== action.setId) { return set; }

        const routes = set.routes.map((route) => {
          if (route.id !== action.routeId) { return route; }

          return {
            ...route,
            attempts: route.attempts -= 1,
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
            lastAttemptDate: !route.complete === true ? moment().unix() : route.lastAttemptDate,
            complete: !route.complete,
          }
        });

        return {
          ...set,
          routes,
        };
      });
      case UNCOMPLETE_ROUTE:
        return state.map((set) => {
          if (set.id !== action.setId) { return set; }

          const routes = set.routes.map((route) => {
            if (route.id !== action.routeId) { return route; }

            return {
              ...route,
              complete: false,
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

function deleteSet(id) {
  return {
    type: DELETE_SET,
    id
  };
}

function attemptRoute(setId, routeId) {
  return {
    type: ATTEMPT_ROUTE,
    setId,
    routeId,
  };
}

function deattemptRoute(setId, routeId) {
  return {
    type: DEATTEMPT_ROUTE,
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

function uncompleteRoute(setId, routeId) {
  return {
    type: UNCOMPLETE_ROUTE,
    setId,
    routeId,
  };
}

const actionCreators = {
  addSet,
  deleteSet,
  attemptRoute,
  completeRoute,
  deattemptRoute,
  uncompleteRoute,
};

const actionTypes = {
  ADD_SET,
  DELETE_SET,
  ATTEMPT_ROUTE,
  COMPLETE_ROUTE,
  DEATTEMPT_ROUTE,
  UNCOMPLETE_ROUTE,
};

export {
  actionCreators,
  actionTypes,
};
