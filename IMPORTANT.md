# ⚠️ INFORMATIONS IMPORTANTES - Cosmos WhatsApp Flows

## 🔐 Clés RSA Générées

Les clés RSA ont été **générées avec succès** pour WhatsApp Flows v7.2.

### Passphrase (GARDEZ-LA SÉCURISÉE !)

```
cosmos_algerie_2024_whatsapp_flows
```

### Clé Publique

**Fichier** : `public.pem`

**Contenu** (à uploader dans WhatsApp Manager):
```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjwtVg8auVOdM2A8XV2el
ZN69iAEED6FzBV0I+wDv4FXMuAxLnMMUqtEm/dLXLLlYxO9xZoUXynUWcXJEdnjO
fszCnuQhNweuzpya0/jbOqYD7FwqEJPyz0fNSeKZHg0F6DNI8bV5AAscO5yDKLKK
+a0JPISndBHGR0kUHxXlFZ8eay1Abo10GmVevy1DNDd/8/1Zm6AsCZDky9q1ml6M
8B5j9YTSVONh1nz//+AAqa+Q/sGtdXAMtXrNyJ9O5CJvXfdzipEMsIXCwKnN1YnC
56gs/tyowlKLIWO+K8zLoZRa0hB0AcXAuJhCqus3gf6d0QyjxcH0mXCf3eNB0Ki1
/wIDAQAB
-----END PUBLIC KEY-----
```

### Signature

**Fichier** : `signature.txt`

**Signature** (à copier dans WhatsApp Manager):
```
PGVfj08MdUC6ZrKcCapsCs4mvE4khIXuybybW13F/Y9mFrtLg49ZtJBmAGZG+OFOSglM+F5q+oNv9/EHx06hB2ZNWR9P/ws1fBUxjdgEfmpC7tgZC5PTFKiZoiww4IJXZbo15ZTPC8Xd9A6RzX/XSzvP6SE7UYhAq3TtZsZTsCCvkzWnR2kfdL5EmJEzVYmrt2aZ5noLUZMYgnXO45kRVPo/69xlwJNUvlqxy6VcMEZbNld9W2h9hpywO0V0OupuYe5DeTU2l6wTs+BhRP4lAVltaipaR5XIGuXn18VDcgv/iB3EgSU4GYFLSbweGvjrD3HGj6moTjtmyFbdqcY1Bw==
```

### Clé Privée

**Fichier** : `private.pem` (NE JAMAIS PARTAGER !)

Cette clé est utilisée par le serveur pour déchiffrer les requêtes WhatsApp.
Elle DOIT être uploadée sur Vercel uniquement.

---

## 📋 Checklist Configuration WhatsApp Manager

1. ✅ Clés générées
2. ✅ Signature créée
3. ⏳ Uploade `public.pem` dans WhatsApp Manager
4. ⏳ Colle la signature dans WhatsApp Manager
5. ⏳ Configure l'endpoint (après déploiement sur Vercel)
6. ⏳ Teste le Flow

---

## 🚀 Prochaines Étapes

### 1. Déployer sur Vercel

```bash
npm i -g vercel
vercel
```

### 2. Configurer Vercel

Ajoute ces variables d'environnement :

```
RSA_PASSPHRASE=cosmos_algerie_2024_whatsapp_flows
PORT=3000
```

Uploade `private.pem` dans Vercel (Settings > Files)

### 3. Configurer WhatsApp Manager

1. Va sur https://business.facebook.com
2. WhatsApp Manager > Configuration > API Setup
3. **Upload Public Key** : Copie-colle le contenu de `public.pem`
4. **Public Key Signature** : Copie-colle le contenu de `signature.txt`
5. **Flows API Endpoint** : `https://ton-domaine.vercel.app/api/products`

### 4. Créer le Flow

1. Va dans Flows
2. Crée un nouveau Flow
3. Configure l'action `INIT` qui appelle ton endpoint
4. Configure l'action `data_exchange` pour les détails produit
5. Teste le Flow

---

## 🔐 Sécurité

⚠️ **CRITIQUE** :
- ❌ JAMAIS partager `private.pem`
- ❌ JAMAIS commiter `private.pem` sur Git
- ❌ JAMAIS partager la passphrase
- ✅ Uploadez seulement `public.pem` dans WhatsApp Manager
- ✅ Garde `private.pem` sur le serveur Vercel uniquement

---

## 📊 Produits Configurés

✅ **39 produits** Cosmos Algérie Black Friday
✅ **Images** : Unsplash HD
✅ **Prix** : En DA (Dinars Algériens)
✅ **Actions** : INIT, data_exchange

---

## 📞 Support

Consulte `QUICKSTART.md` pour un guide pas à pas.
Consulte `README.md` pour la documentation technique complète.

