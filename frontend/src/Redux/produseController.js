export const produseController = (state=[], action) => {
    switch (action.type) {
        case 'GET_PRODUSE':
            return action.payload;
        case 'ADD_PRODUS':
            return [...state, action.payload];
        case 'REMOVE_PRODUS':
            return state.filter(produs => produs.name !== action.payload.produs.name);
        default:
            return state;
    }
}