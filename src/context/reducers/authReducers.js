const initialState = {
    logged: false,
};
/**
 * Reducer function for the counter state.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @returns {Object} - The updated state.
 */
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                logged: true,
            };
        default:
            return state;
    }
};

export default authReducer;
