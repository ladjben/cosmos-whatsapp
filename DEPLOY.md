# 🚀 Guide de Déploiement sur Vercel

## Option 1 : Déploiement via Dashboard Vercel (RECOMMANDÉ)

### Étape 1 : Connecter votre repository GitHub

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous ou créez un compte
3. Cliquez sur **"Add New"** → **"Project"**
4. Importez le repository : `https://github.com/ladjben/cosmos-whatsapp`

### Étape 2 : Configuration du projet

Vercel détectera automatiquement :
- Framework : Node.js
- Root Directory : `/` 
- Build Command : `npm install` (automatique)

### Étape 3 : Variables d'environnement

**IMPORTANT** : Ajoute ces variables dans Settings > Environment Variables :

```
RSA_PASSPHRASE=cosmos_algerie_2024_whatsapp_flows
```

### Étape 4 : Upload de private.pem

1. Va dans **Settings** > **Environment Variables**
2. Scroll jusqu'à "Files"
3. Upload `private.pem` (TU DOIS ALLER LE CHERCHER !)

**Où trouver private.pem** :
```bash
# Dans ton terminal local
cat private.pem
```

Copie le contenu complet et crée un nouveau fichier sur Vercel.

### Étape 5 : Déployer

Clique sur **"Deploy"** et c'est parti !

---

## Option 2 : Déploiement via CLI (Alternative)

### Installer Vercel CLI

```bash
# Globalement
npm install -g vercel

# Ou utilise npx
npx vercel
```

### Déployer

```bash
vercel
```

Suis les instructions à l'écran :
1. Set up and deploy ? → **Oui**
2. Which scope ? → **Ton compte**
3. Link to existing project ? → **Non**
4. Project name ? → **cosmos-whatsapp**
5. Directory ? → **./**

### Configuration des variables d'environnement

Après le premier déploiement :

```bash
vercel env add RSA_PASSPHRASE
# Entre : cosmos_algerie_2024_whatsapp_flows
```

### Upload private.pem via CLI

Crée d'abord le fichier sur Vercel :

```bash
# Crée un fichier de backup
cp private.pem private_key.pem

# Upload
vercel secrets add private_key $(cat private.pem)
```

---

## 🎯 Après le déploiement

### Obtenir l'URL de ton serveur

Vercel te donnera une URL comme :
```
https://cosmos-whatsapp-abcd123.vercel.app
```

### Configurer WhatsApp Manager

1. Va sur [WhatsApp Manager](https://business.facebook.com)
2. Configuration → API Setup → Flows API
3. Configure l'endpoint :
   - **URL** : `https://cosmos-whatsapp-abcd123.vercel.app/api/products`
   - **Méthode** : `POST`

---

## ⚠️ Checklist complète

- [ ] Repository GitHub connecté à Vercel
- [ ] Variable d'environnement `RSA_PASSPHRASE` ajoutée
- [ ] Fichier `private.pem` uploadé sur Vercel
- [ ] Déploiement réussi
- [ ] URL obtenue
- [ ] Endpoint configuré dans WhatsApp Manager
- [ ] Test du Flow effectué

---

## 🐛 Dépannage

### Erreur : "Private key not found"

**Solution** : Upload `private.pem` dans Settings > Files

### Erreur : "Bad decrypt"

**Solution** : Vérifie que `RSA_PASSPHRASE` = `cosmos_algerie_2024_whatsapp_flows`

### Erreur : "Cannot find module"

**Solution** : Vérifie que `vercel.json` est correctement configuré

---

## 📊 Statut du déploiement

Une fois déployé, tu verras :
- ✅ URL de production : `https://cosmos-whatsapp-xxx.vercel.app`
- ✅ Logs de déploiement
- ✅ Fonctionnement dans "Functions" tab

---

## 🎉 Prêt !

Ton serveur WhatsApp Flows est maintenant live et prêt à recevoir des requêtes de WhatsApp !

