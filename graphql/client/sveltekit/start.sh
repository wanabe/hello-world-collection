chmod a+w . node_modules/ .svelte-kit/ package-lock.json
chown node:node -R node_modules/ .svelte-kit/
sudo -unode sh -c 'npm install && npx vite dev --host 0.0.0.0'
