import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

let base = process.env.JUPYTERHUB_SERVICE_PREFIX || "/";
if (!base.endsWith("/")) {
  base = base + "/";
}
const allowed_hosts: string[] = [];
let app_path = "http://localhost:5173";
if (process.env.VSCODE_PROXY_URI) {
  const url = new URL(process.env.VSCODE_PROXY_URI);
  app_path = url.protocol + "//" + url.host;
  base = base + "proxy/absolute/5173";
  allowed_hosts.push(url.hostname);
}
app_path = app_path + base;
console.log("\n\x1b[31m\x1b[1m** Accessing the Development Server **\x1b[0m\n\nThe Server is available at \x1b[36m\x1b[1m" + app_path + "\x1b[0m\n\n\x1b[31m\x1b[1mDo not use the URL starting http://localhost:5173 shown below.\x1b[0m\n");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.GITHUB_ACTIONS === "true"
  ? "/metallica-favplaylist/"
  : base,
  server: {
    allowedHosts: allowed_hosts,
  },
})
