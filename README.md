# Front-End Skeleton

A comfortable environment for a fast front-end development.

Every front-end must be reusable, modular, and easy to update. All technologies
used by front-end must follow standards and be fast to write and parse by
browser.

To make a fast development process there is Grunt an automatic task manager. It
compile LESS to CSS, minifies CSS, uglifies JS and compress images each time a
file is edited.

To make sure source code standards it use linter for CSS, JS and HTML. Although
for the CSS it follows protocol BEM.

Config is made thinking on development. It's important to care about turn false
debug mode of *Gruntfile.json* at `global_defs`, also turn false the
`drop_console` key. And remove tag
`<script src="//localhost:35729/livereload.js"></script>` from HTML templates.
