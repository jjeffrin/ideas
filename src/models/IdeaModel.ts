import { Timestamp } from 'firebase/firestore'

export interface IdeaModel {
    id: string
    content: string
    createdDate: Timestamp
    votes: number
}