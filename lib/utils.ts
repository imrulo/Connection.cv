export const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME || "Connection.cv";
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://connection.cv";

export function getDomainInfo() {
  const name = domainName.toLowerCase().replace(".cv", "");
  const industry = inferIndustry(name);
  const tone = inferTone(name);
  const keywords = inferKeywords(name);

  return {
    name: domainName,
    displayName: domainName,
    industry,
    tone,
    keywords,
    year: "2015",
    valuation: "$5,000–$15,000+",
  };
}

function inferIndustry(domain: string): string {
  if (domain.includes("connection") || domain.includes("connect")) {
    return "Networking & Professional Services";
  }
  if (domain.includes("tech") || domain.includes("ai")) {
    return "Technology & AI";
  }
  if (domain.includes("health") || domain.includes("wellness")) {
    return "Health & Wellness";
  }
  if (domain.includes("luxury") || domain.includes("premium")) {
    return "Luxury & Premium Services";
  }
  return "Business & Professional Services";
}

function inferTone(domain: string): string {
  if (domain.includes("connection") || domain.includes("network")) {
    return "professional, credible, modern";
  }
  return "exclusive, authoritative, trustworthy";
}

function inferKeywords(domain: string): string[] {
  const base = [
    "networking",
    "professional connections",
    "B2B services",
    "business networking",
    "professional services",
  ];
  return base;
}

