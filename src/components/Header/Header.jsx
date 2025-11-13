import React from 'react';
import { useTelegram } from '../../hook/useTelegram';
import Button from '../button/button';
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();


    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;