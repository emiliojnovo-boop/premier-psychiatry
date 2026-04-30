import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms of Use | Premier Psychiatry of Wellington',
  description: 'Terms governing use of the Premier Psychiatry of Wellington website.',
};

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use">
      <p className="mb-6"><strong>Effective Date:</strong> April 30, 2026</p>

      <p className="mb-6">
        These Terms of Use govern your use of the Premier Psychiatry of Wellington website. By using this website, you agree to these Terms. If you do not agree, please do not use this website.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">1. Informational Use Only</h2>
      <p className="mb-6">
        Content on this website is provided for general informational purposes only. It is not medical advice and is not a substitute for professional psychiatric or medical evaluation, diagnosis, or treatment. Reading this website does not create a doctor-patient or clinician-patient relationship.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">2. Not for Emergencies</h2>
      <p className="mb-6">
        This website is not monitored in real time and does not provide emergency services. If you or someone you know is in crisis, call 911, call or text 988 (Suicide and Crisis Lifeline), or text HOME to 741741 (Crisis Text Line).
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">3. Florida Residents Only</h2>
      <p className="mb-6">
        Telehealth psychiatric services are provided exclusively to individuals physically located in the State of Florida at the time of service, in accordance with Florida Statute Section 456.47.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">4. Intellectual Property</h2>
      <p className="mb-6">
        All text, graphics, logos, and other content on this website are the property of Premier Psychiatry of Wellington or its licensors and are protected by copyright and other intellectual-property laws. You may not reproduce, distribute, or create derivative works without prior written permission.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">5. Third-Party Links</h2>
      <p className="mb-6">
        This website may link to third-party websites such as ZocDoc and Psychology Today. We do not control those websites and are not responsible for their content, terms, or privacy practices.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">6. No Warranties</h2>
      <p className="mb-6">
        This website and its content are provided "as is" without warranty of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">7. Limitation of Liability</h2>
      <p className="mb-6">
        To the maximum extent permitted by law, Premier Psychiatry of Wellington and its providers, employees, and contractors are not liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">8. Governing Law</h2>
      <p className="mb-6">
        These Terms are governed by the laws of the State of Florida, without regard to conflict-of-laws principles. Venue for any dispute lies exclusively in Palm Beach County, Florida.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">9. Changes</h2>
      <p className="mb-6">
        We may update these Terms. The effective date above will reflect the most recent revision.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">10. Contact</h2>
      <p className="mb-6">
        Questions about these Terms: (561) 834-5705 or aylin@premierpsychiatrywellington.com.
      </p>
    </LegalPage>
  );
}
