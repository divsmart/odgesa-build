# ODGESA — Developer Reference Sheet
*Last updated: June 2026*

---

## Server Access

| Alias | User | Purpose |
|-------|------|---------|
| `ssh c` | `cp2` | Root-level VPS — firewall, system admin, MariaDB root |
| `ssh odgesa-web` | `odgesa-web` | Next.js frontend — code, builds, PM2 |
| `ssh odgesa-cms` | `odgesa-cms` | Strapi CMS — config, PM2 |

**VPS IP:** `45.151.122.177`  
**CloudPanel:** `https://secure.divsmart.cloud`

---

## Key File Locations — Server

### Next.js Frontend (`ssh odgesa-web`)

```
~/htdocs/dev.ecolesperseverance-gp.fr/
├── src/
│   ├── app/
│   │   ├── page.tsx                          ← Homepage
│   │   ├── globals.css                       ← Global styles + CSS variables
│   │   ├── layout.tsx                        ← Root layout (NavBar + Footer)
│   │   ├── projet-educatif/page.tsx
│   │   ├── nos-ecoles/
│   │   │   ├── page.tsx                      ← Schools overview
│   │   │   ├── nos-ecoles.module.css
│   │   │   ├── baillif/page.tsx
│   │   │   ├── duportail/page.tsx
│   │   │   ├── marie-galante/page.tsx
│   │   │   └── les-abymes/page.tsx
│   │   ├── familles/page.tsx
│   │   ├── actualites/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── notre-eglise/page.tsx
│   │   ├── administration-et-gouvernance/page.tsx
│   │   ├── mentions-legales/page.tsx
│   │   └── api/
│   │       └── auth/route.ts                 ← Preview gate auth
│   └── components/
│       ├── NavBar.tsx
│       ├── NavBar.module.css
│       ├── Footer.tsx
│       ├── Footer.module.css
│       ├── HeroSlider.tsx
│       └── HeroSlider.module.css
├── public/
│   └── images/                               ← Hero slider images (slide1/2/3.jpg)
├── .env.production                           ← NEXT_PUBLIC_STRAPI_URL
└── next.config.ts
```

### Strapi CMS (`ssh odgesa-cms`)

```
~/htdocs/cms.odgesa.online/
├── config/
│   ├── server.ts                             ← CMS URL (cms.ecolesperseverance-gp.fr)
│   ├── middlewares.ts                        ← CORS origins
│   ├── plugins.ts                            ← i18n config
│   └── database.ts                           ← MariaDB connection
└── src/
    └── api/
        └── ecole/                            ← Ecole content type
```

---

## PM2 Process Map

| PM2 Name | Port | Domain | Purpose |
|----------|------|--------|---------|
| `odgesa-dev` | 3003 | `dev.ecolesperseverance-gp.fr` | Active build — board preview |
| `odgesa-build` | 3020 | `ecolesperseverance-gp.fr` | Production holding page |
| `nextjs` | 3001 | `odgesa.online` | Construction page |
| `strapi` | 1337 | `cms.ecolesperseverance-gp.fr` / `cms.odgesa.online` | CMS |

---

## Build Commands

### Next.js (as `odgesa-web`)

```bash
# Build and restart dev site
cd ~/htdocs/dev.ecolesperseverance-gp.fr
npm run build && pm2 restart odgesa-dev --update-env

# Build and restart production site
cd ~/htdocs/ecolesperseverance-gp.fr
npm run build && pm2 restart odgesa-build --update-env

# Check status
pm2 status

# View logs
pm2 logs odgesa-dev --lines 30
```

### Strapi (as `odgesa-cms`)

```bash
cd ~/htdocs/cms.odgesa.online
NODE_ENV=production npm run build
pm2 restart strapi
pm2 status
```

---

## Deploy Workflow (Local → Server)

### Standard workflow

```bash
# 1. Pull any server-side changes to local first
scp odgesa-web:~/htdocs/dev.ecolesperseverance-gp.fr/src/app/page.tsx ~/odgesa-build/src/app/page.tsx

# 2. Edit files locally in Kate or nano

# 3. Push to server
scp ~/odgesa-build/src/components/HeroSlider.tsx odgesa-web:~/htdocs/dev.ecolesperseverance-gp.fr/src/components/HeroSlider.tsx

# 4. Build on server
ssh odgesa-web
cd ~/htdocs/dev.ecolesperseverance-gp.fr
npm run build && pm2 restart odgesa-dev --update-env
```

### Git commit (from local `~/odgesa-build/`)

```bash
cd ~/odgesa-build
git add .
git commit -m "feat: description of change"
git push
```

**GitHub repo:** `divsmart/odgesa-build`

---

## Common SCP Patterns

```bash
# Pull single file from server to local
scp odgesa-web:~/htdocs/dev.ecolesperseverance-gp.fr/src/app/page.tsx ~/odgesa-build/src/app/page.tsx

# Push single file to server
scp ~/odgesa-build/src/components/NavBar.tsx odgesa-web:~/htdocs/dev.ecolesperseverance-gp.fr/src/components/NavBar.tsx

# Pull entire src directory (use sparingly)
scp -r odgesa-web:~/htdocs/dev.ecolesperseverance-gp.fr/src ~/odgesa-build/
```

---

## Brand Variables (globals.css)

```css
--color-teal:        #0d4d62   /* Primary — navbar, headings */
--color-teal-dark:   #081419   /* Deep background */
--color-teal-mid:    #0b3d50   /* Mid tone */
--color-orange:      #FCCA3F   /* Yellow — CTAs, accents */
--color-orange-dark: #E6B320   /* Yellow hover */
--font-sans:         'Barlow'
--font-condensed:    'Barlow Condensed'
```

---

## URLs

| URL | Purpose |
|-----|---------|
| `https://dev.ecolesperseverance-gp.fr` | Board preview (password protected) |
| `https://ecolesperseverance-gp.fr` | Production (holding page) |
| `https://cms.ecolesperseverance-gp.fr/admin` | Strapi admin |
| `https://cms.odgesa.online/admin` | Strapi admin (alias) |
| `https://secure.divsmart.cloud` | CloudPanel |

---

## Preview Access Codes

| Person | Code |
|--------|------|
| Sablier | `PERSEV917` |
| Régis | `GUADEL415` |
| Nanette | `ODGESA681` |
| Placide | `ECOLES719` |
| Blocail | `BAILLIF218` |
| Gravillon | `ADVENT469` |

---

## Strapi Content Types

### Ecole schema fields
`nom`, `slug`, `ville`, `description`, `slogan`, `adresse`, `telephone`, `email`,
`pedagogie` (Classique / Classique et Montessori), `transport_scolaire` (bool),
`niveaux`, `ecolage_min`, `ecolage_max`, `localite` (Baillif / Duportail / Marie-Galante),
`photo_principale`, `galerie`, `coordonnees_gps`, `document_inscription` (pending)

i18n enabled — FR default. Draft/publish enabled.

---

## Important Rules

- **Never** include `CLAUDE.md` or `AGENTS.md` in the Next.js project
- **Always** `scp` server files to local before editing locally or they get overwritten on deploy
- **Always** run `npm run build` after CSS module changes — public folder images don't need a rebuild
- **Never** edit files on server and local simultaneously without syncing first
- `cms` and `dev` Cloudflare DNS records must stay **grey cloud** (DNS only)
- Strapi must be rebuilt (`NODE_ENV=production npm run build`) after any config change

---

*Stack: Next.js 16 · Strapi 5 · MariaDB · PM2 · CloudPanel v2 · Ubuntu 22.04*
