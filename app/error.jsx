"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // İsteğe bağlı olarak hatayı bir hata izleme servisi'ne gönderebilirsiniz
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Bir şeyler yanlış gitti!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => reset()}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Tekrar Dene
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
}
