# Overview

This document provides detailed instructions for configuring and using a Convex project in a local environment. It is designed to help you get started quickly with Convex, particularly for your tourism platform project in Benin, guiding you through the initialization and connection steps.

# Configure a Convex project

## Prerequisites

- Ensure you have Node.js installed (version 18 or higher recommended).
- Create a Convex account at [convex.dev](https://convex.dev) if you haven't already done so.
- Open a terminal in the root directory of your project (where your `package.json` is located).

## Configuration Steps

### 1. Initialize a Local Project

a. Run this command:

```bash
npx convex dev
```

b. This command:

- Initialize a `/convex` folder in your project if you haven't already done so.
- Log in to your Convex account (prompt for login via browser).
- Allows you to choose an existing project or create a new one.
- Automatically configures an `.env.local` file with the necessary environment variables (e.g., local API key).

### 2. Import Data into Convex Database

a. After initializing the project, import your `sites.json` data into the Convex database using the following command:

```bash
npx convex import --table sites ./data/sites.json
```

This command will insert all the records from sites.json into the sites table of your Convex project.

b. What to Do:

- Ensure your sites.json file is located in the ./data/ directory at the root of your project.

- Verify that the file is in JSONL format (each line is a separate JSON object, e.g., `{"name": "Site1", ...}\n{"name": "Site2", ...}`) if you converted it from an array. If it’s still an array,

- Run the command in your terminal. If successful, you’ll see a confirmation message indicating the number of records imported.

- Check the Convex Dashboard under the "Data" tab to confirm the sites table contains the imported data.

### 3. Use Convex Functions

a. Once the project is set up and data is imported, you can use the defined functions (`getSiteById, getSiteBySlug, listSites`) in your frontend application. Below is an example of how to integrate these functions using React and the Convex React library.

b. Example Code

```bash
// /app/site/page.tsx (or any component file)
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function SiteList() {
  // Fetch a site by ID
  const siteById = useQuery(api.queries.sites.getSiteById, { id: "some_site_id_here" });
  // Fetch a site by slug
  const siteBySlug = useQuery(api.queries.sites.getSiteBySlug, { slug: "la-porte-du-non-retour" });
  // Fetch the list of all sites
  const sitesList = useQuery(api.queries.sites.listSites);

  if (!siteById || !siteBySlug || !sitesList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Site Details</h1>
      <section>
        <h2>By ID</h2>
        {siteById && (
          <div>
            <p>Name: {siteById.name}</p>
            <p>City: {siteById.city}</p>
          </div>
        )}
      </section>
      <section>
        <h2>By Slug</h2>
        {siteBySlug && (
          <div>
            <p>Name: {siteBySlug.name}</p>
            <p>Rating: {siteBySlug.rating}</p>
          </div>
        )}
      </section>
      <section>
        <h2>All Sites</h2>
        <ul>
          {sitesList.map((site) => (
            <li key={site._id}>{site.name} - {site.category}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
```

c. What to do :

- Ensure the `convex` package is installed in your project: `npm install convex`.

- Replace `"some_site_id_here"` with a valid `\_id` from your `sites` table (check the Convex Dashboard).

- Replace `"la-porte-du-non-retour"` with a valid `slug` value from your data.

- Verify that the functions `getSiteById, getSiteBySlug`, and `listSites`are defined in`/convex/queries/sites.ts`with the correct schema (e.g., including`slug`).

- Run your development server (e.g., `npm run dev`) and navigate to the page where this component is rendered to see the data.

- If an error occurs (e.g., "Function not found"), check the function names and ensure the Convex dev server is running (`npx convex dev`).
