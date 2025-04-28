.PHONY: all clean test

node_modules:
	npm i

test: node_modules
	npm test
