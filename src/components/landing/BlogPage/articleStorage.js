const basePath = import.meta.env.PROD ? '/Genesis/' : '/';

export const articles = [
    {
      title: "Enhancing Supply Chain Efficiency: Genesis Company's Latest Innovations",
      description: "Discover how Genesis Company is optimizing OEM supply chains with advanced manufacturing techniques and strategic partnerships, ensuring seamless production for Tier 1 manufacturers.",
      image: `${basePath}img/ArticleImages/article1.webp`,
      slug: "enhancing-supply-chain-efficiency",
      date: "2/12/2025",
      content: `
      <p>In today's fast-paced manufacturing world, supply chain efficiency is critical to success. Genesis Company has been working closely with Tier 1 manufacturers to optimize production flow, reduce bottlenecks, and increase overall efficiency.</p>
      <ul class="list-disc pl-[1.5rem]">
        <li>Reduced lead times by 20%</li>
        <li>Improved on-time deliveries</li>
        <li>Advanced predictive analytics and automation</li>
      </ul>
      <p>We continue to innovate with AI-driven logistics planning and real-time monitoring to further streamline operations.</p>
    `
    },
    {
      title: "Sustainable Manufacturing: Our Commitment to a Greener Future",
      description: "Genesis Company is leading the way in eco-friendly production methods, reducing waste, and improving energy efficiency for a more sustainable OEM industry.",
      image: `${basePath}img/ArticleImages/article2.webp`,
      slug: "sustainable-manufacturing",
      date: "12/05/2024",
      content: `
      <p class="mb-4">Sustainability is no longer optional in the modern manufacturing landscape—it's a necessity. At Genesis Company, we are committed to reducing our environmental impact while maintaining the highest standards of quality.</p>
      <p class="mb-4">Our latest initiatives include:</p>
      <ul class="list-disc pl-[1.5rem] mb-8">
        <li>Energy-efficient machinery reducing power consumption by 30%</li>
        <li>A zero-waste policy, recycling 95% of manufacturing byproducts</li>
        <li>Partnerships with eco-friendly suppliers for responsibly sourced materials</li>
      </ul>
      <p>We aim to set new benchmarks for green manufacturing across the industry.</p>
    `   
    }
  ];
