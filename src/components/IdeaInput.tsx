import { HStack, Input, Button } from "@chakra-ui/react"
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { useState } from "react"
import { db } from "../FirebaseConfig"

export const IdeaInput = () => {

  const [idea, setIdea] = useState('')

  const addNewIdea = async () => {
    if (idea !== '') {
      await addDoc(collection(db, "ideas"), {
        content: idea,
        createdDate: Timestamp.now(),
        votes: 0
      }).then(() => {
        setIdea('')
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  return (
    <HStack my={'1em'}>
      <Input type={'text'} value={idea} placeholder={'type in any idea'} onChange={(e) => setIdea(e.target.value)} />
      <Button onClick={() => addNewIdea()}>add</Button>
    </HStack>
  )
}