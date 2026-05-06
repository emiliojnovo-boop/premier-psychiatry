import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Premier Psychiatry of Wellington',
  description:
    'Premier Psychiatry of Wellington is committed to digital accessibility and conforms to WCAG 2.1 Level AA where reasonably achievable.',
  robots: { index: true, follow: true },
};

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement">
      <p className="mb-6">
        <strong>Effective date:</strong> May 6, 2026
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Our Commitment
      </h2>
      <p className="mb-6">
        Premier Psychiatry of Wellington is committed to ensuring that this website is accessible to people with disabilities. We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web Consortium (W3C).
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Conformance Status
      </h2>
      <p className="mb-6">
        This website is partially conformant with WCAG 2.1 Level AA. &ldquo;Partially conformant&rdquo; means that some parts of the content do not yet fully conform to the accessibility standard. We are actively working to identify and resolve any remaining gaps.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Accessibility Features
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Semantic HTML structure with descriptive headings and landmarks</li>
        <li>Alternative text for all meaningful images</li>
        <li>Sufficient color contrast for text and interactive elements</li>
        <li>Keyboard-accessible navigation and focus indicators</li>
        <li>Minimum 44&times;44 pixel touch targets for tap interactions</li>
        <li>Screen-reader-friendly form labels and ARIA attributes where appropriate</li>
        <li>Responsive design supporting browser zoom up to 200% without loss of content</li>
      </ul>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Telehealth Accessibility
      </h2>
      <p className="mb-6">
        For telehealth appointments, accommodations are available to support patients with vision, hearing, motor, or cognitive disabilities. To request an accommodation &mdash; including alternate communication formats, extended appointment times, or assistance navigating the telehealth platform &mdash; please call{' '}
        <a href="tel:5618345705" className="text-sage hover:text-teal underline">
          (561) 834-5705
        </a>{' '}
        when scheduling.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Feedback
      </h2>
      <p className="mb-6">
        If you encounter an accessibility barrier on this website, or if you have suggestions for how we can improve, please call{' '}
        <a href="tel:5618345705" className="text-sage hover:text-teal underline">
          (561) 834-5705
        </a>
        . We aim to respond to feedback within five business days.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Third-Party Content
      </h2>
      <p className="mb-6">
        This website may link to third-party platforms (such as ZocDoc and Psychology Today) that maintain their own accessibility policies. While we cannot guarantee the accessibility of those external sites, we welcome reports of barriers so we can advocate with those vendors on patients&apos; behalf.
      </p>
    </LegalPage>
  );
}
