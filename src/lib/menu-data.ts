import { tomysImages } from "./site-content";

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  imageSrc: string;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const IMG_TACO = "https://images.unsplash.com/photo-1569172131007-4954763443d2?w=800&q=70&auto=format&fit=crop";
const IMG_BIRRIA = "https://images.unsplash.com/photo-1606350383072-4b031d6bd834?w=800&q=70&auto=format&fit=crop";
const IMG_FISH = "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=800&q=70&auto=format&fit=crop";
const IMG_SHRIMP = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=70&auto=format&fit=crop";
const IMG_CARNE = "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=70&auto=format&fit=crop";
const IMG_TORTA = "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=70&auto=format&fit=crop";
const IMG_BURRITO = "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=70&auto=format&fit=crop";
const IMG_QUESADILLA = "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&q=70&auto=format&fit=crop";
const IMG_RICE_BEANS = "https://images.unsplash.com/photo-1628394029816-1dc524670f60?w=800&q=70&auto=format&fit=crop";
const IMG_CHIPS = "https://images.unsplash.com/photo-1595016111459-799a195e7452?w=800&q=70&auto=format&fit=crop";
const IMG_COFFEE = "https://images.unsplash.com/photo-1615485736894-a2d2e6d4cd9a?w=800&q=70&auto=format&fit=crop";
const IMG_SODA = "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&q=70&auto=format&fit=crop";
const IMG_AGUA_FRESCA = "https://images.unsplash.com/photo-1622268348720-507f204d29b4?w=800&q=70&auto=format&fit=crop";

