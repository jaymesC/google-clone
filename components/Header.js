import Image from "next/image";
import {useRouter} from "next/router";

function Header() {
    const router = useRouter(null)
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
    </header>
  );
}

export default Header;
