import React from "react";

function Footer(props) {
  return (
    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
      <div className="container flex px-3 py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">RSC Shop</h3>
              <p className="py-4">We carry the freshest athletic apparel and accessories, like on-trend hoodies, joggers, backpacks, shoes, hats, jeans, ‘90s styles, and everything you need to finish off your look.</p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">Social</h3>
              <ul className="list-reset items-center pt-3">
                <li>
                  <a className="inline-block no-underline hover:text-black hover:underline py-1" href="#">
                    Social Link 1
                  </a>
                </li>
                <li>
                  <a className="inline-block no-underline hover:text-black hover:underline py-1" href="#">
                    Social Link 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
