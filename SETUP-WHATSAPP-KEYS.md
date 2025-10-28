# 🔑 Configuration WhatsApp Flows avec Encryption RSA

## Installation Express (1 commande)

Génére automatiquement la paire de clés RSA et affiche tout ce dont tu as besoin :

```bash
npm run setup
```

## 📋 Ce que fait le script

1. ✅ Génère une paire de clés RSA (2048 bits)
2. ✅ Signe la clé publique avec la clé privée
3. ✅ Exporte les fichiers `.pem`
4. ✅ Affiche la clé publique SIGNÉE prête pour Meta Business Manager
5. ✅ Affiche la signature prête pour Meta Business Manager

## 📁 Fichiers générés

- `public-key-whatsapp.pem` - Clé publique
- `private-key-whatsapp.pem` - Clé privée
- `signature-whatsapp.txt` - Signature de la clé publique

⚠️ **Important** : Ces fichiers sont exclus de Git (`.gitignore`).

## 🎯 Configuration Meta Business Manager

Le script affiche directement :

### 1. Clé Publique
```
-----BEGIN PUBLIC KEY-----
[MIIBIjANBgkqhkiG9w0BAQEF...]
-----END PUBLIC KEY-----
```

**Où l'utiliser** :
- Meta Business Manager > WhatsApp > Configuration
- Colle dans "Public Key"

### 2. Signature
```
q8j9RYkJ7T/DpoPQip3l...
```

**Où l'utiliser** :
- Meta Business Manager > WhatsApp > Configuration
- Colle dans "Public Key Signature"

## 🚀 Configuration Vercel

Le script affiche aussi les variables d'environnement à ajouter dans Vercel :

### Variables d'environnement requises

**1. RSA_PASSPHRASE**
```
cosmos_algerie_2024_whatsapp_flows
```

**2. PRIVATE_KEY**
Copie le contenu complet de `private-key-whatsapp.pem` :
```
-----BEGIN ENCRYPTED PRIVATE KEY-----
[MIIFLTBXBgkqhkiG9w0BBQ0w...]
-----END ENCRYPTED PRIVATE KEY-----
```

**3. PUBLIC_KEY**
Copie le contenu complet de `public-key-whatsapp.pem` :
```
-----BEGIN PUBLIC KEY-----
[MIIBIjANBgkqhkiG9w0BAQEF...]
-----END PUBLIC KEY-----
```

## 📝 Instructions Complètes

### Étape 1 : Générer les clés

```bash
npm run setup
```

### Étape 2 : Configurer Meta Business Manager

1. Va sur [Meta Business Manager](https://business.facebook.com)
2. Navigation vers WhatsApp > Configuration > Flows API
3. Public Key : Copie-colle la clé publique affichée
4. Public Key Signature : Copie-colle la signature affichée

### Étape 3 : Configurer Vercel

1. Va dans ton projet Vercel
2. Settings > Environment Variables
3. Ajoute les 3 variables :
   - `RSA_PASSPHRASE` = `cosmos_algerie_2024_whatsapp_flows`
   - `PRIVATE_KEY` = Contenu de `private-key-whatsapp.pem`
   - `PUBLIC_KEY` = Contenu de `public-key-whatsapp.pem`

### Étape 4 : Configurer l'endpoint

Dans Meta Business Manager :
- Flows API Endpoint : `https://ton-projet.vercel.app/api/products`
- Method : `POST`

## ⚠️ Sécurité

- ❌ JAMAIS commiter les fichiers `.pem`
- ❌ JAMAIS partager la passphrase
- ✅ Garder `private-key-whatsapp.pem` sur Vercel uniquement
- ✅ Utiliser les variables d'environnement

## 🔄 Régénérer les clés

Si tu as besoin de nouvelles clés :

```bash
# Supprime les anciennes
rm public-key-whatsapp.pem
rm private-key-whatsapp.pem
rm signature-whatsapp.txt

# Régénère
npm run setup
```

Puis reconfigure Meta Business Manager et Vercel avec les nouvelles clés.

## ✅ Résultat Attendu

Après configuration :
- Meta Business Manager accepte les clés
- Vercel peut déchiffrer les requêtes WhatsApp
- Le serveur répond aux requêtes encryptées
- WhatsApp Flows fonctionne avec encryption

---

## 📞 Support

Pour plus d'informations :
- `README.md` - Documentation complète
- `QUICKSTART.md` - Guide de démarrage rapide
- `VERCEL-DEPLOY-NOW.md` - Instructions de déploiement

