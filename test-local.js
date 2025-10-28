const http = require('http');

console.log('🧪 Test du serveur WhatsApp Flows...\n');

const testServer = (action, payload = {}) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ action, ...payload });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/products',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = http.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: responseData });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
};

async function runTests() {
  console.log('📋 Test 1: INIT (Récupérer tous les produits)\n');
  
  try {
    const result1 = await testServer('INIT');
    console.log('✅ Statut:', result1.status);
    console.log('📦 Réponse:', JSON.stringify(result1.data, null, 2));
    console.log('📊 Nombre de produits:', result1.data.products?.length || 0);
    
    if (result1.data.products && result1.data.products.length > 0) {
      console.log('\n🎯 Premier produit:', result1.data.products[0]);
    }
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }

  console.log('\n\n📋 Test 2: data_exchange (Récupérer détails produit 1)\n');
  
  try {
    const result2 = await testServer('data_exchange', { product_id: '1' });
    console.log('✅ Statut:', result2.status);
    console.log('📦 Réponse:', JSON.stringify(result2.data, null, 2));
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }

  console.log('\n\n📋 Test 3: Action invalide\n');
  
  try {
    const result3 = await testServer('INVALID_ACTION');
    console.log('✅ Statut:', result3.status);
    console.log('📦 Réponse:', JSON.stringify(result3.data, null, 2));
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }

  console.log('\n✅ Tests terminés!\n');
  process.exit(0);
}

// Attendre un peu pour que le serveur démarre
setTimeout(() => {
  runTests();
}, 2000);

