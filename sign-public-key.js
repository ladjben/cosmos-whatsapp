const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

console.log('✍️  Signature de la clé publique pour WhatsApp Manager...\n');

const passphrase = 'cosmos_algerie_2024_whatsapp_flows';

try {
  // Charger la clé privée
  const privateKeyPath = path.join(__dirname, 'private.pem');
  if (!fs.existsSync(privateKeyPath)) {
    console.error('❌ Clé privée non trouvée. Lance d\'abord generate-keys.js');
    process.exit(1);
  }

  const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

  // Charger la clé publique
  const publicKeyPath = path.join(__dirname, 'public.pem');
  if (!fs.existsSync(publicKeyPath)) {
    console.error('❌ Clé publique non trouvée. Lance d\'abord generate-keys.js');
    process.exit(1);
  }

  const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

  // Créer un objet Sign
  const sign = crypto.createSign('SHA256');
  sign.update(publicKey);
  sign.end();

  // Signer avec la clé privée
  const signature = sign.sign({
    key: privateKey,
    passphrase: passphrase
  }, 'base64');

  console.log('✅ Clé publique signée avec succès!\n');
  
  console.log('📋 Signature à uploader dans WhatsApp Manager:\n');
  console.log('---DEBUT SIGNATURE---');
  console.log(signature);
  console.log('---FIN SIGNATURE---\n');

  // Sauvegarder la signature
  const signaturePath = path.join(__dirname, 'signature.txt');
  fs.writeFileSync(signaturePath, signature);
  console.log('✅ Signature sauvegardée dans signature.txt');

  console.log('\n📝 Instructions:');
  console.log('1. Copie la signature ci-dessus');
  console.log('2. Va dans WhatsApp Manager > API Setup');
  console.log('3. Colle la signature dans le champ approprié');
  console.log('4. Uploade aussi la clé publique (public.pem)');

} catch (error) {
  console.error('❌ Erreur:', error.message);
  if (error.message.includes('bad decrypt')) {
    console.log('\n💡 Astuce: Vérifie que la passphrase est correcte');
  }
  process.exit(1);
}

