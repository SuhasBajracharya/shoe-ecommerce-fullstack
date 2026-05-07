import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: '#363238', overflowX: 'hidden' }}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <button className="back-to-top">↑</button>
    </div>
  );
}
