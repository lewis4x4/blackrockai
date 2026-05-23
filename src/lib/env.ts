function readEnv(key: keyof ImportMetaEnv): string {
  return import.meta.env[key]?.trim() ?? '';
}

/** Public site URL (production domain or Netlify URL). */
export const siteUrl = readEnv('VITE_SITE_URL') || 'https://blackrockai.co';

/** Primary contact inbox shown on the site. */
export const contactEmail =
  readEnv('VITE_CONTACT_EMAIL') || 'brian@blackrockai.co';

/** Cal.com / Calendly booking link. Falls back to #contact when empty. */
export const bookingUrl = readEnv('VITE_BOOKING_URL') || '#contact';

/** Social profile URLs. Empty string hides or disables the link in the UI. */
export const linkedInUrl = readEnv('VITE_LINKEDIN_URL');
export const githubUrl = readEnv('VITE_GITHUB_URL');
export const xUrl = readEnv('VITE_X_URL');

/** POST endpoint for the contact form (Netlify Forms, Supabase, etc.). */
export const contactFormEndpoint = readEnv('VITE_CONTACT_FORM_ENDPOINT');

/** Supabase project (phase 2 — contact form / auth). */
export const supabaseUrl = readEnv('VITE_SUPABASE_URL');
export const supabaseAnonKey = readEnv('VITE_SUPABASE_ANON_KEY');

export function mailtoContact(): string {
  return `mailto:${contactEmail}`;
}
