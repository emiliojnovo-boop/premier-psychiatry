import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Premier Psychiatry of Wellington',
  description: 'How Premier Psychiatry of Wellington handles information collected through this website.',
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="mb-6"><strong>Effective Date:</strong> May 6, 2026</p>

      <p className="mb-6">
        Premier Psychiatry of Wellington ("we," "our," or "us") respects your privacy. This Privacy Policy explains what information this website collects, how it is used, and the choices you have. This policy applies only to information collected through this website. Information you share during clinical care is governed by the separate <a href="/privacy-practices" className="underline text-sage hover:text-teal">Notice of Privacy Practices</a> required by HIPAA.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">1. Information We Do Not Collect on This Website</h2>
      <p className="mb-6">
        This website does not host any patient intake forms, contact forms, chat tools, scheduling widgets, or analytics trackers. We do not knowingly collect protected health information (PHI), names, dates of birth, insurance information, or any other identifiable health information through this website. Please do not send PHI through this website.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">2. Information You Choose to Send Us Directly</h2>
      <p className="mb-6">
        If you choose to call (561) 834-5705, the information you share is handled in accordance with our HIPAA Notice of Privacy Practices. Please do not send protected health information by unencrypted electronic means.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">3. Server Logs</h2>
      <p className="mb-6">
        Like most websites, our hosting provider may automatically record standard server log information (IP address, browser type, pages visited, timestamps) for security and operational purposes. These logs are retained by the hosting provider and are not used to identify individual visitors.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">4. Cookies</h2>
      <p className="mb-6">
        This website does not set advertising or tracking cookies. Essential cookies may be used by the hosting platform for site functionality.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">5. Third-Party Links</h2>
      <p className="mb-6">
        This website links to third-party services such as ZocDoc and Psychology Today. Those services have their own privacy policies, which we do not control.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">6. Children's Privacy</h2>
      <p className="mb-6">
        This website is not directed to children under 13 and we do not knowingly collect information from children under 13 through this website.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">7. Your Rights</h2>
      <p className="mb-6">
        For health information collected during clinical care, your rights are described in our <a href="/privacy-practices" className="underline text-sage hover:text-teal">Notice of Privacy Practices</a>.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">8. Changes</h2>
      <p className="mb-6">
        We may update this Privacy Policy. The effective date above will reflect the most recent revision.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">9. Contact</h2>
      <p className="mb-6">
        Questions about this Privacy Policy: (561) 834-5705.
      </p>
    </LegalPage>
  );
}
