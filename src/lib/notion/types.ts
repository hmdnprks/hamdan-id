export type Note = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  cover?: string; // image URL
  type?: 'essay' | 'note' | 'travel' | 'tech';
  tags?: string[];
};
