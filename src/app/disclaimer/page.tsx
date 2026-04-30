import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Disclaimer | Premier Psychiatry of Wellington',
  description: 'Important disclaimers regarding the Premier Psychiatry of Wellington website.',
};

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p className="mb-6"><strong>Effective Date:</strong> April 30, 2026</p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">No Medical Advice</h2>
      <p className="mb-6">
        The information on this website is provided for general educational and informational purposes only. It is not intended as, and should not be relied upon as, medical, psychiatric, or mental-health advice. Always seek the advice of a qualified licensed clinician with any questions you may have about a medical or mental-health condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">No Doctor-Patient Relationship</h2>
      <p className="mb-6">
        Visiting this website, reading its content, sending an email, or leaving a voicemail does not create a doctor-patient, clinician-patient, or any other professional relationship between you and Premier Psychiatry of Wellington. A clinical relationship is established only after a scheduled evaluation and the signing of required consent forms.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Not for Emergencies</h2>
      <p className="mb-6">
        This website is not monitored in real time and does not provide emergency services. If you or someone you know is in crisis, call 911, call or text 988 (Suicide and Crisis Lifeline), or text HOME to 741741 (Crisis Text Line). If you are outside the United States, contact your local emergency number.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Florida Residents Only</h2>
      <p className="mb-6">
        Telehealth psychiatric services described on this website are available only to individuals physically located in the State of Florida at the time of service, in accordance with Florida Statute Section 456.47. We are not licensed to provide services outside Florida.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Individual Results May Vary</h2>
      <p className="mb-6">
        Mental-health treatment outcomes vary by individual. No specific outcome is guaranteed. Statements on this website about treatment approaches reflect general professional practice and are not a promise of results in any particular case.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">External Links</h2>
      <p className="mb-6">
        This website may link to third-party resources, including provider directories such as ZocDoc and Psychology Today, and government resources such as cms.gov. Those websites are independent and not under our control. We are not responsible for the content, accuracy, or availability of external sites.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">No Warranty</h2>
      <p className="mb-6">
        Information on this website is provided "as is" without warranty of any kind. We make no representation that the information is complete, current, or error-free.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-charcoal mt-10 mb-4">Contact</h2>
      <p className="mb-6">
        Questions about this Disclaimer: (561) 834-5705 or aylin@premierpsychiatrywellington.com.
      </p>
    </LegalPage>
  );
}
