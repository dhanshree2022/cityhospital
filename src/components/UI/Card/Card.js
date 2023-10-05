import React from 'react';
import { CardDiv, CardTitle } from './card.style';

function Card({id, img='',title='',subtitle=''}) {
    return (
        <CardDiv>
            <CardTitle>{title}</CardTitle>
            <CardTitle>{subtitle}</CardTitle>

        </CardDiv>
        );
}

export default Card;