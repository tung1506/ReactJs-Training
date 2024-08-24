import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import fetchProductsEpic from "./fetchProductEpic";

export default () => {
    const epic$ = new BehaviorSubject(combineEpics(
        fetchProductsEpic
    ));
    const rootEpic = (action$, store) =>
        epic$.mergeMap(epic =>
            epic(action$, store)
        );
    return rootEpic
}
