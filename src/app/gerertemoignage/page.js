import AddEditTemoignage from '../components/AddEditTemoignage';
import ProtectedRoute from '../components/ProtectedRoute';


export default function GererTemoignagesPage() {
  // You can pass props to AddEditTemoignage for editing
  return (
    <ProtectedRoute>
    <div>
      <AddEditTemoignage editing={false} />
    </div>
    </ProtectedRoute>
  );
}
