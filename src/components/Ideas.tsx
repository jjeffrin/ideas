import { query, collection, orderBy, onSnapshot } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../FirebaseConfig"
import { IdeaModel } from "../models/IdeaModel"
import { Idea } from "./Idea"

export const Ideas = () => {

    const [ideas, setIdeas] = useState<IdeaModel[]>([]);

    useEffect(() => {
        const q = query(collection(db, `ideas`), orderBy("votes", "desc"))
        const listenerUnsubscribe = onSnapshot(q, (snapshot) => {
            setIdeas(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as IdeaModel[])
        })
        return () => {
            listenerUnsubscribe()
        }
    }, [])

    return (
        <>
            {ideas.map((idea) => {
                return <Idea key={idea.id} id={idea.id} content={idea.content} createdDate={idea.createdDate} votes={idea.votes} />
            })}
        </>
    )
}