import React from 'react';
import { OutlineButton, PrimaryButton, SecondaryButton } from './buttonstyle';

function Button({ children, btnType = 'primary', btnDisabled, ...rest }) {
    const CheckButtoon = () => {
        switch (btnType) {
            case 'primary':
                return PrimaryButton
            case 'secondary':
                return SecondaryButton
            case 'outline':
                return OutlineButton


        }


    }

    const CustomButton = CheckButtoon();

    return (
        <>
            <CustomButton disabled={btnDisabled} {...rest}>
                {children}
            </CustomButton>        
        </>
    );
}

export default Button;