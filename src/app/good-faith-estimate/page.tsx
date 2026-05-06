import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good Faith Estimate | Premier Psychiatry of Wellington',
  description:
    'Your right to a Good Faith Estimate under the federal No Surprises Act for self-pay psychiatric services with Aylin Sanchez, PMHNP-BC.',
  robots: { index: true, follow: true },
};

export default function GoodFaithEstimate() {
  return (
    <LegalPage title="Good Faith Estimate">
      <p className="mb-6">
        <strong>Effective date:</strong> May 6, 2026
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Your Right to a Good Faith Estimate
      </h2>
      <p className="mb-6">
        Under the federal No Surprises Act (Section 2799B-6 of the Public Health Service Act), you have the right to receive a written Good Faith Estimate of expected charges from any healthcare provider before you receive non-emergency services. This applies to all patients who are uninsured or who do not plan to use insurance to pay for their care.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        What You Can Expect
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>You have the right to a Good Faith Estimate explaining how much your care will cost.</li>
        <li>Your healthcare provider is required to give you a Good Faith Estimate in writing at least one business day before your service or item.</li>
        <li>You can request a Good Faith Estimate before scheduling a service.</li>
        <li>If you receive a bill that is at least $400 more than your Good Faith Estimate, you may dispute the bill.</li>
        <li>Make sure to save a copy of your Good Faith Estimate.</li>
      </ul>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Standard Self-Pay Fees
      </h2>
      <p className="mb-4">As of May 2026, the published self-pay fees for Premier Psychiatry of Wellington are:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Initial Psychiatric Evaluation</strong> &mdash; $250 (60 minutes)</li>
        <li><strong>Follow-up Medication Management</strong> &mdash; $125 (per visit)</li>
      </ul>
      <p className="mb-6">
        Your individual Good Faith Estimate will reflect these standard fees plus any additional services reasonably anticipated for your specific care plan. Estimates are based on information available at the time of scheduling and do not guarantee final charges.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        How to Request a Good Faith Estimate
      </h2>
      <p className="mb-6">
        Call{' '}
        <a href="tel:5618345705" className="text-sage hover:text-teal underline">
          (561) 834-5705
        </a>{' '}
        to request a Good Faith Estimate before scheduling. You will receive your written estimate at least one business day before your first appointment.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Disputing a Bill
      </h2>
      <p className="mb-6">
        If you are billed for $400 or more above your Good Faith Estimate, you have the right to dispute the bill through the federal patient-provider dispute resolution process. To start a dispute, visit{' '}
        <a
          href="https://www.cms.gov/nosurprises"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:text-teal underline"
        >
          www.cms.gov/nosurprises
        </a>{' '}
        or call 1-800-985-3059.
      </p>
      <p className="mb-6">
        Disputes must be initiated within 120 calendar days of the date on the original bill. There is a $25 fee to use the dispute process.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        For Questions
      </h2>
      <p className="mb-6">
        Call{' '}
        <a href="tel:5618345705" className="text-sage hover:text-teal underline">
          (561) 834-5705
        </a>
        . For information about your rights under federal law, visit{' '}
        <a
          href="https://www.cms.gov/nosurprises"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:text-teal underline"
        >
          www.cms.gov/nosurprises
        </a>
        .
      </p>
    </LegalPage>
  );
}
