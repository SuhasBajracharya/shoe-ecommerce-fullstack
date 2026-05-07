import { redirect } from 'next/navigation';

// Server Component - redirects to home
export default function ProtectedIndex() {
  redirect('/home');
}
