import PageProjBlog from '../components/PageProjBlog';
import ProtectedRoute from '../components/ProtectedRoute';


export default function PageProjBlogPage() {
  return (
    <ProtectedRoute>
    <div>
      <PageProjBlog />
    </div>
    </ProtectedRoute>
  );
}
