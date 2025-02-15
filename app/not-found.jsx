import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="p-10 bg-white rounded-3xl">
          <div className="flex flex-wrap items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <img src="assets/images/http-codes/work.png" alt />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md mx-auto">
                <h3 className="font-heading text-2xl text-blue-500 font-black tracking-tight">
                  Error 404
                </h3>
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                  This page doesn’t exist
                </h2>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      href="#"
                    >
                      Go back to Homepage
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
