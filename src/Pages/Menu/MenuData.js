const menu = [
  {
    id: 1,
    title_en: 'GRÜNER VELTLINER (WHITE)',
    title_de: 'GRÜNER VELTLINER (WEISS)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '6.90',
    desc_en: 'CLASSIC, FRUITY - SMELLS SLIGHTLY EXOTIC AND OF QUINCE. TASTES FULL-BODIED, FRUITY AND HAS A GOOD LENGTH IN THE FINISH.',
    desc_de: 'KLASSISCH, FRUCHTIG - DUFTET LEICHT EXOTISCH UND NACH QUITTE. SCHMECKT VOLLMUNDIG, FRUCHTIG UND HAT EINE GUTE LÄNGE IM ABGANG.'
  },

  {
    id: 2,
    title_en: 'SUMMERFEELING (WHITE)',
    title_de: 'SUMMERFEELING (WEISS)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '7.20',
    desc_en: 'DRY - ANIMATING FRUIT NOTES, MAINLY GRAPEFRUIT, SOME ORANGE AND HERBS, FIRM BODY WITH POWER AND BACKBONE, INVIGORATING AND FRESH, ROUND AND BALANCED.',
    desc_de: 'TROCKEN - ANIMIERENDE FRUCHTNOTEN, HAUPTSÄCHLICH GRAPEFRUIT, ETWAS ORANGE UND KRÄUTER, FESTER KÖRPER MIT KRAFT UND RÜCKGRAT, BELEBEND UND FRISCH, RUND UND AUSGEWOGEN.'
  },
  {
    id: 3,
    title_en: 'LUGANA (WHITE)',
    title_de: 'LUGANA (WEISS)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '7.60',
    desc_en: 'DRY - HINTS OF PEACH AND APRICOT, SOME CITRUS. RICH FRUITINESS AND A CREAMY TEXTURE WITH A SURPRISING AMOUNT OF BODY.',
    desc_de: 'TROCKEN - NOTEN VON PFIRSICH UND APRIKOSE, ETWAS ZITRUSFRÜCHTE. REICHE FRUCHTIGKEIT UND EINE CREMIGE TEXTUR MIT ÜBERRASCHEND VIEL KÖRPER.'
  },
  {
    id: 4,
    title_en: 'RIESLING (WHITE)',
    title_de: 'RIESLING (WEISS)',
    category_en: 'wine',
    catefory_de: 'wein',
    price:  '7.60',
    desc_en: 'STRONG FRUITY RIESLING PRONOUNCED AROMA OF STONE FRUIT, TASTES OF RIPE APRICOTS AND PEACH, LONG FINISH.',
    desc_de: 'KRÄFTIG-FRUCHTIGER RIESLING MIT AUSGEPRÄGTEM AROMA NACH STEINOBST, SCHMECKT NACH REIFEN APRIKOSEN UND PFIRSICH, LANGER ABGANG.'
  },
  {
    id: 5,
    title_en: 'WINZER FRIZZANTE (WHITE)',
    title_de: 'WINZER FRIZZANTE (WEISS)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '7.20',
    desc_en: '',
    desc_de: ''
  },
  {
    id: 6,
    title_en: 'HAUSWEIN DUGALE BIANCO (WHITE)',
    title_de: 'HAUSWEIN DUGALE BIANCO (WEISS)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '5.80',
    desc_en: '',
    desc_de: ''
  },
  {
    id: 7,
    title_en: 'WEISSWEIN-SCHORLE (WHITE)',
    title_de: 'WEISSWEIN-SCHORLE (WEISS)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '5.10',
    desc_en: '',
    desc_de: ''
  },
  {
    id: 8,
    title_en: 'SPÄTBURGUNDER (ROSE)',
    title_de: 'SPÄTBURGUNDER (ROSE)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '6.80',
    desc_en: 'DRY - A SPARKLING GARNET RED, A SEDUCTIVE SCENT, A VELVETY SOFT BODY AND A SLIGHTLY FIERY, INTERESTING AFTERTASTE MAKE THIS WINE AN EXPERIENCE WINE.',
    desc_de:'TROCKEN - EIN FUNKELNDES GRANATROT, EIN VERFÜHRERISCHER DUFT, EIN SAMTIG-WEICHER KÖRPER UND EIN LEICHT FEURIGER, INTERESSANTER NACHGESCHMACK MACHEN DIESEN WEIN ZU EINEM ERLEBNISWEIN.'
  },
  {
    id: 9,
    title_en: 'WINZER-ROSE FRIZZANTE (ROSE)',
    title_de: 'WINZER-ROSE FRIZZANTE (ROSE)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '4.20',
    desc_en: '',
    desc_de:''
  },
  {
    id: 10,
    title_en: 'ROSE-SCHORLE (ROSE)',
    title_de: 'ROSE-SCHORLE (ROSE)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '5.10',
    desc_en: '',
    desc_de:''
  },
  {
    id: 11,
    title_en: 'LEBENSLUST (RED)',
    title_de: 'LEBENSLUST (ROT)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '7.60',
    desc_en: 'DRY - A SPARKLING GARNET RED, A SEDUCTIVE SCENT, A VELVETY SOFT BODY AND A SLIGHTLY FIERY, INTERESTING AFTERTASTE MAKE THIS WINE AN EXPERIENCE WINE.',
    desc_de: 'TROCKEN - EIN FUNKELNDES GRANATROT, EIN VERFÜHRERISCHER DUFT, EIN SAMTIG-WEICHER KÖRPER UND EIN LEICHT FEURIGER, INTERESSANTER NACHGESCHMACK MACHEN DIESEN WEIN ZU EINEM ERLEBNISWEIN.'
  },
  {
    id: 12,
    title_en: 'GABERNET SAUVIGNON (RED)',
    title_de: 'GABERNET SAUVIGNON (ROT)',
    category_en: 'wine',
    catefory_de: 'wein',
    price: '8.40',
    desc_en: 'DRY - BRIGHT GARNET RED, A FINE CURRANT WITH INTEGRATED OAK NOTES, THE WINE SHOWS A STRONG STRUCTURE, PRONOUNCED TANNIN AND A NOBLE FINISH.',
    desc_de: 'TROCKEN - LEUCHTENDES GRANATROT, EINE FEINE JOHANNISBEERE MIT INTEGRIERTEN EICHENNOTEN, DER WEIN ZEIGT EINE STARKE STRUKTUR, AUSGEPRÄGTES TANNIN UND EINEN EDLEN ABGANG.'
  },
  {
    id: 13,
    title_en: 'HAUSWEIN DUGALE ROSSO (RED)',
    title_de: 'HAUSWEIN DUGALE ROSSO (ROT)',
    catefory_de: 'wein',
    category_en: 'wine',
    price: '6.80',
    desc_en: '',
    desc_de: ''
  },
  {
    id: 14,
    title_en: 'ROSE SPRITZ',
    title_de: 'ROSE SPRITZ',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '6.90',
    desc_en: 'ROSE, RHUBARB JUICE, SODA, ROSEMARY SPRIG',
    desc_de: 'ROSE, RHABARBERSAFT, SODA, ROSMARINZWEIG'
  },
  {
    id: 15,
    title_en: 'CHIARE',
    title_de: 'CHIARE',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '7.50',
    desc_en: 'SPARKLING WINE ROSE, ELDERBERRY SYRUP, SODA, MINT, LIME',
    desc_de: 'ROSENSCHAUMWEIN, HOLUNDERSIRUP, SODA, MINZE, LIMETTE'
  },
  {
    id: 16,
    title_en: 'CITRUS SPRITZ',
    title_de: 'ZITRUS SPRITZ',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '7.50',
    desc_en: 'SPARKLING WINE, APEROL, PINK GRAPEFRUIT LEMONADE',
    desc_de: 'SEKT, APEROL, ROSA GRAPEFRUİT LEMONADE'
  },
  {
    id: 17,
    title_en: 'BERRY SPRITZ',
    title_de: 'BEEREN SPRITZ',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '7.50',
    desc_en: 'SPARKLING WINE, GINGER ALE, BERRIES, LIME, BROWN SUGAR, MINT',
    desc_de: 'SEKT, GINGER ALE, BEEREN, LIMETTE, BRAUNER ZUCKER, MINZE'
  },
  {
    id: 18,
    title_en: 'BASIL SPRITZ',
    title_de: 'BASILIKUM SPRITZ',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '7.50',
    desc_en: 'BASIL GINGER LEMONADE, SPARKLING WINE, BASIL, LEMON',
    desc_de: 'BASILIKUM-INGWER-LIMONADE, SEKT, BASILIKUM, ZITRONE'
  },
  {
    id: 19,
    title_en: 'BELSAZAR SPRITZ',
    title_de: 'BELSAZAR SPRITZ',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '7.50',
    desc_en: 'BELSAZAR ROSE, TONIC WATER, ORANGE',
    desc_de: 'BELSAZAR-ROSE, TONIC-WASSER, ORANGE'
  },
  {
    id: 20,
    title_en: 'ROSEMARY',
    title_de: 'ROSMARIN',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '8.50',
    desc_en: 'BELSAZAR ROSE, COINTREAU, LIME JUICE, TONIC WATER, ROSEMARY, LIME',
    desc_de: 'BELSAZAR ROSE, COINTREAU, LIMETTENSAFT, TONIC WASSER, ROSMARIN, LIMETTE'
  },
  {
    id: 21,
    title_en: 'GIRANO',
    title_de: 'GIRANO',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '8.50',
    desc_en: 'GIN, RHUBARB JUICE, TONIC WATER, ELDERBERRY SYRUP, MINT, LIME',
    desc_de: 'GIN, RHABARBERSAFT, TONIC WASSER, HOLUNDERSIRUP, MINZE, LIMETTE'
  },
  {
    id: 22,
    title_en: 'BABELI',
    title_de: 'BABELI',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '8.50',
    desc_en: 'BELSAZAR ROSE, LIMONCELLO, TONIC WATER, BASIL, LEMON',
    desc_de: 'BELSAZAR ROSE, LIMONCELLO, TONIC WASSER, BASILIKUM, ZITRONE'
  },
  {
    id: 23,
    title_en: 'CAFINO SPRITZ',
    title_de: 'CAFINO SPRITZ',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price:  '8.90',     
    desc_en: 'GIN, TONIC WATER, PINK GRAPEFRUIT LEMONADE, GRAPEFRUIT, ROSEMARY',
    desc_de: 'GIN, TONIC WASSER, ROSA GRAPEFRUIT LIMONADE, GRAPEFRUIT, ROSMARIN'
  },
  {
    id: 24,
    title_en: 'NEGRONI',
    title_de: 'NEGRONI',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '9.50',
    desc_en: 'GIN, VERMOUTH, CAMPARI, ORANGE',
    desc_de: 'GIN, WERMUT, CAMPARI, ORANGE'
  },
  {
    id: 25,
    title_en: 'PROSECCO ROSENZAUBER (ALCOHOL FREE)',
    title_de: 'PROSECCO ROSENZAUBER (ALKOHOLFREI)',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price: '6.10',
    desc_en: 'APPLE, ROSE, MINT AND SELECTED SPICES',
    desc_de:'APFEL, ROSE, MINZE UND AUSGEWÄHLTE GEWÜRZE'
  },
  {
    id: 26,
    title_en: 'PROSECCO ECHT BITTER (ALCOHOL FREE)',
    title_de: 'PROSECCO ECHT BITTER (ALKOHOLFREI)',
    category_en: 'aperatif',
    category_de: 'aperatif',
    price:  '6.10',
    desc_en: 'GREEN HUNTER PEAR, RED GOOSEBERRY, ORANGE BLOSSOM, AND ELDERFLOWER',
    desc_de: 'GRÜNE JÄGERBIRNE, ROTE STACHELBEERE, ORANGENBLÜTE UND HOLUNDERBLÜTE'
  },
  {
    id: 27,
    title_en: 'FLAMMKUCHEN ELSÄSSER - ART',
    title_de: 'FLAMMKUCHEN ELSÄSSER - ART',
    category_en: 'flammkuchen',
    category_de: 'flammkuchen',
    price:  '9.90',
    desc_en: 'FRESH CREAM, BACON, ONIONS',
    desc_de: 'FRISCHE SAHNE, SPECK, ZWIEBELN'
  },
  {
    id: 28,
    title_en: 'FLMMKUCHEN ZIEGE',
    title_de: 'FLMMKUCHEN ZIEGE',
    category_en: 'flammkuchen',
    category_de: 'flammkuchen',
    price: '9.90',
    desc_en: 'FRESH CREAM, GOAT CHEESE, HONEY, ROSEMARY',
    desc_de: 'FRISCHE SAHNE, ZIEGENKÄSE, HONIG, ROSMARIN'
  },
  {
    id: 29,
    title_en: 'FLAMMKUCHEN ZUCCHINI',
    title_de: 'FLAMMKUCHEN ZUCCHINI',
    category_en: 'flammkuchen',
    category_de: 'flammkuchen',
    price: '10.90',
    desc_en: 'FRESH CREAM, ZUCCHINI, TOMATOES, PARMESAN, PINE NUTS',
    desc_de: 'FRISCHE SAHNE, ZUCCHINI, TOMATEN, PARMESAN, PINIENKERNE'
  },
  {
    id: 30,
    title_en: 'FLAMMKUCHEN VEGANO (VEGAN)',
    title_de: 'FLAMMKUCHEN VEGANO (VEGAN)',
    category_en: 'flammkuchen',
    category_de: 'flammkuchen',
    price: '11.90',
    desc_en: 'FRESH CREAM VEGAN, ZUCCINI, TOMATOES, PESTO, PINE NUTS',
    desc_de: 'FRISCHE SAHNE VEGAN, ZUCCHINI, TOMATEN, PESTO, PINIENKERNE'
  },
  {
    id: 31,
    title_en: 'FLAMMKUCHEN PARMA',
    title_de: 'FLAMMKUCHEN PARMA',
    category_en: 'flammkuchen',
    category_de: 'flammkuchen',
    price: '12.90',
    desc_en: 'FRESH CREAM, PARMA HAM, ARUGULA, PARMESAN CHEESE',
    desc_de: 'FRISCHE SAHNE, PARMASCHINKEN, RUCOLA, PARMESANKÄSE'
  },
  {
    id: 32,
    title_en: 'FLAMMKUCHEN MARE',
    category_en: 'flammkuchen',
    category_de: 'flammkuchen',
    price:  '12.90',
    desc_en: 'FRESH CREAM, SALMON, MASCARPONE, SPRING ONIONS',
    desc_de: 'FRISCHE SAHNE, LACHS, MASCARPONE, FRÜHLINGSZWIEBELN'
  },
  {
    id: 33,
    title_en: 'FLAMMKUCHEN APPLE & CINNAMON (ALSO VEGAN)',
    title_de: 'FLAMMKUCHEN APFEL & ZIMT (ALSO VEGAN)',
    category_en: 'flammkuchen',
    category_de: 'flammkuchen',
    price: '10.90',   
    desc_en: 'FRESH CREAM, APPLE, CINNAMON, SUGAR, CALVADOS',
    desc_de: 'FRISCHE SAHNE, APFEL, ZIMT, ZUCKER, CALVADOS'
  },
  {
    id: 34,
    title_en: 'CARPESE-BAGEL',
    title_de: 'CARPESE-BAGEL',
    category_en: 'bagel',
    category_de: 'bagel',
    price:  '7.90',
    desc_en: 'FRESH CHEESE, MOZZARELLA, FRESH TOMATOES, BASIL',
    desc_de: 'FRISCHKÄSE, MOZZARELLA, FRISCHE TOMATEN, BASILIKUM'
  },
  {
    id: 35,
    title_en: 'GOAT CHEESE-BAGEL',
    title_de: 'ZIEGENFRISCHKÄSE-BAGEL',
    category_en: 'bagel',
    category_de: 'bagel',
    price: '8.50',    
    desc_en: 'GOAT CREAM CHEESE, TOMATOES, ARUGULA',
    desc_de: 'ZIEGENFRISCHKÄSE, TOMATEN, RUCOLA'
  },
  {
    id: 36,
    title_en: 'ANTIPASTI-BAGEL',
    title_de: 'ANTIPASTI-BAGEL',
    category_en: 'bagel',
    category_de: 'bagel',
    price: '8.50',
    desc_en: 'PESTO-FRISCHKÄSE, TOMATEN, GEGRILLTE PAPRIKA, RUCOLA, PARMESANKÄSE',
  },
  {
    id: 37,
    title_en: 'AVOCADO-BAGEL (VEGAN)',
    title_de: 'AVOCADO-BAGEL (VEGAN)',
    category_en: 'bagel',
    category_de: 'bagel',
    price: '8.50',   
    desc_en: 'HUMMUS, AVOCADO, TOMATOES, ARUGULA',
    desc_de: 'HUMMUS, AVOCADO, TOMATEN, RUCOLA'
  },
  {
    id: 38,
    title_en: 'LACHS-BAGEL',
    title_de: 'LACHS-BAGEL',
    category_en: 'bagel',
    category_de: 'bagel',
    price:  '8.90',    
    desc_en: 'FRESH HORSERADISH CHEESE, SALMON, CUCUMBER, ARUGULA',
    desc_de: 'FRISCHER MEERRETTICHKÄSE, LACHS, GURKE, RUCOLA'
  },
  {
    id: 39,
    title_en: 'SALAD MEDITERRANEA',
    title_de: 'SALAT MEDITERRANEA',
    category_en: 'salad',
    catefory_de: 'salat',
    price: '13.50',      
    desc_en: 'MASHED POTATOES, LETTUCE, CARROTS, PEPPERS, TOMATOES, OLIVES, MOZZARELLA, RED ONIONS AND BREAD',
    desc_de: 'KARTOFFELPÜREE, KOPFSALAT, KAROTTEN, PAPRIKA, TOMATEN, OLIVEN, MOZZARELLA, ROTE ZWIEBELN UND BROT'
  },
  {
    id: 40,
    title_en: 'SMALL SALAD',
    title_de: 'KLEINER SALAT',
    category_en: 'salad',
    catefory_de: 'salat',
    price: '6.50', 
    desc_en: 'VEGETABLES, SALAD, BREAD',
    desc_de: 'GEMÜSE, SALAT, BROT'
  },
  {
    id: 41,
    title_en: 'SIDE SALAD',
    title_de: 'BEILAGENSALAT',
    category_en: 'salad',
    catefory_de: 'salat',
    price: '3.90',  
    desc_en: 'OUR SALAD IS SERVED WITH A BALSAMIC MUSTARD DRESSING',
    desc_de: 'UNSER SALAT WIRD MIT EINEM BALSAMICO-SENF-DRESSING SERVIERT'
  },
  {
    id: 42,
    title_en: 'ANTIPASTI PLATE',
    title_de: 'ANTIPASTI TELLER',
    category_en: 'salad',
    catefory_de: 'salat',
    price: '17.50',          
    desc_en: 'PARMA HAM, ITALIAN SALAMI, OLIVES SALAMI, OLIVES, TOMATOES, PARMESAN, BREAD',
    desc_de: 'PARMASCHINKEN, ITALIENISCHE SALAMI, OLIVEN SALAMI, OLIVEN, TOMATEN, PARMESAN, BROT'
  },
  {
    id: 43,
    title_en: 'OLIVES AND PARMESAN',
    title_de: 'OLIVEN UND PARMESAN',
    category_en: 'salad',
    catefory_de: 'salat',
    price:  '6.50',      
    desc_en: '',
    desc_de: ''
  },
  {
    id: 44,
    title_en: 'CHEESE SELECTION',
    title_de: 'ALLES KÄSE',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price: '9.50',   
    desc_en: 'SMALL BREAD BASKET, BUTTER, CHEESE SELECTION, FRESH CHEESE, CUCUMBER, TOMATO, SMALL MUESLI',
    desc_de: 'KLEINER BROTKORB, BUTTER, KÄSEAUSWAHL, FRISCHKÄSE, GURKE, TOMATE, KLEINES MÜSLI'
  },
  {
    id: 45,
    title_en: 'TANTE CHRISTL',
    title_de: 'TANTE CHRISTL',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price: '9.50',  
    desc_en: 'SMALL BREAD BASKET, BUTTER, JAM, 2 SLICES OF CHEESE, CUCUMBER, TOMATO, FRESHLY SQUEEZED ORANGE JUICE',
    desc_de: 'KLEINER BROTKORB, BUTTER, MARMELADE, 2 SCHEIBEN KÄSE, GURKE, TOMATE, FRISCH GEPRESSTER ORANGENSAFT'
  },
  {
    id: 46,
    title_en: 'VEGANES CAFINO (VEGAN)',
    title_de: 'VEGANES CAFINO (VEGAN)',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price: '9.50',          
    desc_en: 'SMALL BREAD BASKET, BUTTER, JAM, HUMMUS, CUCUMBER, TOMATO, VEGAN MUESLİ',
    desc_de: 'KLEINER BROTKORB, BUTTER, MARMELADE, HUMMUS, GURKE, TOMATE, VEGANES MÜSLİ'
  },
  {
    id: 47,
    title_en: 'VITALES CAFINO',
    title_de: 'VITALES CAFINO',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price: '12.50',     
    desc_en: 'SMALL BREAD BASKET, SALMON, FRESH CHEESE, CUCUMBER, TOMATO, HORSERADISH CREAM, SMALL MUESLİ',
    desc_de: 'KLEINER BROTKORB, LACHS, FRISCHKÄSE, GURKE, TOMATE, SAHNEMEERRETTICH, KLEINES MÜSLİ'
  },
  {
    id: 48,
    title_en: 'CAFINO MIX',
    title_de: 'CAFINO MIX',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price:  '12.50',
    desc_en: 'SMALL BREAD BASKET, BUTTER, CHEESE SELECTION, PARMA HAM, SALAMI, SMALL MUESLI',
    desc_de: 'KLEINER BROTKORB, BUTTER, KÄSEAUSWAHL, PARMASCHINKEN, SALAMI, KLEINES MÜSLI'
  },
  {
    id: 49,
    title_en: 'CAFINO GRANDE',
    title_de: 'CAFINO GRANDE',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price:  '15.50',        
    desc_en: 'BREAD BASKET, BUTTER, JAM, CHEESE, PARMA HAM, SALAMI, SMALL CEREAL, FRESHLY MADE ORANGE JUICE',
    desc_de: 'BROTKORB, BUTTER, MARMELADE, KÄSE, PARMASCHINKEN, SALAMI, KLEINES MÜSLI, FRISCH GEPRESSTER ORANGENSAFT'
  },
  {
    id: 50,
    title_en: 'LITTLE CAFINO',
    title_de: 'KLEINES CAFINO',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price:  '5.50',      
    desc_en: 'SMALL BREAD BASKET, BUTTER, JAM',
    desc_de: 'KLEINER BROTKORB, BUTTER, MARMELADE'
  },
  {
    id: 51,
    title_en: 'STRAMMES CAFINO',
    title_de: 'STRAMMES CAFINO',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price: '11.50',
    desc_en: '2 FRIED EGGS ON TOASTED BREAD, FRESH CHEESE AND ROCKET, SMALL MUESLI',
    desc_de: '2 SPIEGELEIER AUF GETOASTETEM BROT, FRISCHKÄSE UND RUCOLA, KLEINES MÜSLI'
  },
  {
    id: 52,
    title_en: 'ASPARAGUS OR SCRAMBLED EGGS',
    title_de: 'SPAERGEL ODER RÜHREIER',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price:  '4.50',     
    desc_en: 'FROM TWȮ EGGS WITH BUTTER AND BREAD',
    desc_de: 'AUS TWO EIERN MIT BUTTER UND BROT'
  },
  {
    id: 53,
    title_en: 'SASPARAGUS OR SCRAMBLED EGGS',
    title_de: 'SPAERGEL ODER RÜHREIER',
    category_en: 'breakfast',
    catefory_de: 'frühstück',
    price:  '4.50',    
    desc_en: 'FROM TWȮ EGGS WITH BUTTER AND BREAD',
    desc_de: 'AUS TWO EIERN MIT BUTTER UND BROT'
  },
  {
    id: 54,
    title_en: 'ESPRESSO',
    title_de: 'ESPRESSO',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '2.10',      
    desc_en: '',
    desc_de: ''
  },
  {
    id: 55,
    title_en: 'ESPRESSO DOPPIO',
    title_de: 'ESPRESSO DOPPIO',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '3.40',   
    desc_en: '',
    desc_de: ''
  },
  {
    id: 56,
    title_en: 'ESPRESSO MACCHIATO',
    title_de: 'ESPRESSO MACCHIATO',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '2.30',      
    desc_en: '',
    desc_de: ''
  },
  {
    id: 57,
    title_en: 'ESPRESSO MACCHIATO DOPPIO',
    title_de: 'ESPRESSO MACCHIATO DOPPIO',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price: '3.70',        
    desc_en: '',
    desc_de: ''
  },
  {
    id: 58,
    title_en: 'COFFEE',
    title_de: 'KAFFEE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price: '2.80',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 59,
    title_en: 'COFFEE LARGE',
    title_de: 'KAFFEE GROß',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '4.40',   
    desc_en: '',
    desc_de: ''
  },
  {
    id: 60,
    title_en: 'CAPPUCCINO',
    title_de: 'CAPPUCCINO',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '3.10',       
    desc_en: '',
    desc_de: ''
  },
  {
    id: 61,
    title_en: 'LATTE MACCHIATO',
    title_de: 'LATTE MACCHIATO',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '3.90',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 62,
    title_en: 'COFFEE WITH MILK',
    title_de: 'MILCHKAFFEE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price: '3.90',   
    desc_en: '',
    desc_de: ''
  },
  {
    id: 63,
    title_en: 'EARLY GREY',
    title_de: 'EARLY GREY',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price: '4.10',      
    desc_en: '',
    desc_de: ''
  },
  {
    id: 64,
    title_en: 'MOUNTAIN HERBS TEA',
    title_de: 'BERGKRÄUTER-TEE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '4.10',      
    desc_en: '',
    desc_de: ''

  },
  {
    id: 65,
    title_en: 'GREEN TEA',
    title_de: 'GRÜNER TEE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price: '4.10',      
    desc_en: '',
    desc_de: ''
  },
  {
    id: 66,
    title_en: 'WILD BERRIES TEA',
    title_de: 'WALDBEEREN-TEE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price: '4.10',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 67,
    title_en: 'STRAWBERRY-MINT TEA',
    title_de: 'ERDBEER-MINZ-TEE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '4.10',     
    desc_en: '',
    desc_de: ''
  },

  {
    id: 68,
    title_en: 'PEACH TEA',
    title_de: 'PFIRSICH-TEE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '4.10', 
    desc_en: '',
    desc_de: ''
  },
  {
    id: 69,
    title_en: 'HOT CHOCOLATE',
    title_de: 'HEISSE SCHOKOLADE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '4.00',    
    desc_en: '',
    desc_de: ''
  },
  {
    id: 70,
    title_en: 'CHAI LATTE',
    title_de: 'CHAI LATTE',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price: '4.00',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 71,
    title_en: 'KINDERCAPPUCINO (UP TO 10 YEARS OLD)',
    title_de: 'KINDERCAPPUCINO (BIS 10 JAHRE ALT)',
    category_en: 'hot beverages',
    catefory_de: 'heiße getränke',
    price:  '0.80',      
    desc_en: '',
    desc_de: ''
  },
  {
    id: 72,
    title_en: 'WATER (0.25L)',
    title_de: 'WASSER (0.25L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '2.70',    
    desc_en: '',
    desc_de: ''
  },

  {
    id: 73,
    title_en: 'APPLE JUICE',
    title_de: 'APFELSAFT',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price:  '2.90',    
    desc_en: '',
    desc_de: ''
  },
  {
    id: 74,
    title_en: 'JOHANNISBEERE JUICE',
    title_de: 'JJOHANNISBEERE-SAFT',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price:  '2.90',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 75,
    title_en: 'MARACUJA JUICE',
    title_de: 'MARACUJA-SAFT',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '2.90',    
    desc_en: '',
    desc_de: ''
  },
  {
    id: 76,
    title_en: 'RHABARBER JUICE',
    title_de: 'RHABARBER-SAFT',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '2.90',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 77,
    title_en: 'JUICE SHCORLE',
    title_de: 'SAFT SHCORLE',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '2.80', 
    desc_en: 'APPLE, JOHANNISBEERE, MARAJUCA, RHABARBER, HOLUNDER',
    desc_de: 'APFEL, JOHANNISBEERE, MARAJUCA, RHABARBER, HOLUNDER'
  },
  {
    id: 78,
    title_en: 'COLA (0.33L)',
    title_de: 'COLA (0.33L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '3.70',   
    desc_en: '',
    desc_de: ''
  },
  {
    id: 79,
    title_en: 'CALYPSO (0.33L)',
    title_de: 'CALYPSO (0.33L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price:  '3.70',   
    desc_en: '',
    desc_de: ''
  },
  {
    id: 80,
    title_en: 'ALPENGRANDLER (0.33L)',
    title_de: 'ALPENGRANDLER (0.33L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price:  '3.70',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 81,
    title_en: 'ROSE LIMONADE (0.33L)',
    title_de: 'ROSENLIMONADE (0.33L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '3.90',     
    desc_en: '',
    desc_de: ''
  },
  {
    id: 82,
    title_en: 'FRITZ COLA (SUGAR FREE) (0.33L)',
    title_de: 'FRITZ COLA - (ZUCKERFREI) (0.33L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price:  '3.70',
    desc_en: '',
    desc_de: ''
  },
  {
    id: 83,
    title_en: 'BASIL-GINGER LEMONADE (0.25L)',
    title_de: 'BASILIKUM-INGWER-LIMONADE (0.25L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '4.10',
    desc_en: '',
    desc_de: ''
  },
  {
    id: 84,
    title_en: 'ANANAS-MINT LEMONADE (0.25L)',
    title_de: 'ANANAS-MINZE-LIMONADE (0.25L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price:  '4.10',   
    desc_en: '',
    desc_de: ''
  },
  {
    id: 85,
    title_en: 'FRESH ORANGE JUICE (0.20L)',
    title_de: 'FRISCHER ORANGENSAFT (0.20L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '4.50',  
    desc_en: '',
    desc_de: ''
  },
  {
    id: 86,
    title_en: 'DIE HELLE (0.33L)',
    title_de: 'DIE HELLE (0.33L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price: '3.70',     
    desc_en: 'THE BAVARIAN CLASSIC',
    desc_de: 'DER BAYERISCHE KLASSIKER'
  },
  {
    id: 87,
    title_en: 'NATURRADLER (0.33L)',
    title_de: 'NATURRADLER (0.33L)',
    category_en: 'cold beverages',
    catefory_de: 'kalte getränke',
    price:  '3.70',    
    desc_en: 'FROM HACKER-PSCHORR',
    desc_de: 'VON HACKER-PSCHORR'
  }, 
];
export default menu;