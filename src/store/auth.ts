//bu yerdagi codeni optimal emas uni ustida ishlayapman 
import { defineStore } from 'pinia';
import { State } from "@/utils/interfaces"
import axios from '@/plugins/axios';
export const useAuth = defineStore({
    id: 'auth',
    state: (): State => ({
        user: null,
        token: null,
        current_date: '2024-01-10',
        active_date: null,
        loadingForm: false
    }),
    actions: {
        setUser() {
            this.user = JSON.parse(localStorage.getItem('user') || '{}');
            this.token = localStorage.getItem('token');
            // this.current_date = JSON.parse(localStorage.getItem('current_date') || "{}");
        },
        async postData(form: any) {
            try {
                this.loadingForm = true;
                const { status, data } = await axios.post(`/site/auth/`, form);
                const { message } = data;
                if ((status >= 200 && status <= 299) && data.code == 200) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.result));
                    // localStorage.setItem('current_date', JSON.stringify(data.current_date));
                    this.setUser();
                    return { status: true, message };
                } else {
                    return { status: false, message }
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.loadingForm = false;
            }
        },
    },
})