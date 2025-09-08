import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
  return (
    <InputGroup flex="1" maxW="800px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.400" />
      </InputLeftElement>
      <Input
        placeholder="Search games…"
        variant="filled"
        rounded="full"
        bg="gray.700"
        _hover={{ bg: 'gray.600' }}
        _focus={{ bg: 'gray.600' }}
        color="white"
      />
    </InputGroup>
  )
}

export default Search