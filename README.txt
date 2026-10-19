INOVEXA LAB WEBSITE — ADMIN INQUIRY EDITION

This version includes:
- Main responsive company website
- admin.html inquiry dashboard (login, list/filter inquiries, status updates, delete)
- Cloudflare Pages Functions API for inquiry submission and admin operations
- schema.sql for the Cloudflare D1 database

IMPORTANT DEPLOYMENT NOTE
Your original website was uploaded using Cloudflare Pages Direct Upload. Cloudflare Pages Functions are not supported by Direct Upload, so the API/admin features will NOT run if you simply drag-and-drop this ZIP to the existing project. Deploy this package through a Git-connected Cloudflare Pages project (recommended) or Wrangler. The public website files can still be previewed as static files, but inquiries will not be stored until the backend is deployed and configured.

SETUP SUMMARY
1. Create a Cloudflare D1 database named e.g. inovexa-inquiries.
2. Run schema.sql in that database's Console.
3. Connect this website project to a Git repository and deploy it as a Cloudflare Pages project with the project root as the build output directory (no build command; the root contains index.html).
4. In Cloudflare Dashboard > Workers & Pages > your Pages project > Settings > Bindings, add a D1 database binding with variable name DB and select your database. Redeploy.
5. In Settings > Variables and Secrets, add secret ADMIN_PASSWORD (choose a long unique password) and secret SESSION_SECRET (a separate long random secret). Do not put either secret into HTML or share it publicly. Redeploy.
6. Visit /admin.html to sign in. Inquiries submitted on the website will appear there once the API is configured.

SECURITY NOTES
- Admin passwords and session signing secrets are server-side Cloudflare secrets, never embedded in browser code.
- Admin sessions use an HttpOnly, Secure, SameSite=Strict cookie with an 8-hour expiry.
- This is a starter admin system. Before heavy public traffic, consider adding Cloudflare Turnstile/rate limiting and a regular data-retention/backup process.
- Admin dashboard URL: /admin.html. It is not linked prominently, but security comes from server-side authentication, not from hiding the URL.

CONTACT DETAILS
Email: inovexalabsupport@gmail.com
Phone/WhatsApp: 0539075420
