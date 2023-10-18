import FingerprintJS from '@fingerprintjs/fingerprintjs'
import cookies from 'packages/cookies'
import { v4 as uuidv4 } from 'uuid'

export const sessionID = () => {
    let session_id = cookies.get('session_id')

    if (!session_id) {
        session_id = uuidv4()
        cookies.set('session_id', session_id, { expires: 1 })
    }

    return session_id
}

export const visitorID = async () => {
    let visitor_id = cookies.get('visitor_id')
    if (!visitor_id) {
        const fp = await FingerprintJS.load()
        const { visitorId } = await fp.get()

        visitor_id = visitorId

        cookies.set('visitor_id', visitor_id)
    }

    return visitor_id
}
