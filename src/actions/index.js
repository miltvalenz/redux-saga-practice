import { ADD_ARTICLE } from '../constans/action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
};

export function getData(url) {
    return { type: "DATA_REQUESTED", payload: { url } };
}