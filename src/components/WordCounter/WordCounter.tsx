import React, { ChangeEvent, useRef, useState } from 'react'
import { Card, CardBody, CardFooter } from '../Cards'
import styles from '@/styles/WordCounter.module.css'

const WordCounter: React.FC = () => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [wordsCount, setWordsCount] = useState<number>(0);
    const [charactersCount, setCharactersCount] = useState<number>(0);
    const [sentencesCount, setSentencesCount] = useState<number>(0);
    const [paragraphsCount, setParagraphsCount] = useState<number>(0);

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value) {
            const value: string = event.target.value;
            countWords(value);
            countCharacters(value);
            countSentences(value);
            countParagraphs(value);
        } else {
            setWordsCount(0);
            setCharactersCount(0);
            setSentencesCount(0);
            setParagraphsCount(0);
        }
    }

    const countWords = (value: string) => {
        const wordsArray = value.split(" ").filter((word) => word !== "");
        setWordsCount(wordsArray.length);
    }

    const countCharacters = (value: string) => {
        setCharactersCount(value.length);
    }

    const countSentences = (value: string) => {
        const sentencesArray = value.split(/[.!]/);
        setSentencesCount(sentencesArray.length - 1);
    }

    const countParagraphs = (value: string) => {
        const paragraphsArray = value.split("\n").filter((p) => p.trim() !== "");
        setParagraphsCount(paragraphsArray.length);
    }

    const handleReset = () => {
        if (textareaRef.current) {
            textareaRef.current.value = "";
            setWordsCount(0);
            setCharactersCount(0);
            setSentencesCount(0);
            setParagraphsCount(0);
        }
    }

    return (
        <Card>
            <CardBody>
                <button onClick={handleReset} className={`${styles.clear}`}>Clear</button>
                <textarea ref={textareaRef} autoCorrect="on" onInput={handleInput} className={`${styles.textarea}`} placeholder='Enter your text here...'></textarea>
            </CardBody>
            <CardFooter>
                <div className={`${styles.output_container}`}>
                    <div className={`${styles.output}`}>
                        <p className={`${styles.words}`}>Words</p>
                        <span data-word-count>{wordsCount}</span>
                    </div>
                    <div className={`${styles.output}`}>
                        <p className={`${styles.characters}`}>Characters</p>
                        <span data-character-count>{charactersCount}</span>
                    </div>
                    <div className={`${styles.output}`}>
                        <p className={`${styles.sentences}`}>Sentences</p>
                        <span data-sentence-count>{sentencesCount}</span>
                    </div>
                    <div className={`${styles.output}`}>
                        <p className={`${styles.paragraphs}`}>Paragraphs</p>
                        <span data-paragraph-count>{paragraphsCount}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export { WordCounter }