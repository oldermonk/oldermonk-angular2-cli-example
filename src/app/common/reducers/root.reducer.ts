import {StoreModule} from "@ngrx/store";
import {users} from "./user.reducer";
import {selectedUser} from "./selectedUser.reducer";

export default StoreModule.provideStore({users, selectedUser});