import Head from 'next/head'
import { Editor } from '../components/organisms'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Slate Editor - Areatomic</title>
                <meta
                    name="description"
                    content="Editeur de texte par Areatomic"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Editor />
        </div>
    )
}
