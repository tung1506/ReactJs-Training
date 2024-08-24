import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { fetchSuccess, fetchFail } from '../actions/actions';
import { FETCH_LOADING } from '../constants/constants';

function FetchProductsEpic(action$) {
    return action$.ofType(FETCH_LOADING)
        .switchMap(() =>
            Observable.from(
                fetch('/test.json').then(response => {
                    const contentType = response.headers.get('Content-Type');

                    return response.text().then(text => {
                        if (response.ok) {
                            if (contentType && contentType.includes('application/json')) {
                                return JSON.parse(text);
                            } else {
                                throw new Error('Unexpected content type');
                            }
                        } else {
                            throw new Error('Network response was not ok.');
                        }
                    });
                })
            )
                .map(response => fetchSuccess(response))
                .catch(error => Observable.of(fetchFail(error.message)))
        );
}

export default FetchProductsEpic;
