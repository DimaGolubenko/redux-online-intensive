// Mocks
import { LocalStorage } from "./mocks/localStorage";
import { fetch } from "./mocks/fetch";

const successMesasge = "TEST_SUCCESS_MESSAGE.";
const errorMessage = "TEST_ERROR_MESSAGE.";
const token = "TEST_TOKEN";
const error = new Error(errorMessage);

const users = [
    {
        id:        "5ac0a625a50029dd2bb4a767",
        firstName: "Vincenzo",
        lastName:  "Smith",
        avatar:
            "https://lab.lectrum.io/redux/api/image/2z4qdjsxlq/placeholder.jpg",
    },
    {
        id:        "5ac0a625a50029dd2bb4a768",
        firstName: "Danika",
        lastName:  "Volkman",
        avatar:
            "https://lab.lectrum.io/redux/api/image/2z4qdjsxlq/placeholder.jpg",
    }
];

const userProfile = {
    id:        "TEST_ID",
    avatar:    "TEST_AVATAR",
    firstName: "Walter",
    lastName:  "White",
    token,
};

const credentials = {
    email:    "test@email.com",
    password: "1111",
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = "https://www.url.com";

const newName = {
    firstName: "Walter",
    lastName:  "White",
};

const newAvatar = ["avatar"];

const newPassword = {
    oldPassword: 12345,
    newPassword: 123456,
};

const ui = {
    isFetching:    { isFetching: true },
    isNotFetching: { isFetching: false },
    isOnline:      { isOnline: true },
    isOffline:     { isOnline: false },
};

global.__ = {
    users,
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseSuccess204,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    newName,
    newAvatar,
    newPassword,
    ui,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
