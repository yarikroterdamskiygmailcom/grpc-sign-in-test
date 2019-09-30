const TOKEN_KEY = 'auth_token';

export class TokenService {
    static getToken(): string {
        return window.localStorage[TOKEN_KEY];
    }

    static saveToken(token: string) {
        window.localStorage[TOKEN_KEY] = token;
    }

    static destroyToken(): void {
        window.localStorage.removeItem(TOKEN_KEY);
    }
}
