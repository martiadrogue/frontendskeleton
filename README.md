# Front-End Skeleton

A comfortable environment for a fast front-end development.

Every front-end must be reusable, modular, and easy to update. All technologies
used by front-end must follow standards and be fast to write and parse by
browser.

**NOTE**: Before do anything you must replace occurrences *:project_name*,
*:project_description* from your project's files.

## Installation

If you haven't already done so, [install grunt-init][grunt-website].

Once grunt-init is installed. Load these plugins from project with this command:

```shell
npm install
```

## Usage

Into the root of working directory, run tasks calling this command:

```shell
grunt
```

## Useful Notes

To make a fast development process there is Grunt an automatic task manager. It
compile LESS to CSS, minifies CSS, uglifies JS and compress images each time a
file is edited.

To make sure source code standards it use linter for CSS, JS and HTML. Although
for the CSS it follows protocol [BEM][bem-website].

To use livereload well, it's necessary to connect to *http::/localhost:8000*
with Grunt running.

[bem-website]: http://getbem.com/
[grunt-website]: http://gruntjs.com/project-scaffolding
