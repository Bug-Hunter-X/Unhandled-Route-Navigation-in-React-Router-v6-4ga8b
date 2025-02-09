# React Router v6 Unhandled Route Navigation

This repository demonstrates a common, yet easily overlooked, issue in React Router v6:  the lack of a catch-all route to handle navigation to non-existent paths.  Without a catch-all, the application will log errors to the console, potentially impacting the user experience.

## The Problem

The provided `App.js` demonstrates a simple React Router setup. However, it lacks a catch-all route (`/*`).  Navigating to a path not explicitly defined in the `Routes` component will result in console errors.

## The Solution

`AppSolution.js` shows the corrected version with the addition of a catch-all route (`/*`). This route, typically rendering a 404 page, gracefully handles all unrecognized paths, preventing console errors and providing a better user experience.