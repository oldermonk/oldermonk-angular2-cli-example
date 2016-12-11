export const selectedUser = (state: any = {id: null, name: '', company: '', place: ''}, {type, payload}) => {
    switch (type) {
        case 'SELECTED_USER':
            return payload;
        default:
            return state;
    }
}