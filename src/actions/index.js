import newsApi from '../apis/newsApi';

const apiToken = 'apiKey=TbW_UOt49vqVckY0adyfbwpEzJ8Ak0ZvYWscPEBll7_8kxWj';
const language = '&language=en&';

export const fetchNews = (keyWord) => async (dispatch) => {
    const response = await newsApi.get(
        '/search?keywords=' + keyWord + language + apiToken
    );
    dispatch({ type: 'FETCH_NEWS', payload: response.data.news });
};
