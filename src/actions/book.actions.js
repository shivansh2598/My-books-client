import {
    ADD_BOOK_ERROR,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_LOADING,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_SUCCESS,
    EDIT_BOOK_SUCCESS,
    EDIT_BOOK_ERROR,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_LOADING
} from './types'

import { books } from '../data'
import axios from 'axios';
import { normalize } from 'upath';

const url = "http://localhost:8000/books"

export const fetchBookSuccess = (data) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

export const fetchBooksLoading = (data) => {
    return {
        type: FETCH_BOOKS_LOADING,
        payload: data
    }
}

export const fetchBooksError = (data)=> {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: data
    }
}

const normalizeResponse = (data) =>{
    const arr = data.map(item => {
        const keys = Object.keys(item);
        keys.forEach(k => {
            item[k.toLowerCase()] = item[k];
            delete item[k];
        });

        return item;
    })

    return arr;
}

export const fetchBooks = () => {
    let isLoading = true;
    
    return (dispatch) => {
        dispatch(fetchBooksLoading(isLoading))
        return axios.get(url)
        .then((response)=>{
            const data = normalizeResponse(response.data);
            dispatch(fetchBookSuccess(data));
            isLoading = false;
            dispatch(fetchBooksLoading(isLoading))
        })
        .catch((error)=>{
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;

            dispatch(fetchBooksError(errorPayload))
            isLoading = false;
            dispatch(fetchBooksLoading(isLoading))
        })
    }
}