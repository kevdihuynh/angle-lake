# Firebase Setup Guide for Angle Lake Manor Payment System

## 🚀 Quick Setup Steps

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name it "angle-lake-manor" (or your preferred name)
4. Enable Google Analytics (optional)
5. Wait for project creation

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication" → "Sign-in method"
2. Click on "Email/Password" and enable it
3. **Important:** Enable "Email link (passwordless sign-in)" option
4. Save the settings

### 3. Set up Firestore Database
1. Go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (we'll secure it later)
4. Select your preferred location
5. Click "Done"

### 4. Get Firebase Configuration
1. Go to "Project settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Web" icon (</>) to add a web app
4. Register app with name "Angle Lake Manor"
5. Copy the configuration object

### 5. Update Configuration File
Replace the placeholder values in `src/config/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id" // optional
}
```

### 6. Configure Authorized Domains
1. In Firebase Console, go to "Authentication" → "Settings" → "Authorized domains"
2. Add your domains:
   - `localhost` (for development)
   - Your production domain (e.g., `anglelakemanor.com`)

### 7. Set up Firestore Security Rules
1. Go to "Firestore Database" → "Rules"
2. Replace the default rules
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone with your Firestore database reference to view, edit,
//     // and delete all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // all client requests to your Firestore database will be denied until you Update
//     // your rules
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2025, 10, 22);
//     }
//   }
// }


 with:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own payment records
    match /payments/{paymentId} {
      allow read, write: if request.auth != null && 
        (request.auth.uid == resource.data.userId || 
         request.auth.token.email in ['admin@anglelakemanor.com', 'treasurer@anglelakemanor.com']);
    }
    
    // Admin users can read all payments
    match /payments/{paymentId} {
      allow read: if request.auth != null && 
        request.auth.token.email in ['admin@anglelakemanor.com', 'treasurer@anglelakemanor.com'];
    }
  }
}
```

3. Click "Publish"

### 8. Update Admin Emails
In `src/components/AdminDashboard.tsx`, update the `ADMIN_EMAILS` array:

```typescript
const ADMIN_EMAILS = [
  'your-admin@email.com',
  'treasurer@anglelakemanor.com',
  // Add more admin emails as needed
]
```

## 🧪 Testing the Setup

### Test Authentication
1. Run `npm run dev`
2. Go to `/login`
3. Enter an email address
4. Check your email for the magic link
5. Click the link to sign in

### Test Payments
1. After signing in, go to `/payments`
2. Fill out the payment form
3. Submit a payment
4. Check your payment history

### Test Admin Dashboard
1. Sign in with an admin email
2. Go to `/admin`
3. View all payments and statistics

## 🔧 Development vs Production

### Development
- Use `localhost` in authorized domains
- Test mode Firestore rules are fine initially
- Use test email addresses

### Production
- Add your production domain to authorized domains
- Implement proper Firestore security rules
- Set up proper admin user management
- Consider Firebase hosting for deployment

## 🛡️ Security Considerations

1. **Email Verification**: Magic links are sent to email addresses, so ensure users have access to their email
2. **Admin Access**: Admin access is currently controlled by hardcoded email addresses
3. **Data Privacy**: Each user can only see their own payments
4. **Firestore Rules**: The security rules prevent unauthorized access to payment data

## 💰 Cost Considerations

Firebase offers generous free tiers:
- **Authentication**: 50,000 monthly active users (free)
- **Firestore**: 50,000 reads, 20,000 writes, 20,000 deletes per day (free)
- **Hosting**: 10GB storage, 10GB/month transfer (free)

For 30 HOA users, you'll likely stay within the free tier.

## 🚨 Common Issues

### Magic Link Not Working
- Check authorized domains in Firebase Console
- Ensure email is not going to spam
- Verify the redirect URL matches your domain

### Permission Denied Errors
- Check Firestore security rules
- Verify user is authenticated
- Ensure admin emails are correct

### Build Errors
- Make sure all Firebase config values are filled in
- Check that all imports are correct
- Verify Firebase SDK is properly installed

## 📱 Next Steps

Once basic functionality is working:
1. Style the components to match your design
2. Add real Stripe integration (replace mock)
3. Set up email notifications for payments
4. Add payment receipts/confirmations
5. Implement recurring payment options
6. Add export functionality for admin

## 🆘 Support

If you run into issues:
1. Check the browser console for error messages
2. Verify Firebase configuration is correct
3. Test with a simple email first
4. Check Firebase Console for authentication/database activity
