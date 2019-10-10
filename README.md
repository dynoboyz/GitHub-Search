# GitHubSearch
## An app that will search Github repositories based on keyword.

## Features
- It will call search API when user press Enter
- User can navigate through the list using pagination. Total 10 items per list.
- Each item will have - Full name, description, language, total stars and update date
- If no result, notify user with appropriate message
- Extra credit if using either Angular (v2-v6), React or Vue, and also if included unit test.

gitSearchApi = "https://api.github.com/search/repositories?per_page=${per_page}&q=

## Setup

`npm install -g @angular/cli@6.2.9`

## Run

`ng serve` & navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

`ng build` will build & stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

`ng test` unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

`ng e2e` end-to-end tests via [Protractor](http://www.protractortest.org/).
