import { Box, Heading, HStack, IconButton, Text, useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from 'react-icons/fa'

export const AppHeader = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack display={'flex'} flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Heading>ideas. 💡</Heading>
                <Text>{'ideas >>> actual work ;)'}</Text>
            </Box>
            <IconButton
                onClick={() => toggleColorMode()}
                size={'sm'}
                aria-label="Toggle dark/light mode"
                icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />} />
        </HStack>
    )
}