import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>United States</p>
      </div>
      <div>
        <div><GlobeIcon className="h-5 text-green-700"/>Carbon neutral since 2007</div>
      </div>
    </footer>
  );
}

export default Footer;
