# Ddc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).
## Quick Start

Do `npm install` to install all the dependencies. 

### Running Production build

#### With Docker

To run the production build using docker - 
Run `npm run serve-prod` and navigate to http://localhost
#### With Http Server

To run the production build using docker - 
Run `npm run serve-prod-http` and the application opens in the browser at http://localhost:8080

### Development server

Run `npm run customer-portal` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
This also generates a coverage report. 
To view the coverage report run `npm run serve:coverage`. This will open the report in the browser.
### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm run customer-portal`.

## Features of the project

### Project structure
Working on multiple applications and libraries can become challenging to organize. If the project are not organized properly it may lead to less reusability of code between applications, especially is there a lot of the similiar features between the applications. But reusability would also mean need to keep the dependencies consistent accross all the applications so breaking changes are not introduced on an update. 

To solve this [Nrwl](https://nrwl.io) came up with what's called a "workspace" which is a monon repo where all all the applications and libraries a group of teams are working on will be available under one repo or workspace. 

When a change happens to shared libaries the change will be tested accross all the applciations and provide analysis on affected applications. This will limit breaking changes.

Refer [here](https://nrwl.io/nx/why-a-workspace) for more details on this.

### Web Application libraries

#### Angular

Built using [Angular](https://angular.io/) JavaScript framework.
Some of its key features:
- Suport for SPA and server-side rendering 
- Excellent tooling for scaffolding, development, animation, accessibiltiy, testing.  
- Integration with IDEs and uses TypeScript for intelligent code completion, code generation, code splitting.
- Cross platform with single codebase support for Progressive Web Apps, Native (Ionic, Cordova) and Desktop. 

#### RXJS

[RxJS](http://reactivex.io/rxjs/) reactive library for implementing observer-subscriber patterns. It is excellent for declerative design with easily testible pure functions and operators for solving most use cases. 

#### NgRx 

The project is setup with Ngrx for global state management. 

[NgRx](https://github.com/ngrx/platform) is a Flux implementation for Angular 2. It contains the following packages: 
@ngrx/store - RxJS powered state management for Angular applications, inspired by Redux
@ngrx/effects - Side Effect model for @ngrx/store to model event sources as actions.
@ngrx/router-store - Bindings to connect the Angular Router to @ngrx/store
@ngrx/store-devtools - Store instrumentation that enables a powerful time-travelling debugger.
@ngrx/entity - Entity State adapter for managing record collections.
@ngrx/schematics - Scaffolding library for Angular applications using NgRx.

### Testing

Setup for unit testing with [Karma](https://karma-runner.github.io), [Jasmine](https://jasmine.github.io/) and e2e testing with [Protractor](http://www.protractortest.org/).

### Continous Integration

Integration with [Travis](https://travis-ci.com/) to run tests on each commit and PRs for continous integration and testing of the code base. 

### Easy Deployment

For production built the project is built and contaierized in a [Docker](https://www.docker.com/) container for easy deployment onto any of the cloud platforms.




