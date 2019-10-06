import {
    ADD_BOOK_ERROR,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_LOADING,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_SUCCESS,
    EDIT_BOOK_SUCCESS,
    EDIT_BOOK_ERROR,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_SUCCES,
    FETCH_BOOKS_LOADING
} from '../actions/types'

const defaultState = {
    books:[],
    error: null,
    isLoading: false
}

const bookReducer = (state = default) => {

}