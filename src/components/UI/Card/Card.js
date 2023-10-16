import React from 'react';
import { CardDiv, CardTitle } from './card.style';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Card({ id, img = '', title = '', subtitle = '', btnValue = '', btnClick, favClick,favStatus }) {
    return (
        <CardDiv>
            <IconButton aria-label="cart" onClick={favClick}>

                <Badge color="primary">
                    {
                        favStatus ? <FavoriteIcon /> : <FavoriteBorderIcon color="action" />

                    }
                </Badge>
            </IconButton>
            <CardTitle>{title}</CardTitle>
            <CardTitle>{subtitle}</CardTitle>
            {
                btnValue ? <Button type='primary' onClick={btnClick}>AddToCart</Button> : null
            }

        </CardDiv>
    );
}

export default Card;