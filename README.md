# Malmö BMX Racing

Website for Malmö BMX Racing built with Next.js and Sveltia CMS.

## Development

Install dependencies:
```bash
yarn
```

Start the development server:
```bash
yarn dev
```

The site will be available at http://localhost:3000

## Local CMS

To edit content locally via the CMS, run two terminals:

**Terminal 1** - Next.js dev server:
```bash
yarn dev
```

**Terminal 2** - CMS proxy server:
```bash
yarn cms
```

Then open http://localhost:3000/admin/

## Build

```bash
yarn build
```

The static site will be generated in the `out` folder.
