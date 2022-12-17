import Head from "next/head"

const Index = () => {
  return (
    <>
      <Head>
        <title>auth-demo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="m-10">
        <p>Current environment: {process.env.NODE_ENV}</p>
      </main>
    </>
  )
}

export default Index