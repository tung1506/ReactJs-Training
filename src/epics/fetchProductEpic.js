import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { fetchItemsSuccess, fetchItemsFailure, FETCH_ITEMS_REQUEST } from '../actions/actions';

function fetchItemsEpic(action$) {
    return action$.ofType(FETCH_ITEMS_REQUEST).pipe(
        switchMap(() =>
            new Promise((resolve, reject) => {
                const session = localStorage.getItem('session');
                fetch(`/test/${session}`)
                    .then(response => {
                        if (!response.ok) {
                            reject(new Error('Network response was not ok.'));
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (!Array.isArray(data)) {
                            reject(new Error('Unexpected response format'));
                        }
                        // Assuming that each item in the array is a string
                        data.forEach(item => {
                            if (typeof item !== 'string') {
                                reject(new Error('Invalid item data'));
                            }
                        });
                        resolve(fetchItemsSuccess(data)); // Resolve the promise with successful action
                    })
                    .catch(error => {
                        reject(error);
                    });
            }).then(
                result => result,            // On successful resolution
                error => fetchItemsFailure(error.message) // On rejection
            )
        ),
        catchError(() => {
            // Handle any unexpected errors
            return of(fetchItemsFailure('An unexpected error occurred.'));
        })
    );
}

export default fetchItemsEpic;
