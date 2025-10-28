# 🚀 Guide de Démarrage Rapide - Cosmos WhatsApp Flows v7.2

## Installation en 5 minutes

### 1️⃣ Installation

```bash
npm install
```

### 2️⃣ Générer les clés RSA

```bash
npm run generate-keys
```

**Important** : Note la passphrase affichée : `cosmos_algerie_2024_whatsapp_flows`

Cela crée 2 fichiers :
- ✅ `public.pem` → Pour WhatsApp Manager
- ✅ `private.pem` → Pour le serveur (PRIVÉ!)

### 3️⃣ Signer la clé publique

```bash
npm run sign-key
```

Copie la signature affichée (elle commence par une longue chaîne base64).

### 4️⃣ Configurer WhatsApp Manager

1. Va sur [WhatsApp Manager](https://business.facebook.com)
2. Navigue vers **Configuration** > **API Setup** > **Flows API**
3. Uploade la clé publique :
   - Fichier : `public.pem`
4. Colle la signature :
   - Dans le champ "Public Key Signature"
5. Configure l'endpoint :
   - URL : `https://ton-domaine.vercel.app/api/products`
   - Méthode : `POST`

### 5️⃣ Tester localement

```bash
# Démarrer le serveur
npm start

# Dans un autre terminal, tester
npm test
```

### 6️⃣ Déployer sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

**Après déploiement** :

1. Va dans les Settings de ton projet Vercel
2. Ajoute ces variables d'environnement :
   - `RSA_PASSPHRASE` = `cosmos_algerie_2024_whatsapp_flows`
   - `PORT` = `3000`
3. Uploade `private.pem` dans Vercel

### 7️⃣ Tester avec WhatsApp

1. Va dans WhatsApp Business
2. Crée un nouveau Flow
3. Le Flow doit appeler ton endpoint
4. Teste le Flow

## 📋 Checklist

- [ ] `npm install` exécuté
- [ ] Clés RSA générées (`generate-keys.js`)
- [ ] Clé publique signée (`sign-public-key.js`)
- [ ] Clé publique uploadée dans WhatsApp Manager
- [ ] Signature uploadée dans WhatsApp Manager
- [ ] Serveur testé localement (`npm test`)
- [ ] Déployé sur Vercel
- [ ] Variables d'environnement configurées dans Vercel
- [ ] `private.pem` uploadé dans Vercel
- [ ] Flow créé et testé dans WhatsApp

## 🆘 En cas de problème

### Erreur : "Clés RSA non trouvées"

```bash
# Génère les clés
npm run generate-keys
```

### Erreur : "bad decrypt"

```bash
# Vérifie la passphrase dans Vercel
# Elle doit être : cosmos_algerie_2024_whatsapp_flows
```

### Erreur : "Clé publique non trouvée dans WhatsApp Manager"

1. Va dans WhatsApp Manager
2. Uploade `public.pem` à nouveau
3. Colle la signature

### Test ne fonctionne pas

```bash
# Redémarre le serveur
npm start

# Dans un autre terminal
npm test
```

## 📁 Structure des fichiers

```
cosmos-whatsapp/
├── api/
│   └── products.js          # Serveur principal avec encryption
├── generate-keys.js          # Génère les clés RSA
├── sign-public-key.js        # Signe la clé publique
├── test-local.js             # Tests locaux
├── package.json              # Configuration Node.js
├── vercel.json               # Configuration Vercel
├── env.example               # Variables d'environnement
├── .gitignore                # Fichiers ignorés
└── README.md                 # Documentation complète
```

## 🔐 Sécurité

⚠️ **JAMAIS** :
- Partager `private.pem`
- Commiter `private.pem` sur Git
- Partager la passphrase
- Uploadez `private.pem` sur un service public

✅ **TOUJOURS** :
- Uploadez seulement `public.pem` dans WhatsApp Manager
- Garde `private.pem` sur le serveur uniquement
- Utilise une passphrase forte
- Active les logs pour déboguer

## 📊 Données

- **39 produits** Black Friday Cosmos Algérie
- **Images** : Unsplash HD
- **Prix** : En DA (Dinars Algériens)
- **Actions** : INIT, data_exchange

## 🎯 Prochaines étapes

1. Personnalise les produits dans `api/products.js`
2. Ajoute des tests supplémentaires
3. Configure des webhooks
4. Ajoute des analytics
5. Intègre avec un backend

## 📞 Support

Consulte `README.md` pour plus de détails techniques.

