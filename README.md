------ Docker backend commande ligne ------

1_ Crée "Dockerfile" de partie frontend :

    FROM node:16
    WORKDIR /app
    COPY package.json .
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["npm", "start"]

2_ Crée Network : 

    docker network create livraison-commande

3_ Executez un container basé sur l'image mongo

    docker container run -d --name livraison-db -v livraison-db:/data/db --network livraison-commande mongo

4_ Crée image :

    docker build -t livraison-back-test .

5_ Exécutez un container basé sur cette image que vous venez de créer :

        docker container run -d --name livraison-back-test -v ${pwd}:/app -v /app/node_modules --network livraison-back -p 4000:4000 livraison-back-test
