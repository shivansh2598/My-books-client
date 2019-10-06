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

export const fetchBookSuccess = (data) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

export const fetchBooks = () => {
    return (dispatch) => {
        dispatch(fetchBookSuccess(books))
    }
}