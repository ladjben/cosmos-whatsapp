#!/usr/bin/env node

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

console.log('🔑 Configuration WhatsApp Flows - Génération des clés RSA\n');

// Configuration
const PASSPHRASE = process.env.WHATSAPP_FLOWS_PASSPHRASE || 'cosmos_algerie_2024_whatsapp_flows';

// Génération de la paire de clés RSA
console.log('📝 Génération de la paire de clés RSA (2048 bits)...\n');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: PASSPHRASE
  }
});

// Export des clés en fichiers .pem
const outputDir = path.join(__dirname);

// Sauvegarder la clé publique
const publicKeyPath = path.join(outputDir, 'public-key-whatsapp.pem');
fs.writeFileSync(publicKeyPath, publicKey);
console.log('✅ Clé publique sauvegardée:', publicKeyPath);

// Sauvegarder la clé privée
const privateKeyPath = path.join(outputDir, 'private-key-whatsapp.pem');
fs.writeFileSync(privateKeyPath, privateKey);
console.log('✅ Clé privée sauvegardée:', privateKeyPath);

// Signature de la clé publique
console.log('\n✍️  Signature de la clé publique...\n');
const sign = crypto.createSign('SHA256');
sign.update(publicKey);
sign.end();

const signature = sign.sign({
  key: privateKey,
  passphrase: PASSPHRASE
}, 'base64');

console.log('✅ Clé publique signée avec succès!\n');

// Sauvegarder la signature
const signaturePath = path.join(outputDir, 'signature-whatsapp.txt');
fs.writeFileSync(signaturePath, signature);
console.log('✅ Signature sauvegardée:', signaturePath);

// ═══════════════════════════════════════════════════════════════════
// AFFICHAGE POUR META BUSINESS MANAGER
// ═══════════════════════════════════════════════════════════════════

console.log('\n');
console.log('═'.repeat(70));
console.log('📋 CLÉ PUBLIQUE POUR META BUSINESS MANAGER');
console.log('═'.repeat(70));
console.log('\nCopie-colle cette clé dans Meta Business Manager > WhatsApp Flows Configuration:\n');
console.log(publicKey);
console.log('\n');

console.log('═'.repeat(70));
console.log('🔐 SIGNATURE POUR META BUSINESS MANAGER');
console.log('═'.repeat(70));
console.log('\nCopie-colle cette signature dans Meta Business Manager:\n');
console.log(signature);
console.log('\n');

// ═══════════════════════════════════════════════════════════════════
// INFORMATIONS DE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════

console.log('═'.repeat(70));
console.log('⚙️  CONFIGURATION VERCEL / VARIABLES D\'ENVIRONNEMENT');
console.log('═'.repeat(70));
console.log('\n');

console.log('📝 1. Passphrase (RSA_PASSPHRASE):');
console.log(`   ${PASSPHRASE}\n`);

console.log('📝 2. Private Key (PRIVATE_KEY):');
console.log('   Copie le contenu du fichier: private-key-whatsapp.pem');
console.log(`   ${privateKeyPath}\n`);

console.log('📝 3. Public Key (PUBLIC_KEY):');
console.log('   Copie le contenu du fichier: public-key-whatsapp.pem');
console.log(`   ${publicKeyPath}\n`);

// ═══════════════════════════════════════════════════════════════════
// INSTRUCTIONS
// ═══════════════════════════════════════════════════════════════════

console.log('═'.repeat(70));
console.log('📋 INSTRUCTIONS');
console.log('═'.repeat(70));
console.log('\n');

console.log('1️⃣  MET BUSINESS MANAGER:');
console.log('   - Va dans Meta Business Manager > WhatsApp > Configuration');
console.log('   - Trouve "Flows API" ou "WhatsApp Flows"');
console.log('   - Colle la CLÉ PUBLIQUE (ci-dessus)');
console.log('   - Colle la SIGNATURE (ci-dessus)\n');

console.log('2️⃣  VERCEL:');
console.log('   - Va dans Settings > Environment Variables');
console.log('   - Ajoute RSA_PASSPHRASE = (passphrase ci-dessus)');
console.log('   - Ajoute PRIVATE_KEY = contenu de private-key-whatsapp.pem');
console.log('   - Ajoute PUBLIC_KEY = contenu de public-key-whatsapp.pem\n');

console.log('✅ Configuration terminée!\n');

