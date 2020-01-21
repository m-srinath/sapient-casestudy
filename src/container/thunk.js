import { service } from '../utility/services';
import { getCharacterList } from './action';

export const getCharacter = () => {
    let requestUrl = 'https://rickandmortyapi.com/api/character/';
    const dataset = {
        method: "GET",
        url: requestUrl
    };

    return (dispatch) => {
        try {
            service.callApi(dataset, true)
            .then(obj => {
                if (obj && obj.results) {
                    dispatch(getCharacterList(obj.results));
                }
                
            });
         } catch (error) {
             console.log(error);
        }
    };
}
