//Core
import { applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";

//Middleware
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import { customThunk } from "./custom";
import createSagaMiddleware from "redux-saga";

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => "#139BFE",
        prevState: () => "#1C5FAF",
        action:    () => "#149945",
        nextState: () => "#A47104",
        error:     () => "#ff0005",
    },
});

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

const middleware = [sagaMiddleware, customThunk, routerMiddleware];

if (__DEV__) {
    middleware.push(logger);
}

const enchancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enchancedStore, sagaMiddleware, history };
