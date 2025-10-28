# 🔐 Signature de Clé avec Meta Cloud API

Script pour signer et enregistrer automatiquement ta clé publique dans Meta via l'API Cloud.

## 🎯 Pourquoi utiliser ce script ?

Au lieu de copier-coller manuellement dans Meta Business Manager, ce script :
- ✅ Enregistre automatiquement ta clé dans Meta
- ✅ Obtient un access token sécurisé
- ✅ Utilise l'API Graph officielle
- ✅ Valide les credentials
- ✅ Affiche les clés existantes

## 📋 Prérequis

1. **Meta App créée** sur [developers.facebook.com](https://developers.facebook.com/apps/)
2. **WhatsApp Business API activé**
3. **Phone Number ID** configuré
4. **Clés RSA générées** (`npm run setup`)

## 🚀 Configuration

### 1. Installer les dépendances

```bash
npm install
```

Dépendances requises (déjà installées) :
- `axios` - Pour les appels API
- `dotenv` - Pour charger les variables d'environnement

### 2. Créer le fichier .env

```bash
# Copie le template
cp env-template.txt .env

# Édite avec tes vraies valeurs
nano .env
```

### 3. Remplir les variables

```bash
META_APP_ID=ton_app_id
META_APP_SECRET=ton_app_secret
META_PHONE_NUMBER_ID=ton_phone_number_id
```

**Comment obtenir ces valeurs ?**

#### META_APP_ID et META_APP_SECRET
1. Va sur [developers.facebook.com/apps](https://developers.facebook.com/apps/)
2. Sélectionne ton app (ou crée-en une)
3. **Settings > Basic**
4. Copie **App ID** et **App Secret**

#### META_PHONE_NUMBER_ID
1. Dans ton app, va dans **WhatsApp > API Setup**
2. Trouve **Phone number ID** ou **To**
3. Copie l'ID numérique

### 4. Lancer le script

```bash
npm run sign-meta
```

## 📊 Ce que fait le script

```bash
npm run sign-meta
```

### Étape 1 : Chargement de la clé
```
✅ Clé publique chargée: public-key-whatsapp.pem
```

### Étape 2 : Obtention de l'access token
```
🔑 Récupération de l'access token...
✅ Access token obtenu
```

### Étape 3 : Enregistrement dans Meta
```
✍️  Signature de la clé publique via Meta API...
✅ Clé publique signée et enregistrée dans Meta!
```

### Étape 4 : Affichage des clés existantes
```
📋 Clés publiques existantes:
Clé 1:
- ID: 123456789
- Algorithme: RSA256
- Créé: 2024-10-28T12:00:00+0000
```

## 🔄 Workflow Complet

### Option 1 : Via ce script (RECOMMANDÉ)

```bash
# 1. Génère les clés
npm run setup

# 2. Configure .env avec Meta credentials
nano .env

# 3. Enregistre automatiquement dans Meta
npm run sign-meta

# 4. Configure juste l'endpoint dans Meta Business Manager
```

### Option 2 : Manuel

```bash
# 1. Génère les clés
npm run setup

# 2. Copie les valeurs affichées
# 3. Va dans Meta Business Manager
# 4. Colle manuellement dans l'interface
```

## ⚠️ Dépannage

### Erreur : "Variables d'environnement manquantes"

**Solution** : Vérifie que `.env` existe et contient les 3 variables :
```bash
ls .env
cat .env
```

### Erreur : "Fichier de clé publique non trouvé"

**Solution** : Lance d'abord la génération des clés :
```bash
npm run setup
```

### Erreur : "Invalid access token"

**Solutions** :
- Vérifie que APP_ID et APP_SECRET sont corrects
- Vérifie que l'app Meta est active
- Vérifie que l'app a les permissions WhatsApp

### Erreur : "Invalid phone_number_id"

**Solutions** :
- Vérifie le PHONE_NUMBER_ID dans WhatsApp > API Setup
- Assure-toi que WhatsApp Business API est activé
- Vérifie que tu as un numéro de test approuvé

### Erreur : "Permission denied"

**Solutions** :
- Va dans Meta for Developers > App Settings > Permissions
- Active **WhatsApp Business Management API**
- Demande l'accès WhatsApp Cloud API

## 🔐 Sécurité

⚠️ **IMPORTANT** :
- Le fichier `.env` est **AUTOMATIQUEMENT exclu de Git**
- Ne **JAMAIS** commiter `.env`
- Ne **JAMAIS** partager tes credentials Meta
- Stocke `.env` de manière sécurisée

## 📁 Fichiers

- `sign-with-meta-api.js` - Script principal
- `env-template.txt` - Template pour .env
- `meta-env-config.md` - Documentation détaillée

## 📚 Ressources

- [Meta WhatsApp Flows API](https://developers.facebook.com/docs/whatsapp/flows-api)
- [Meta Graph API](https://developers.facebook.com/docs/graph-api)
- [WhatsApp Business Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)

## ✅ Checklist

- [ ] Meta App créée et configurée
- [ ] WhatsApp Business API activé
- [ ] Phone Number ID obtenu
- [ ] Fichier `.env` créé avec les 3 variables
- [ ] Clés RSA générées (`npm run setup`)
- [ ] Script lancé avec succès (`npm run sign-meta`)
- [ ] Endpoint configuré dans Meta Business Manager

---

## 🎉 Résultat

Après exécution réussie :
- ✅ Clé publique enregistrée dans Meta
- ✅ Ready pour recevoir des requêtes WhatsApp
- ✅ Flow API configuré

