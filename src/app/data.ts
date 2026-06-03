export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  images: string[];
  platforms: ("amazon" | "etsy" | "flipkart")[];
  material: string;
  dimensions: string;
  printTech: string;
  colorOptions: string;
  rating: number;
  reviews: number;
  featured?: boolean;
}

export const CATEGORIES = [
  { id: "all", name: "All Products", icon: "🖨️", count: 24 },
  { id: "home-decor", name: "Home Decor", icon: "🏠", count: 8 },
  { id: "gaming", name: "Gaming Accessories", icon: "🎮", count: 5 },
  { id: "desk", name: "Desk Organizers", icon: "🗂️", count: 4 },
  { id: "miniatures", name: "Miniatures", icon: "🐉", count: 3 },
  { id: "tools", name: "Tools", icon: "🔧", count: 2 },
  { id: "functional", name: "Functional Prints", icon: "⚙️", count: 6 },
  { id: "custom", name: "Custom Designs", icon: "✨", count: 3 },
  { id: "gifts", name: "Gift Items", icon: "🎁", count: 5 },
];

export const PRODUCTS: Product[] = [
  {
    id: "dragon-miniature-set",
    name: "Dragon Miniature Set",
    category: "miniatures",
    description: "Highly detailed hand-painted dragon miniatures perfect for tabletop RPG campaigns and display collections.",
    tags: ["D&D", "tabletop", "fantasy", "collectible"],
    image: "https://images.unsplash.com/photo-1680550947859-1a2c151aea29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1680550947859-1a2c151aea29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1678572474919-7b2121a95bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1707735325033-af8b8ad6a01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1772121034582-c7d18ae49e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["amazon", "etsy"],
    material: "PLA+ Resin",
    dimensions: "8cm x 12cm x 6cm",
    printTech: "SLA Resin",
    colorOptions: "Natural, Painted",
    rating: 4.9,
    reviews: 127,
    featured: true,
  },
  {
    id: "dice-tower-pro",
    name: "Dice Tower Pro",
    category: "gaming",
    description: "Ergonomic dice tower with satisfying rattling chambers and catch tray. Built for serious tabletop gamers.",
    tags: ["dice", "gaming", "tabletop", "RPG"],
    image: "https://images.unsplash.com/photo-1772121034582-c7d18ae49e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1772121034582-c7d18ae49e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1680550947859-1a2c151aea29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1678572474919-7b2121a95bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["amazon", "etsy", "flipkart"],
    material: "PETG",
    dimensions: "15cm x 10cm x 20cm",
    printTech: "FDM",
    colorOptions: "Black, Red, Blue, Green",
    rating: 4.8,
    reviews: 89,
    featured: true,
  },
  {
    id: "geometric-desk-organizer",
    name: "Geometric Desk Organizer",
    category: "desk",
    description: "Modular hexagonal desk organizer system to keep your workspace clean and futuristic.",
    tags: ["desk", "organizer", "minimalist", "workspace"],
    image: "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1634185906003-309ce9f20c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["amazon", "flipkart"],
    material: "PLA",
    dimensions: "20cm x 15cm x 8cm",
    printTech: "FDM",
    colorOptions: "White, Black, Gray",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "honeycomb-wall-planter",
    name: "Honeycomb Wall Planter",
    category: "home-decor",
    description: "Stunning geometric honeycomb wall planter set. Perfect for succulents and small plants.",
    tags: ["plants", "wall decor", "geometric", "nature"],
    image: "https://images.unsplash.com/photo-1567684014923-1f17a1e401b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567684014923-1f17a1e401b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1558882224-dda166733046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["etsy", "amazon"],
    material: "PLA",
    dimensions: "12cm x 12cm x 10cm",
    printTech: "FDM",
    colorOptions: "White, Terracotta, Sage",
    rating: 4.6,
    reviews: 341,
    featured: true,
  },
  {
    id: "3d-printer-roses",
    name: "Sculpted Rose Bouquet",
    category: "home-decor",
    description: "Everlasting 3D printed rose bouquet with intricate petal detailing. A gift that lasts forever.",
    tags: ["roses", "gift", "floral", "decorative"],
    image: "https://images.unsplash.com/photo-1772452858776-61b8b8990655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1772452858776-61b8b8990655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1772452859015-37647ec83ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["etsy", "amazon", "flipkart"],
    material: "PLA Silk",
    dimensions: "25cm x 20cm x 8cm",
    printTech: "FDM",
    colorOptions: "Red, Pink, White, Multicolor",
    rating: 4.9,
    reviews: 512,
    featured: true,
  },
  {
    id: "cable-management-kit",
    name: "Modular Cable Mgmt Kit",
    category: "functional",
    description: "Complete cable management solution with clips, holders, and routing channels for a clutter-free desk.",
    tags: ["cables", "organization", "tech", "desk"],
    image: "https://images.unsplash.com/photo-1699029472550-93496625a430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1699029472550-93496625a430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["amazon", "flipkart"],
    material: "PETG",
    dimensions: "Various",
    printTech: "FDM",
    colorOptions: "Black, White",
    rating: 4.5,
    reviews: 178,
  },
  {
    id: "gold-bowl-decor",
    name: "Luxe Catchall Bowl",
    category: "home-decor",
    description: "Premium geometric catchall bowl with gold finish. Perfect for keys, jewelry, and everyday essentials.",
    tags: ["bowl", "luxury", "gold", "catchall"],
    image: "https://images.unsplash.com/photo-1634185906003-309ce9f20c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1634185906003-309ce9f20c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1567684014923-1f17a1e401b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["etsy", "amazon"],
    material: "PLA + Gold Spray",
    dimensions: "18cm diameter x 6cm",
    printTech: "FDM",
    colorOptions: "Gold, Silver, Bronze",
    rating: 4.7,
    reviews: 95,
  },
  {
    id: "miniature-figurine-pack",
    name: "Fantasy Figurine Collection",
    category: "miniatures",
    description: "A pack of 10 highly-detailed fantasy character figurines. Perfect for display or tabletop games.",
    tags: ["fantasy", "figurines", "collectible", "gaming"],
    image: "https://images.unsplash.com/photo-1678572474919-7b2121a95bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1678572474919-7b2121a95bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
      "https://images.unsplash.com/photo-1707735325033-af8b8ad6a01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    ],
    platforms: ["etsy", "amazon", "flipkart"],
    material: "Resin",
    dimensions: "3–8cm height",
    printTech: "SLA Resin",
    colorOptions: "Natural Gray, Painted",
    rating: 4.8,
    reviews: 264,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Mehta",
    avatar: "AM",
    rating: 5,
    text: "SlateWings' dragon miniatures are absolutely stunning. The level of detail in every scale and claw is unmatched. My D&D group was blown away!",
    role: "Tabletop Gamer",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    text: "Ordered the honeycomb wall planters and they look gorgeous in my living room. Excellent print quality, no layer lines visible. Very happy!",
    role: "Interior Designer",
  },
  {
    id: 3,
    name: "Rahul Verma",
    avatar: "RV",
    rating: 5,
    text: "The cable management kit transformed my setup. Everything snaps together perfectly. Will definitely order more products from SlateWings.",
    role: "Software Engineer",
  },
];
