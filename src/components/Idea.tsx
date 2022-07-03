import { FaArrowUp, FaArrowDown, FaTrash } from 'react-icons/fa'
import { Box, Text, Heading, ButtonGroup, IconButton, useColorMode } from "@chakra-ui/react"
import { IdeaModel } from '../models/IdeaModel'
import { db } from "../FirebaseConfig"
import { doc, setDoc, deleteDoc } from 'firebase/firestore'

export const Idea: React.FC<IdeaModel> = (idea: IdeaModel) => {

    const { colorMode } = useColorMode()

    const upVoteIdea = async () => {
        await setDoc(doc(db, "ideas", idea.id), {
            votes: idea.votes + 1
        }, { merge: true });
    }

    const downVoteIdea = async () => {
        if (idea.votes) {
            await setDoc(doc(db, "ideas", idea.id), {
                votes: idea.votes - 1
            }, { merge: true });
        }
    }

    const deleteIdea = async () => {
        await deleteDoc(doc(db, 'ideas', idea.id))
    }

    return (
        <Box
            display={'flex'}
            flexDir={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            my={'1em'}
            border={'1px'}
            borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.100'}
            padding={'1.5em'}
            borderRadius={'1em'}>
            <Box>
                <Heading mb={'0.5em'} size={'sm'}>{idea.content}</Heading>
                <Text fontSize={'xs'}>{idea.createdDate?.toDate().toLocaleString()}</Text>
                <ButtonGroup mt={'0.5em'}>
                    <IconButton onClick={() => upVoteIdea()} size={'sm'} aria-label='Upvote' icon={<FaArrowUp />} />
                    <IconButton onClick={() => downVoteIdea()} size={'sm'} aria-label='Downvote' icon={<FaArrowDown />} />
                    <IconButton onClick={() => deleteIdea()} size={'sm'} aria-label='Delete idea' icon={<FaTrash />} colorScheme={'red'} />
                </ButtonGroup>
            </Box>
            <Heading>{idea.votes}</Heading>
        </Box>
    )
}