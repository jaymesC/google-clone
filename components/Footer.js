import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>United States</p>
      </div>
      <div className="grid grid-cols-1">
        <div>
            <GlobeIcon className="h-5 text-green-700"/>Carbon neutral since 2007
            </div>
      <div>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
      </div>
      <div>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
