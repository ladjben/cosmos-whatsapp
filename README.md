# Cosmos WhatsApp Flows Server v7.2 avec Encryption RSA

Serveur Node.js pour intégrer **WhatsApp Flows v7.2** avec encryption complète pour la collection Black Friday de **Cosmos Algérie**.

## 🔐 Features

✅ **Encryption RSA complète** (v7.2)  
✅ **39 produits** de la collection Black Friday  
✅ **Actions supportées** : `INIT` et `data_exchange`  
✅ **Images Unsplash** haute qualité  
✅ **Prêt pour Vercel**  

## 📁 Fichiers

- `package.json` - Configuration Node.js avec Express et CORS
- `vercel.json` - Configuration de déploiement sur Vercel
- `api/products.js` - Serveur Express avec endpoint WhatsApp Flows + encryption RSA
- `generate-keys.js` - Script pour générer les clés RSA
- `sign-public-key.js` - Script pour signer la clé publique
- `test-local.js` - Script de test local
- `env.example` - Configuration d'environnement
- `.gitignore` - Fichiers à ignorer pour Git

## 🚀 Installation et Setup

### 1. Installer les dépendances

```bash
npm install
```

### 2. Générer les clés RSA (REQUIS)

```bash
npm run generate-keys
```

Cela va créer :
- `public.pem` - À uploader dans WhatsApp Manager
- `private.pem` - Utilisée par le serveur (NE JAMAIS PARTAGER!)

**Passphrase** : `cosmos_algerie_2024_whatsapp_flows`

### 3. Signer la clé publique

```bash
npm run sign-key
```

Copie la signature affichée pour l'uploader dans WhatsApp Manager.

### 4. Configurer WhatsApp Manager

1. Va dans WhatsApp Manager > API Setup
2. Upload la clé publique (`public.pem`)
3. Copie-colle la signature générée
4. Configure l'endpoint de ton serveur

### 5. Démarrer le serveur local

```bash
npm start
```

Le serveur démarre sur `http://localhost:3000`

## 🧪 Tester le serveur

```bash
npm test
```

Les tests vérifient :
- ✅ Action INIT (récupérer tous les produits)
- ✅ Action data_exchange (détails d'un produit)
- ✅ Gestion des erreurs

## 🌐 Déploiement sur Vercel

### Option 1 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Option 2 : Via GitHub

1. Poussez le code sur GitHub
2. Connectez votre repo à Vercel
3. Vercel détectera automatiquement la configuration

### Option 3 : Via Dashboard Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Importez votre repo GitHub
3. Ajoutez les variables d'environnement dans Vercel :
   - `RSA_PASSPHRASE` = `cosmos_algerie_2024_whatsapp_flows`
4. Uploadez `private.pem` dans les fichiers de Vercel
5. Vercel déploiera automatiquement

### Configuration Vercel

Après déploiement, ajoute ces variables d'environnement :

```bash
RSA_PASSPHRASE=cosmos_algerie_2024_whatsapp_flows
PORT=3000
```

Et uploade `private.pem` dans Vercel (onglet Settings > Environment Variables > Upload File).

## 📡 Endpoints

### GET `/`
Retourne un message de confirmation avec le nombre de produits.

**Réponse :**
```json
{
  "message": "Serveur WhatsApp Flows pour Cosmos Algérie - Black Friday Collection",
  "status": "Actif",
  "total_products": 39
}
```

### POST `/api/products`

Endpoint principal pour WhatsApp Flows v7.2 avec encryption.

#### Action: INIT (Tous les produits)

**Requête (encrypted) :**
```json
{
  "encrypted_data": "base64_encrypted_string..."
}
```

**Données déchiffrées :**
```json
{
  "action": "INIT"
}
```

**Réponse (encrypted) :**
```json
{
  "encrypted_data": "base64_encrypted_response..."
}
```

**Données déchiffrées :**
```json
{
  "products": [
    {
      "id": "1",
      "title": "Boots Derby Marron",
      "price": "6 200 DA",
      "image": "https://images.unsplash.com/..."
    },
    ...
  ]
}
```

#### Action: data_exchange (Détails produit)

**Requête (encrypted) :**
```json
{
  "encrypted_data": "base64_encrypted_string..."
}
```

**Données déchiffrées :**
```json
{
  "action": "data_exchange",
  "product_id": "1"
}
```

**Réponse (encrypted) :**
```json
{
  "encrypted_data": "base64_encrypted_response..."
}
```

**Données déchiffrées :**
```json
{
  "product_name": "Boots Derby Marron",
  "product_price": "6 200 DA",
  "product_image": "https://images.unsplash.com/...",
  "product_description": "Chaussures de ville élégantes..."
}
```

#### Mode Développement (Non-encrypté)

Pour tester sans encryption :

```json
{
  "action": "INIT"
}
```

## 👟 39 Produits Black Friday

Le serveur inclut 39 produits exacts de la collection Black Friday Cosmos Algérie avec :
- ID unique
- Titre complet
- Prix en DA (Dinars Algériens)
- Image Unsplash haute qualité
- Description détaillée

## 🔧 Configuration

- **Port** : 3000 (ou variable d'environnement PORT)
- **CORS** : Activé pour toutes les origines
- **Framework** : Express.js
- **Platform** : Vercel Serverless

## 📦 Dépendances

- `express` - Framework web Node.js
- `cors` - Middleware CORS

## ✅ Test en Local

### Avec npm test

```bash
npm test
```

### Avec curl (mode non-encrypté pour développement)

```bash
# Tester GET /
curl http://localhost:3000

# Tester INIT
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"action":"INIT"}'

# Tester data_exchange
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"action":"data_exchange", "product_id":"1"}'
```

## 🎯 WhatsApp Flows v7.2

Ce serveur est conçu pour être intégré avec **WhatsApp Business API Flows v7.2** avec encryption RSA :

1. **WhatsApp** envoie une requête POST avec `encrypted_data` à `/api/products`
2. Le serveur **déchiffre** les données avec la clé privée RSA
3. Le serveur traite l'action (`INIT` ou `data_exchange`)
4. Le serveur **chiffre** la réponse avec la clé publique
5. **WhatsApp** reçoit `encrypted_data` et l'affiche dans le Flow

### Flow d'encryption

```
WhatsApp ──[encrypted_data]──> Server
Server ──[decrypt with private]──> Process
Server ──[encrypt with public]──> WhatsApp
WhatsApp ──[decrypt]──> Display Flow
```

### Actions supportées

- **`INIT`** : Initialise le Flow et retourne tous les 39 produits
- **`data_exchange`** : Échange de données pour obtenir les détails d'un produit spécifique

## 🛡️ Sécurité

- CORS configuré pour accepter les requêtes de WhatsApp
- Validation des paramètres d'entrée
- Gestion des erreurs complète
- Logs de débogage pour traçabilité

## 📝 Notes

- Toutes les images proviennent d'Unsplash (gratuites)
- Les prix sont en DA (Dinars Algériens)
- Le serveur est ready-to-deploy sur Vercel
- Logs console pour faciliter le débogage

## 🚀 Ready to Deploy!

Le serveur est prêt à être déployé sur Vercel en un clic !

