# IRONCORE Membership System Setup

The site now includes:
- Supabase email/password signup and login
- Member dashboard
- Starter / Performance / Elite plan selection
- Membership record with pending/active/expired/cancelled status
- One membership record per user
- Existing contact form remains available

## 1. Create a Supabase project
Create a project at https://supabase.com/ .

## 2. Create the database
Open **SQL Editor** in Supabase and run `supabase-schema.sql` completely.

## 3. Get the public project keys
Open **Project Settings → API** and copy:
- Project URL
- Publishable/anon public key

Do NOT put a service-role/secret key in the website.

## 4. Add the keys
Open `script.js` and replace:

```js
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
```

with your public Supabase values.

## 5. Email confirmation
For testing, you can configure Supabase Authentication → Email settings according to your preferred confirmation flow.

## 6. Deploy
Upload `index.html`, `script.js`, and your existing `style.css` to GitHub Pages.

## Important
The current system creates a membership request with status `pending`. It does NOT claim that a payment happened. An administrator can activate the membership after payment/verification.
