# OPIC 官网 —— Hugo + OINK
# 需要：hugo >= 0.169（推荐 0.170.x，与 oink CI 一致）

HUGO ?= hugo

.PHONY: build serve clean preview

build:
	$(HUGO)

serve:
	$(HUGO) server -D

clean:
	rm -rf public

preview:
	$(HUGO) server --bind 0.0.0.0
