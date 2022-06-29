import {IApiParams} from "../models/IStore";

const URL = 'https://www.googleapis.com/books/v1/volumes?q=+';
const KEY = '&key=AIzaSyDfjs2woE2N7DcVW38zBIpDljv-pCmMGtA';
const MAX_RESULTS = '&maxResults=40';


export function getApiBooks({title, category}: IApiParams) {
	const subject = category ? `+subject:${category}` : '';
	return `${URL}${title}${subject}${MAX_RESULTS}${KEY}`;
}