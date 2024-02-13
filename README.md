# Breweries App

## Table of content

[General Description](#general-description)

[Technologies](#technologies)

[Project Structure](#project-structure)

[Instruction](#instruction)

[Requirements](#requirements)

[Optional](#optional)

## General Description

> Fetch, display, and search for brewery companies from the given API endpoint, using React and TypeScript

## Technology

-   TypeScript
-   HTML / CSS / SCSS
-   React CRA
-   Routing (react-router-dom)
-   Redux & Redux-Toolkit
-   Material UI

<pre>
Package use: 
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.15.9",
    "@mui/material": "^5.15.7",
    "@reduxjs/toolkit": "^2.1.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.23",
    "@types/react": "^18.0.33",
    "@types/react-dom": "^18.0.11",
    "axios": "^1.6.7",
    "lodash": "^4.17.21",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.50.1",
    "react-redux": "^9.1.0",
    "react-router-dom": "^6.22.0",
    "react-scripts": "5.0.1",
    "sass": "^1.70.0",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
</pre>

## Project Structure

[src/](./src/)

-   [app/](./src/app)
    -   [hooks.ts](./src/app/hooks.ts)
    -   [store.ts](./src/app/store.ts)
-   [components/](./src/components)
    -   [BreweryCard.tsx](./src/components/BreweryCard.tsx)
    -   [NavBar.tsx](./src/components/NavBar.tsx)
    -   [Spinner.tsx](./src/components/Spinner.tsx)
-   [features/](./src/features)
    -   [breweries/](./src/features/breweries)
        -   [brewerySlice.ts](./src/features/breweries/brewerySlice.ts)
    -   [Filter/](./src/features/Filter)
        -   [DisplayFilter.tsx](./src/features/Filter/DisplayFilter.tsx)
        -   [Filter.tsx](./src/features/Filter/Filter.tsx)
    -   [pagination/](./src/features/pagination)
        -   [BreweriesList.tsx](./src/features/pagination/BreweriesList.tsx)
        -   [MyPagination.tsx](./src/features/pagination/MyPagination.tsx)
    -   [routing/](./src/features/routing)
        -   [Contact.tsx](./src/features/routing/Contact.tsx)
        -   [Detail.tsx](./src/features/routing/Detail.tsx)
        -   [Home.tsx](./src/features/routing/Home.tsx)
    -   [Search/](./src/features/Search)
        -   [DisplaySearch.tsx](./src/features/Search/DisplaySearch.tsx)
        -   [SearchBar.tsx](./src/features/Search/SearchBar.tsx)
-   [img/](./src/img)
    -   [beer.svg](./src/img/beer.svg)
    -   [spinner.gif](./src/img/spinner.gif)
-   [styles/](./src/styles)
    -   [style.css](./src/styles/style.css)
    -   [style.css.map](./src/styles/style.css.map)
    -   [style.scss](./src/styles/style.scss)
    -   [\_BreweryCard.scss](./src/styles/_BreweryCard.scss)
    -   [\_Contact.scss](./src/styles/_Contact.scss)
    -   [\_Page.scss](./src/styles/_Page.scss)
    -   [\_searchBar.scss](./src/styles/_searchBar.scss)
-   [App.tsx](./src/App.tsx)
-   [index.tsx](./src/index.tsx)
-   [react-app-env.d.ts](./src/react-app-env.d.ts)
-   [reportWebVitals.ts](./src/reportWebVitals.ts)
-   [setupTests.ts](./src/setupTests.ts)

## Instruction

1. Open your terminal and clone the repository with the following command:

```
git clone https://github.com/TinNguyen01600/Breweries-App
```

2. Install all the packages and dependencies:

```
npm install
```

3. Start the application in your local machine:

```
npm start
```

\*\* Or simply access the deployed version on Netlify (https://tin-nguyen-breweries.netlify.app/).

## Requirements

1. Check the documentation at [https://www.openbrewerydb.org/documentation](https://www.openbrewerydb.org/documentation) Fetch and display information of all the companies.

2. Have proper display and routing that user can switch to/back from specific company's detailed page

3. Create search component to enable user to input text and search for companies by name.

4. Use MaterialUI to make your design more appealing and responsive

5. Deploy your application and rewrite README file

## Optional

6. Implement performance optimization where applicable
7. Use the queries listed in the documentation to sort and limit the returned data and build pagination feature.

8. Create a contact form so that user can send question along with their contact information.
