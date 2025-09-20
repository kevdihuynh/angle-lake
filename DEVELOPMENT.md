# Development Guide

## Content Manager

The Content Manager is a development-only interface that allows non-developers to update website content without touching code.

### Enabling the Content Manager

To enable the Content Manager during development:

```bash
npm run dev:cms
```

This sets the `VITE_ENABLE_CONTENT_MANAGER=true` environment variable, which makes the Content Manager button visible on the website.

### Regular Development

For normal development without the Content Manager:

```bash
npm run dev
```

The Content Manager will be completely hidden.

### Production

**Important**: The Content Manager is never available in production builds, regardless of environment variables. This ensures the interface is never exposed to end users.

## Environment Variables

- `VITE_ENABLE_CONTENT_MANAGER`: Set to `'true'` to enable the Content Manager interface during development only.

## Security

The Content Manager is designed to be development-only:
- It only appears when explicitly enabled via environment variable
- It's completely removed from production builds
- No sensitive data is exposed through the interface
- All changes must be manually applied to the `siteConfig.ts` file

## Usage

1. Run `npm run dev:cms`
2. Look for the "⚙️ Content Manager" button in the top-right corner
3. Make changes using the interface
4. Export the generated code from the Export tab
5. Replace the content in `src/config/siteConfig.ts` with the exported code
6. Save the file to see changes

For detailed usage instructions, see `CONTENT_MANAGEMENT_GUIDE.md`.
