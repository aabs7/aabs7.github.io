IMAGE_NAME = my-jekyll-site
CONTAINER_NAME = jekyll-dev
PORT = 4000
WORKDIR = /srv/jekyll

default: serve

build:
	docker build -t $(IMAGE_NAME) .

serve:
	docker run --rm -it \
		--name $(CONTAINER_NAME) \
		-v "$(PWD):$(WORKDIR)" \
		-p $(PORT):4000 \
		$(IMAGE_NAME)

build-site:
	docker run --rm -it \
		-v "$(PWD):$(WORKDIR)" \
		$(IMAGE_NAME) \
		bundle exec jekyll build

clean:
	docker system prune -f

rebuild: clean build

.PHONY: default build serve build-site clean rebuild
