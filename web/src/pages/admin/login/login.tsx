import { FaAt, FaChevronRight, FaLock } from 'react-icons/fa6';
import { Form, Formik, FormikHelpers } from 'formik';

import { Button } from '../../../components/buttons/button';
import Input from '../../../components/forms/input/input';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useNavigate } from 'react-router-dom';
import { z as validate } from 'zod';

interface Fields {
  email: string;
  password: string;
}

const Schema = validate.object({
  email: validate
    .string({ message: 'O campo de e-mail é obrigatório.' })
    .email('O endereço de e-mail informado não é válido.'),
  password: validate.string({ message: 'O campo de senha é obrigatório.' }),
});

export function Login() {
  const navigate = useNavigate();

  return (
    <div className='max-h-[100vh] h-[calc(100vh-3rem)] flex items-center justify-center w-full flex-col gap-16'>
      <em className='bg-logo w-[75px] h-[68px] bg-no-repeat bg-center bg-contain flex'></em>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={toFormikValidationSchema(Schema)}
        onSubmit={(
          fields: Fields,
          { setSubmitting, resetForm }: FormikHelpers<Fields>
        ) => {
          console.log(JSON.stringify(fields, null, 2));

          navigate('/admin/dashboard/vips');

          setSubmitting(false);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className='flex flex-col gap-6'>
            <Input>
              <FaAt />
              <Input.Field
                id='email'
                name='email'
                placeholder='E-mail'
                autoComplete='off'
              />
              <Input.MessageError show={Boolean(errors.email && touched.email)}>
                {errors.email}
              </Input.MessageError>
            </Input>

            <Input>
              <FaLock />
              <Input.Field
                id='password'
                name='password'
                placeholder='Senha'
                autoComplete='off'
              />

              <Input.MessageError
                show={Boolean(errors.password && touched.password)}
              >
                {errors.password}
              </Input.MessageError>
            </Input>

            <Button
              type='submit'
              disabled={
                !!(
                  (errors.email && touched.email) ||
                  (errors.password && touched.password)
                )
              }
            >
              <div className='flex gap-2 items-center justify-center relative w-full'>
                <span>Entrar</span>
                <div className='absolute right-2'>
                  <FaChevronRight />
                </div>
              </div>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
