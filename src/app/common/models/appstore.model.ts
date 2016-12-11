import {User} from "./user.model";

export interface AppStore {
    users: User[];
    selectedUser: User;
}