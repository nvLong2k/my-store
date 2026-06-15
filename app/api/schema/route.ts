export async function GET() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ATC Fulfillment",
    url: "https://www.atcfulfillment.com",
    logo: "https://www.atcfulfillment.com/images/2aOboQaz7kj8UAqPWzsVxOxj7TC9XPXGuxAv2iQ4.jpg",
    description:
      "Discover premium products made in the USA and Vietnam. Trusted fulfillment and sourcing solutions for businesses worldwide.",
    sameAs: [
      // Add your social media profiles here
      // "https://www.facebook.com/...",
      // "https://twitter.com/...",
      // "https://www.linkedin.com/company/...",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      // Add your contact details
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Vietnam",
      },
    ],
  };

  return Response.json(jsonLd, {
    headers: {
      "Content-Type": "application/ld+json",
    },
  });
}
