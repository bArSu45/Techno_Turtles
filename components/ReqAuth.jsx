import React from 'react'

export default function ReqAuth({ children }) {

    const isAuth = false

    if (!isAuth) {
        return router.push('/auth/login')
    }
    return children
}
