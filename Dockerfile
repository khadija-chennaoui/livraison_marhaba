FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 4000
CMD ["npm", "start"]



# PS C:\Users\Youcode\Documents\GitHub\livraison_marhaba> docker network create livraison-marhaba-net
# 31b4ca1406de459a328e43e90fdf265c90dda4ed5f82724a95dca777726044dd
# PS C:\Users\Youcode\Documents\GitHub\livraison_marhaba> docker container run -d --name livraison-marhaba-db -v livraison-marhaba-db:/data/db --network livraison-marhaba-net mongo
# Unable to find image 'mongo:latest' locally
# latest: Pulling from library/mongo
# eaead16dc43b: Pull complete
# 8a00eb9f68a0: Pull complete
# f683956749c5: Pull complete
# b33b2f05ea20: Pull complete
# 3a342bea915a: Pull complete
# fa956ab1c2f0: Pull complete
# 138a8542a624: Pull complete
# 0a5a5d2ec822: Pull complete
# 37200fef7cf6: Pull complete
# Digest: sha256:8bed0be3e86595283d67836e8d4f3f08916184ea6f2aac7440bda496083ab0c8
# Status: Downloaded newer image for mongo:latest
# 7761c2c7273c5b6442afd0378ae99383611b34d07f0439798827b59145ae455f
# PS C:\Users\Youcode\Documents\GitHub\livraison_marhaba> docker build -t livraison-marhaba-docker:test
# "docker build" requires exactly 1 argument.
# See 'docker build --help'.

# Usage:  docker build [OPTIONS] PATH | URL | -

# Build an image from a Dockerfile
# PS C:\Users\Youcode\Documents\GitHub\livraison_marhaba> docker container run -d --name livraison-marhaba -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 4000:4000 livraison-marhaba-docker:test
# Unable to find image 'livraison-marhaba-docker:test' locally
# docker: Error response from daemon: pull access denied for livraison-marhaba-docker, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
# See 'docker run --help'.
# PS C:\Users\Youcode\Documents\GitHub\livraison_marhaba> docker build -t livraison-marhaba-docker:test .                                [+] Building 231.7s (11/11) FINISHED
#  => [internal] load build definition from Dockerfile                                                                              0.1s
#  => => transferring dockerfile: 147B                                                                                              0.1s 
#  => [internal] load .dockerignore                                                                                                 0.1s
#  => => transferring context: 2B                                                                                                   0.0s 
#  => [internal] load metadata for docker.io/library/node:16                                                                        8.8s
#  => [auth] library/node:pull token for registry-1.docker.io                                                                       0.0s
#  => [1/5] FROM docker.io/library/node:16@sha256:68fc9f749931453d5c8545521b021dd97267e0692471ce15bdec0814ed1f8fc3                177.5s
#  => => resolve docker.io/library/node:16@sha256:68fc9f749931453d5c8545521b021dd97267e0692471ce15bdec0814ed1f8fc3                  0.1s
#  => => sha256:9bf69dd73b08925764f33a25103752f7ee12899d22fca6c5407fbcb489ccae54 7.52kB / 7.52kB                                    0.0s 
#  => => sha256:68fc9f749931453d5c8545521b021dd97267e0692471ce15bdec0814ed1f8fc3 776B / 776B                                        0.0s 
#  => => sha256:7c73938c4cb749b790ff665adfdfccdf932cff10c74664af953aebc297b8b198 2.21kB / 2.21kB                                    0.0s
#  => => sha256:0a277c3efe7c0d28e443180df5a70570f6baed1f16a4ceeb88e9dd299df62dc6 10.00MB / 10.00MB                                 13.0s
#  => => sha256:2730d739afad9b8ff3e3029e23fd69d9533603751d6e42053ce0068c2b58e258 50.45MB / 50.45MB                                 73.1s 
#  => => sha256:a122751b35336c158fc53a3bb03c6b11b414387589e5455e99baecdd803c6318 7.86MB / 7.86MB                                   11.8s
#  => => sha256:25c35b81c50326813f61c6bd62a84551d9bac477bfc60a617c692b7d12d306f1 51.84MB / 51.84MB                                 76.6s 
#  => => sha256:cb8cde86ddb211644d28069e3fe009f352b4713d6fbfdbba288ab08cfa80e67f 191.89MB / 191.89MB                              135.8s 
#  => => sha256:200d9ce64e0b893c136e09467093265417e6cd8317a322383e2d3552108a7dff 4.20kB / 4.20kB                                   75.6s
#  => => extracting sha256:2730d739afad9b8ff3e3029e23fd69d9533603751d6e42053ce0068c2b58e258                                        13.2s
#  => => sha256:d73c02353705fa1ad69649ee198497e8ff02b04e62913e21aedeae92591b05e2 34.97MB / 34.97MB                                 99.0s
#  => => sha256:d6973298711af173fdb94d0f648ff56a174048ee03f4a8b51ec9f3d4c5476a7d 2.28MB / 2.28MB                                   79.5s
#  => => sha256:f0dfa5d235bc6119baa6a623d47ac9e98dd967a914d22a3d2f7ebec03c601a8c 450B / 450B                                       79.9s
#  => => extracting sha256:a122751b35336c158fc53a3bb03c6b11b414387589e5455e99baecdd803c6318                                         2.5s
#  => => extracting sha256:0a277c3efe7c0d28e443180df5a70570f6baed1f16a4ceeb88e9dd299df62dc6                                         2.0s
#  => => extracting sha256:25c35b81c50326813f61c6bd62a84551d9bac477bfc60a617c692b7d12d306f1                                        16.5s
#  => => extracting sha256:cb8cde86ddb211644d28069e3fe009f352b4713d6fbfdbba288ab08cfa80e67f                                        32.4s
#  => => extracting sha256:200d9ce64e0b893c136e09467093265417e6cd8317a322383e2d3552108a7dff                                         0.0s
#  => => extracting sha256:d73c02353705fa1ad69649ee198497e8ff02b04e62913e21aedeae92591b05e2                                         6.5s 
#  => => extracting sha256:d6973298711af173fdb94d0f648ff56a174048ee03f4a8b51ec9f3d4c5476a7d                                         0.4s 
#  => => extracting sha256:f0dfa5d235bc6119baa6a623d47ac9e98dd967a914d22a3d2f7ebec03c601a8c                                         0.0s 
#  => [internal] load build context                                                                                                53.4s 
#  => => transferring context: 29.53MB                                                                                             53.2s 
#  => [2/5] WORKDIR /app                                                                                                            0.3s
#  => [3/5] COPY package.json .                                                                                                     0.1s 
#  => [4/5] RUN npm install                                                                                                        40.5s 
#  => [5/5] COPY . ./                                                                                                               1.8s 
#  => exporting to image                                                                                                            2.2s 
#  => => exporting layers                                                                                                           2.1s 
#  => => writing image sha256:a3290c264a5f07a10d022dcc41970fbd52e2117d6e45b68d5ef9b7f8a93557a4                                      0.0s 
#  => => naming to docker.io/library/livraison-marhaba-docker:test                                                                  0.0s 

# Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
# PS C:\Users\Youcode\Documents\GitHub\livraison_marhaba> docker container run -d --name livraison-marhaba -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 4000:4000 livraison-marhaba-docker:test
# f5100bd3036c8d6544b6f5ca09936740d687c792c7f7a62d6e9c72f32458581a
# PS C:\Users\Youcode\Documents\GitHub\livraison_marhaba> 