import bg from "@/images/shapes/about-page-testimonial-map.png";
import shape1 from "@/images/shapes/testimonial-one-shape-2.png";
import shape2 from "@/images/shapes/testimonial-one-shape-3.png";

const testimonialOne = {
  bg,
  shape1,
  shape2,
  // tagline: "Testimonials & reviews",
  tagline: "Popular Travellers",
  title: "Our best past experiences with popular adventurers",
  // title: "What They’re Saying",
  testimonials: [
    {
      id: 1,
      image: "https://d2neuv05ura4o9.cloudfront.net/users/55/151/large.5da5d5e7ce4e87.20337948.jpg",
      review: 5,
      description: "With Jeremy, we had an amazing experience",
      client: {
        name: "The Amazigh, the Atlas Mountains & the Erg Chebi Dunes",
        role: "Central Africa",
      },
    },
{
      id: 2,
      image: "https://d2neuv05ura4o9.cloudfront.net/users/131/370/large.5e907cc1c13468.25576110.jpg",
      review: 5,
      description: "With Giulia Cimarosti, we had an amazing experience",
      client: {
        name: "The Hadzabe",
        role: "Central Africa",
      },
    },
    {
      id: 3,
      image: "https://nomadictribe-v2-production.s3.amazonaws.com/jpeg/WhatsApp%20Image%202023-04-13%20at%2011.13.14%20PM.jpeg/2023-04-15-62666c1ac1a9e9ed6da17734-77obi0h-WhatsApp%20Image%202023-04-13%20at%2011.13.14%20PM.jpeg",
      review: 5,
      description: "With Daniel Tirado, we had an amazing experience",
      client: {
        name: "The Surma(Suri)",
        role: "Central Africa",
      },
    },
  ],
};

export default testimonialOne;
