import { User } from "./types";

export interface userReducerInitState {
	user: User | null;
	loading: boolean;
}
