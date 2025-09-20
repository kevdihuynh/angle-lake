# 📝 Content Management Guide

This guide explains how to update the website content without touching any code. The website is designed to be easily configurable for non-developers.

## 🚀 Quick Start

### Option 1: Use the Content Manager Interface (Recommended)
1. Open the website in your browser
2. Look for the "⚙️ Content Manager" button in the top-right corner
3. Click it to open the content management interface
4. Make your changes using the easy-to-use forms
5. Copy the generated code and replace the content in `src/config/siteConfig.ts`

### Option 2: Direct File Editing
1. Open `src/config/siteConfig.ts` in a text editor
2. Find the section you want to update
3. Make your changes directly in the file
4. Save the file

## 📋 What You Can Update

### 🏠 Hero Message (Homepage Banner)
- **Location**: Hero section at the top of the homepage
- **What to update**:
  - Message title
  - Message lines (each line appears separately)
  - Icon (optional)

### 📢 Main Announcement
- **Location**: Announcements section on homepage
- **What to update**:
  - Full announcement text
  - Icon (optional)

### 👥 Contact Information (Homepage)
- **Location**: Contact section on homepage
- **What to update**:
  - Board member names
  - Roles/titles
  - Phone numbers
  - Email addresses
  - Add/remove contact entries

### 📋 About Page
- **Location**: About page
- **What to update**:
  - Club officers information
  - Legal documents (covenants, bylaws)
  - Beach lot rules and regulations
  - Definitions and foundation text

### 🔗 Resources Page
- **Location**: Resources page
- **What to update**:
  - Member business ads
  - Water data links
  - Fishing guidelines links
  - ALM vs ALSC information
  - City of SeaTac information

### 💳 Payments Page
- **Location**: Payments page
- **What to update**:
  - Default form data
  - Payment history records
  - Treasurer report information

### 📄 PDF Documents
- **Location**: Events & Media page
- **What to update**:
  - Newsletter PDFs
  - Meeting notes PDFs
  - PDF URLs and labels

### 🧭 Navigation
- **Location**: Header navigation
- **What to update**:
  - Menu item labels
  - Navigation paths
  - Site title and subtitle

## 🔧 Step-by-Step Instructions

### Updating the Hero Message
```typescript
heroMessage: {
  title: "Important Message",  // Change this
  icon: "!",                   // Change this (optional)
  lines: [
    "Our next ALM meeting is at 6 pm on",  // Change these lines
    "Thursday, February 8 at Tom & Kathy",
    "Stewart's, 19246 34th Ave S."
  ]
}
```

### Updating Contact Information
```typescript
contactInfo: [
  {
    role: "President & Beach Lot Manager",  // Change role
    name: "Ted Van Blaricom",               // Change name
    phone: "(206) 555-0123",               // Change phone
    email: "ted@anglelakemanor.com"        // Change email
  },
  // Add more contacts here...
]
```

### Adding New Meeting Notes
```typescript
meetingNotes: [
  // Add new entry at the beginning of the array:
  { 
    value: 'september-2025', 
    label: 'September 2025 Meeting', 
    url: 'https://anglelakemanor.com/Minutes/ALMSep2025.pdf' 
  },
  // ... existing entries
]
```

### Adding New Newsletters
```typescript
newsletters: [
  // Add new entry at the beginning of the array:
  { 
    value: 'september-2024', 
    label: 'September, 2024', 
    url: 'https://anglelakemanor.com/Newsletters/ALMSep2024.pdf' 
  },
  // ... existing entries
]
```

## 🎨 Formatting Tips

### Text Formatting
- Use line breaks (`\n`) for multi-line content
- Keep URLs complete and valid
- Use consistent formatting for dates and names

### Icons
- Use emoji icons (📢, 👤, 📅, etc.)
- Keep icons simple and relevant
- You can use any emoji or text symbol

### Contact Information
- Use consistent phone number format: `(206) 555-0123`
- Use full email addresses
- Keep role titles descriptive but concise

## 🚨 Important Notes

### File Location
- **Main config file**: `src/config/siteConfig.ts`
- **Content manager**: `src/config/ContentManager.tsx`
- **Styles**: `src/config/ContentManager.css`

### Backup Your Changes
- Always make a backup of `siteConfig.ts` before making changes
- Test changes on a development version first if possible

### URL Requirements
- PDF URLs must be publicly accessible
- Use HTTPS URLs when possible
- Test PDF links to ensure they work

### Data Format
- Follow the exact structure shown in the examples
- Don't remove required fields
- Keep quotes around text values
- Use commas to separate items in arrays

## 🔍 Troubleshooting

### Common Issues

**Website doesn't update after changes:**
- Make sure you saved the file
- Refresh the browser page
- Check for syntax errors (missing commas, quotes, etc.)

**Content Manager not showing:**
- Look for the "⚙️ Content Manager" button
- Try refreshing the page
- Check browser console for errors

**PDFs not loading:**
- Verify the URL is correct and accessible
- Check that the PDF file exists
- Ensure the URL doesn't require authentication

**Contact cards not displaying:**
- Make sure all required fields are filled (role, name, phone, email)
- Check for missing commas in the contact array
- Verify the JSON structure is correct

### Getting Help
1. Check this guide first
2. Look at the existing configuration for examples
3. Use the Content Manager interface for guidance
4. Contact the developer if you need assistance

## 📝 Example Updates

### Updating Meeting Information
**Before:**
```typescript
lines: [
  "Our next ALM meeting is at 6 pm on",
  "Thursday, February 8 at Tom & Kathy",
  "Stewart's, 19246 34th Ave S."
]
```

**After:**
```typescript
lines: [
  "Our next ALM meeting is at 7 pm on",
  "Thursday, March 14 at Jane & Bob",
  "Smith's, 19500 33rd Ave S."
]
```

### Adding a New Board Member
**Add to contactInfo array:**
```typescript
{
  role: "Vice President",
  name: "New Board Member",
  phone: "(206) 555-0128",
  email: "newmember@anglelakemanor.com"
}
```

### Updating Dues Information
**Before:**
```typescript
content: "Please pay your 2024 dues online..."
```

**After:**
```typescript
content: "Please pay your 2025 dues online and save my shoe leather going door to door. They are $55 this year which will help the maintenance and improvements at the beach lot..."
```

## ✅ Best Practices

1. **Test Changes**: Always test your changes before going live
2. **Keep Backups**: Save copies of working configurations
3. **Be Consistent**: Use consistent formatting and naming
4. **Update Regularly**: Keep meeting dates and contact info current
5. **Check Links**: Verify all PDF links work before publishing
6. **Use the Interface**: The Content Manager makes updates easier and safer

---

*This guide makes it easy for anyone to update the website content without technical knowledge. If you need help, don't hesitate to ask!*
