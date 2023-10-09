import { ICookies } from './type'
import Cookies from 'js-cookie'

const KEY_PREFIX = '_im-'
class Pass3Cookies implements ICookies {
    get(key: string): string | null {
        return Cookies.get(KEY_PREFIX + key) ?? null
    }
    getAll(): { [key: string]: string } {
        return Cookies.get()
    }
    set(key: string, value: string, option?: Cookies.CookieAttributes | undefined): void {
        const now = new Date()
        const expires = new Date(now.setDate(now.getDate() + 30))
        Cookies.set(
            KEY_PREFIX + key,
            value,
            option ?? { sameSite: 'none', secure: true, expires: expires },
        )
    }
    remove(key: string, option?: Cookies.CookieAttributes | undefined): void {
        Cookies.remove(KEY_PREFIX + key, {
            sameSite: 'none',
            secure: true,
            ...option,
        })
    }
}

const pass3Cookies = new Pass3Cookies()
export default pass3Cookies
