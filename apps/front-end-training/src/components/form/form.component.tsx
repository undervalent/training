import * as Form from '@radix-ui/react-form';
import { Input } from '../input';
import { Button } from '../button';
import { useFormData } from './hooks';

export function SignUp() {
  const [{
    fields,
    formProps,
    successMessage,
    errorMessage
  }, { getInputProps }] = useFormData();

  return (
    <Form.Root {...formProps}>
      <Input label="First name" error={fields?.firstName?.errors} placeholder='John' {...getInputProps?.(fields.firstName, { type: 'text' })} />
      <Input label="Last name" error={fields?.lastName?.errors} placeholder='Smith' {...getInputProps?.(fields.lastName, { type: 'text' })} />
      <Input label="Address" error={fields?.address?.errors} placeholder='Smith' {...getInputProps?.(fields.address, { type: 'text' })} />
      <Input label="City" error={fields?.city?.errors} placeholder='Smith' {...getInputProps?.(fields.city, { type: 'text' })} />
      <Input label="State" error={fields?.state?.errors} placeholder='Smith' {...getInputProps?.(fields.state, { type: 'text' })} />
      <Form.Submit asChild>
        <footer>
          <Button type="reset" variant="desctructive">
            Cancel
          </Button>
          <Button>
            Submit
          </Button>
        </footer>
      </Form.Submit>
    </Form.Root>
  );
}
