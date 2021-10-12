import Head from 'next/head'
// import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Google-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header>
        <div className="flex space-x-4 ">
          <p>About</p>
          <p>Store</p>
        </div>

        <div>
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>

      {/* Body */}

      {/* footer */}
     
    </div>
  )
}
