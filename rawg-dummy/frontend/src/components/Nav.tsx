import { Flex, Heading, HStack, IconButton } from '@chakra-ui/react'
import Search from './subCompoents/search.tsx'
import { BellIcon, AddIcon } from '@chakra-ui/icons'

const heading = "RAWG"

const Nav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      gap={4}
      px={4}
      py={3}
      borderBottomWidth="1px"
      bg="gray.900"
      color="white"
    >
      <Heading size="md" mr={4}>{heading}</Heading>

      <Search />

      <HStack spacing={3} ml={4}>
        <IconButton aria-label="Notifications" icon={<BellIcon />} variant="ghost" />
        <IconButton aria-label="Add" icon={<AddIcon />} variant="ghost" />
      </HStack>
    </Flex>
  )
}

export default Nav