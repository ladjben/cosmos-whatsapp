const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

console.log('🔑 Génération des clés RSA pour WhatsApp Flows v7.2...\n');

// Configuration
const keyPath = path.join(__dirname);
const passphrase = 'cosmos_algerie_2024_whatsapp_flows';

// Options pour la génération de clés
const keyPair = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Taille recommandée par WhatsApp
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: passphrase
  }
});

try {
  // Sauvegarder la clé publique
  const publicKeyPath = path.join(keyPath, 'public.pem');
  fs.writeFileSync(publicKeyPath, keyPair.publicKey);
  console.log('✅ Clé publique sauvegardée:', publicKeyPath);

  // Sauvegarder la clé privée
  const privateKeyPath = path.join(keyPath, 'private.pem');
  fs.writeFileSync(privateKeyPath, keyPair.privateKey);
  console.log('✅ Clé privée sauvegardée:', privateKeyPath);

  console.log('\n📝 Passphrase (garde-la précieusement!):');
  console.log('   ' + passphrase);
  
  console.log('\n✅ Fichiers créés:');
  console.log('   - public.pem');
  console.log('   - private.pem');
  console.log('\n⚠️  Ajoute private.pem au .gitignore!');
  console.log('⚠️  Ne partage JAMAIS la passphrase!');

  // Afficher la clé publique pour copier dans WhatsApp Manager
  console.log('\n📋 Clé publique à uploader dans WhatsApp Manager:\n');
  console.log(keyPair.publicKey);

} catch (error) {
  console.error('❌ Erreur lors de la génération des clés:', error.message);
  process.exit(1);
}

