import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Notice of Privacy Practices | Premier Psychiatry of Wellington',
  description: 'HIPAA Notice of Privacy Practices for Premier Psychiatry of Wellington.',
};

export default function PrivacyPractices() {
  return (
    <LegalPage title="Notice of Privacy Practices">
      <p className="mb-6"><strong>Effective Date:</strong> April 30, 2026</p>

      <p className="mb-6 font-bold uppercase tracking-wide">
        This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Our Commitment</h2>
      <p className="mb-6">
        Premier Psychiatry of Wellington is committed to protecting the privacy of your protected health information (PHI). We are required by the Health Insurance Portability and Accountability Act (HIPAA) and applicable Florida law to maintain the privacy of your PHI, give you this notice of our legal duties and privacy practices, and follow the terms of the notice currently in effect.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">How We May Use and Disclose Your PHI</h2>
      <p className="mb-6">
        We may use and disclose your PHI without your written authorization for the following purposes:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Treatment.</strong> To provide, coordinate, or manage your psychiatric care, including consulting with other providers involved in your treatment.</li>
        <li><strong>Payment.</strong> To bill and collect payment for services from you, your insurance company, or another payer.</li>
        <li><strong>Health-Care Operations.</strong> For internal operations such as quality assessment, training, licensure, and business management.</li>
        <li><strong>As Required by Law.</strong> When federal, state, or local law requires disclosure (for example, mandated reporting of suspected abuse or neglect).</li>
        <li><strong>Public Health and Safety.</strong> To prevent or lessen a serious and imminent threat to the health or safety of you or others, or to comply with public-health reporting.</li>
        <li><strong>Judicial and Administrative Proceedings.</strong> In response to a court order, subpoena, or other lawful process, with appropriate safeguards.</li>
      </ul>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Special Protections for Psychotherapy Notes and Substance-Use Records</h2>
      <p className="mb-6">
        Most uses or disclosures of psychotherapy notes require your written authorization. Records of substance-use-disorder treatment are subject to additional protection under 42 CFR Part 2.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Uses and Disclosures Requiring Your Authorization</h2>
      <p className="mb-6">
        Any other use or disclosure of your PHI not described in this notice will be made only with your written authorization. You may revoke an authorization in writing at any time, except to the extent we have already acted in reliance on it.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Your Rights</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Right to Inspect and Copy.</strong> You may request to inspect and obtain a copy of your PHI in our records.</li>
        <li><strong>Right to Amend.</strong> You may request that we amend PHI you believe is incorrect or incomplete.</li>
        <li><strong>Right to an Accounting of Disclosures.</strong> You may request a list of certain disclosures of your PHI.</li>
        <li><strong>Right to Request Restrictions.</strong> You may request restrictions on certain uses and disclosures of your PHI.</li>
        <li><strong>Right to Request Confidential Communications.</strong> You may request that we communicate with you in a specific way or at a specific location.</li>
        <li><strong>Right to a Paper Copy of This Notice.</strong> You may request a paper copy of this notice at any time.</li>
        <li><strong>Right to Be Notified of a Breach.</strong> You will be notified if a breach of your unsecured PHI occurs.</li>
      </ul>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Our Responsibilities</h2>
      <p className="mb-6">
        We are required to maintain the privacy of your PHI, provide you with this notice, follow the terms of the notice currently in effect, and notify you if a breach of your unsecured PHI occurs. We reserve the right to change this notice and to make the revised notice effective for PHI we already have as well as PHI we receive in the future.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Complaints</h2>
      <p className="mb-6">
        If you believe your privacy rights have been violated, you may file a complaint with us by calling (561) 834-5705 or emailing aylin@premierpsychiatrywellington.com. You may also file a written complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, 200 Independence Avenue SW, Washington, DC 20201, or at https://www.hhs.gov/ocr/. You will not be retaliated against for filing a complaint.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Contact</h2>
      <p className="mb-6">
        Privacy Officer, Premier Psychiatry of Wellington. Phone: (561) 834-5705. Email: aylin@premierpsychiatrywellington.com.
      </p>
    </LegalPage>
  );
}
