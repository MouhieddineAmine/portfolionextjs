import Contact from "../components/Contact";
import ProtectedRoute from '../components/ProtectedRoute';

export default function ContactPage() {
  return (
    <ProtectedRoute>
    <div>
      <Contact />
    </div>
    </ProtectedRoute>
  );
}
