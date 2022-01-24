import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DB Joinery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="DB Joinery" />
        <p className="description">
          Contact for quotes and availability
        </p>
      </main>

      <Footer />
    </div>
  )
}
