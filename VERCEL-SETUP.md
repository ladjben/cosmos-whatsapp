# ⚡ Configuration Rapide Vercel

## 🚀 Déploiement Express

### Méthode la PLUS SIMPLE (2 minutes)

1. **Connecte ton repo sur Vercel**
   - Va sur https://vercel.com
   - Clique "Import Project"
   - GitHub > `ladjben/cosmos-whatsapp`
   - Clique "Deploy"

2. **Ajoute la variable d'environnement**
   - Settings > Environment Variables
   - Name: `RSA_PASSPHRASE`
   - Value: `cosmos_algerie_2024_whatsapp_flows`

3. **Crée private.pem sur le serveur**

Voici le contenu complet de ton `private.pem` local. **Copie-le TOUT** (du BEGIN à END) :

```
-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQI2zqL3OmZMi8CAggA
MAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBCWQvXZYqMrvFzThhJXHzRMBIIE
0HGHDJwYUb8BhwhnIl5jU9ZRVYMsnDYOp6GCzJmjA0+ToLuZvZYFDUvgqmBcKz
[CONTENU COMPLET DE TON private.pem]
-----END ENCRYPTED PRIVATE KEY-----
```

**OU** Sur ton Mac local :
```bash
cat private.pem
```

Copie TOUT le contenu.

4. **Crée le fichier private.pem sur Vercel**

Sur Vercel Dashboard :
- Settings > Environment Variables
- Scroll down jusqu'à "Secure Files" ou "Files"
- Ajoute un nouveau fichier : `private.pem`
- Colle le contenu complet

5. **Redéploye**

Une fois private.pem uploadé, redéploie :
```bash
# Option 1: Via Dashboard
# Va dans Deployments > Latest > Redeploy

# Option 2: Via Terminal
git commit --allow-empty -m "redeploy"
git push
```

---

## 🔍 Vérifier que ça marche

Une fois déployé, teste :

```bash
curl https://ton-projet.vercel.app/
```

Tu devrais voir :
```json
{
  "message": "Serveur WhatsApp Flows pour Cosmos Algérie - Black Friday Collection",
  "status": "Actif",
  "total_products": 39
}
```

---

## 🎯 Configuration WhatsApp Manager

1. **Endpoint URL** :
```
https://ton-projet.vercel.app/api/products
```

2. **Public Key** : Copie de `public.pem` (local)
3. **Signature** : Copie de `signature.txt` (local)

---

## ⚠️ IMPORTANT

Sans `private.pem` sur Vercel, le serveur ne peut PAS déchiffrer les requêtes WhatsApp !

**MUST DO** : Upload `private.pem` dans Vercel Settings > Files

