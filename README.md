# Inventaire du mobilier régional du Berry

Application de terrain (téléphone ou ordinateur) pour recenser le mobilier ancien du Cher et de l'Indre dans le cadre d'un mémoire de master.

**Ce dépôt ne contient que l'application, aucune donnée.** Les fiches, photos et autorisations signées sont enregistrées dans un dépôt GitHub **privé** séparé. Chaque enregistrement y crée un commit, donc rien n'est jamais perdu.

## Fonctions

- Fiche de terrain complète, reprenant la fiche papier (sections 1 à 6), avec le numéro d'inventaire `BERRY-DEPT-SR-ANNÉE-NNNN` calculé automatiquement
- Photos prises directement dans la fiche, autorisation du propriétaire signée au doigt
- Choix « Autre » précisés une fois puis réutilisables
- Les 527 communes du Cher et de l'Indre (recherche par nom ou code postal), hameaux, coordonnées GPS facultatives
- Accueil avec statistiques, tuiles par type de meuble et carte des collectes
- Galerie de toutes les photos, annuaire privé des personnes rencontrées
- Export dans le modèle Excel d'origine, plus un ZIP avec les photos et les autorisations
- Fonctionne hors ligne : les fiches sont envoyées dès le retour du réseau

## Première connexion (une fois par appareil)

1. Ouvrir l'application, puis ⚙ **Connexion GitHub**.
2. Coller la clé d'accès (token) fournie par le propriétaire du dépôt de données.
3. Sur téléphone : menu du navigateur → **Ajouter à l'écran d'accueil**.

### Créer une clé d'accès

GitHub → *Settings* → *Developer settings* → *Personal access tokens* → **Fine-grained tokens** → *Generate new token* :

- **Repository access** : *Only select repositories* → le dépôt de données uniquement
- **Permissions** → *Contents* : **Read and write** (*Metadata : Read* s'ajoute tout seul)
- Une clé par appareil ou par personne, nommée clairement (ex. « Téléphone de la personne qui collecte »), pour pouvoir la révoquer à tout moment en cas de perte.

## Organisation du dépôt de données (privé)

```
fiches/<id>.json          une fiche par meuble
photos/<id>/<photo>.jpg   photos (≈ 1800 px)
signatures/<id>-….png     autorisations signées
modeles/                  modèle Excel et fiche papier PDF
```

Ne jamais rendre ce dépôt public : il contient des données personnelles.
