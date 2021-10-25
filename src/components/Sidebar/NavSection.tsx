import { ReactNode } from 'react';
import { Box, Text, Stack, BoxProps as ChakraBoxProps } from '@chakra-ui/react';

interface NavSectionProps extends ChakraBoxProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children, ...rest }: NavSectionProps) {
  return (
    <Box {...rest}>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>
        {title}
      </Text>
      <Stack spacing='4' mt='8' align='stretch'>
        { children }
      </Stack>
    </Box>
  );
}