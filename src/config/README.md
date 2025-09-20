# Configuration Directory

This directory contains all the configurable content for the website, making it easy for non-developers to update content without touching component code.

## Files

- **`siteConfig.ts`** - Main configuration file containing all website content
- **`ContentManager.tsx`** - Visual interface for updating content (React component)
- **`ContentManager.css`** - Styles for the content management interface
- **`README.md`** - This file

## Quick Start

### For Non-Developers:
1. Use the Content Manager interface (⚙️ button on the website)
2. Make your changes using the forms
3. Copy the generated code to `siteConfig.ts`

### For Developers:
1. Edit `siteConfig.ts` directly
2. The configuration is automatically imported by components
3. Changes take effect immediately after saving

## Configuration Structure

The `siteConfig.ts` file contains:

- **Hero Message** - Homepage banner content
- **Announcements** - Main announcement text
- **Meeting Notice** - Meeting information
- **Contact Info** - Board member details
- **PDF Documents** - Meeting notes and newsletters

See the main `CONTENT_MANAGEMENT_GUIDE.md` for detailed instructions.
