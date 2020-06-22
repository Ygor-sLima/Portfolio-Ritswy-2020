import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const TOKEN_KEY = "ritswy-token";

export const isAutenticado = () => cookies.get(TOKEN_KEY) != null;

export const getCookie = () => cookies.get(TOKEN_KEY);

export const armazenarCookie = token => {
    cookies.set(TOKEN_KEY, token, {
        path: '/',
        maxAge: 600 * 6,
    });
}

export const removerCookie = () => {
    cookies.remove(TOKEN_KEY);
}