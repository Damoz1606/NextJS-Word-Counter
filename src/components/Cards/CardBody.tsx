import React, { ReactNode } from 'react'
import styles from '@/styles/Card.module.css'

type CardBodyProps = {
    children: ReactNode
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
    return (
        <div className={`${styles.body}`}>{children}</div>
    )
}

export { CardBody }