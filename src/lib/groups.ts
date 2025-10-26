
// ======================= Drink Groups =======================
export const DRINK_GROUPS = {
  coffee: ['turkishCoffee', 'specialCoffee', 'regionalCoffee', 'hotChocolate', 'coldCoffee'],
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
  breakfast: ['breakfast', 'eggs', 'menemen', 'omelette'],
  toast: ['toast', 'flatbread'],
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
  classic: ['classicHookah'],
  special: ['specialHookah'],
  flavors: ['hookahFlavors'],
} as const;

export type HookahCategory = keyof typeof HOOKAH_GROUPS;

// ======================= Dessert Groups =======================
export const DESSERT_GROUPS = {
  dessert: ['dessert']
} as const;

export type DessertCategory = keyof typeof DESSERT_GROUPS;