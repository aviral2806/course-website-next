'use client'
import { supabaseClient } from "../../lib/supabaseclient";
import { useState, useEffect } from "react";


export function useAuthUser() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabaseClient.auth.getUser().then(({ data: { user } }) => {
            setUser(user)
            setLoading(false)
        })

        const { data: listener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null)
        })

        return () => listener.subscription.unsubscribe()
    }, [])


    return { user, loading }
}
