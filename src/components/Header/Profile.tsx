import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Gabriel Noronha</Text>
          <Text color='gray.300' fontSize='small'>
            inc.691@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Gabriel Noronha' src='https://github.com/Noronha1612.png' />
    </Flex>
  );
}
