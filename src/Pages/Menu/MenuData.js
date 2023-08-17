const menu = [
  {
    id: 1,
    title: 'GRÜNER VELTLINER (WHITE)',
    category: 'wine',
    price: '6.90',
    desc: `CLASSIC, FRUITY - SMELLS SLIGHTLY EXOTIC AND OF QUINCE. TASTES FULL-BODIED, FRUITY AND HAS A GOOD LENGTH IN THE FINISH.`,
  },

  {
    id: 2,
    title: 'SUMMERFEELING (WHITE)',
    category: 'wine',
    price: '7.20',
    desc: `DRY - ANIMATING FRUIT NOTES, MAINLY GRAPEFRUIT, SOME ORANGE AND HERBS, FIRM BODY WITH POWER AND BACKBONE, INVIGORATING AND FRESH, ROUND AND BALANCED.`,
  },
  {
    id: 3,
    title: 'LUGANA (WHITE)',
    category: 'wine',
    price: '7.60',
    desc: `DRY - HINTS OF PEACH AND APRICOT, SOME CITRUS. RICH FRUITINESS AND A CREAMY TEXTURE WITH A SURPRISING AMOUNT OF BODY.`,
  },
  {
    id: 4,
    title: 'RIESLING (WHITE)',
    category: 'wine',
    price:  '7.60',
    desc: `STRONG FRUITY RIESLING PRONOUNCED AROMA OF STONE FRUIT, TASTES OF RIPE APRICOTS AND PEACH, LONG FINISH.`,
  },
  {
    id: 5,
    title: 'WINZER FRIZZANTE (WHITE)',
    category: 'wine',
    price: '7.20',
    desc: ``,
  },
  {
    id: 6,
    title: 'HAUSWEIN DUGALE BIANCO (WHITE)',
    category: 'wine',
    price: '5.80',
    desc: ``,
  },
  {
    id: 7,
    title: 'WEISSWEIN-SCHORLE (WHITE)',
    category: 'wine',
    price: '5.10',
    desc: ``,
  },
  {
    id: 8,
    title: 'SPÄTBURGUNDER (ROSE)',
    category: 'wine',
    price: '6.80',
    desc: `DRY - A SPARKLING GARNET RED, A SEDUCTIVE SCENT, A VELVETY SOFT BODY AND A SLIGHTLY FIERY, INTERESTING AFTERTASTE MAKE THIS WINE AN EXPERIENCE WINE.`,
  },
  {
    id: 9,
    title: 'WINZER-ROSE FRIZZANTE (ROSE)',
    category: 'wine',
    price: '4.20',
    desc: ``,
  },
  {
    id: 10,
    title: 'ROSE-SCHORLE (ROSE)',
    category: 'wine',
    price: '5.10',
    desc: ``,
  },
  {
    id: 11,
    title: 'LEBENSLUST (RED)',
    category: 'wine',
    price: '7.60',
    desc: `DRY - A SPARKLING GARNET RED, A SEDUCTIVE SCENT, A VELVETY SOFT BODY AND A SLIGHTLY FIERY, INTERESTING AFTERTASTE MAKE THIS WINE AN EXPERIENCE WINE.`,
  },
  {
    id: 12,
    title: 'GABERNET SAUVIGNON (RED)',
    category: 'wine',
    price: '8.40',
    desc: `DRY - BRIGHT GARNET RED, A FINE CURRANT WITH INTEGRATED OAK NOTES, THE WINE SHOWS A STRONG STRUCTURE, PRONOUNCED TANNIN AND A NOBLE FINISH.`,
  },
  {
    id: 13,
    title: 'HAUSWEIN DUGALE ROSSO (RED)',
    category: 'wine',
    price: '6.80',
    desc: ``,
  },
  {
    id: 14,
    title: 'ROSE SPRITZ',
    category: 'aperatif',
    price: '6.90',
    desc: `ROSE, RHUBARB JUICE, SODA, ROSEMARY SPRIG`,
  },
  {
    id: 15,
    title: 'CHIARE',
    category: 'aperatif',
    price: '7.50',
    desc: `SPARKLING WINE ROSE, ELDERBERRY SYRUP, SODA, MINT, LIME`,
  },
  {
    id: 16,
    title: 'ZITRUS SPRITZ',
    category: 'aperatif',
    price: '7.50',
    desc: `SPARKLING WINE, APEROL, PINK GRAPEFRUIT LEMONADE`,
  },
  {
    id: 17,
    title: 'BEEREN SPRITZ',
    category: 'aperatif',
    price: '7.50',
    desc: `SPARKLING WINE, GINGER ALE, BERRIES, LIME, BROWN SUGAR, MINT`,
  },
  {
    id: 18,
    title: 'BASIL SPRITZ',
    category: 'aperatif',
    price: '7.50',
    desc: `BASIL GINGER LEMONADE, SPARKLING WINE, BASIL, LEMON`,
  },
  {
    id: 19,
    title: 'BELSAZAR SPRITZ',
    category: 'aperatif',
    price: '7.50',
    desc: `BELSAZAR ROSE, TONIC WATER, ORANGE`,
  },
  {
    id: 20,
    title: 'ROSEMARY',
    category: 'aperatif',
    price: '8.50',
    desc: `BELSAZAR ROSE, COINTREAU, LIME JUICE, TONIC WATER, ROSEMARY, LIME`,
  },
  {
    id: 21,
    title: 'GIRANO',
    category: 'aperatif',
    price: '8.50',
    desc: `GIN, RHUBARB JUICE, TONIC WATER, ELDERBERRY SYRUP, MINT, LIME`,
  },
  {
    id: 22,
    title: 'BABELI',
    category: 'aperatif',
    price: '8.50',
    desc: `BELSAZAR ROSE, LIMONCELLO, TONIC WATER, BASIL, LEMON`,
  },
  {
    id: 23,
    title: 'CAFINO SPRITZ',
    category: 'aperatif',
    price:  '8.90',     
    desc: `GIN, TONIC WATER, PINK GRAPEFRUIT LEMONADE, GRAPEFRUIT, ROSEMARY`,
  },
  {
    id: 24,
    title: 'NEGRONI',
    category: 'aperatif',
    price: '9.50',
    desc: `GIN, VERMOUTH, CAMPARI, ORANGE`,
  },
  {
    id: 25,
    title: 'PROSECCO ROSENZAUBER (ALCOHOL FREE)',
    category: 'aperatif',
    price: '6.10',
    desc: `APPLE, ROSE, MINT AND SELECTED SPICES`,
  },
  {
    id: 26,
    title: 'PROSECCO ECHT BITTER (ALCOHOL FREE)',
    category: 'aperatif',
    price:  '6.10',
    desc: `GREEN HUNTER PEAR, RED GOOSEBERRY, ORANGE BLOSSOM, AND ELDERFLOWER`,
  },
  {
    id: 27,
    title: 'FLAMMKUCHEN ELSÄSSER - ART',
    category: 'flammkuchen',
    price:  '9.90',
    desc: `FRESH CREAM, BACON, ONIONS`,
  },
  {
    id: 28,
    title: 'FLMMKUCHEN ZIEGE',
    category: 'flammkuchen',
    price: '9.90',
    desc: `FRESH CREAM, GOAT CHEESE, HONEY, ROSEMARY`,
  },
  {
    id: 29,
    title: 'FLAMMKUCHEN ZUCCHIN',
    category: 'flammkuchen',
    price: '10.90',
    desc: `FRESH CREAM, ZUCCHINI, TOMATOES, PARMESAN, PINE NUTS`,
  },
  {
    id: 30,
    title: 'FLAMMKUCHEN VEGANO (VEGAN)',
    category: 'flammkuchen',
    price: '11.90',
    desc: `FRESH CREAM VEGAN, ZUCCINI, TOMATOES, PESTO, PINE NUTS`,
  },
  {
    id: 31,
    title: 'FLAMMKUCHEN PARMA',
    category: 'flammkuchen',
    price: '12.90',
    desc: `FRESH CREAM, PARMA HAM, ARUGULA, PARMESAN CHEESE`,
  },
  {
    id: 32,
    title: 'FLAMMKUCHEN MARE',
    category: 'flammkuchen',
    price:  '12.90',
    desc: `FRESH CREAM, SALMON, MASCARPONE, SPRING ONIONS`,
  },
  {
    id: 33,
    title: 'FLAMMKUCHEN APFEL & ZIMT (ALSO VEGAN)',
    category: 'flammkuchen',
    price: '10.90',
          
    desc: `FRESH CREAM, APPLE, CINNAMON, SUGAR, CALVADOS`,
  },
  {
    id: 34,
    title: 'CARPESE-BAGEL',
    category: 'bagel',
    price:  '7.90',
        
    desc: `FRESH CHEESE, MOZZARELLA, FRESH TOMATOES, BASIL`,
  },
  {
    id: 35,
    title: 'ZIEGENKÄSE-BAGEL',
    category: 'bagel',
    price: '8.50',
           
    desc: `GOAT CREAM CHEESE, TOMATOES, ARUGULA`,
  },
  {
    id: 36,
    title: 'ANTIPASTI-BAGEL',
    category: 'bagel',
    price: '8.50',
          
    desc: `PESTO CREAM CHEESE, TOMATOES, GRILLED PEPPERS, ARUGULA, PARMESAN CHEESE`,
  },
  {
    id: 37,
    title: 'AVOCADO-BAGEL (VEGAN)',
    category: 'bagel',
    price: '8.50',
           
    desc: `HUMMUS, AVOCADO, TOMATOES, ARUGULA`,
  },
  {
    id: 38,
    title: 'LACHS-BAGEL',
    category: 'bagel',
    price:  '8.90',
          
    desc: `FRESH HORSERADISH CHEESE, SALMON, CUCUMBER, ARUGULA`,
  },
  {
    id: 39,
    title: 'SALAT MEDITERRANEA',
    category: 'salad',
    price: '13.50',
           
    desc: `MASHED POTATOES, LETTUCE, CARROTS, PEPPERS, TOMATOES, OLIVES, MOZZARELLA, RED ONIONS AND BREAD`,
  },
  {
    id: 40,
    title: 'SMALL SALAD',
    category: 'salad',
    price: '6.50',
         
    desc: `VEGETABLES, SALAD, BREAD`,
  },
  {
    id: 41,
    title: 'SIDE SALAD',
    category: 'salad',
    price: '3.90',
          
    desc: `OUR SALAD IS SERVED WITH A BALSAMIC MUSTARD DRESSING`,
  },
  {
    id: 42,
    title: 'ANTIPASTI PLATE',
    category: 'salad',
    price: '17.50',
            
    desc: `PARMA HAM, ITALIAN SALAMI, OLIVES SALAMI, OLIVES, TOMATOES, PARMESAN, BREAD`,
  },
  {
    id: 43,
    title: 'OLIVES AND PARMESAN',
    category: 'salad',
    price:  '6.50',
           
    desc: ``,
  },
  {
    id: 44,
    title: 'ALLES KÄSE',
    category: 'breakfast',
    price: '9.50',
          
    desc: `SMALL BREAD BASKET, BUTTER, CHEESE SELECTION, FRESH CHEESE, CUCUMBER, TOMATO, SMALL MUESLI`,
  },
  {
    id: 45,
    title: 'TANTE CHRISTL',
    category: 'breakfast',
    price: '9.50',
        
    desc: `SMALL BREAD BASKET, BUTTER, JAM, 2 SLICES OF CHEESE, CUCUMBER, TOMATO, FRESHLY SQUEEZED ORANGE JUICE`,
  },
  {
    id: 46,
    title: 'VEGANES CAFINO (VEGAN)',
    category: 'breakfast',
    price: '9.50',
            
    desc: `SMALL BREAD BASKET, BUTTER, JAM, HUMMUS, CUCUMBER, TOMATO, VEGAN MUESLİ`,
  },
  {
    id: 47,
    title: 'VITALES CAFINO',
    category: 'breakfast',
    price: '12.50',
           
    desc: `SMALL BREAD BASKET, SALMON, FRESH CHEESE, CUCUMBER, TOMATO, HORSERADISH CREAM, SMALL MUESLİ`,
  },
  {
    id: 48,
    title: 'CAFINO MIX',
    category: 'breakfast',
    price:  '12.50',
  
    desc: `SMALL BREAD BASKET, BUTTER, CHEESE SELECTION, PARMA HAM, SALAMI, SMALL MUESLI`,
  },
  {
    id: 49,
    title: 'CAFINO GRANDE',
    category: 'breakfast',
    price:  '15.50',
           
    desc: `BREAD BASKET, BUTTER, JAM, CHEESE, PARMA HAM, SALAMI, SMALL CEREAL, FRESHLY MADE ORANGE JUICE`,
  },
  {
    id: 50,
    title: 'LITTLE CAFINO',
    category: 'breakfast',
    price:  '5.50',
           
    desc: `SMALL BREAD BASKET, BUTTER, JAM`,
  },
  {
    id: 51,
    title: 'STRAMMES-CAFINO',
    category: 'breakfast',
    price: '11.50',
    desc: `2 FRIED EGGS ON TOASTED BREAD, FRESH CHEESE AND ROCKET, SMALL MUESLI`,
  },
  {
    id: 52,
    title: 'SPIEGEL - ODER RÜHREIER',
    category: 'breakfast',
    price:  '4.50',
           
    desc: `FROM TWȮ EGGS WITH BUTTER AND BREAD`,
  },
  {
    id: 53,
    title: 'SPIEGEL - ODER RÜHREIER',
    category: 'breakfast',
    price:  '4.50',
          
    desc: `FROM TWȮ EGGS WITH BUTTER AND BREAD`,
  },
  {
    id: 54,
    title: 'ESPRESSO',
    category: 'hot beverages',
    price:  '2.10',
          
    desc: ``,
  },
  {
    id: 55,
    title: 'ESPRESSO DOPPIO',
    category: 'hot beverages',
    price:  '3.40',
           
    desc: ``,
  },
  {
    id: 56,
    title: 'ESPRESSO MACCHIATO',
    category: 'hot beverages',
    price:  '2.30',
            
    desc: ``,
  },
  {
    id: 57,
    title: 'ESPRESSO MACCHIATO DOPPIO',
    category: 'hot beverages',
    price: '3.70',
           
    desc: ``,
  },
  {
    id: 58,
    title: 'COFFEE',
    category: 'hot beverages',
    price: '2.80',
           
    desc: ``,
  },
  {
    id: 59,
    title: 'COFFEE LARGE',
    category: 'hot beverages',
    price:  '4.40',
           
    desc: ``,
  },
  {
    id: 60,
    title: 'CAPPUCCINO',
    category: 'hot beverages',
    price:  '3.10',
            
    desc: ``,
  },
  {
    id: 61,
    title: 'LATTE MACCHIATO',
    category: 'hot beverages',
    price:  '3.90',
           
    desc: ``,
  },
  {
    id: 62,
    title: 'COFFEE WITH MILK',
    category: 'hot beverages',
    price: '3.90',
           
    desc: ``,
  },
  {
    id: 63,
    title: 'EARLY GREY',
    category: 'hot beverages',
    price: '4.10',
           
    desc: ``,
  },
  {
    id: 64,
    title: 'MOUNTAIN HERBS TEA',
    category: 'hot beverages',
    price:  '4.10',
            
    desc: ``,
  },
  {
    id: 65,
    title: 'GREEN TEA',
    category: 'hot beverages',
    price: '4.10',
           
    desc: ``,
  },
  {
    id: 66,
    title: 'WILD BERRIES TEA',
    category: 'hot beverages',
    price: '4.10',
            
    desc: ``,
  },
  {
    id: 67,
    title: 'STRAWBERRY-MINT TEA',
    category: 'hot beverages',
    price:  '4.10',
           
    desc: ``,
  },
  {
    id: 68,
    title: 'STRAWBERRY-MINT TEA',
    category: 'hot beverages',
    price:  '4.10',
            
    desc: ``,
  },
  {
    id: 69,
    title: 'PEACH TEA',
    category: 'hot beverages',
    price:  '4.10',
           
    desc: ``,
  },
  {
    id: 70,
    title: 'HOT CHOCOLATE',
    category: 'hot beverages',
    price:  '4.00',
           
    desc: ``,
  },
  {
    id: 71,
    title: 'CHAI LATTE',
    category: 'hot beverages',
    price: '4.00',
           
    desc: ``,
  },
  {
    id: 72,
    title: 'KINDERCAPPUCINO (UP TO 10 YEARS OLD)',
    category: 'hot beverages',
    price:  '0.80',
           
    desc: ``,
  },
  {
    id: 73,
    title: 'WATER (0.25L)',
    category: 'cold beverages',
    price: '2.70',
           
    desc: ``,
  },
  {
    id: 74,
    title: 'WATER (0.75L)',
    category: 'cold beverages',
    price: '6.00',
           
    desc: ``,
  },
  {
    id: 75,
    title: 'APPLE JUICE',
    category: 'cold beverages',
    price:  '2.90',
          
    desc: ``,
  },
  {
    id: 76,
    title: 'JOHANNISBEERE JUICE',
    category: 'cold beverages',
    price:  '2.90',
            
    desc: ``,
  },
  {
    id: 77,
    title: 'MARACUJA JUICE',
    category: 'cold beverages',
    price: '2.90',
           
    desc: ``,
  },
  {
    id: 78,
    title: 'RHABARBER JUICE',
    category: 'cold beverages',
    price: '2.90',
           
    desc: ``,
  },
  {
    id: 79,
    title: 'JUICE SHCORLE',
    category: 'cold beverages',
    price: '2.80',
           
    desc: `APPLE, JOHANNISBEERE, MARAJUCA, RHABARBER, HOLUNDER`,
  },
  {
    id: 80,
    title: 'COLA (0.33L)',
    category: 'cold beverages',
    price: '3.70',
           
    desc: ``,
  },
  {
    id: 81,
    title: 'CALYPSO (0.33L)',
    category: 'cold beverages',
    price:  '3.70',
          
    desc: ``,
  },
  {
    id: 82,
    title: 'ALPENGRANDLER (0.33L)',
    category: 'cold beverages',
    price:  '3.70',
           
    desc: ``,
  },
  {
    id: 83,
    title: 'ROSE LIMONADE (0.33L)',
    category: 'cold beverages',
    price: '3.90',
            
    desc: ``,
  },
  {
    id: 84,
    title: 'FRITZ COLA - SUGAR FREE (0.33L)',
    category: 'cold beverages',
    price:  '3.70',
            
  
    desc: ``,
  },
  {
    id: 85,
    title: 'BASIL-GINGER LEMONADE (0.25L)',
    category: 'cold beverages',
    price: '4.10',
    desc: ``,
  },
  {
    id: 86,
    title: 'ANANAS-MINT LEMONADE (0.25L)',
    category: 'cold beverages',
    price:  '4.10',
          
    desc: ``,
  },
  {
    id: 87,
    title: 'FRESH ORANGE JUICE (0.20L)',
    category: 'cold beverages',
    price: '4.50',
           
    desc: ``,
  },
  {
    id: 88,
    title: 'DIE HELLE (0.33L)',
    category: 'cold beverages',
    price: '3.70',
           
    desc: `THE BAVARIAN CLASSIC`,
  },
  {
    id: 89,
    title: 'NATURRADLER (0.33L)',
    category: 'cold beverages',
    price:  '3.70',
           
    desc: `FROM HACKER-PSCHORR`,
  }, 
];
export default menu;