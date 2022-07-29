import React, { useState, useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'
import Card from './Card'

const Cards = () => {
    const item = {
        id: 0,
        attributes: {
            name: "mnlth",
            price: 3,
            src: "https://lh3.googleusercontent.com/gp39NTyxBPazqowYV9XTFxAU4eNk1i7FlmonHW4Zr7eS9UxEvrZ7f04rOLEhDxcuGxsbUx1Rm_N6Ky_Dp4A1ZQYHFAaEWj5YdBF0qg=s0"
        }
    }

    const styles = {
        container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
        title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
        cards: `flex items-center  flex-wrap gap-[80px]`,
    }
    const { assets } = useContext(AmazonContext)

    return (
        <div className={styles.container}>
            <div className={styles.title}>New Release</div>
            <div className={styles.cards}>
                <Card key={item.id} item={item.attributes} />
            </div>
        </div>
    )
}

export default Cards