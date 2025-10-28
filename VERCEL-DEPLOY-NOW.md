# 🚀 DÉPLOIEMENT VERCEL - Guide Ultra-Simple

## ⚡ Étapes

### 1️⃣ Aller sur Vercel

👉 https://vercel.com/new

### 2️⃣ Connecter GitHub

- Clique "Import Repository"
- Choisis **ladjben/cosmos-whatsapp**
- Clique "Deploy"

### 3️⃣ Configuration ESSENTIELLE

Une fois le premier déploiement fait, va dans **Settings** :

#### A. Ajouter Variable d'environnement

**Settings > Environment Variables**

```
Name: RSA_PASSPHRASE
Value: cosmos_algerie_2024_whatsapp_flows
```

Clique "Save"

#### B. Upload private.pem

**CRITIQUE** : Sans ce fichier, le serveur ne marchera PAS !

**Méthode 1 - Via Dashboard Vercel** :

Créer un fichier .vercel avec ce contenu n'est PAS la bonne méthode. 

**Tu dois** créer le fichier manuellement sur le serveur après déploiement :

1. Une fois déployé, va dans **Settings > Functions**
2. Regarde "Files" ou crée une fonction serverless
3. Pour l'instant, modifie le code pour charger private.pem depuis une variable d'environnement

**Solution SIMPLE** : 

Met le contenu de private.pem dans une variable d'environnement Vercel !

#### C. Variable d'environnement pour la clé privée (PRIVATE_KEY)

**Settings > Environment Variables > Add New**

```
Name: PRIVATE_KEY
Value: 
```

**⚠️ COLLE TOUT CE CONTENU** (de BEGIN à END) :

```
-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFLTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQIUl0zIUiU3xgCAggA
MAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBB6x+9/N2cdm4IlBa36nlYBBIIE
0GCtU3+rLmp7si/glGaEhgK59PQWDbCj94YowZl5ALUPbl1MOmpjlRFwBRgqptSu
NJAjAxs8+ehbdKUMoJ1Su3LK8dcy9zYi1KQS+6Zy4wPsg2H4uHnhy2RB7vL128S6
72NxHXrDpTRUxM6QJ0p82SqWWh3YXTJ9JDbPphaeqwIph0ik30hNBH3gchEZRJns
E69naZL3Pn6PFcimrNTec/DHkoCLuWynOePcDrdlMiR1slGM8EHSZCSGrfhABskX
Gacbo9FuquREQxyxr4f8THjCqHpfI1pprWsoKEvDhJycbjLwhHdnhTNnUDpJdQfC
4GCVTS6dwdK3VVlMLRisJr/vWOwYlrnnkHZ1o+bgLdYe9+CQ/mFCNHMg4BAZ+O+o
6u173HWFo6FVCFFEZvKGKGWonU1NCmx3l+N0UZFj7k5Xl/9ycUBokajqUGOeiB+f
abxnYhWmN4LTao7Pk2Hs5YK9rGkZJs7NwdqOvCjphNvQaT/IJQN/wTRdi6qN+PrX
pcqakOAfrY3ggP2sR5kZXPNUjR4LfdwufPKvCXdTURScdMJaPIEihpSoEhQh8wFr
aZIyQXknQ2q57sCYnVm9gSxfXPuJseABBwjoe4gQwQsQmOz8Vgzwg5mp9LePhkqe
BuzfY1NmodeI+qW0lxjpVkbRCSzdZWCuIeFqIp+rCdXeE7xBtVyLHdw6w2/JmrN2
cm0K+cNuFm3a0YqT3fsOeKD9sW0GawkMCaQ6MYCa6+Cs7SxGvbXpbrzwCd05NXc8
G2aCBJfF60ndSJd4N7SvwWHItcdCxw3wB3PGJgd7OW00zP14f+p2+/g2wNeyzqXF
5vvufe7x4hhzojc3CKGafW/qcZYajfICqpqZovwD4cLzIdV4CEUOq8pz2gGPoIcP
LmvWVXANKkQALo0F9hKiQBTjkNLGQLR47ix73O0KusRwuizgUtUauBlGkSc7m2hV
AVxKyMkzw3N1sA4SG7JDSFhVaF/eUXFJSc0omzgAOop3ykBMQDpqaHwpJyz6R6rE
xmDW/AO5MlAU2ao+iFzB93QvWKfO/DSbSEPDJ+434/cQN+R991TjZlKAFg3WoAeK
ks0Gi8DYejLBOx+rfIWuXbjFYJby6fD2dtIBZYV96Cv+CwXE32WXAsnwnGbu7BCy
vi2iCoDkRgFUGSCV+ilbVQihyK3U3MwGGoIOKdPqh+uYcuiJRMr0O8J7CFz3zoBd
1UIiIFb35XWcFMTCE91MKF8tPamATfQLshjhfTm5MlZry8Cji/X7bDMVesqYNHpM
z/MIuO08jbCkISz2k14VJvRkjkuL/Sit3XzwZdZkuj1Tyu69mjSYQzO5tqMY0H2B
t7FgacBVtzMA6FKeRz3NqwgVs5QDUtl0ZJcFnSinUY5TCs8Sey7REhmmkLHCpsYD
mNrc/X2RpQZ5PftCWAup+GlIspcLhy406F7Ic9HTAeOo3yV2GY2CydN2MMiUHsD3
DDRN1tCnn0zcxaFPMwdMlR/Iq/Rqvo6hpCdQSOeRvU6LcGQPEOGrqE+lCBe6qsT4
plrqX2762lo/zEwhWi91ykHoly66hGa/VNPixuEt4oydAWJBPJvCHMj3QKEc5kRm
DjqrnQU9eYGZRS9s5Q/n1u9GjZDTMv+frdx540qVXLDp
-----END ENCRYPTED PRIVATE KEY-----
```

#### D. Variable d'environnement pour la clé publique (PUBLIC_KEY)

**Settings > Environment Variables > Add New**

```
Name: PUBLIC_KEY
Value:
```

**⚠️ COLLE TOUT CE CONTENU** :

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

### 5️⃣ Code déjà mis à jour

Le code a été MODIFIÉ pour utiliser les variables d'environnement automatiquement ! ✨

Plus besoin de modifier quoi que ce soit.
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
read_file
