"use client";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-amber-700 text-white relative mt-10">
      {/* Curved top edge */}
      <div className="absolute -top-4 left-0 w-full h-5 bg-amber-700 rounded-bl-full rounded-br-full"></div>

      <div className="container mx-auto px-4 py-8">
        {/* Website name */}
        <h2 className="text-center text-2xl font-bold mb-6">
          <span className="text-amber-300">Kkwok</span>
          <span className="text-white"> & </span>
          <span className="text-amber-100">Fries</span>
        </h2>

        {/* Categories */}
       

        {/* Contact info */}
        <div className="text-center text-sm text-amber-200">
          <p>Location: Shop 3 farooq market opposite street 4 G 13 /3</p>
          <p> ++923463323775</p>
          <p> support@kkwokfries.com</p>
        </div>

        {/* Bottom line */}
        <div className="mt-6 text-center text-xs text-amber-300 border-t border-amber-600/40 pt-4">
          © {new Date().getFullYear()} Kkwok & Fries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
