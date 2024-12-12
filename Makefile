#!make
MAKEFLAGS += --silent

# This allows us to accept extra arguments (by doing nothing when we get a job that doesn't match,
# rather than throwing an error).
%:
    @:

# $(MAKECMDGOALS) is the list of "targets" spelled out on the command line
stagel:
	git clone --quiet https://github.com/mongodb/snooty-scripts.git build_scripts
	@ cd build_scripts && npm list mongodb || npm install mongodb
	@ source ~/.config/.snootyenv && node build_scripts/app.js $(filter-out $@,$(MAKECMDGOALS))
	@ rm -rf build_scripts

commit:
        @:

local:
        @:

repo:
        @:

world:
        @:

clean:
	rm -rf build

.PHONY: stage
.PHONY: clean

dev:
	curl https://raw.githubusercontent.com/mongodb/docs-worker-pool/netlify-poc/scripts/build-dev-site.sh -o build-dev-site.sh 
	@ sh build-dev-site.sh

prod:
	curl https://raw.githubusercontent.com/mongodb/docs-worker-pool/netlify-poc/scripts/build-prod-site.sh -o build-prod-site.sh 
	@ sh build-prod-site.sh