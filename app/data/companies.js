const companies = [
    {
      rank: 1,
      name: "Airbnb",
      domain: "airbnb.com",
      flag: "🇺🇸",
      description: "Book accommodations around the world.",
      visitors: "900M",
      status: "active",
      market: "T&H",  // Travel & Hospitality
      revenue: "8.4B",
      funding: "Public",
      growth: "24%",
      rating: 4.2,
    },
    {
      rank: 2,
      name: "Stripe",
      domain: "stripe.com",
      flag: "🇺🇸",
      description: "Payment processing platform for internet businesses.",
      visitors: "50M",
      status: "active",
      market: "FIN",  // Fintech
      revenue: "14B",
      funding: "2.2B",
      growth: "32%",
      rating: 4.7,
    },
    {
      rank: 3,
      name: "Notion",
      domain: "notion.so",
      flag: "🇺🇸",
      description: "All-in-one workspace for notes, docs, and collaboration.",
      visitors: "30M",
      status: "active",
      market: "PRD",  // Productivity
      revenue: "500M",
      funding: "275M",
      growth: "45%",
      rating: 4.6,
    },
    {
      rank: 4,
      name: "Discord",
      domain: "discord.com",
      flag: "🇺🇸",
      description: "Chat, voice, and video platform for communities.",
      visitors: "150M",
      status: "active",
      market: "COM",  // Communication
      revenue: "830M",
      funding: "982M",
      growth: "28%",
      rating: 4.4,
    },
    {
      rank: 5,
      name: "Vercel",
      domain: "vercel.com",
      flag: "🇺🇸",
      description: "Frontend cloud platform for fast web deployments.",
      visitors: "15M",
      status: "active",
      market: "DEV",  // Developer Tools
      revenue: "150M",
      funding: "449M",
      growth: "52%",
      rating: 4.5,
    },
    {
      rank: 6,
      name: "Canva",
      domain: "canva.com",
      flag: "🇦🇺",
      description: "Online design and publishing tool.",
      visitors: "100M",
      status: "active",
      market: "DSG",  // Design
      revenue: "1.7B",
      funding: "571M",
      growth: "36%",
      rating: 4.8,
    },
    {
      rank: 7,
      name: "Figma",
      domain: "figma.com",
      flag: "🇺🇸",
      description: "Collaborative interface design tool.",
      visitors: "20M",
      status: "acquired",
      market: "DSG",  // Design
      revenue: "400M",
      funding: "333M",
      growth: "42%",
      rating: 4.7,
    }
  ];
  
  // Add logo URL to each company
  companies.forEach(company => {
    company.logo = `https://img.logo.dev/${company.domain}?token=pk_f8BWa9CoSCOyj527NcZ2LA`;
  });
  
  export default companies;