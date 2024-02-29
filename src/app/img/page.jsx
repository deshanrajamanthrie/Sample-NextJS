import React from 'react'
import styled from './image.module.css'
import images from '../../../public/assets/cr4.jpg';
import Image from 'next/image';

function page() {
    console.log(images);
    return (
        <>
            <section className={styled.imageArea}>
                <h1 className={styled.title}>Image Component</h1>
                <Image src={images} style={{width:'100%',objectFit:'cover'}} alt='myimage'/>
            </section>
        </>
    )
}

export default page