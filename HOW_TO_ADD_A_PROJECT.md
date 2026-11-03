# How to add a project

Adding a project takes one new file. You don't need to touch any page or layout.

## The quick way: ask Claude

Say `add project <repo or folder>`. Claude reads the source, drafts the entry, shows you every factual claim, and opens a pull request after you approve. `CLAUDE.md` holds the full steps.

## By hand

1. Create the file:

   ```bash
   npm run new:project my-project-slug
   ```

   This copies the template to `src/content/projects/my-project-slug.mdx`.

2. Fill in the details at the top. The important settings are:

   | Setting | What it does |
   |---|---|
   | `featured: true` | Puts the project on the homepage |
   | `order: 1` | Sets the position. Lower numbers come first. |
   | `draft: true` | Hides the project everywhere. Set to `false` when ready. |
   | `archive: true` | Lists it under Earlier work, with no detail page |
   | `cover` | Picks the card image: `auto`, `plot`, `redaction` or `flow` |

3. Fill in all six sections: Problem, My role, Architecture, Key decisions and trade-offs, Results, Failures and limits.

4. Check it:

   ```bash
   npm install
   npm run dev
   ```

   Open http://localhost:4321/projects to see it.

5. Open a pull request. The site deploys automatically when it merges to `main`.

## Drawing the architecture

Use the `Flow` component in your file. Each inner list is one box, and each string is one line of text:

```mdx
<Flow
  label="Describe the diagram for screen readers"
  steps={[['source'], ['dbt', 'models'], ['dashboard']]}
/>
```

## Rules

- Follow `WRITING.md`. Write the way you'd explain the project to another engineer.

- Only publish facts you can back up. If a metric wasn't measured, say so instead of estimating.
- Never publish employer code, data, screenshots, customer details or internal system names.
- Keep personal details off the site, apart from the contact links already there.
- `npm run build` stops if a section is missing or template text is left in.

## Updating other content

- **Experience and skills:** `src/data/profile.ts`. This also feeds the Resume page.
- **Resume PDF:** after changing `profile.ts`, run `npm run build`, `npm run preview`, then `npm run resume:pdf` in a second terminal.
- **Writing:** add a Markdown file to `src/content/writing/`.
- **Email, links and repo-link switch:** `src/site.config.ts`.
