'''
docker-machine create --driver virtualbox host1
docker-machine create --driver virtualbox host2
docker-machine create --driver virtualbox host3
'''

docker-machine ssh <host>


docker swarm init --advertise-addr <ip>

docker-machine scp -r . host1:.

docker stack deploy -c docker-compose.yml myapp