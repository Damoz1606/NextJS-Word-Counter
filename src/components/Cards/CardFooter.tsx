import React, { ReactNode } from 'react'
import styles from '@/styles/Card.module.css'

type CardFooterProps = {
    children: ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
    return (
        <div className={`${styles.footer}`}>{children}</div>
    )
}

export { CardFooter }