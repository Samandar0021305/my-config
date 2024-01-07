import { TypeUserInfo } from './types';

export interface State {
	user: TypeUserInfo | null;
	token: string | null;
	current_date: string;
	active_date: string | null;
	loadingForm: boolean;
}