//Core
import { takeEvery, all, call } from "redux-saga/effects";

//Types
import { types } from "../types";

//Workers
import { createPost, fetchPosts, removePost } from "./workers";

export function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchPost () {
    yield all([
        call(watchFetchPosts),
        call(watchCreatePost),
        call(watchRemovePost)
    ]);
}
