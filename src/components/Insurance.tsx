export default function Insurance() {
  return (
    <section id="insurance" className="bg-[#F0EDE8] py-16 md:py-24 scroll-mt-20" aria-labelledby="insurance-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="insurance-heading" className="font-playfair text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#25323D] mb-4">
          Insurance & Self-Pay
        </h2>
        <p className="font-lato text-[16px] md:text-[18px] text-[#4A5568] max-w-2xl mx-auto leading-relaxed mb-6">
          Premier Psychiatry of Wellington is a self-pay practice. Many PPO plans offer out-of-network mental-health benefits &mdash; I&apos;m happy to provide a superbill you can submit to your insurer for partial reimbursement.
        </p>
        <p className="font-lato text-[16px] md:text-[18px] text-[#4A5568] max-w-2xl mx-auto leading-relaxed mb-8">
          Under the federal No Surprises Act, you&apos;ll receive a{" "}
          <a href="/good-faith-estimate" className="underline text-sage hover:text-teal">Good Faith Estimate</a>{" "}
          of expected charges before your first visit.
        </p>
        <a
          href="tel:5618345705"
          className="inline-block bg-apricot text-charcoal px-8 py-3 rounded-full font-bold hover:bg-teal hover:text-white transition-colors min-h-[44px]"
        >
          Call (561) 834-5705 to Discuss Coverage
        </a>
      </div>
    </section>
  );
}
