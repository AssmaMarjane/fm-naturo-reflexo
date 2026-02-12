//actions/type
/**
 * Action type for indicating a successful login.
 * Triggered when a user successfully logs in and receives a token.
 * @type {string}
 */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

/**
 * Action type for indicating a login failure.
 * Triggered when a user fails to log in due to incorrect credentials or other errors.
 * @type {string}
 */
export const LOGIN_FAILURE = "LOGIN_FAILURE";

/**
 * Action type for logging out a user.
 * Triggered when a user chooses to log out from the application.
 * @type {string}
 */
export const LOGOUT = "LOGOUT";

/**
 * Action type for setting user profile information.
 * Used to store the user's profile data retrieved from the server.
 * @type {string}
 */
export const SET_USER_PROFILE = "SET_USER_PROFILE";

/**
 * Action type for updating user profile information.
 * Used to update the user's profile data either locally or on the server.
 * @type {string}
 */
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";