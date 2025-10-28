# 🔐 Signer la Clé Publique dans Meta - Guide Complet

## 📋 Vue d'ensemble

Ce script automatise la signature et l'enregistrement de ta clé publique RSA dans Meta Business Manager via l'API WhatsApp Flows.

## 🚀 Utilisation Rapide

```bash
# 1. Crée le fichier .env
cp env-template.txt .env

# 2. Édite .env avec tes vraies valeurs
nano .env

# 3. Lance le script
npm run sign-meta
```

## ⚙️ Configuration

### 1. Obtenir META_APP_ID et META_APP_SECRET

**Méta App ID** et **Secret** sont les credentials de base de ton application Meta :

1. Va sur [Meta for Developers](https://developers.facebook.com/apps/)
2. **Crée une nouvelle app** ou **sélectionne une app existante**
3. Va dans **Settings** > **Basic**
4. Trouve les informations suivantes :

```
App ID: 1234567890123456         → META_APP_ID
App Secret: abcdef...            → META_APP_SECRET (clique "Show")
```

**📸 Capture d'écran** (Settings > Basic) :
```
App ID
1234567890123456

App Secret
🔒 Show  → [abcdef1234567890abcdef1234567890]
```

### 2. Obtenir META_PHONE_NUMBER_ID

**Phone Number ID** est l'ID de ton numéro WhatsApp Business :

1. Dans ton app Meta, va dans **WhatsApp** > **API Setup**
2. Trouve **"To"** ou **"Phone number ID"**
3. Copie l'ID (exemple : `123456789012345`)

**📸 Exemple** :
```
To
123456789012345    ← META_PHONE_NUMBER_ID
```

### 3. Créer le fichier .env

```bash
# Copie le template
cp env-template.txt .env

# Édite avec tes vraies valeurs
nano .env
```

**Contenu de .env** :
```bash
META_APP_ID=1234567890123456
META_APP_SECRET=abcdef1234567890abcdef1234567890
META_PHONE_NUMBER_ID=123456789012345
```

## 🎯 Lancement du Script

```bash
npm run sign-meta
```

### Résultat Attendu

```
🔐 Signature de clé publique via Meta Cloud API

✅ Clé publique chargée: public-key-whatsapp.pem

📋 Clé publique:
──────────────────────────────────────────────────────────────
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
-----END PUBLIC KEY-----
──────────────────────────────────────────────────────────────

🔑 Récupération de l'access token...
✅ Access token obtenu

✍️  Signature de la clé publique via Meta API...
✅ Clé publique signée et enregistrée dans Meta!

══════════════════════════════════════════════════════════
✅ CONFIGURATION TERMINÉE
══════════════════════════════════════════════════════════

📝 La clé publique a été enregistrée dans Meta avec succès!

🎯 Prochaines étapes:
1. Va dans Meta Business Manager > WhatsApp > Configuration
2. Trouve "Flows API"
3. Configure ton endpoint: https://ton-projet.vercel.app/api/products
4. Teste le Flow dans WhatsApp Business
```

## 🐛 Dépannage

### Erreur 1 : Variables d'environnement manquantes

**Erreur** :
```
❌ Variables d'environnement manquantes!
Configuration requise dans .env:
- META_APP_ID
- META_APP_SECRET
- META_PHONE_NUMBER_ID
```

**Solution** :
```bash
# Vérifie que .env existe
ls -la .env

# Vérifie le contenu
cat .env

# Crée depuis le template si manquant
cp env-template.txt .env
```

### Erreur 2 : Fichier de clé publique non trouvé

**Erreur** :
```
❌ Fichier de clé publique non trouvé!
💡 Lance d'abord: npm run setup
```

**Solution** :
```bash
# Génère les clés RSA
npm run setup

# Retente
npm run sign-meta
```

### Erreur 3 : Invalid access token

**Erreur** :
```
❌ Erreur lors de la récupération de l'access token:
Status: 400
Data: {"error": {"message": "Invalid client credentials"}}
```

**Solutions** :
1. Vérifie que `META_APP_ID` est correct
2. Vérifie que `META_APP_SECRET` est correct (sans espaces)
3. Vérifie que l'app Meta est **active**
4. Vérifie que l'app n'est pas en mode "Development only"

### Erreur 4 : Invalid phone_number_id

**Erreur** :
```
❌ Erreur lors de la signature:
Status: 400
Data: {"error": {"message": "Invalid phone_number_id"}}
```

**Solutions** :
1. Va dans **WhatsApp > API Setup**
2. Vérifie que le **Phone Number ID** est correct
3. Assure-toi que WhatsApp Business API est **activé**
4. Vérifie que tu as un **numéro de test approuvé**

### Erreur 5 : Permission denied

**Erreur** :
```
❌ Erreur lors de la signature:
Status: 403
Data: {"error": {"message": "Permission denied"}}
```

**Solutions** :
1. Va dans **Meta for Developers > App Settings > Permissions**
2. Active ces permissions :
   - ✅ `whatsapp_business_management`
   - ✅ `whatsapp_business_messaging`
3. Vérifie que l'app a accès à **WhatsApp Cloud API**
4. Attends quelques minutes et réessaye

### Erreur 6 : App not whitelisted

**Erreur** :
```
❌ Erreur lors de la signature:
Status: 403
Data: {"error": {"message": "App not whitelisted for WhatsApp Flows"}}
```

**Solution** :
1. Va dans **WhatsApp > Configuration**
2. Vérifie que **Flows API** est activé
3. Contacte le support Meta si nécessaire
4. Assure-toi d'avoir accès à la **version bêta** de Flows API

## 📋 Checklist de Configuration

### Prérequis
- [ ] Compte Meta for Developers créé
- [ ] App Meta créée
- [ ] WhatsApp Business API activé
- [ ] Phone Number ID obtenu
- [ ] Clés RSA générées (`npm run setup`)

### Variables .env
- [ ] `META_APP_ID` configuré
- [ ] `META_APP_SECRET` configuré
- [ ] `META_PHONE_NUMBER_ID` configuré

### Exécution
- [ ] Script lancé avec succès (`npm run sign-meta`)
- [ ] Aucune erreur affichée
- [ ] Confirmation "Clé publique signée et enregistrée"

### Post-Configuration
- [ ] Endpoint configuré dans Meta Business Manager
- [ ] Flow testé avec succès
- [ ] Requêtes WhatsApp reçues

## 📚 Ressources Utiles

### Documentation Meta
- [WhatsApp Flows API](https://developers.facebook.com/docs/whatsapp/flows-api)
- [Graph API Authentication](https://developers.facebook.com/docs/graph-api/overview/authentication)
- [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)

### Liens Utiles
- [Meta for Developers](https://developers.facebook.com/)
- [Meta Business Manager](https://business.facebook.com/)
- [WhatsApp API Setup](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started)

## 🔄 Workflow Complet

```bash
# 1. Installer les dépendances
npm install

# 2. Générer les clés RSA
npm run setup

# 3. Configurer les credentials Meta
cp env-template.txt .env
nano .env  # Remplis avec tes vraies valeurs

# 4. Enregistrer la clé dans Meta
npm run sign-meta

# 5. Configurer l'endpoint (manuellement dans Meta Business Manager)
# Endpoint: https://ton-projet.vercel.app/api/products

# 6. Déployer sur Vercel
vercel

# 7. Tester le Flow
# Crée un Flow dans Meta Business Manager et teste
```

## ⚠️ Sécurité

### À FAIRE ✅
- ✅ Stocke `.env` localement uniquement
- ✅ Utilise des variables d'environnement
- ✅ Ne commite JAMAIS `.env`
- ✅ Partage `.env` uniquement avec l'équipe autorisée

### À NE PAS FAIRE ❌
- ❌ Commiter `.env` sur Git
- ❌ Partager `META_APP_SECRET` publiquement
- ❌ Mettre les credentials en dur dans le code
- ❌ Commit les clés RSA dans le repo

## 🎯 Résultat Final

Après exécution réussie :
- ✅ Clé publique RSA enregistrée dans Meta
- ✅ Access token validé
- ✅ Configuration WhatsApp Flows API complète
- ✅ Prêt pour recevoir des requêtes WhatsApp

## 📞 Support

En cas de problème :
1. Consulte la section "Dépannage" ci-dessus
2. Vérifie les logs du script
3. Consulte la documentation Meta
4. Contacte le support Meta si nécessaire

---

**✅ Configuration terminée ! Ton serveur WhatsApp Flows est maintenant prêt à recevoir des requêtes !**

