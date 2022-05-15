import ArticleList from '../components/ArticleList'
import Head from 'next/head'
import Image from 'next/image'

export default function Home({ articles }) {
  return (
    <div>
      <Head><title>Maruf</title></Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const articles = await res.json()
  return { props: { articles } }
}