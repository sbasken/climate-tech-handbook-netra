import React from 'react'
import styles from "./ImageCard.module.css";
import clsx from "clsx";
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai';

    interface CardProps {
        title: string;
        description: string;
        imageUrl: string;
        linkUrl: string;
    }

    const ImageCard: React.FC<CardProps> = ({
        title,
        description,
        imageUrl,
        linkUrl,
    }) => {

    const characterLimit = 65;
    let truncatedDescription = description;
    if (truncatedDescription.length > characterLimit) {
        // Find the last space within the character limit
        const lastSpaceIndex = truncatedDescription.lastIndexOf(' ', characterLimit);
        if (lastSpaceIndex !== -1) {
            truncatedDescription = truncatedDescription.substring(0, lastSpaceIndex) + '...';
        } else {
            truncatedDescription = truncatedDescription.substring(0, characterLimit) + '...';
        }
    }


    return (
        <Link
            href={linkUrl}
            className={styles.cardButton}
        >
            <div className={styles.cardContainer}>
                <img className={styles.cardImg} src={imageUrl} alt={title} />
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{truncatedDescription}
                        <AiOutlineArrowRight />
                    </p>
                    
                </div>
            </div>
        </Link>
    )
}

export default ImageCard