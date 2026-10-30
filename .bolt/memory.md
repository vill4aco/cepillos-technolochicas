# Project memory

## Product intent & audience

- Vite + React project; production-worthy public-facing website for "cepillos industriales" (industrial brushes).
- Includes contact form (nombre, empresa, email, teléfono, tipo de necesidad, mensaje) via Formspree.
- User communicates in Spanish; developer/owner managing deployment directly.
- Deployment target is now GitHub Pages (user reverted from GitLab Pages).

## Brand personality & voice

- User-facing copy: polished professional Spanish.
- Assistant guidance tone: practical, concise, step-by-step.

## Visual design & UX direction

- Contact form via Formspree endpoint; loading state ("Enviando..."), success/error messages, no page reload.
- Field names human-readable for email content.
- Global `.bolt/prompt` governs visual constraints (Tailwind + Lucide, `@/` alias).

## Decisions, constraints & rationale

- **Formspree endpoint**: `https://formspree.io/f/mdeedrkk` (public, no `.env`).
- **GitHub account**: `vill4aco`; repo `cepillos-industriales`.
- **GitHub Pages URL**: `https://vill4aco.github.io/cepillos-industriales/`.
- **Deployment method**: GitHub Actions (not "Deploy from a branch").
- **Vite base path**: should be `/cepillos-industriales/` to match GitHub Pages subfolder.
- GitLab Pages setup previously started but superseded; GitHub Pages is final target.
- Static hosting implied; no SSR, no backend code.
- Rationale: zero-backend approach keeps deployment simple.

## Open questions & assumptions

- Assumption: Vite `base` set to `/cepillos-industriales/` for correct asset loading on GitHub Pages.
- Assumption: GitHub Actions workflow file present and configured for Vite build + Pages deploy.
- Pending: user to test live form submission after GitHub Pages deployment.
- Pending: verify GitHub Actions deploy pipeline runs successfully on first push.
- Pending: confirm site loads correctly at final URL with all assets.