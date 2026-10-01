// Configuration de l'application Demandes d'Achat (PR-ACH-001).
// Sur Vercel, laissez ce fichier tel quel : la configuration vient des variables d'environnement
// SUPABASE_URL, SUPABASE_ANON_KEY, ENTREPRISE et DEVISE, via la fonction api/config.js.
// Pour un test sur votre PC (sans Vercel), renseignez directement les valeurs ci-dessous.
// La clé "anon public" peut être publique : la sécurité est assurée par les règles RLS de la base.
// Ne mettez JAMAIS la clé "service_role" dans ce fichier.
window.APP_CONFIG = {
  SUPABASE_URL: "https://lcdetsremuoyyxmstdju.supabase.co/rest/v1/",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjZGV0c3JlbXVveXl4bXN0ZGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NjUzNzUsImV4cCI6MjEwNjQ0MTM3NX0.aPyo1rY665iqFxHbz0x7zL3tV3_WzudkBEGp3kzRQKs",
  ENTREPRISE: "VALORISE MAROC",
  DEVISE: "MAD"
};
