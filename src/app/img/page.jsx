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
                <Image src={images} className={styled.imageCar} alt='myimage'/>

                {/* External Image */}

                <Image src={'https://cdn.britannica.com/87/2087-004-264616BB/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg'
            } alt='image' className='externalImage' width={1000} height={1000}/>




            <Image src={'https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F09%2FUntitled-design-14.jpg&signature=3de86691d6ab8d950654a02334fd2774'} alt='2ndImage' width={1000} height={1000}/>
            </section>
        </>
    )
}

export default page