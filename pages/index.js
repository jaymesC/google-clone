import Head from 'next/head'
import Avartar from '../components/Avartar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"
// import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Google-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

        {/* Avatar */}
        <Avartar url="https://coaching.papareact.com/ai9" />
        </div>

      </header>

      {/* Body */}

      {/* footer */}
     
    </div>
  )
}
