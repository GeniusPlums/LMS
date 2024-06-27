import React from 'react';
import { useSelector } from 'react-redux';

// Define the shape of your Redux state
interface RootState {
  contentLibrary: {
    items: ContentItem[];
    loading: boolean;
    error: string | null;
  };
}

// Define the shape of a content item
interface ContentItem {
  id: string;
  title: string;
  // Add other properties as needed
}

const ContentLibrary: React.FC = () => {
  const { items, loading, error } = useSelector((state: RootState) => state.contentLibrary);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Content Library</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentLibrary;