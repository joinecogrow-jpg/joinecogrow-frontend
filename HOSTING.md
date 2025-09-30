# JoinEcoGrow Hosting Confirmation

Current state (Production)

* Core Platform: Vercel Project 'joinecogrow-frontend' at https://joinecogrow.com (apex 200 OK; www/\*.vercel.app 308 → apex)
* DNS: Cloudflare — A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com
* OG/SEO: opengraph-image, sitemap, robots present
* Health: /api/health 200

Matches documents

* Hybrid Core + Standalone architecture — Core on joinecogrow.com, modules as independent apps with shared services \[\[12]]
* DigitalOcean for module deployments (games/sports/studio/media/quantum/enterprise) \[\[12]] \[\[13]] \[\[15]]
* Supabase + n8n as shared services \[\[12]] \[\[15]]
* Phase 4 marketing/SEO/CDN guidance for launch \[\[16]]

Next steps

* Keep Core on Vercel; provision module subdomains on Cloudflare now (CNAME), point to DO apps when live \[\[12]] \[\[13]]
* Add analytics + security headers; optional Sentry
* Start Phase 4 marketing workflows and press kit \[\[16]]
