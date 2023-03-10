import { db } from "../datalayer/config"
import { query, collection, where, getDocs } from "firebase/firestore"

import { useState, useEffect, useCallback } from 'react'

interface userDataTypes {
    userName: string
    messagingId: string
    profileUrl: string
}

interface idType {
    type: string
    id: string
}

function useUserData(id: idType) {
    const [userData, setUserData] = useState<userDataTypes>({ userName: '', messagingId: '', profileUrl: 'profileImages/defaultProfile.png' })

    useEffect(() => {
        let isMounted = true

        async function getUserData() {
            try {
                const userQuery = query(collection(db, 'data'), where(id.type === 'messagingId' ? 'messagingId' : 'userId', '==', id.id))
                const querySnapshot = await getDocs(userQuery)

                const data: any = {
                    userName: querySnapshot.docs.map((doc) => doc.data().username),
                    messagingId: querySnapshot.docs.map((doc) => doc.data().messagingId),
                    profileUrl: querySnapshot.docs.map((doc) => doc.data().profileUrl)
                }

                if (isMounted) {
                    setUserData({ userName: data.userName[0], messagingId: data.messagingId[0], profileUrl: data.profileUrl[0] })
                }

            } catch(err) {
                setUserData({ userName: '', messagingId: '', profileUrl: 'profileImages/defaultProfile.png' })
            }
        }

        getUserData()

        return () => {
            isMounted = false
        }
    }, [])

    return userData
}

export default useUserData