import {create} from 'zustand';
import {persist} from 'zustand/middleware';

// 인증 정보
const initialAuthState = {
    isLogin: false,
    token: null,
};

export const useAuthStore = create(
    persist(
        (set) => ({
            ...initialAuthState,
            setAuth: (auth) => set((state) => ({ ...state, ...auth })),
            resetAuth: () => set({ ...initialAuthState }),
        }),
        { name: 'auth' }
    )
);

// 푸터 정보
const initialFooterState = {
    isShow: true,
};

export const useFooterStore = create((set) => ({
    ...initialFooterState,
    setFooter: (newState) => set((state) => ({ ...state, ...newState })),
    initFooter: () => set({ ...initialFooterState }),
}));