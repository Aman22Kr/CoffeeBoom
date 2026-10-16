// Sample menu data adapted from the reference site's menu page.
const c = (id, title, note, items) => ({ id, title, note, items: items.map(([name, desc], i) => ({ id: `${id}-${i}`, category: id, name, desc })) })

export const MENU = [
  c('hot', 'Hot Beverages', '', [
    ['Black', 'Espresso / americano'],
    ['White', 'Cappuccino / latte / flat white / piccolo'],
    ['Barista Breakfast', 'Selection of coffees served 3 ways: espresso, cappuccino & manual brew'],
    ['The Unreal Real Hot Chocolate', 'Regular / orange zest & chilli / seasonal special. 54% dark chocolate ganache steamed with milk'],
    ['Mocha', 'House blend espresso & 54% dark chocolate ganache with steamed milk'],
  ]),
  c('tea', 'Artisanal Teas', '', [
    ['Classic Earl Grey', 'English classic infused with natural bergamot extract and cornflower blue petals'],
    ['Sencha Green Tea', 'Japanese green tea, delicate and refreshing with grassy undertones and subtle sweetness'],
    ['Oolong Jasmine', 'Aromatic tea with floral notes, handpicked oolong leaves & jasmine blossoms'],
    ['Minty Hibiscus', 'Dried hibiscus petals, peppermint & spearmint leaves'],
    ['Orange Pekoe Assam', 'Orange pekoe black tea, star anise & green cardamom'],
    ['House Blend Herbal', 'Dry ginger, cinnamon, star anise, cardamom, clove, black pepper, tulsi & nutmeg'],
  ]),
  c('addons', 'Add-ons', '', [
    ['Espresso shot', ''], ['Vanilla bean ice cream', ''], ['Rich chocolate ice cream', ''], ['Oat / almond / hazelnut milk', ''],
  ]),
  c('breakfast', 'All-day Breakfast', '', [
    ['Big Brekky — Non-veg', '2 eggs your way, rösti, crispy bacon, grilled chicken sausages with onions & peppers, tomatoes and purple cabbage coleslaw, with crispy sourdough'],
    ['Big Brekky — Veg', 'Spiced scrambled cottage cheese, mushrooms, rösti & coleslaw, with buttery sourdough & fresh fruits'],
    ['Eggs Benedict', '2 poached eggs with hollandaise and your choice of smoked salmon or crispy bacon'],
    ['Eggs Your Way', 'Scrambled / fried / poached / akuri / omelette (cheese, mushroom, chilli & cilantro, masala), with buttery sourdough'],
    ['Smashed Avo on Toast', 'Cherry tomatoes, bocconcini, basil. Add bacon, salmon, egg or hash browns'],
    ['Dark Chocolate & Blueberry Pancakes', 'Served with vanilla bean ice cream & maple syrup'],
  ]),
  c('small', 'Small Plates', '', [
    ['Veg plates', 'Guacamole & tortilla chips, Korean chilli tempura cauliflower, spinach & corn balls, crispy potato basket, Mexican pepitos, veggie quesadillas, corn fritters'],
    ['Non-veg plates', 'Chicken wings, roasted chicken nachos, Korean fried chicken, bacon-wrapped chicken, crunchy crab burrito, crispy chicken tenders'],
  ]),
  c('mains', 'Pasta & Mains', '', [
    ['Spaghetti', 'Your choice of sauce: basil pesto / alfredo / napolitana / aglio e olio'],
    ['Whole Wheat Penne', 'Your choice of sauce: basil pesto / alfredo / napolitana'],
    ['Truffle Risotto or Swiss Rösti', 'Build your own with grilled veggies, mushrooms, chicken, salmon, shrimp, lamb bolognese or bacon & jalapeño'],
    ['Herbed Grilled Chicken', 'On sausage mashed potatoes, drizzled with tomato barbecue sauce'],
    ['Smoked Norwegian Salmon', 'Buttered broccoli with lemon caper sauce'],
    ['Honey Glazed Chicken', 'Sweet & savoury honey sauce, mashed potato & charred broccoli'],
    ['Baked Red Snapper', 'Orange and dill sauce, sweet potato mash & balsamic French beans'],
  ]),
  c('cold', 'Cold Beverages', '', [
    ['House Cold Coffee', 'Signature cold coffee sweetened with jaggery syrup'],
    ['Iced Classics', 'Americano / latte'],
    ['Classic Cold Brew', 'Our signature 20-hour cold brew. Also as cold brew lemonade or tonic'],
    ['Monthly Special Cold Brew', 'Cold brew with a local ice cream soda — ask the team'],
    ['The Unreal Real Cold Chocolate', 'Regular / orange zest & chilli / seasonal. Dark chocolate ganache shaken with ice'],
    ['House Cold Mocha', 'House blend espresso & dark chocolate ganache shaken with ice'],
    ['Affogato', 'Vanilla bean or rich chocolate ice cream served with espresso'],
  ]),
  c('juices', 'Cold Pressed Juices', '', [
    ['Health Kick', 'Orange, carrot, ginger, beetroot'],
    ['Mint to Be', 'Watermelon, pineapple, mint'],
    ['The Green Juice', 'Green apple, kiwi, cucumber, ginger, mint'],
    ['Mono', 'Orange / pineapple / watermelon / green apple'],
    ['Gutsy', 'Cucumber, spinach, celery, lemon'],
  ]),
  c('mocktails', 'Mocktails', '', [
    ['Watermelon Lemonade', ''], ['Classic Mojito', ''], ['3 Berry Mojito', ''], ['Lemon Lime Bitter', ''], ['Orange Fizzcool', ''], ['Cool as a Cucumber', ''],
  ]),
  c('smoothies', 'Smoothies', '', [
    ['The Super-Green Smoothie', 'Green apple, spinach, banana, spirulina'],
    ['Banana Smoothie', 'Banana blended smooth'],
    ['Very Berry Smoothie', 'Strawberries, blueberries & raspberries with cranberry juice & yogurt'],
  ]),
  c('bakes', 'Bakes & Desserts', '', [
    ['Butter Croissant', ''], ['Pain au Chocolat', ''], ['Almond Croissant', ''], ['Orange & Chocolate Cake', ''],
    ['Muffins & Cookies of the Month', ''],
    ['Panna Cotta Flight', '3 seasonally curated panna cottas'],
    ['Sticky Date Pudding', 'With vanilla bean ice cream & butterscotch sauce'],
  ]),
  c('fries', 'The Potato Patch', '', [
    ['Fries', 'Sweet potato or round cut. Salted / herbed / peri peri. Loaded: cheesy, chicken & cheese, bacon & jalapeño'],
  ]),
  c('veg-sand', 'Veg Sandwiches', '', [
    ['Grilled Cottage Cheese Burger', 'Mexican herbs & 3 peppers'],
    ['Bocconcini', 'Tomatoes & basil pesto'], ['TLC', 'Tomato, lettuce, cucumber'],
    ['Tempura Veggies', 'With pepperjack cheese'], ['Lettuce Medley', 'Salted feta & sour cream'],
    ['Spicy Grilled Potato Mash', ''], ['Classic Grilled Cheese', '3-cheese sandwich'],
  ]),
  c('nonveg-sand', 'Non-veg Sandwiches', '', [
    ['Herbed Chicken', 'Lettuce & pineapple salsa'], ['Classic Spice Smoked Chicken', ''], ['Crispy Chicken Tenders', ''],
    ['Chicken Frankfurters', 'Bell peppers, onions, jalapeños & cilantro'], ['Original Ham', 'Mixed peppers, onions & fresh herbs'],
    ['BLT', 'Bacon, lettuce & tomato'], ['Lamb Mince Cutlet Burger', 'With melted cheese'],
    ['Norwegian Smoked Salmon', 'Lettuce & herbed cream cheese'],
  ]),
]
export const ALL_ITEMS = MENU.flatMap((s) => s.items)
