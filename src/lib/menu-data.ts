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
        imageSrc: tomysImages.fishTacos,
      },
      {
        name: "Seafood Tacos (Fish)",
        price: "$6.19",
        description: "Crispy battered fish with fresh toppings",
        imageSrc: tomysImages.fishTacos,
      },
      {
        name: "Tacos Campechanos",
        price: "$4.34",
        description: "Steak and chorizo",
        imageSrc: tomysImages.fishTacos,
      },
      {
        name: "Tacos de Birria",
        price: "$5.56",
        description: "Birria-braised beef. Served only Friday, Saturday, and Monday",
        imageSrc: tomysImages.fishTacos,
      },
      {
        name: "Tacos de Cecina",
        price: "$6.20",
        description: "Salted, dried beef tacos",
        imageSrc: tomysImages.fishTacos,
      },
      {
        name: "Tripa Tacos",
        price: "$4.34",
        description: "Crispy beef tripe with onion and cilantro",
        imageSrc: tomysImages.fishTacos,
      },
      {
        name: "Meat Tacos (Choose One Meat)",
        price: "$3.72",
        description: "Meat, cilantro, and onion on top. Salsa option: spicy or mild",
        imageSrc: tomysImages.fishTacos,
      },
      {
        name: "Taco Supreme (Choose One Meat)",
        price: "$5.56",
        description: "Meat, cheese, pico de gallo, sour cream, guacamole, cilantro, and onion. Salsa option: spicy or mild",
        imageSrc: tomysImages.shrimpTacos,
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
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Alambre (Choose One Meat)",
        price: "$18.59",
        description: "Choose one meat",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Birria Plate",
        price: "$19.20",
        description: "Birria meat, rice, and beans, with tortillas and a small cup of beef broth on the side. Served only Friday, Saturday, and Monday",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Fajitas with One Meat (Choose One)",
        price: "$18.59",
        description: "Meat, bell peppers, onion, rice, beans, avocado, and pico de gallo",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Taco Plate (Choose One Meat)",
        price: "$17.34",
        description: "Three tacos with rice and beans",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Meat Alambre",
        price: "$17.34",
        description: "Bell peppers, onion, chorizo, bacon, cheese, and tortillas. Choose your meat",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Birria Bowl",
        price: "$18.59",
        description: "Served only Friday, Saturday, and Monday",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Meat Plate",
        price: "$17.34",
        description: "Meat, rice, beans, and avocado, with pico de gallo and tortillas on the side",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Milanesa (Breaded Steak) Plate",
        price: "$19.82",
        description: "Milanesa, rice, beans, and avocado, with pico de gallo and tortillas on the side",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Cecina Plate",
        price: "$19.82",
        description: "Cecina, rice, beans, and avocado, with pico de gallo and tortillas on the side",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Fish Filet Plate (Filete de Pescado)",
        price: "$19.82",
        description: "Tilapia filet, rice, beans, pico de gallo, and avocado, with tortillas on the side",
        imageSrc: tomysImages.shrimpTacos,
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
        imageSrc: tomysImages.torta,
      },
      {
        name: "Torta de Cecina",
        price: "$17.34",
        description: "Cecina torta with fresh toppings",
        imageSrc: tomysImages.torta,
      },
      {
        name: "Torta Milanesa",
        price: "$16.11",
        description: "Beans, milanesa, avocado, jalapeños, tomatoes, fresh Mexican cheese, and aioli",
        imageSrc: tomysImages.torta,
      },
      {
        name: "Torta Regular (Choose One Meat)",
        price: "$16.12",
        description: "Beans, avocado, tomatoes, jalapeños, fresh Mexican cheese, and aioli",
        imageSrc: tomysImages.torta,
      },
      {
        name: "Torta Hawaiana",
        price: "$16.11",
        description: "Beans, ham, pineapple, fresh Mexican cheese, mozzarella, avocado, jalapeños, and aioli",
        imageSrc: tomysImages.torta,
      },
      {
        name: "Torta Seafood",
        price: "$19.84",
        description: "Torta with seafood",
        imageSrc: tomysImages.torta,
      },
      {
        name: "Torta Cubana",
        price: "$17.34",
        description: "Beans, milanesa, chorizo, sausage, and fresh Mexican cheese, with aioli",
        imageSrc: tomysImages.torta,
      },
      {
        name: "Torta Oaxaqueña",
        price: "$17.34",
        description: "Beans, cecina, avocado, tomatoes, jalapeños, Oaxaca cheese, and aioli",
        imageSrc: tomysImages.torta,
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
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Cecina Burrito",
        price: "$18.59",
        description: "Cecina, rice, beans, cheese, sour cream, guacamole, and salsa",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Fajita Meat Burrito",
        price: "$17.34",
        description: "Bell peppers, rice, beans, sour cream, cheese, guacamole, and meat. Salsa option: spicy or mild",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Fajitas Shrimp Burrito",
        price: "$19.84",
        description: "Bell peppers, onion, sour cream, cheese, guacamole, rice, and beans. Salsa option: spicy or mild",
        imageSrc: tomysImages.shrimpTacos,
      },
      {
        name: "Shrimp Burrito",
        price: "$18.59",
        description: "Rice, beans, sour cream, and guacamole. Salsa option: spicy or mild",
        imageSrc: tomysImages.shrimpTacos,
      },
      {
        name: "Veggie Burrito",
        price: "$13.64",
        description: "Bell pepper, onions, rice, beans, and cheese. Salsa option: spicy or mild",
        imageSrc: tomysImages.cateringSalmon,
      },
      {
        name: "Burrito de Tripa o Cabeza",
        price: "$16.11",
        description: "Rice, beans, cheese, sour cream, guacamole, and salsa",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Burrito Lengua",
        price: "$16.11",
        description: "Beef tongue burrito",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Rice, Beans, and Cheese Burrito",
        price: "$8.67",
        description: "Rice, beans, and cheese only",
        imageSrc: tomysImages.cateringSalmon,
      },
      {
        name: "Regular Burrito (Choose One Meat)",
        price: "$13.62",
        description: "Rice, beans, and meat. Salsa option: spicy or mild",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Super Burrito (Choose One Meat)",
        price: "$16.11",
        description: "Rice, beans, cheese, sour cream, guacamole, and meat. Salsa option: spicy or mild",
        imageSrc: tomysImages.cateringSteak,
      },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "8oz Beans Cup", price: "$3.72", description: "", imageSrc: tomysImages.cateringSalmon },
      { name: "Extra Meat", price: "$2.47", description: "", imageSrc: tomysImages.cateringSteak },
      { name: "Side Rice", price: "$3.72", description: "Seasoned steamed rice, perfect as a side", imageSrc: tomysImages.cateringSalmon },
      { name: "32oz Beans Cup", price: "$11.15", description: "", imageSrc: tomysImages.cateringSalmon },
      { name: "Chips and Guacamole", price: "$12.39", description: "Crisp, golden chips served with creamy, freshly mashed guacamole", imageSrc: tomysImages.cateringSalmon },
      { name: "Side Rice and Beans", price: "$6.19", description: "", imageSrc: tomysImages.cateringSalmon },
    ],
  },
  {
    name: "Quesadillas",
    items: [
      {
        name: "Birria Quesadilla",
        price: "$16.72",
        description: "Birria and cheese, with sour cream, pico de gallo, and guacamole on the side",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Plain Cheese Quesadilla",
        price: "$9.91",
        description: "Cheese only",
        imageSrc: tomysImages.cateringSalmon,
      },
      {
        name: "Quesadilla Lengua o Cabeza",
        price: "$16.11",
        description: "Beef tongue or beef head quesadilla",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Shrimp Fajitas Quesadilla",
        price: "$19.84",
        description: "Bell peppers, onion, shrimp, and cheese, with sour cream, pico de gallo, and guacamole on the side",
        imageSrc: tomysImages.shrimpTacos,
      },
      {
        name: "Shrimp Quesadilla",
        price: "$18.59",
        description: "Shrimp and cheese, with sour cream, pico de gallo, and guacamole on the side",
        imageSrc: tomysImages.shrimpTacos,
      },
      {
        name: "Veggie Quesadilla",
        price: "$13.64",
        description: "Bell peppers, onions, and cheese, with sour cream and pico de gallo on the side",
        imageSrc: tomysImages.cateringSalmon,
      },
      {
        name: "Meat Quesadilla (Choose One Meat)",
        price: "$16.11",
        description: "Cheese and meat, with sour cream and pico de gallo on the side",
        imageSrc: tomysImages.cateringSteak,
      },
      {
        name: "Quesadilla Fajitas with Meat",
        price: "$17.34",
        description: "Bell peppers and onions, with meat",
        imageSrc: tomysImages.cateringSteak,
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Coffee",
        price: "$3.72",
        description: "Freshly brewed, aromatic blend to kick-start your day",
        imageSrc: tomysImages.truck,
      },
      {
        name: "Can Coke",
        price: "$2.47",
        description: "Crisp, refreshing cola in a convenient can",
        imageSrc: tomysImages.truck,
      },
      {
        name: "Can Sprite",
        price: "$2.47",
        description: "Crisp, refreshing lemon-lime soda in a can",
        imageSrc: tomysImages.truck,
      },
      {
        name: "24oz Agua Fresca (Jamaica or Horchata)",
        price: "$3.72",
        description: "Choose Jamaica or horchata",
        imageSrc: tomysImages.truck,
      },
      {
        name: "Bottled Soda",
        price: "$3.72",
        description: "",
        imageSrc: tomysImages.truck,
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
