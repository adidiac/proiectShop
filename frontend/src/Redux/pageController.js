import PaginaPrincipala from "../Pagini/PaginaPrincipala";
export const pageController = (state={page:<PaginaPrincipala></PaginaPrincipala>}, action) => {

    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;
    }
}
