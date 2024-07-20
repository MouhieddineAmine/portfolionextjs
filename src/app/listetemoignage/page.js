import ListeTemoignage from '../components/ListeTemoignage';
import ProtectedRoute from '../components/ProtectedRoute';


export default function ListeTemoignagesPage() {
  return (
    <ProtectedRoute>
    <div>
      <ListeTemoignage />
    </div>
    </ProtectedRoute>
  );
}
