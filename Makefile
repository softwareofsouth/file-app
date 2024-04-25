dev:
	cd backend && npm run dev &
	cd frontend && npm run dev

docker-up:
	docker-compose up --build -d

clear-docker:
	docker-compose down
	if [ "$$(docker ps -aq)" ]; then \
			docker kill $$(docker ps -aq); \
	fi
	if [ "$$(docker ps -aq)" ]; then \
			docker rm $$(docker ps -aq); \
	fi
	if [ "$$(docker images -q)" ]; then \
			docker rmi $$(docker images -q); \
	fi
	if [ "$$(docker volume ls -q)" ]; then \
			docker volume rm $$(docker volume ls -q); \
	fi
	for network in $$(docker network ls --filter type=custom -q); do \
			docker network rm $$network; \
	done