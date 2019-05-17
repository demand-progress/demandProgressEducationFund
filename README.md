# Demand Progress Education Fund - React.js Website

## Setup
To run this app locally once this repository is cloned and while being in its directory execute:

```
npm install && npm start
```

## Deployment
This app is deployed using GitHub Pages. To deploy an updated version the app needs to be built/compiled.
Before compiling a new version of the app you may want to remove the old assets with something like:


```
rm -rf asset-manifest.json favicon.ico images/ index.html manifest.json precache* service-worker.js static/
```
After that, to compile execute:

```
npm run build
```
then check in the build output to source control (git) and push to GitHub.
