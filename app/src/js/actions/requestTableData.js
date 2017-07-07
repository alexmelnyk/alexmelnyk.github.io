import {REQUEST_TABLE_DATA} from '../constants';
import {RECEIVE_TABLE_DATA} from '../constants';

import {fetchData} from '../libs/fetchData';

export function requestTableData(url, body) {

    if ((typeof body) === 'undefined'){
        body = {};
    }

    return (
        fetchData(REQUEST_TABLE_DATA, RECEIVE_TABLE_DATA, url, body)
    )

}
