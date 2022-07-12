import styles from './styles.module.scss';

import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>Breve parágrafo do post</p>
          </a>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>Breve parágrafo do post</p>
          </a>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>Breve parágrafo do post</p>
          </a>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>Breve parágrafo do post</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()


  return {
    props: {}
  }
}