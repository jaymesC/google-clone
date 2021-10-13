import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react"

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null)

    const homePage = () => {
        router.push('/')
    }
  return (
    <header>
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={homePage}
      />
      <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
      </form>
    </header>
  );
}

export default Header;
