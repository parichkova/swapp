import React from 'react';
import styles from './Form.module.scss'

const Form = ({ label }) => {
    console.log(label)
    return (
        <>
            {label &&
                <div className={styles.form__title}>
                    {label}
                </div>
            }
            <form className={styles.form}>
                <div className={styles.form__controls}>
                    <input
                        type="text"
                        value="a"
                        onChange={()=>{console.log(1);}} 
                    />
                    <input
                        type="password"
                        value="a"
                        onChange={()=>{console.log(1);}}
                    />
                </div>
            </form>
        </>
    )
};

export { Form };
