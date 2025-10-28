# Cosmos WhatsApp Flows Server

Serveur Node.js pour intégrer WhatsApp Flows avec la collection Black Friday de **Cosmos Algérie**.

## 📋 Fichiers

- `package.json` - Configuration Node.js avec Express et CORS
- `vercel.json` - Configuration de déploiement sur Vercel
- `api/products.js` - Serveur Express avec endpoint WhatsApp Flows
- `.gitignore` - Fichiers à ignorer pour Git

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur en local
npm start
```

Le serveur démarrera sur `http://localhost:3000`

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
3. Vercel déploiera automatiquement

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

Endpoint principal pour WhatsApp Flows.

#### Action: INIT ou GET_PRODUCTS

**Requête :**
```json
{
  "action": "INIT"
}
```

**Réponse :**
```json
{
  "products": [
    {
      "id": "1",
      "title": "Boots Derby Marron",
      "price": "6 200 DA",
      "image": "https://images.unsplash.com/..."
    }
  ]
}
```

#### Action: GET_PRODUCT_DETAILS

**Requête :**
```json
{
  "action": "GET_PRODUCT_DETAILS",
  "product_id": "1"
}
```

**Réponse :**
```json
{
  "product_name": "Boots Derby Marron",
  "product_price": "6 200 DA",
  "product_image": "https://images.unsplash.com/...",
  "product_description": "Chaussures de ville élégantes..."
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

```bash
# Tester GET /
curl http://localhost:3000

# Tester GET_PRODUCTS
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"action":"GET_PRODUCTS"}'

# Tester GET_PRODUCT_DETAILS
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"action":"GET_PRODUCT_DETAILS", "product_id":"1"}'
```

## 🎯 WhatsApp Flows

Ce serveur est conçu pour être intégré avec WhatsApp Business API Flows :

1. WhatsApp envoie une requête POST à `/api/products`
2. Le serveur traite l'action (INIT/GET_PRODUCTS ou GET_PRODUCT_DETAILS)
3. Retourne les données au format attendu par WhatsApp Flows
4. WhatsApp affiche les produits dans le Flow

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

