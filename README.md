# tha-client

The React client-side rendered application for Origin's [take-home assignment](https://github.com/hcaula/tha).

> **Code Coverage**: 100% Statements 37/37 | 100% Branches 10/10 | 100% Functions 15/15 | 100% Lines 37/37

> CODE COVERAGE WARNING: not all files are being covered, so these percentages might not be accurate. See [technical debit](#bug-code-coverage-is-not-reaching-all-components).

## Overview

This application can calculate a user's financial health wellness based on their annual income and monthly costs.

## Developing

### Requirements

- [Node](https://nodejs.org/en/download/) version 16.13 or higher (we recommend using [NVM](https://github.com/nvm-sh/nvm) for installing and managing Node versions);
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

### Quick start

1. Follow the instructions to [run the server](https://github.com/hcaula/tha-server#quick-start);

2. Install the project's dependencies:

```sh
yarn install
```

3. Run the project:

```sh
yarn start
```

The application should be running locally and accessible at http://localhost:3000.

### Testing

We use Cypress to test this application. You use an interactive GUI by running:

```sh
yarn cy:open
```

> Make sure that the application is running before running the tests!

> It's not necessary to run the server, since the responses are mocked.

Also, you can run directly on CLI by running:

```
yarn test
```

> The application will run automatically when running this command, so it doesn't have to be running in the background.

#### Coverage

This project is configured to provide code coverage metrics after testing. They can be found in the directory `coverage` after running the tests.

There's a visual HTML explorer that can be found at `coverage/lcov-report/index.html`.

## Technical decisions

### Why is this application written in React?

There are great frameworks out there such as Vue, Angular, and Ember. All are great options, but, because of my experience, I believe **React** would be the best option now. It is really mature, has great community support and has a very quick development time.

### Should we use some CSS framework?

Some excellent tools exist to help stylize web pages with CSS. Tailwind usually is a great tool for large projects, since once it's configured, increases development time by allowing to use “atomic" classnames for generic and reusable styles, but it takes some time to setup. Styled Components can bind JavaScript and CSS very smoothly, which can help with dynamic styling problems such as responsiveness. However, to reduce the overhead of having to setup a framework, we'll use **CSS Modules**, which comes by default on create-react-app.

### Should we use some component library?

Two great component libraries are Material UI and Semantic UI. Both are very customizable and easy to use, and both are great frameworks to develop a company's design system. However, since this test application does not have that many components, it's easier to develop them from scratch, implementing only what will be used. However, it would be foolish not to separate such components individually, following the Single Responsibility principle. Some components were implement generically, such as `Button`, `Wizard`, `Loading` and `Card`.

### How to test this application?

In React, a great tool used for automated test is the React Testing Library. It is great for both integration and unit tests. However, personally, I don't think that testing React components is the best approach for web applications, since it's quite distant to how a user actually behaves. A user is not interested if and how props are passed or if listeners have been called; instead, they, well, _use_ the app. So, I believe the old and classic browser simulations are better. For that, **Cypress** is a great tool that has been growing a lot recently in the web app community for its simplicity, great coverage and extensive documentation. We'll mock the API responses for more flexibility.

## Technical debts left

### BUG: Code coverage is not reaching all components

Some components such as `ResultScreen` are not being reached by the code coverage report, although they're being called by the tests. The problem might be on the instrumented code, which is not reaching some parts of the code, since these components are call dynamically. This might be affecting the percentage of code covered, although, since we know that the tests are passing through them, the difference should not me dramatic.

### Implement input mask on number input

Currently, large numbers do not have masks on them to make them look more presentable. For instance, inputting "100000" should render "100,000".

### BUG: on mobile Safari browser, the footer is hidden

Safari treats `100vh` differently, it hides some content underneath the navbar, creating a scroll div. Ideally, all the information should be presentable instantly.

### Handle errors properly

Currently, there's no `ErrorBoundary` component, meaning exceptions are not reaching the developers.

### Implement presentable error component in case server returns an error

Currently, only the text "An error has occurred. Please, try again later.". It should be more presentable. Furthermore, the component `src/components/App/ResultScreen/Error/Error.tsx` is implemented, it can be simply extended.

### Implement reusable typography

Currently, every text has its own style, although some of them are the same. Ideally, there should be classes in a global CSS file that can be reused between texts.
