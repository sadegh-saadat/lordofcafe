// هر دسته شامل کلیدهای JSON است که باید نمایش داده شوند
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