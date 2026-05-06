import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  display: 'swap', 
  variable: '--font-playfair' 
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"], 
  display: 'swap', 
  variable: '--font-lato' 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premier-psychiatry-one.vercel.app"),
  title: "Premier Psychiatry of Wellington | Aylin Sanchez, PMHNP-BC, APRN",
  description: "Bilingual (English/Spanish) telehealth psychiatry for adults, adolescents, and preteens across Florida. Medication management, therapy, and support for anxiety, depression, ADHD, trauma, and more. Aylin Sanchez, PMHNP-BC.",
  openGraph: {
    title: "Premier Psychiatry of Wellington | Aylin Sanchez, PMHNP-BC, APRN",
    description: "Bilingual (English/Spanish) telehealth psychiatry for adults, adolescents, and preteens across Florida. Medication management, therapy, and support for anxiety, depression, ADHD, trauma, and more. Aylin Sanchez, PMHNP-BC.",
    url: "https://premier-psychiatry-one.vercel.app",
    siteName: "Premier Psychiatry of Wellington",
    images: [
      {
        url: "/Aylin.png",
        width: 1200,
        height: 630,
        alt: "Aylin Sanchez, PMHNP-BC — Premier Psychiatry of Wellington",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Psychiatry of Wellington | Aylin Sanchez, PMHNP-BC, APRN",
    description: "Bilingual (English/Spanish) telehealth psychiatry for adults, adolescents, and preteens across Florida. Medication management, therapy, and support for anxiety, depression, ADHD, trauma, and more. Aylin Sanchez, PMHNP-BC.",
    images: ["/Aylin.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Premier Psychiatry of Wellington",
  "description": "Bilingual (English/Spanish) telehealth psychiatry for adults, adolescents, and preteens across Florida. Medication management, therapy, and support for anxiety, depression, ADHD, trauma, and more. Aylin Sanchez, PMHNP-BC.",
  "url": "https://premier-psychiatry-one.vercel.app",
  "telephone": "(561) 834-5705",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wellington",
    "addressRegion": "FL",
    "postalCode": "33414",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "State", "name": "Florida" },
  "priceRange": "$125-$250",
  "paymentAccepted": "Amex, Cash, Discover, Mastercard, PayPal, Venmo, Visa, Zelle",
  "openingHours": "Mo-Fr 09:00-17:00",
  "medicalSpecialty": "Psychiatric",
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Psychiatric Evaluation" },
    { "@type": "MedicalProcedure", "name": "Medication Management" },
    { "@type": "MedicalTherapy", "name": "Individual Therapy (CBT, DBT, CPT, ACT)" }
  ],
  "employee": {
    "@type": "Person",
    "name": "Aylin Sanchez",
    "jobTitle": "PMHNP-BC, APRN",
    "knowsLanguage": ["English", "Spanish"]
  }
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Aylin Sanchez, PMHNP-BC",
  "medicalSpecialty": "Psychiatry",
  "telephone": "+1-561-834-5705",
  "url": "https://premier-psychiatry-one.vercel.app",
  "identifier": [
    { "@type": "PropertyValue", "propertyID": "NPI", "value": "1790517449" },
    { "@type": "PropertyValue", "propertyID": "FL APRN License", "value": "APRN11034892" }
  ],
  "areaServed": { "@type": "State", "name": "Florida" },
  "availableService": { "@type": "MedicalTherapy", "name": "Telehealth Psychiatric Care" }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do you prescribe controlled substances?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when clinically appropriate. Prescribing decisions — including Schedule II controlled substances such as stimulants for ADHD — are made after a thorough clinical evaluation and ongoing monitoring. Controlled-substance prescribing follows federal DEA regulations and Florida's electronic prescribing rules. Not every patient will require or receive medication." } },
    { "@type": "Question", "name": "What happens during the first appointment?", "acceptedAnswer": { "@type": "Answer", "text": "We'll spend about 60 minutes reviewing your mental health history, current symptoms, medications, and goals. By the end, you'll have a clear treatment plan." } },
    { "@type": "Question", "name": "Do you offer therapy, medication, or both?", "acceptedAnswer": { "@type": "Answer", "text": "I offer both medication management and supportive individual therapy. We can also coordinate with your existing therapist if you have one." } },
    { "@type": "Question", "name": "How does telehealth work?", "acceptedAnswer": { "@type": "Answer", "text": "All sessions are conducted via secure, HIPAA-compliant video. You'll receive a link before your appointment. All you need is a private space and a device with a camera." } },
    { "@type": "Question", "name": "What ages do you treat?", "acceptedAnswer": { "@type": "Answer", "text": "I see preteens (10+), adolescents, adults, and seniors (65+)." } },
    { "@type": "Question", "name": "Do you speak Spanish?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! I'm fully bilingual (English/Spanish) and provide care in both languages. Se habla español." } },
    { "@type": "Question", "name": "What if I need help between appointments?", "acceptedAnswer": { "@type": "Answer", "text": "I'm available for questions between sessions. For emergencies, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room." } },
    { "@type": "Question", "name": "How do I check if my insurance is accepted?", "acceptedAnswer": { "@type": "Answer", "text": "Premier Psychiatry of Wellington is a self-pay practice. Many PPO plans offer out-of-network mental-health benefits — I'm happy to provide a superbill you can submit to your insurer for partial reimbursement. Call (561) 834-5705 to discuss your options." } },
    { "@type": "Question", "name": "What is a Good Faith Estimate?", "acceptedAnswer": { "@type": "Answer", "text": "Federal law requires self-pay providers to give you a written estimate of expected charges before non-emergency care. Yours will arrive before your first session and detail the $250 evaluation fee, $125 follow-up fee, and any anticipated additional costs." } }
  ]
};

const jsonLdString = JSON.stringify(jsonLd);
const physicianJsonLdString = JSON.stringify(physicianJsonLd);
const faqJsonLdString = JSON.stringify(faqJsonLd);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML= __html: jsonLdString 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML= __html: physicianJsonLdString 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML= __html: faqJsonLdString 
        />
      </head>
      <body className="font-lato bg-background text-charcoal pb-16 md:pb-0">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-charcoal focus:px-4 focus:py-2 focus:rounded focus:outline-none focus:ring-2 focus:ring-sage">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
