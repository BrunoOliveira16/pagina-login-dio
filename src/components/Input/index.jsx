import { InputContainer, InputText, IconContainer, ErrorText } from './styles';
import { Controller } from 'react-hook-form';

const Input = ({ name, control, errorMessage, leftIcon, ...rest }) => {
  return (
    <>
        <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <Controller 
              name={name}
              control={control}
              rules={{required: true}}
              render={({ field }) => <InputText {...field} {...rest} />}
          />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };