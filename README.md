# New New News - Frontend

## Table of Contents

- [Summary of the Project](#summary-of-the-project)
- [Technologies Used](#technologies-used)
- [How to Use the Project](#how-to-use-the-project)
- [Features](#features)
- [Hosting](#hosting)
- [Prerequisites](#prerequisites)
- [Setup and Local Development](#setup-and-local-development)
- [Scripts](#scripts)
- [Backend](#backend)

## Summary of the Project

This project, "New New News", is a frontend user interface for the related backend API. It was developed as part of the Northcoders software development bootcamp.

- **Live Version:** [New New News](https://newnewnews.netlify.app/)
- **Live Backend:** [Backend API](https://new-new-news.onrender.com/api)

## Technologies Used

- ReactJS (`react`, `react-dom`) for building the user interface.
- Axios (`axios`) for making HTTP requests to the backend.
- React Router (`react-router-dom`) for navigation within the app.
- Vite (`vite`) as the build tool and development server.
- ESLint (`eslint`) for code linting.

## How to Use the Project

Explore the app using the navigation buttons at the top. Sort and order article lists, view detailed articles, comment, and vote on articles. Users can delete their own comments.

## Features

- **Home:** Displays all articles, sortable by date, comments, or votes.
- **Articles:** View articles, vote, comment, and delete comments.
- **Topics:** Shows articles sorted by topics.
- **Errors:** Handles bad routes and API errors.

## Hosting

Hosted on [Netlify](https://newnewnews.netlify.app/).

## Prerequisites

- Node.js version **16.0.0** or higher (Project developed with Node.js **18.7.0**).

To check your Node version:

```shell
node --version
```

## Setup and Local Development

1. **Clone the Repository:**
   ```shell
   git clone https://github.com/aislingkelly/nc-news
   ```
2. **Install Dependencies:**
   ```shell
   npm install
   ```
3. **Run Locally:**
   ```shell
   npm run dev
   ```

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the codebase for potential errors.
- `npm run preview`: Previews the built app locally.

## Backend

Data sourced from the NC news project backend.

- **Live Backend:** [Backend API](https://new-new-news.onrender.com/api)
- **GitHub Repo:** [Backend Repository](https://github.com/aislingkelly/new-new-news)
