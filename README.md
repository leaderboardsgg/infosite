# info.leaderboards.gg - Info Site Subdomain
This is the repo for the current info-site sitting at https://info.leaderboards.gg

### References

Our Other Repos:
- leaderboards.gg Main Site - https://github.com/leaderboardsgg/leaderboard-site
- leaderboards.gg Backend - https://github.com/leaderboardsgg/leaderboard-backend-poc

Other Links:
- Discord - https://discord.leaderboards.gg

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Build Setup](#build-setup)
- [Status](#status)
- [Repo Structure](#repo-structure)
- [Vue Readme](#vue-readme)

## Introduction
Leaderboards.gg (lbgg) was sparked by the purchase of speedrun.com by the esports data analytics company Elo Entertainment. In lbgg we see an opportunity to help the community continue to grow and thrive with tools (a website, an API) built to scale, on newer technologies, curated to what its users want, without it being monetized. Because its open source, the community owns it and can use it as they wish.

Another huge opportunity we see is being able to handle score based runs on our leaderboards, in addition to time based.

Because it is currently under construction (and in two separate repos), we are using this repo to represent the project as a whole.

## Technologies
- Frontend
- Backend
- Info site
  - Nuxt.js
  - Vue 2
  - SCSS

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Status

## Repo Structure 
(subject to change)

Component styles with variables are in assets/scss/layouts (and then separated by layout)
Global styles are in assets/scss/globals
SVGs are in assets/sprite/svg

# Vue Readme
For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
