# Architecture rules

- Use Lovable Cloud for app-owned server-side functionality; it provides a managed execution environment without a persistent sandbox server.
- Send contact inquiry notifications through the built-in app email infrastructure once a sender domain is configured; do not depend on the unavailable external CRM or expose email credentials to the browser.