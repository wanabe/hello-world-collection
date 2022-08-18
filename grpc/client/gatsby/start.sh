touch src/gatsby-types.d.ts
chmod a+w node_modules/ .cache/ public/ src/gatsby-types.d.ts package-lock.json
chown node:node -R node_modules/ .cache/ public/
sudo -unode sh -c 'npm install && npx gatsby develop -H 0.0.0.0'
