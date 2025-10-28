#!/usr/bin/env node

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

console.log('🔐 Signature de clé publique via Meta Cloud API\n');

// Chargement des variables d'environnement
const APP_ID = process.env.META_APP_ID;
const APP_SECRET = process.env.META_APP_SECRET;
const PHONE_NUMBER_ID = process.env.META_PHONE_NUMBER_ID;

// Vérification des variables
if (!APP_ID || !APP_SECRET || !PHONE_NUMBER_ID) {
  console.error('❌ Variables d\'environnement manquantes!');
  console.log('\nConfiguration requise dans .env:');
  console.log('- META_APP_ID');
  console.log('- META_APP_SECRET');
  console.log('- META_PHONE_NUMBER_ID');
  console.log('\nConsulte .env.example pour le format');
  process.exit(1);
}

// Trouver le fichier de clé publique
const possiblePaths = [
  path.join(__dirname, 'public-key-whatsapp.pem'),
  path.join(__dirname, 'public-key.pem'),
  path.join(__dirname, 'public.pem')
];

let publicKeyPath;
let publicKey;

for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    publicKeyPath = p;
    publicKey = fs.readFileSync(p, 'utf8');
    break;
  }
}

if (!publicKey) {
  console.error('❌ Fichier de clé publique non trouvé!');
  console.log('\nFichiers cherchés:');
  possiblePaths.forEach(p => console.log(`- ${p}`));
  console.log('\n💡 Lance d\'abord: npm run setup');
  process.exit(1);
}

console.log('✅ Clé publique chargée:', publicKeyPath);
console.log('\n📋 Clé publique:');
console.log('─'.repeat(70));
console.log(publicKey);
console.log('─'.repeat(70));

// Fonction pour obtenir l'access token
async function getAccessToken() {
  try {
    console.log('\n🔑 Récupération de l\'access token...');
    
    const response = await axios.get(
      `https://graph.facebook.com/v19.0/oauth/access_token`,
      {
        params: {
          grant_type: 'client_credentials',
          client_id: APP_ID,
          client_secret: APP_SECRET
        }
      }
    );

    const accessToken = response.data.access_token;
    console.log('✅ Access token obtenu');
    return accessToken;

  } catch (error) {
    console.error('❌ Erreur lors de la récupération de l\'access token:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);
    }
    throw error;
  }
}

// Fonction pour signer la clé publique
async function signPublicKey(accessToken) {
  try {
    console.log('\n✍️  Signature de la clé publique via Meta API...');

    // Endpoint pour créer une clé publique avec Flow API
    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/flows/public_keys`,
      {
        algorithm: 'RSA256',
        public_key: publicKey.trim()
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Clé publique signée et enregistrée dans Meta!');
    
    return response.data;

  } catch (error) {
    console.error('❌ Erreur lors de la signature:');
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
      
      if (error.response.data.error) {
        console.error('\n💡 Suggestions:');
        console.error('- Vérifie que PHONE_NUMBER_ID est correct');
        console.error('- Vérifie que les permissions sont configurées dans Meta Business Manager');
        console.error('- Assure-toi que WhatsApp Business API est activé');
      }
    } else {
      console.error(error.message);
    }
    
    throw error;
  }
}

// Fonction alternative : obtenir la clé signée existante
async function getSignedPublicKey(accessToken) {
  try {
    console.log('\n📥 Récupération de la clé publique signée existante...');

    const response = await axios.get(
      `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/flows/public_keys`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.data && response.data.data.length > 0) {
      console.log('✅ Clés publiques trouvées');
      return response.data.data;
    } else {
      console.log('⚠️  Aucune clé publique enregistrée');
      return null;
    }

  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('⚠️  Aucune clé publique enregistrée');
      return null;
    }
    throw error;
  }
}

// Fonction principale
async function main() {
  try {
    // 1. Obtenir l'access token
    const accessToken = await getAccessToken();

    // 2. Vérifier si une clé existe déjà
    const existingKeys = await getSignedPublicKey(accessToken);
    
    if (existingKeys) {
      console.log('\n📋 Clés publiques existantes:');
      existingKeys.forEach((key, index) => {
        console.log(`\nClé ${index + 1}:`);
        console.log('- ID:', key.id);
        console.log('- Algorithme:', key.algorithm);
        console.log('- Créé:', key.created_time);
      });
    }

    // 3. Signer et enregistrer la nouvelle clé
    await signPublicKey(accessToken);

    console.log('\n');
    console.log('═'.repeat(70));
    console.log('✅ CONFIGURATION TERMINÉE');
    console.log('═'.repeat(70));
    console.log('\n📝 La clé publique a été enregistrée dans Meta avec succès!');
    console.log('\n🎯 Prochaines étapes:');
    console.log('1. Va dans Meta Business Manager > WhatsApp > Configuration');
    console.log('2. Trouve "Flows API"');
    console.log('3. Configure ton endpoint: https://ton-projet.vercel.app/api/products');
    console.log('4. Teste le Flow dans WhatsApp Business');
    console.log('\n');

  } catch (error) {
    console.error('\n❌ Échec de la configuration');
    process.exit(1);
  }
}

// Lancer le script
main();

