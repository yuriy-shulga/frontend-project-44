install:
	npm ci

brain-games:
	node bin/brain-games.js

status:
	git status

lint: status
	npx eslint . --fix


publish:
	npm publish --dry-run