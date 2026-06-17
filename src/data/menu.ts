export interface FeaturedItem {
  id: string;
  name: string;
  description: string;
  price: string;
  img: string;
  offerLabel: string;
}

export interface MenuCategory {
  name: string;
  items: { name: string; price: string; description: string }[];
}

export const FEATURED: FeaturedItem[] = [
  {
    id: "milkshake",
    name: "MILK SHAKE",
    description: "Creamy, thick, and blended to perfection.",
    price: "95",
    img: "/milkshake.png",
    offerLabel: "Fan Favourite",
  },
  {
    id: "ice-coffee",
    name: "ICE DRINKS",
    description: "Smooth, chilled, and expertly brewed.",
    price: "75",
    img: "/ice-coffee.png",
    offerLabel: "Bestseller",
  },
  {
    id: "rest-grind",
    name: "REST & GRIND",
    description: "Slow-roasted, rested, ground to order.",
    price: "110",
    img: "/rest-grind.png",
    offerLabel: "Signature",
  },
  {
    id: "the-ritual",
    name: "THE RITUAL",
    description: "A 25-second extraction. Crema like silk.",
    price: "130",
    img: "/the-ritual.png",
    offerLabel: "Classic",
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    name: "Hot Classics",
    items: [
      { name: "Espresso", price: "44", description: "Single shot, rich & bold." },
      { name: "Double Espresso", price: "55", description: "Double the intensity." },
      { name: "Cappuccino", price: "59", description: "Espresso + steamed milk + foam." },
      { name: "Latte", price: "62", description: "Smooth & creamy." },
      { name: "Flat White", price: "65", description: "Velvety microfoam." },
      { name: "Mocha", price: "72", description: "Espresso + chocolate." },
      { name: "Turkish Coffee", price: "49", description: "Traditional & strong." },
      { name: "Americano", price: "49", description: "Espresso + hot water." },
      { name: "Hot Chocolate", price: "55", description: "Rich & indulgent." },
    ],
  },
  {
    name: "Iced & Cold",
    items: [
      { name: "Iced Latte", price: "69", description: "Chilled espresso + milk." },
      { name: "Iced Spanish Latte", price: "79", description: "Sweetened condensed milk." },
      { name: "Iced Mocha", price: "79", description: "Chocolate + espresso + ice." },
      { name: "Cold Brew", price: "75", description: "Slow-steeped, smooth." },
      { name: "Affogato", price: "85", description: "Espresso over vanilla ice cream." },
      { name: "Frappuccino", price: "89", description: "Blended iced coffee." },
    ],
  },
  {
    name: "Milkshakes",
    items: [
      { name: "Ferrero Rocher", price: "95", description: "Hazelnut + chocolate." },
      { name: "Golden Oreo", price: "95", description: "Cookies & cream." },
      { name: "Caramel", price: "89", description: "Smooth caramel." },
      { name: "Strawberry", price: "89", description: "Fresh strawberry." },
      { name: "Chocolate", price: "89", description: "Rich chocolate." },
    ],
  },
  {
    name: "Sweet Treats",
    items: [
      { name: "Belgian Waffle", price: "68", description: "Golden, crispy." },
      { name: "Chocolate Waffle", price: "78", description: "With rich chocolate." },
      { name: "Ferrero Waffle", price: "89", description: "Ferrero Rocher topping." },
      { name: "Cheesecake Slice", price: "72", description: "Creamy New York style." },
    ],
  },
  {
    name: "Signature Blends",
    items: [
      { name: "Galal Special", price: "85", description: "Our signature blend." },
      { name: "Bousaidi Brew", price: "82", description: "Port Said tradition." },
      { name: "King's Cup", price: "95", description: "Premium selection." },
      { name: "Sultan's Delight", price: "99", description: "Spiced & aromatic." },
    ],
  },
];
