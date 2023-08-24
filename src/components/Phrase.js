import styles from './Phrase.module.css'

function Phrase() {

    return (
        <div className={styles.phraseContainer}>
            <p className={styles.phraseContent}>Hello World</p>
        </div>
    )
}

export default Phrase