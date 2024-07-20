import PageProjCannabis from '../components/PageProjCannabis';
import ProtectedRoute from '../components/ProtectedRoute';

export default function PageProjCannabisPage() {
  return (
    <ProtectedRoute>
    <div>
      <PageProjCannabis />
    </div>
    </ProtectedRoute>
  );
}
