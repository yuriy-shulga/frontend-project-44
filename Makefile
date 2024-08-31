install:
	npm ci

brain-games:
	node bin/brain-games.js

status: lint
	git status

lint: 
	npx eslint . --fix


publish:
	npm publish --dry-run