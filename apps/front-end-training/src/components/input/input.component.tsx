import * as Form from '@radix-ui/react-form';
import './input.styles.css';
import { FieldMetadata } from '@conform-to/react';

interface Props extends FieldMetadata {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  error: string[] | undefined;
}


export function Input(props: Props) {
  const { label, name, error, type, placeholder, ...rest } = props;

  console.log('PROPS -->', props)
  return (<Form.Field className="form-field" name={name}>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
      <Form.Label className="form-label">{label}</Form.Label>
      {error?.length && <Form.Message className="form-message">
        {error}
      </Form.Message>}
    </div>
    <Form.Control asChild>
      <input className="input" type={type} placeholder={placeholder} {...rest} />
    </Form.Control>
  </Form.Field>);
}

