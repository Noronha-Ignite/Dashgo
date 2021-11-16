import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido').trim(),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, ...formState },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log({ email, password });
  };

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        width='100%'
        maxW={360}
        bg='gray.800'
        padding='8'
        borderRadius={8}
        direction='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input
            name='email'
            type='email'
            label='Email'
            error={errors.email}
            {...register('email', { required: 'E-mail obrigatório' })}
          />

          <Input
            name='password'
            type='password'
            label='Senha'
            {...register('password')}
            error={errors.password}
          />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
