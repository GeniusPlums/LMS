import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

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
        {items.map((item: ContentItem) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentLibrary;