Design a complete premium website UI for SlateWings — a modern 3D printing brand selling lifestyle, home decor, gaming, and creative products. The website is a product showcase catalog (not a direct store). Purchases happen via external links to Amazon, Etsy, Flipkart, and similar marketplaces.

DESIGN SYSTEM
Brand personality: Futuristic. Precision-engineered. Premium. Trustworthy.
Inspiration: Apple Store, Tesla, Linear, Stripe, Vercel.
Color Tokens:

Background: #F8FAFC
Primary Dark: #1E293B
Electric Blue: #3B82F6
Cyan Glow: #06B6D4
Emerald: #10B981
Card Surface: #FFFFFF
Muted Text: #64748B

Typography: Manrope (headings) + Inter (body). Bold weights for headlines. Light weights for supporting text.
Design details: 8px grid. 16–24px border radius on all cards. Glassmorphism on overlays. Subtle box shadows. Generous white space. Micro-interaction annotations on hover states.

PAGE 1 — HOME / CATALOG
Sticky Navbar
Logo (SlateWings wordmark + icon) on left. Nav links: Home, Products, Categories, About, Contact. Right side: Search icon, Instagram icon, WhatsApp icon. Mobile: Hamburger menu with slide-out drawer.
Hero Section
Full-width. Dark background (#1E293B). Abstract 3D printing visual with glowing filament lines and blueprint grid texture in background.
Headline (large, white): "Creative Ideas, Precision Printed"
Subheadline (muted cyan): "Premium 3D printed products for makers, gamers, collectors, and everyday innovators."
Two CTA buttons: Primary — "Explore Products" (Electric Blue fill). Secondary — "Contact Us" (ghost/outline style).
Featured Categories Row
Horizontal scrollable row of 8 category chips/cards: Home Decor, Gaming Accessories, Desk Organizers, Miniatures, Tools, Functional Prints, Custom Designs, Gift Items.
Each card: Large icon or image, category name, product count badge. Hover: lift + soft cyan glow.
Product Catalog Grid
Responsive 3-column grid (desktop), 2-column (tablet), 1-column (mobile).
Filter bar above grid: Search input, Category dropdown, Tag pills, Sort by (Latest / Popular).
Each product card:

Product image (fills card top, zoom on hover)
Category badge (top-left corner, colored pill)
Product name (bold)
Short description (2 lines, muted)
Tag row (small gray pills)
Platform icons row: Amazon, Etsy, Flipkart (small recognizable logos)
Two buttons: "Quick View" (ghost) + "View Details" (solid blue)
Card hover: lift shadow, image zoom, subtle blue border glow.

About SlateWings Section
Split layout. Left: brand story text + 4 stat blocks (Products Created, Happy Customers, Print Accuracy %, Material Options). Right: editorial-style product lifestyle image with layered design elements.
Testimonials Section
3-column cards. Each card: avatar, name, star rating (5 stars), review text. Glassmorphism card style on light background.
Contact Section
Two-column. Left: contact details with icons — Phone, Email, WhatsApp, Instagram, Facebook, YouTube, LinkedIn. Right: minimal contact form (Name, Email, Message, Submit button).
Footer
Dark background (#1E293B). 4 columns: Quick Links, Categories, Social Media, Contact Info. Bottom bar: copyright + "Made with precision by SlateWings."

PAGE 2 — PRODUCT DETAIL PAGE
Top Product Section — Two Column Layout
LEFT — Image Gallery:

Large featured image (main view)
Row of 4–5 thumbnails below
Left/right navigation arrows
Fullscreen/expand icon on main image
Mobile: horizontal swipeable gallery

RIGHT — Product Info Card:

Category + Tags row at top
Product Name (large, bold)
Star rating + review count
Short product summary (3–4 lines)
Spec pills: Material, Dimensions, Print Technology, Color Options
Primary CTA button: "Buy on Marketplace" (large, Electric Blue, full width)
Secondary CTA: "Contact for Customization" (outlined, below)
Marketplace buttons row: Amazon, Etsy, Flipkart, Shopify, Meesho — each as a small branded pill button with logo

Product Details Tabs Section
Full-width tabbed panel below top section.
Tabs: Description | Specifications | Materials | Usage Instructions | FAQs
Each tab: Large content area supporting rich text, images, tables, bullet lists.
FAQs: Accordion expand/collapse style.
Product Features Row
5 horizontal feature cards: High Durability, Precision Printing, Lightweight Design, Premium Finish, Eco-Friendly Material.
Each card: icon, title, one-line description. Hover: card lifts with cyan accent.
Product Gallery — Masonry Grid
Pinterest-style image grid. Lifestyle photos, close-ups, usage examples. Hover: subtle zoom + overlay with expand icon.
Related Products Carousel
Horizontal scroll. Heading: "You Might Also Like". Cards match catalog style. Based on matching tags/category. Each card: image, name, tags, "View Details" button.
Custom Order CTA Section
Full-width dark banner (#1E293B). Headline: "Need a Custom Version?" Subtext about customization availability. Two buttons: WhatsApp (green) + Email Us (outlined).

GLOBAL INTERACTIONS TO ANNOTATE
Mark these as interaction notes on the Figma frames:

Navbar: transparent on top, solid on scroll
Product cards: lift + glow on hover
Image gallery: swipe + keyboard navigation
Tab switching: smooth underline animation
Scroll reveal: fade-up on section entry
Floating WhatsApp button: bottom-right corner on all pages
Skeleton loading states on product cards


DELIVERABLE
Two fully designed desktop frames with responsive variants (tablet + mobile) for each page. Use auto-layout throughout. Apply component structure: navbar, cards, buttons, tabs as reusable components. Annotate interaction states (default, hover, active, loading).