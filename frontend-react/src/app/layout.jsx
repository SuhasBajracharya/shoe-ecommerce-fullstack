import '../app.css';
import '../index.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: 'StepStyle',
  description: 'Premium footwear and apparel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
