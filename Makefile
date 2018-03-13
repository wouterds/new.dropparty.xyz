all: tag

VERSION = $(shell cat composer.json | grep "version" | sed -e 's/^.*: "\(.*\)".*/\1/')
PWD = $(shell pwd)

DOCKER_REPO  = docker.wouterdeschuyter.be
PROJECT_NAME = internal-dropparty-website

TAG_NODE = $(DOCKER_REPO)/$(PROJECT_NAME)-node

DOCKERFILE_NODE = ./docker/node/Dockerfile

clean:
	-rm -rf ./node_modules
	-rm -rf ./package-lock.json
	-rm -rf ./public/*.js
	-rm -rf ./public/*.html
	-rm -rf ./public/*.eot
	-rm -rf ./public/*.svg
	-rm -rf ./public/*.ttf
	-rm -rf ./public/*.woff
	-rm -rf ./public/*.woff2

node_modules: package.json
	docker run --rm --volume=$(PWD):/code -w=/code node:9-alpine npm install

.build-app: node_modules
	docker run --rm --volume=$(PWD):/code -w=/code node:9-alpine npm install

.build-node: node_modules $(DOCKERFILE_NODE)
	docker run --rm --volume=$(PWD):/code -w=/code node:9-alpine npm run build
	docker run --rm --volume=$(PWD):/code -w=/code node:9-alpine npm run ssr
	touch .build-node

build: node_modules .build-app .build-node

tag: build
	docker tag $(TAG_NODE) $(TAG_NODE):$(VERSION)

push: tag
	docker push $(TAG_NODE):$(VERSION)

push-latest: push
	docker push $(TAG_NODE):latest
