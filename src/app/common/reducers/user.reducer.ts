export const users = (state: any = [], {type, payload}) => {
    switch (type) {
        case 'ADD_USERS':
            return payload;
        case 'CREATE_USER':
            return [...state, payload];
        default:
            return state;
    }
}