export const menuCategories: MenuCategory[] = [
  {
    name: "Breakfast",
    items: [
      {
        name: "Breakfast Sandwich",
        price: "$11.15",
        description: "Croissant with cheddar cheese, eggs, and your choice of meat (bacon, sausage, or ham)",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "Breakfast Plate",
        price: "$17.34",
        description: "Eggs scrambled, rice, beans, and tortilla on the side",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "Breakfast Burrito",
        price: "$16.11",
        description: "Meat option (chorizo, sausage, ham, or bacon)",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "Breakfast Quesadilla",
        price: "$16.11",
        description: "Eggs, chorizo, bell peppers, onion, and cheese",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "French Toast Combo",
        price: "$16.11",
        description: "2 eggs and bacon or sausage",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "French Toast Only",
        price: "$11.15",
        description: "French toast only",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "Pancake Combo",
        price: "$16.11",
        description: "2 eggs scrambled and bacon or sausage",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "Pancakes Only",
        price: "$11.15",
        description: "Pancakes only",
        imageSrc: tomysImages.breakfastBurrito,
      },
      {
        name: "No Meat Breakfast Burrito",
        price: "$12.39",
        description: "Bell peppers, onion, tomatoes, potatoes, and eggs",
        imageSrc: tomysImages.breakfastBurrito,
      },
    ],
  },
  {
    name: "Tacos",
    items: [
      {
        name: "Beef Tongue Tacos",
        price: "$4.34",
        description: "Tender braised beef tongue with onion and cilantro",
        imageSrc: IMG_TACO,
      },
      {
        name: "Seafood Tacos (Fish)",
        price: "$6.19",
        description: "Crispy battered fish with fresh toppings",
        imageSrc: IMG_FISH,
      },
      {
        name: "Tacos Campechanos",
        price: "$4.34",
        description: "Steak and chorizo",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Tacos de Birria",
        price: "$5.56",
        description: "Birria-braised beef. Served only Friday, Saturday, and Monday",
        imageSrc: IMG_BIRRIA,
      },
      {
        name: "Tacos de Cecina",
        price: "$6.20",
        description: "Salted, dried beef tacos",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Tripa Tacos",
        price: "$4.34",
        description: "Crispy beef tripe with onion and cilantro",
        imageSrc: IMG_TACO,
      },
      {
        name: "Meat Tacos (Choose One Meat)",
        price: "$3.72",
        description: "Meat, cilantro, and onion on top. Salsa option: spicy or mild",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Taco Supreme (Choose One Meat)",
        price: "$5.56",
        description: "Meat, cheese, pico de gallo, sour cream, guacamole, cilantro, and onion. Salsa option: spicy or mild",
        imageSrc: IMG_TACO,
      },
    ],
  },
  {
    name: "Special Plates / Platillos",
    items: [
      {
        name: "3 Quesabirria Plate",
        price: "$17.34",
        description: "Three quesabirrias with a small cup of beef broth. Served only Friday, Saturday, and Monday",
        imageSrc: IMG_BIRRIA,
      },
      {
        name: "Alambre (Choose One Meat)",
        price: "$18.59",
        description: "Choose one meat",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Birria Plate",
        price: "$19.20",
        description: "Birria meat, rice, and beans, with tortillas and a small cup of beef broth on the side. Served only Friday, Saturday, and Monday",
        imageSrc: IMG_BIRRIA,
      },
      {
        name: "Fajitas with One Meat (Choose One)",
        price: "$18.59",
        description: "Meat, bell peppers, onion, rice, beans, avocado, and pico de gallo",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Taco Plate (Choose One Meat)",
        price: "$17.34",
        description: "Three tacos with rice and beans",
        imageSrc: IMG_TACO,
      },
      {
        name: "Meat Alambre",
        price: "$17.34",
        description: "Bell peppers, onion, chorizo, bacon, cheese, and tortillas. Choose your meat",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Birria Bowl",
        price: "$18.59",
        description: "Served only Friday, Saturday, and Monday",
        imageSrc: IMG_BIRRIA,
      },
      {
        name: "Meat Plate",
        price: "$17.34",
        description: "Meat, rice, beans, and avocado, with pico de gallo and tortillas on the side",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Milanesa (Breaded Steak) Plate",
        price: "$19.82",
        description: "Milanesa, rice, beans, and avocado, with pico de gallo and tortillas on the side",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Cecina Plate",
        price: "$19.82",
        description: "Cecina, rice, beans, and avocado, with pico de gallo and tortillas on the side",
        imageSrc: IMG_CARNE,
      },
      {
        name: "Fish Filet Plate (Filete de Pescado)",
        price: "$19.82",
        description: "Tilapia filet, rice, beans, pico de gallo, and avocado, with tortillas on the side",
        imageSrc: IMG_FISH,
      },
    ],
  },
  {
    name: "Tortas",
    items: [
      {
        name: "Breakfast Torta",
        price: "$17.34",
        description: "Egg, cheese, and meat torta",
        imageSrc: IMG_TORTA,
      },
      {
        name: "Torta de Cecina",
        price: "$17.34",
        description: "Cecina torta with fresh toppings",
        imageSrc: IMG_TORTA,
      },
      {
        name: "Torta Milanesa",
        price: "$16.11",
        description: "Beans, milanesa, avocado, jalapeños, tomatoes, fresh Mexican cheese, and aioli",
        imageSrc: IMG_TORTA,
      },
      {
        name: "Torta Regular (Choose One Meat)",
        price: "$16.12",
        description: "Beans, avocado, tomatoes, jalapeños, fresh Mexican cheese, and aioli",
        imageSrc: IMG_TORTA,
      },
      {
        name: "Torta Hawaiana",
        price: "$16.11",
        description: "Beans, ham, pineapple, fresh Mexican cheese, mozzarella, avocado, jalapeños, and aioli",
        imageSrc: IMG_TORTA,
      },
      {
        name: "Torta Seafood",
        price: "$19.84",
        description: "Torta with seafood",
        imageSrc: IMG_FISH,
      },
      {
        name: "Torta Cubana",
        price: "$17.34",
        description: "Beans, milanesa, chorizo, sausage, and fresh Mexican cheese, with aioli",
        imageSrc: IMG_TORTA,
      },
      {
        name: "Torta Oaxaqueña",
        price: "$17.34",
        description: "Beans, cecina, avocado, tomatoes, jalapeños, Oaxaca cheese, and aioli",
        imageSrc: IMG_TORTA,
      },
    ],
  },
  {
    name: "Burritos",
    items: [
      {
        name: "Burrito Birria",
        price: "$16.72",
        description: "Rice, beans, cheese, sour cream, and guacamole. Salsa option: spicy or mild. Served only Friday, Saturday, and Monday",
        imageSrc: IMG_BURRITO,
      },
      {
        name: "Cecina Burrito",
        price: "$18.59",
        description: "Cecina, rice, beans, cheese, sour cream, guacamole, and salsa",
        imageSrc: IMG_BURRITO,
      },
      {
        name: "Fajita Meat Burrito",
        price: "$17.34",
        description: "Bell peppers, rice, beans, sour cream, cheese, guacamole, and meat. Salsa option: spicy or mild",
        imageSrc: IMG_BURRITO,
      },
      {
        name: "Fajitas Shrimp Burrito",
        price: "$19.84",
        description: "Bell peppers, onion, sour cream, cheese, guacamole, rice, and beans. Salsa option: spicy or mild",
        imageSrc: IMG_SHRIMP,
      },
      {
        name: "Shrimp Burrito",
        price: "$18.59",
        description: "Rice, beans, sour cream, and guacamole. Salsa option: spicy or mild",
        imageSrc: IMG_SHRIMP,
      },
      {
        name: "Veggie Burrito",
        price: "$13.64",
        description: "Bell pepper, onions, rice, beans, and cheese. Salsa option: spicy or mild",
        imageSrc: IMG_BURRITO,
      },
      {
        name: "Burrito de Tripa o Cabeza",
        price: "$16.11",
        description: "Rice, beans, cheese, sour cream, guacamole, and salsa",
        imageSrc: IMG_BURRITO,
      },
      {
        name: "Burrito Lengua",
        price: "$16.11",
        description: "Beef tongue burrito",
        imageSrc: IMG_BURRITO,
      },
      {
        name: "Rice, Beans, and Cheese Burrito",
        price: "$8.67",
        description: "Rice, beans, and cheese only",
        imageSrc: IMG_RICE_BEANS,
      },
      {
        name: "Regular Burrito (Choose One Meat)",
        price: "$13.62",
        description: "Rice, beans, and meat. Salsa option: spicy or mild",
        imageSrc: IMG_BURRITO,
      },
      {
        name: "Super Burrito (Choose One Meat)",
        price: "$16.11",
        description: "Rice, beans, cheese, sour cream, guacamole, and meat. Salsa option: spicy or mild",
        imageSrc: IMG_BURRITO,
      },
    ],
  },
  {
    name: "Quesadillas",
    items: [
      {
        name: "Birria Quesadilla",
        price: "$16.72",
        description: "Birria and cheese, with sour cream, pico de gallo, and guacamole on the side",
        imageSrc: IMG_BIRRIA,
      },
      {
        name: "Plain Cheese Quesadilla",
        price: "$9.91",
        description: "Cheese only",
        imageSrc: IMG_QUESADILLA,
      },
      {
        name: "Quesadilla Lengua o Cabeza",
        price: "$16.11",
        description: "Beef tongue or beef head quesadilla",
        imageSrc: IMG_QUESADILLA,
      },
      {
        name: "Shrimp Fajitas Quesadilla",
        price: "$19.84",
        description: "Bell peppers, onion, shrimp, and cheese, with sour cream, pico de gallo, and guacamole on the side",
        imageSrc: IMG_SHRIMP,
      },
      {
        name: "Shrimp Quesadilla",
        price: "$18.59",
        description: "Shrimp and cheese, with sour cream, pico de gallo, and guacamole on the side",
        imageSrc: IMG_SHRIMP,
      },
      {
        name: "Veggie Quesadilla",
        price: "$13.64",
        description: "Bell peppers, onions, and cheese, with sour cream and pico de gallo on the side",
        imageSrc: IMG_QUESADILLA,
      },
      {
        name: "Meat Quesadilla (Choose One Meat)",
        price: "$16.11",
        description: "Cheese and meat, with sour cream and pico de gallo on the side",
        imageSrc: IMG_QUESADILLA,
      },
      {
        name: "Quesadilla Fajitas with Meat",
        price: "$17.34",
        description: "Bell peppers and onions, with meat",
        imageSrc: IMG_QUESADILLA,
      },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "8oz Beans Cup", price: "$3.72", description: "", imageSrc: IMG_RICE_BEANS },
      { name: "Extra Meat", price: "$2.47", description: "", imageSrc: IMG_CARNE },
      { name: "Side Rice", price: "$3.72", description: "Seasoned steamed rice, perfect as a side", imageSrc: IMG_RICE_BEANS },
      { name: "32oz Beans Cup", price: "$11.15", description: "", imageSrc: IMG_RICE_BEANS },
      { name: "Chips and Guacamole", price: "$12.39", description: "Crisp, golden chips served with creamy, freshly mashed guacamole", imageSrc: IMG_CHIPS },
      { name: "Side Rice and Beans", price: "$6.19", description: "", imageSrc: IMG_RICE_BEANS },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Coffee",
        price: "$3.72",
        description: "Freshly brewed, aromatic blend to kick-start your day",
        imageSrc: IMG_COFFEE,
      },
      {
        name: "Can Coke",
        price: "$2.47",
        description: "Crisp, refreshing cola in a convenient can",
        imageSrc: IMG_SODA,
      },
      {
        name: "Can Sprite",
        price: "$2.47",
        description: "Crisp, refreshing lemon-lime soda in a can",
        imageSrc: IMG_SODA,
      },
      {
        name: "24oz Agua Fresca (Jamaica or Horchata)",
        price: "$3.72",
        description: "Choose Jamaica or horchata",
        imageSrc: IMG_AGUA_FRESCA,
      },
      {
        name: "Bottled Soda",
        price: "$3.72",
        description: "",
        imageSrc: IMG_SODA,
      },
    ],
  },
  {
    name: "Catering",
    items: [
      {
        name: "Taco Party Tray",
        price: "$145.00",
        description: "A practical taco spread with proteins, tortillas, salsa, onions, cilantro, and setup that feeds a hungry group fast.",
        imageSrc: tomysImages.cateringSalmon,
      },
      {
        name: "Mediterranean Chicken Tray",
        price: "$165.00",
        description: "Herb chicken with rice, vegetables, and bright sauces for events that want a lighter catering option.",
        imageSrc: tomysImages.cateringPasta,
      },
      {
        name: "Steak and Pasta Catering Pan",
        price: "$185.00",
        description: "A larger-format entree pan built for office lunches, family parties, and events that need fuller plates.",
        imageSrc: tomysImages.cateringSteak,
      },
    ],
  },
];
