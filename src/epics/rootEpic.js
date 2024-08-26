import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import fetchProductsEpic from "./fetchProductEpic";
import fetchItemEpic from "./fetchItemEpic";

export default () => {
    const epic$ = new BehaviorSubject(combineEpics(
        fetchProductsEpic,
        fetchItemEpic
    ));
    const rootEpic = (action$, store) =>
        epic$.mergeMap(epic =>
            epic(action$, store)
        );
    return rootEpic
}
