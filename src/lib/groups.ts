
// ======================= Drink Groups =======================
export const DRINK_GROUPS = {
  turkishCoffee: ['turkishCoffee'],
  specialCoffee: ['specialCoffee'],
  regionalCoffee: ['regionalCoffee'],
  hotChocolate: ['hotChocolate'],
  coldCoffee: ['coldCoffee'],
  tea: ['tea'],
  frappe: ['frappe'],
  milkshake: ['milkshake'],
  smoothie: ['smoothie'],
  frozen: ['frozenDrinks'],
  vitamins: ['vitamins'],
  coldDrinks: ['coldDrinks'],
} as const;

export type DrinkCategory = keyof typeof DRINK_GROUPS;

// ======================= Food Groups =======================
export const FOOD_GROUPS = {
  breakfast: ['breakfast'],
  eggs: ['eggs'],
  menemen: ['menemen'],
  omelette: ['omelette'],
  toast: ['toast'],
  flatbread: ['flatbread'],
  pancake: ['TurkishPancakes'],
  snacks: ['snacks'],
  coldSandwiches: ['coldSandwiches'],
  burgers: ['burgers'],
  pizza: ['pizza'],
  salads: ['salads'],
  pasta: ['pasta'],
  crepes: ['crepes'],
  fajitas: ['fajitas'],
  meatGrill: ['meatGrill'],
  whiteMeats: ['whiteMeats'],
  panFried: ['panFried'],
} as const;

export type FoodCategory = keyof typeof FOOD_GROUPS;

// ======================= Hookah Groups =======================
export const HOOKAH_GROUPS = {
  alFakher: ['alFakher'],
  special: ['special'],
  specialBlends: ['specialBlends'],
  nakhl: ['nakhl'],
  bahrein: ['bahrain'],
  naturals: ['naturals'],
  starbuzz: ['starbuzz'],
} as const;

export type HookahCategory = keyof typeof HOOKAH_GROUPS;

// ======================= Dessert Groups =======================
export const DESSERT_GROUPS = {
  dessert: ['dessert']
} as const;

export type DessertCategory = keyof typeof DESSERT_GROUPS;