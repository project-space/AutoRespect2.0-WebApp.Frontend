import styles from './styles.css';
import React from 'react';

export default class SignIn extends React.Component {
    render() {
        return (
            <div className='sign-in-container'>
                <div className='sign-in-form'>
                    <header>
                        <nav>
                            <span className='active'>Вход</span>
                            <span>Регистрация</span>
                        </nav>
                    </header>
                    <section>
                        <input placeholder='Введите логин' type='text' />
                        <input placeholder='Введите пароль' type='password' />
                    </section>
                </div>
                <div className='traffic-light'>
                    <div className='traffic-light-cell'>
                        <div className='traffic-light-item'></div>                                            
                    </div>
                    <div className='traffic-light-cell'>
                        <div className='traffic-light-item'></div>                                            
                    </div>                    
                    <div className='traffic-light-cell'>
                        <div className='traffic-light-item'></div>                                            
                    </div>
                </div>
            </div>
        )
    }
}