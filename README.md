------ Docker backend commande ligne ------

1_ Crée Network : 

    docker network create livraison-commande

2_ Executez un container basé sur l'image mongo

    docker container run -d --name livraison-db -v livraison-db:/data/db --network livraison-commande mongo

3_ Crée image :

    docker build -t livraison-back-test .

4_ Exécutez un container basé sur cette image que vous venez de créer :

        docker container run -d --name livraison-back-test -v ${pwd}:/app -v /app/node_modules --network livraison-back -p 4000:4000 livraison-back-test