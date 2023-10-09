import Cookies from 'js-cookie'

export interface ICookies {
    get(key: string): string | null
    getAll(): { [key: string]: string }
    set(key: string, value: string, option?: Cookies.CookieAttributes): void
    remove(key: string, option?: Cookies.CookieAttributes): void
}
