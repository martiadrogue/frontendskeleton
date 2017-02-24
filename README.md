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

Into the root of working directory, run default tasks for dev environment calling this command:

```shell
grunt
```

Run tasks for the distribution product calling this command:

```shell
grunt build
```

## Tasks

Front-end Skeleton helps you with repetitive tasks during development of web
site templates. And prepare resources for final product. There are two different
ways to work: One made in a long period of time. And the other with just one
moment. Both of them have different responsibilities.

So, developer task are grouped by a service. And Distribution task are grouped
by common tasks that the front-end developer can launch when he thinks is the
time.

### Development Tasks

There is a service listening files of working directory and when some of them
changes it executes some tasks. Also there is another server listening port
8000, to watch HTML like a real web page. And there is another server listening
pot 35729 which reload browser each time a file changes.

-   **CLEAN**: As its name says that task remove from working directory all
    generated files. It's executed each time a CSS, JS or image is updated or
    created.

-   **LESS**: Compile source.less file into css build.css. CSS rules are in
    readable state.

-   **SASS**: Compile source.sass file into css build.css. CSS rules are in
    readable state. So, you must use LESS or SASS, not both at same time. If its
    the case you must update Gruntfile.js.

-   **CSS**: Concatenate all CSS files and then minify result located where HTML
    pages are looking for.

-   **JS**: Concatenate all JS files. And then move it to the place where HTML
    pages are looking for. Also Move libraries and JSONs to the same place. Then
    remove all "use strict"; declarations and create one at the beginning of the
    file.

-   **IMG**: Al images are compressed and move to the place where HTML pages are
    looking for.

-   **NOTIFICATION**: At the end of every task a OS notification is shown to
    confirm everything is OK or show errors. That  task is only available on
    development environment.

### Distribution Tasks

That tasks are called when front-end developer thinks it's time. Tasks are the
same on most of the cases, except both of them.

-   **LESS**: Change Base color of application to distinct clearly development
    to distribution design. Then, add browser prefixes at CSS statements.

-   **JS**: Change Variable names. Uglify all JS files. And Remove comments.

## Useful Notes

To make a fast development process there is Grunt an automatic task manager. It
compile LESS to CSS, minifies CSS, uglifies JS and compress images each time a
file is edited.

To make sure source code standards it use linter for CSS, JS and HTML. Although
for the CSS it follows protocol [BEM][bem-website].

To use livereload in the right way, it's necessary to connect to *http::/localhost:8000*
with Grunt running.

All CSS selectors used on runtime must be specified at uncss task exceptions.

## TODO

Load and config task grunt-uncss to remove unused css rules.

Download libraries with grunt-curl from its core source.

Build an approach to BEM's Partial Sistem given grunt-include-replace.

[bem-website]: http://getbem.com/
[grunt-website]: http://gruntjs.com/project-scaffolding
