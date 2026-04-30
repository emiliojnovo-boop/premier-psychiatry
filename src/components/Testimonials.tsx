export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F7F5F0] py-16 md:py-24 scroll-mt-20" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#25323D] mb-8">
          Verified Provider Profiles
        </h2>
        <p className="font-lato text-[16px] md:text-[18px] text-center text-[#4A5568] max-w-2xl mx-auto mb-12 leading-relaxed">
          To protect patient privacy under HIPAA, this site does not display individual patient testimonials. You can read verified reviews and provider information through the third-party directories below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-[#4A5568] font-medium">
          <a href="https://www.zocdoc.com/doctor/aylin-trujillo-aprn-rn-664547" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#5B8583] transition-colors focus:outline-none focus:underline p-1">
            <span className="text-[#FEC037] text-xl" aria-hidden="true">★</span> Verified on ZocDoc
          </a>
          <span className="hidden sm:inline opacity-30">|</span>
          <a href="https://www.psychologytoday.com/us/psychiatrists/aylin-sanchez-wellington-fl/1672846" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#5B8583] transition-colors focus:outline-none focus:underline p-1">
            <span className="bg-[#7CA18C] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold leading-none" aria-hidden="true">✓</span> Verified on Psychology Today
          </a>
        </div>
      </div>
    </section>
  );
}
