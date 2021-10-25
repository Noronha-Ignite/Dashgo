import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Gabriel Noronha</Text>
        <Text color='gray.300' fontSize='small'>
          inc.691@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Gabriel Noronha' src='https://github.com/Noronha1612.png' />
    </Flex>
  );
}
