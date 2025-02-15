import React from "react";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 mb-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-4">
              <div className="w-auto p-4">
                <a className="inline-block" href="#">
                  <img src="assets/logos/zanrly-logo.svg" alt />
                </a>
              </div>
              <div className="w-auto p-4">
                <ul className="-m-6">
                  <li className="inline-flex p-6">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                      href="#"
                    >
                      Products
                    </a>
                  </li>
                  <li className="inline-flex p-6">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="inline-flex p-6">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="inline-flex p-6">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                      href="#"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="inline-flex p-6">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-auto p-4">
                <div className="flex flex-wrap -m-4">
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src="assets/images/insta.svg" alt />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src="assets/images/twitter.svg" alt />
                    </a>
                  </div>
                  <div className="w-auto p-4">
                    <a className="block" href="#">
                      <img src="assets/images/footers/fb.svg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center font-bold">
          <span>Ⓒ Copyright. All rights reserved by</span>
          <a className="text-blue-500 hover:text-blue-600" href="#">
            Zanrly
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
