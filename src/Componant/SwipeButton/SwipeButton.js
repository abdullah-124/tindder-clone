import React from 'react';
import './SwiperButton.css'
import { Reply, Close, Star, Favorite, FlashOn} from '@mui/icons-material'
import { IconButton } from '@mui/material'

function SwipeButtons(props) {
    return (
        <div className='swiper_button'>
            <IconButton><Reply className='swiperButton_reply' font='large' /></IconButton>
            <IconButton><Close className='swiperButton_close' font='large' /></IconButton>
            <IconButton><Star className='swiperButton_star' font='large' /></IconButton>
            <IconButton><Favorite className='swiperButton_favorite' font='large' /></IconButton>
            <IconButton><FlashOn className='swiperButton_flashOn' font='large' /></IconButton>
            
        </div>
    );
}

export default SwipeButtons; 