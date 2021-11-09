import Link from 'next/link';
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';


import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex width='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>

            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                cursor='pointer'
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w='6'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Diego Fernandes</Text>
                    <Text fontSize='sm' color='gray.300'>
                      diego.schell.f@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={isWideVersion && <Icon as={RiPencilLine} fontSize='16' mx={!isWideVersion && '0'} />}
                    cursor='pointer'
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize='16' mx={!isWideVersion && '0'} />}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Gabriel Noronha</Text>
                    <Text fontSize='sm' color='gray.300'>
                      inc.691@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>06 de Abril, 2021</Td>}
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={isWideVersion && <Icon as={RiPencilLine} fontSize='16' mx={!isWideVersion && '0'} />}
                    cursor='pointer'
                    
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize='16' mx={!isWideVersion && '0'} />}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
