# Configuration Meta WhatsApp Cloud API

## Variables d'environnement requises

Crée un fichier `.env` à la racine du projet avec ces variables :

```bash
# Meta WhatsApp Cloud API Configuration

# App ID de ton application Meta
META_APP_ID=your_app_id_here

# App Secret de ton application Meta
META_APP_SECRET=your_app_secret_here

# Phone Number ID (WhatsApp Business)
META_PHONE_NUMBER_ID=your_phone_number_id_here

# Passphrase pour les clés RSA (optionnel)
WHATSAPP_FLOWS_PASSPHRASE=cosmos_algerie_2024_whatsapp_flows
```

## 📝 Comment obtenir ces valeurs

### 1. META_APP_ID et META_APP_SECRET

1. Va sur [Meta for Developers](https://developers.facebook.com/apps/)
2. Crée une nouvelle application ou sélectionne une existante
3. Va dans **Settings > Basic**
4. Trouve :
   - **App ID** → `META_APP_ID`
   - **App Secret** → `META_APP_SECRET` (clique "Show" pour l'afficher)

### 2. META_PHONE_NUMBER_ID

1. Dans ton app Meta, va dans **WhatsApp > API Setup**
2. Trouve **Phone number ID** ou **To**
3. Copie l'ID (exemple : `123456789012345`)

## 🚀 Utilisation

### 1. Crée le fichier .env

```bash
# Copie ce template
cp meta-env-config.md .env

# Édite .env avec tes vraies valeurs
nano .env
# ou
open .env
```

### 2. Lance le script

```bash
npm run sign-meta
```

Le script va :
1. ✅ Charger tes credentials depuis .env
2. ✅ Lire la clé publique (`public-key-whatsapp.pem`)
3. ✅ Obtenir un access token Meta
4. ✅ Enregistrer la clé dans Meta via l'API
5. ✅ Afficher les clés existantes

## ⚠️ Sécurité

- ❌ JAMAIS commiter le fichier `.env`
- ❌ JAMAIS partager tes credentials Meta
- ✅ Le fichier `.env` est automatiquement ignoré par Git

## 📋 Exemple de fichier .env

```bash
META_APP_ID=1234567890123456
META_APP_SECRET=abcdef1234567890abcdef1234567890
META_PHONE_NUMBER_ID=123456789012345
WHATSAPP_FLOWS_PASSPHRASE=cosmos_algerie_2024_whatsapp_flows
```

## 🔗 Ressources

- [Meta for Developers](https://developers.facebook.com/docs/whatsapp/flows-api)
- [WhatsApp Business API Setup](https://business.facebook.com/)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer/)

