## Project

Freelance portfolio of Julien Bonvarlet, in French and English. The design is the "Royal flush" direction: the five services are a hand of spades, with a cobalt, lilac, pink, yellow and navy print palette (tokens in `app/globals.css`). The other explored directions live on the `prototype/homepage-variants` branch; see issue #5.

- **Copy:** every visible string lives in `content/fr.ts` and `content/en.ts`, typed by `content/types.ts`; change both languages together. Untranslated data (links, project URLs, card ranks, stacks) lives in `lib/site.ts`.
- **Agent-readable mirrors:** `lib/markdown.ts` (served at `/{lang}/index.md`), `app/llms.txt` and `lib/json-ld.ts` restate the page content. A new page section belongs in the markdown renderer too.
- **Routing:** every page sits under `app/[lang]`; `proxy.ts` redirects unprefixed paths to the visitor's language. Paths with a file extension skip the proxy; a new metadata route without one (like `apple-icon`) must be added to the matcher's exclusions.
- **Gotchas:** the Tailwind Turbopack rule in `next.config.ts` excludes `*.module.css`, otherwise CSS Modules lose their class names. After adding or renaming routes, run `pnpm next typegen` before `pnpm type-check`.
- **Placeholders:** testimonials stay hidden while their list is empty.
- **Done means** `pnpm lint`, `pnpm type-check` and `pnpm build` all pass, as in CI.

## Agent skills

### Issue tracker

Issues live in GitHub Issues on tyloo/tyloo.fr, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical labels: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
