import styled from "styled-components";

  const BaseButton = styled.button`
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px;
    cursor: pointer`;

  export const PrimaryButton = styled(BaseButton)`
    background: ${props  => props.disabled ? 'grey' : 'black'};
    color: #fff;

    &:hover {
        background: #0056b3;
      }`

  export const SecondaryButton = styled(BaseButton)`
    background: ${props => props.disabled ? 'grey' : '#FF6666'};
    color: #fff;

    &:hover {
        background: #383;
      }`

  export const OutlineButton = styled(BaseButton)`
    border: 2px solid black;
    background-color:${props => props.disabled ? 'grey' : 'white'}
    color: black;

    &:hover {
      background: black;
      color:white;
    }
    `
