const express = require('express');
const cors = require('cors');

const app = express();

// Configuration CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Configuration du port
const PORT = process.env.PORT || 3000;

// Base de données des 39 produits Cosmos Algérie - Black Friday Collection
const products = [
  {
    id: '1',
    title: 'Boots Derby Marron',
    price: '6 200 DA',
    description: 'Chaussures de ville élégantes en cuir marron avec semelle en caoutchouc. Parfait pour un style décontracté et raffiné.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'
  },
  {
    id: '2',
    title: 'Cosmos Premium 2.0 -Noir- (Cuir véritable)',
    price: '3 900 DA',
    description: 'Chaussures premium en cuir véritable noir, haute qualité, confort optimal. Élégance et durabilité.',
    image: 'https://images.unsplash.com/photo-1544966503-7cc3bffd0aeb?w=800'
  },
  {
    id: '3',
    title: 'Cosmos 11- XI Blanc',
    price: '4 900 DA',
    description: 'Sneakers blanches haut de gamme, design moderne et confortable. Style urbain contemporain.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800'
  },
  {
    id: '4',
    title: 'Cosmos 70° — Édition Équilibre',
    price: '4 600 DA',
    description: 'Collection équilibre, confort exceptionnel pour le quotidien. Ergonomie et style parfaitement combinés.',
    image: 'https://images.unsplash.com/photo-1617606002806-94e279c22567?w=800'
  },
  {
    id: '5',
    title: 'Cosmos Premium 2.0 -Bleu- (Cuir véritable)',
    price: '3 900 DA',
    description: 'Chaussures premium en cuir véritable bleu marine, élégance intemporelle et qualité supérieure.',
    image: 'https://images.unsplash.com/photo-1579459791526-cc5de9e8ad51?w=800'
  },
  {
    id: '6',
    title: 'Cosmos Premium 2.0 -Gris- (Cuir véritable)',
    price: '3 900 DA',
    description: 'Chaussures premium en cuir véritable gris, polyvalentes et raffinées. Confort et style pour tous les jours.',
    image: 'https://images.unsplash.com/photo-1605523100442-d7857dd97d84?w=800'
  },
  {
    id: '7',
    title: 'Cosmos 50° – Édition Origine',
    price: '4 600 DA',
    description: 'Édition spéciale marquant les origines de Cosmos. Design authentique et confort remarquable.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800'
  },
  {
    id: '8',
    title: 'Cosmos 11- XI Noir',
    price: '4 900 DA',
    description: 'Sneakers noires haut de gamme, look urbain et moderne. Allure casual chic.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'
  },
  {
    id: '9',
    title: 'Cosmos 11- XI Beige',
    price: '4 900 DA',
    description: 'Sneakers beige haut de gamme, douceur et élégance. Style décontracté et sophistiqué.',
    image: 'https://images.unsplash.com/photo-1608256246200-53bd55f9b66f?w=800'
  },
  {
    id: '10',
    title: 'COSMOS 120° – Édition Impulsion',
    price: '4 900 DA',
    description: 'Édition énergique et dynamique pour ceux qui ne s\'arrêtent jamais. Performance et style.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'
  },
  {
    id: '11',
    title: 'Boots V3 Marron - Solidité, style & audace',
    price: '5 200 DA',
    description: 'Boots robustes en cuir marron, solidité et style. Parfait pour affronter tous les terrains avec élégance.',
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800'
  },
  {
    id: '12',
    title: 'Cosmos 11- XI Vert',
    price: '4 900 DA',
    description: 'Sneakers vertes haut de gamme, couleur vive et moderne. Style unique et reconnaissable.',
    image: 'https://images.unsplash.com/photo-1608667508764-33cf72e11e6c?w=800'
  },
  {
    id: '13',
    title: 'Boots V3 Tabac - Solidité, style & audace',
    price: '5 200 DA',
    description: 'Boots en cuir tabac, robustes et élégantes. Allure authentique et durable.',
    image: 'https://images.unsplash.com/photo-1608256246200-53bd55f9b66f?w=800'
  },
  {
    id: '14',
    title: 'Delta Noire — Sneakers Hybrides Cuir & Denim Technique',
    price: '4 900 DA',
    description: 'Sneakers hybrides innovantes combinant cuir et denim technique. Design unique et confortable.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'
  },
  {
    id: '15',
    title: 'COSMOS 200 — Le noir qui impose le respect',
    price: '4 900 DA',
    description: 'Chaussures noires d\'exception, design imposant et prestigieux. Pour ceux qui aiment se démarquer.',
    image: 'https://images.unsplash.com/photo-1544966503-7cc3bffd0aeb?w=800'
  },
  {
    id: '16',
    title: 'Delta Gris — Sneakers Hybrides Cuir & Denim Technique',
    price: '4 900 DA',
    description: 'Sneakers hybrides en gris, mix cuir et denim. Look moderne et original.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800'
  },
  {
    id: '17',
    title: 'Delta Bleu — Sneakers Hybrides Cuir & Denim Technique',
    price: '4 900 DA',
    description: 'Sneakers hybrides bleu marine, alliant cuir et denim. Élégance et innovation.',
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3dc?w=800'
  },
  {
    id: '18',
    title: 'COSMOS 180º – Le tournant de ton style',
    price: '4 900 DA',
    description: 'Chaussures qui marquent un tournant dans votre style. Design révolutionnaire et confort d\'exception.',
    image: 'https://images.unsplash.com/photo-1544966503-7cc3bffd0aeb?w=800'
  },
  {
    id: '19',
    title: 'COSMOS JUNGLE – Là où le confort rencontre la nature',
    price: '4 900 DA',
    description: 'Chaussures inspirées de la jungle, confort naturel et design sauvage. Résistantes et stylées.',
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800'
  },
  {
    id: '20',
    title: 'Eco Premium Carbon – Cuir',
    price: '4 200 DA',
    description: 'Ligne éco-premium en cuir carboné, élégance et respect de l\'environnement. Qualité et durabilité.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'
  },
  {
    id: '21',
    title: 'Boots Derby Noir - Le cuir brut pour ceux qui marchent dans la boue avec classe',
    price: '6 200 DA',
    description: 'Boots Derby en cuir brut noir, robustes et élégantes. Pour tous terrains avec style.',
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800'
  },
  {
    id: '22',
    title: 'Cosmos Nadal - Blanc',
    price: '4 400 DA',
    description: 'Chaussures blanches inspirées de l\'élégance, netteté et clarté du design. Pureté du style.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800'
  },
  {
    id: '23',
    title: 'Cosmos 90° – Édition Suprême',
    price: '4 600 DA',
    description: 'Édition suprême combinant luxe et performance. L\'excellence à chaque pas.',
    image: 'https://images.unsplash.com/photo-1617606002806-94e279c22567?w=800'
  },
  {
    id: '24',
    title: 'Chelsea Boots Élégance Noire – L\'arme ultime du style discret',
    price: '6 200 DA',
    description: 'Chelsea Boots en cuir noir, élégance discrète et raffinée. Style intemporel et sophistiqué.',
    image: 'https://images.unsplash.com/photo-1608256246200-53bd55f9b66f?w=800'
  },
  {
    id: '25',
    title: 'COSMOS PREMIUM 3.0 — Noir (en cuir)',
    price: '4 900 DA',
    description: 'Ligne premium nouvelle génération en cuir noir. Haute qualité et design moderne.',
    image: 'https://images.unsplash.com/photo-1544966503-7cc3bffd0aeb?w=800'
  },
  {
    id: '26',
    title: 'Cosmos Vintage',
    price: '4 600 DA',
    description: 'Design vintage inspiré des années d\'or, charme rétro et confort moderne. Style intemporel.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800'
  },
  {
    id: '27',
    title: 'COSMOS PREMIUM 3.0 — Bleu (en cuir)',
    price: '4 900 DA',
    description: 'Ligne premium 3.0 en cuir bleu marine, excellence et innovation. Style distingué.',
    image: 'https://images.unsplash.com/photo-1579459791526-cc5de9e8ad51?w=800'
  },
  {
    id: '28',
    title: 'Boots V3 Noire — Solidité, style & audace',
    price: '5 200 DA',
    description: 'Boots en cuir noir, solidité et élégance. Pour ceux qui osent avec style.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'
  },
  {
    id: '29',
    title: 'COSMOS 100º – Édition Dynamique',
    price: '4 900 DA',
    description: 'Édition dynamique pour ceux en mouvement permanent. Énergie et performance.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'
  },
  {
    id: '30',
    title: 'Cosmos Florence',
    price: '4 900 DA',
    description: 'Chaussures inspirées de l\'élégance florentine, raffinement italien et confort irréprochable.',
    image: 'https://images.unsplash.com/photo-1608256246200-53bd55f9b66f?w=800'
  },
  {
    id: '31',
    title: 'Derby Noir en Cuir Véritable',
    price: '4 200 DA',
    description: 'Derby en cuir véritable noir, classicisme et qualité. Formel et élégant.',
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3dc?w=800'
  },
  {
    id: '32',
    title: 'Cosmos 45° — Édition Prestige',
    price: '4 600 DA',
    description: 'Édition prestige combinant luxe et distinction. Pour ceux qui exigent le meilleur.',
    image: 'https://images.unsplash.com/photo-1617606002806-94e279c22567?w=800'
  },
  {
    id: '33',
    title: 'Eco Premium Camel – Cuir',
    price: '4 200 DA',
    description: 'Ligne éco-premium en cuir camel, élégance naturelle et responsabilité environnementale. Qualité durable.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'
  },
  {
    id: '34',
    title: 'VENUS – L\'élégance naturelle au quotidien',
    price: '4 900 DA',
    description: 'Chaussures d\'une élégance naturelle, confort quotidien et style sophistiqué. Féminité et discrétion.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800'
  },
  {
    id: '35',
    title: 'Cosmos Neptune – 2025',
    price: '4 600 DA',
    description: 'Édition limitée Neptune 2025, design futuriste et confort d\'exception. Style avant-gardiste.',
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3dc?w=800'
  },
  {
    id: '36',
    title: 'Cosmos 11- XI Bleu',
    price: '4 900 DA',
    description: 'Sneakers bleues haut de gamme, couleur vibrante et design moderne. Style contemporain unique.',
    image: 'https://images.unsplash.com/photo-1579459791526-cc5de9e8ad51?w=800'
  },
  {
    id: '37',
    title: 'COSMOS PREMIUM 3.0 — Gris (en cuir)',
    price: '4 900 DA',
    description: 'Ligne premium 3.0 en cuir gris, sophistication et polyvalence. Style élégant et moderne.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800'
  },
  {
    id: '38',
    title: 'Cosmos Mars-2025',
    price: '4 600 DA',
    description: 'Édition limitée Mars 2025, design spatial et innovation. Pour les explorateurs de style.',
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800'
  },
  {
    id: '39',
    title: 'Derby Marron en Cuir Véritable',
    price: '4 200 DA',
    description: 'Derby en cuir véritable marron, classique et élégant. Qualité supérieure et style intemporel.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'
  }
];

