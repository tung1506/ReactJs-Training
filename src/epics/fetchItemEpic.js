import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { fetchItemsSuccess, fetchItemsFailure, FETCH_ITEMS_REQUEST } from '../actions/actions';

async function fetchItems() {
    const session = localStorage.getItem('session');

    try {
        const response = await fetch('test.json');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Unexpected response format');
        }

        // Assuming that each item in the array is a string
        data.forEach(item => {
            if (typeof item !== 'string') {
                throw new Error('Invalid item data');
            }
        });

        return fetchItemsSuccess(data); // Return the successful action
    } catch (error) {
        return fetchItemsFailure(error.message); // Return the failure action
    }
}

function fetchItemsEpic(action$) {
    return action$.ofType(FETCH_ITEMS_REQUEST).pipe(
        switchMap(() => fetchItems()),
        catchError(() => {
            // Handle any unexpected errors
            return of(fetchItemsFailure('An unexpected error occurred.'));
        })
    );
}

export default fetchItemsEpic;
