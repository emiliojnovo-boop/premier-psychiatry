import LegalPage from '@/components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notice of Nondiscrimination | Premier Psychiatry of Wellington',
  description:
    'Premier Psychiatry of Wellington complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex.',
  robots: { index: true, follow: true },
};

export default function Nondiscrimination() {
  return (
    <LegalPage title="Notice of Nondiscrimination">
      <p className="mb-6">
        <strong>Effective date:</strong> May 6, 2026
      </p>

      <p className="mb-6">
        Premier Psychiatry of Wellington complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, sex, sexual orientation, or gender identity. Premier Psychiatry of Wellington does not exclude people or treat them differently because of any of these characteristics.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Free Language Services
      </h2>
      <p className="mb-4">
        Premier Psychiatry of Wellington provides services in both English and Spanish. Aylin Sanchez, PMHNP-BC, is a fluent bilingual provider. If you need services in another language, please call ahead so accommodations can be arranged.
      </p>
      <p className="mb-6">
        ATENCI&Oacute;N: si habla espa&ntilde;ol, tiene a su disposici&oacute;n servicios psiqui&aacute;tricos en su propio idioma. Llame al{' '}
        <a href="tel:5618345705" className="text-sage hover:text-teal underline">
          (561) 834-5705
        </a>
        .
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        Auxiliary Aids and Services
      </h2>
      <p className="mb-6">
        If you have a disability and need help with communication &mdash; such as written materials in a different format, or assistance during a telehealth visit &mdash; please call{' '}
        <a href="tel:5618345705" className="text-sage hover:text-teal underline">
          (561) 834-5705
        </a>{' '}
        to request what you need. Reasonable accommodations are provided free of charge.
      </p>

      <h2 className="font-playfair text-[24px] md:text-[28px] font-bold text-charcoal mt-12 mb-6">
        How to File a Civil Rights Complaint
      </h2>
      <p className="mb-6">
        If you believe Premier Psychiatry of Wellington has failed to provide these services or discriminated in another way on the basis of race, color, national origin, age, disability, or sex, you can file a grievance by calling{' '}
        <a href="tel:5618345705" className="text-sage hover:text-teal underline">
          (561) 834-5705
        </a>
        .
      </p>
      <p className="mb-4">
        You may also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, electronically through the Office for Civil Rights Complaint Portal, available at{' '}
        <a
          href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:text-teal underline"
        >
          https://ocrportal.hhs.gov/ocr/portal/lobby.jsf
        </a>
        , or by mail or phone at:
      </p>
      <p className="mb-6 pl-6">
        U.S. Department of Health and Human Services<br />
        200 Independence Avenue, SW<br />
        Room 509F, HHH Building<br />
        Washington, D.C. 20201<br />
        1-800-368-1019, 800-537-7697 (TDD)
      </p>
      <p className="mb-6">
        Complaint forms are available at{' '}
        <a
          href="https://www.hhs.gov/ocr/complaints/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:text-teal underline"
        >
          https://www.hhs.gov/ocr/complaints/index.html
        </a>
        .
      </p>
    </LegalPage>
  );
}
