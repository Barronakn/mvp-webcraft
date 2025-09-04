# Overview

Ce document fournit des instructions détaillées pour configurer et utiliser un projet Convex en environnement local.

# Configure a Convex project

## Prerequisites

- Ensure you have Node.js installed (version 18 or higher recommended).
- Create a Convex account at [convex.dev](https://convex.dev) if you haven't already done so.
- Open a terminal in the root directory of your project (where your package.json is located).

## Configuration steps

1. init a local project

- Run this command :

```
npm convex dex
```

- This command:

* Initialize a /convex folder in your project if you haven't already done so.
* Log in to your Convex account (prompt for login via browser).
* Allows you to choose an existing project or create a new one.
* Automatically configures an .env.local file with the necessary environment variables (e.g., local API key).