// Route principale GET
app.get('/', (req, res) => {
  console.log('✅ Serveur WhatsApp Flows Cosmos Algérie actif!');
  res.json({
    message: 'Serveur WhatsApp Flows pour Cosmos Algérie - Black Friday Collection',
    status: 'Actif',
    total_products: products.length
  });
});

// Route OPTIONS pour CORS
app.options('/api/products', (req, res) => {
  console.log('🔄 OPTIONS request - CORS headers');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

// Route principale POST pour WhatsApp Flows
app.post('/api/products', (req, res) => {
  console.log('📦 Requête reçue:', JSON.stringify(req.body, null, 2));

  try {
    const { action } = req.body;

    // Action INIT ou GET_PRODUCTS : retourner tous les produits
    if (action === 'INIT' || action === 'GET_PRODUCTS' || !action) {
      console.log('📋 Récupération de tous les produits:', products.length);
      
      const response = {
        products: products.map(p => ({
          id: p.id,
          title: p.title,
          price: p.price,
          image: p.image
        }))
      };

      console.log('✅ Produits envoyés:', response.products.length);
      return res.json(response);
    }

    // Action GET_PRODUCT_DETAILS : retourner les détails d'un produit spécifique
    if (action === 'GET_PRODUCT_DETAILS') {
      const { product_id } = req.body;

      if (!product_id) {
        console.log('❌ product_id manquant');
        return res.status(400).json({
          error: 'product_id est requis pour GET_PRODUCT_DETAILS'
        });
      }

      const product = products.find(p => p.id === product_id);

      if (!product) {
        console.log('❌ Produit non trouvé:', product_id);
        return res.status(404).json({
          error: 'Produit non trouvé'
        });
      }

      console.log('✅ Détails produit envoyés:', product.title);

      return res.json({
        product_name: product.title,
        product_price: product.price,
        product_image: product.image,
        product_description: product.description
      });
    }

    // Action non reconnue
    console.log('⚠️ Action non reconnue:', action);
    return res.status(400).json({
      error: `Action non reconnue: ${action}`
    });

  } catch (error) {
    console.error('❌ Erreur:', error);
    return res.status(500).json({
      error: 'Erreur interne du serveur',
      details: error.message
    });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log('🚀 Serveur WhatsApp Flows Cosmos Algérie démarré!');
  console.log(`📍 Port: ${PORT}`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log(`📊 Total produits: ${products.length}`);
  console.log('✅ Prêt à recevoir des requêtes!');
});

// Export pour Vercel
module.exports = app;

