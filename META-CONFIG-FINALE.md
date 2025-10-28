# 🔐 Configuration Meta Business Manager - Informations Finales

## ✅ Clé Publique à Uploader

Copie cette clé **complète** (de BEGIN à END) :

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwYHF1Ct5LZjswJf6kDr0
yxTNoHJc7uZuYAMlOP/zjOkFkTsm6MI/YurdQR/MrB8XkNZfSoy0t5NdRvPMRZPV
T2YWntqlnbbmM2XKPPQyuAc86YiDt/AgYVP/6UNmCd5UmjG1W9hfKpyNCECjSPBf
1sA1sC3E0b9FbmtZytem/Ny+Rjy0/VnHVFvxMFMd3CobKYWIrfKMqGP06FMigx23
pRxvC4/kuBLqV6+MFTlUqks8kNmOxVDidwc+SWxfb91vUiVKOV15nZJJpzzXYqkI
Uz4cqj4wpKHb5AezgrorkL/8z0QXW65/Thfxm2GikmWLOjwdYv5O4VQ5Av0HepJa
bQIDAQAB
-----END PUBLIC KEY-----
```

## ✅ Signature à Uploader

Copie cette signature complète :

```
PGVfj08MdUC6ZrKcCapsCs4mvE4khIXuybybW13F/Y9mFrtLg49ZtJBmAGZG+OFOSglM+F5q+oNv9/EHx06hB2ZNWR9P/ws1fBUxjdgEfmpC7tgZC5PTFKiZoiww4IJXZbo15ZTPC8Xd9A6RzX/XSzvP6SE7UYhAq3TtZsZTsCCvkzWnR2kfdL5EmJEzVYmrt2aZ5noLUZMYgnXO45kRVPo/69xlwJNUvlqxy6VcMEZbNld9W2h9hpywO0V0OupuYe5DeTU2l6wTs+BhRP4lAVltaipaR5XIGuXn18VDcgv/iB3EgSU4GYFLSbweGvjrD3HGj6moTjtmyFbdqcY1Bw==
```

---

## 📋 Étapes dans Meta Business Manager

### 1️⃣ Accéder à la Configuration

1. Va sur : https://business.facebook.com
2. Sélectionne ton business
3. Clique sur **"WhatsApp Manager"**
4. Va dans **"Configuration"** ou **"API Setup"**
5. Trouve la section **"Flows API"**

### 2️⃣ Uploader la Clé Publique

1. Trouve le champ **"Public Key"** ou **"Flows Public Key"**
2. Copie-colle la clé publique ci-dessus (tout le bloc de BEGIN à END)
3. Clique sur **"Enregistrer"** ou **"Save"**

### 3️⃣ Uploader la Signature

1. Trouve le champ **"Public Key Signature"** ou **"Signature"**
2. Copie-colle la signature ci-dessus
3. Clique sur **"Enregistrer"** ou **"Save"**

### 4️⃣ Configurer l'Endpoint

1. Trouve le champ **"Flows API Endpoint"** ou **"Webhook URL"**
2. Entre ton URL Vercel : `https://ton-domaine.vercel.app/api/products`
3. Sauvegarde

---

## ✅ Checklist

- [ ] Clé publique copiée et collée dans Meta Business Manager
- [ ] Signature copiée et collée dans Meta Business Manager
- [ ] Endpoint configuré avec l'URL de Vercel
- [ ] Configuration sauvegardée

---

## 🚀 Prochaines Étapes

### 1. Déployer sur Vercel

```bash
vercel
```

### 2. Ajouter les Variables d'Environnement dans Vercel

Après déploiement, va dans Settings > Environment Variables et ajoute :

- `RSA_PASSPHRASE` = `cosmos_algerie_2024_whatsapp_flows`
- `PRIVATE_KEY` = Contenu complet de `private-key-whatsapp.pem`
- `PUBLIC_KEY` = Contenu complet de `public-key-whatsapp.pem`

### 3. Tester le Flow

1. Crée un Flow dans Meta Business Manager
2. Teste-le dans WhatsApp Business
3. Vérifie que les requêtes arrivent bien à ton serveur

---

## 📞 Configuration Locale

Le fichier `.env` local contient :

```bash
META_APP_ID=629481306816205
META_APP_SECRET=22e2e0b849959e3dbb06beb0c4508971
META_PHONE_NUMBER_ID=+213560939708
```

Ces valeurs sont **déjà configurées** et prêtes pour Vercel !

---

## ✅ Configuration Terminée !

Ton serveur WhatsApp Flows avec encryption RSA est maintenant :
- ✅ Clés RSA générées et signées
- ✅ Credentials Meta configurés
- ✅ Prêt pour upload dans Meta Business Manager
- ✅ Prêt pour déploiement Vercel

**Tu as juste besoin de copier les deux blocs ci-dessus dans Meta Business Manager !** 🎉

