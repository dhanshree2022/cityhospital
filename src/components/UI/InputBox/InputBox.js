import React from 'react';
import { Input, InputError } from './input.style';

function InputBox({ errorText, ...rest }) {
    return (
        <>
            <Input {...rest} />
            <InputError errorText1={errorText}>
                {errorText}
            </InputError>
        </>

    );
}

export default InputBox;