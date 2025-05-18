import * as React from 'react';
import { ComponentCard } from './component-card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Pagination } from '@/components/ui/pagination';
import { useSearchStore } from '@/lib/store';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 12;

export interface Component {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
  };
  framework: string;
  category: string;
  stats: {
    stars: number;
    downloads: number;
    views: number;
  };
  image?: string;
}

interface ComponentListProps {
  components: Component[];
  className?: string;
}

export function ComponentList({ components, className }: ComponentListProps) {
  const { searchQuery, setSearchQuery, filters, setFilters } = useSearchStore();
  const [currentPage, setCurrentPage] = React.useState(1);

  // Filter components based on search query and filters
  const filteredComponents = React.useMemo(() => {
    return components.filter((component) => {
      const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFramework = filters.framework.length === 0 ||
        filters.framework.includes(component.framework);
      
      const matchesCategory = filters.category.length === 0 ||
        filters.category.includes(component.category);
      
      return matchesSearch && matchesFramework && matchesCategory;
    });
  }, [components, searchQuery, filters]);

  // Sort components based on selected sort option
  const sortedComponents = React.useMemo(() => {
    return [...filteredComponents].sort((a, b) => {
      switch (filters.sortBy) {
        case 'popular':
          return b.stats.downloads - a.stats.downloads;
        case 'newest':
          return b.stats.views - a.stats.views;
        case 'trending':
          return b.stats.stars - a.stats.stars;
        default:
          return 0;
      }
    });
  }, [filteredComponents, filters.sortBy]);

  // Paginate components
  const paginatedComponents = React.useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedComponents.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedComponents, currentPage]);

  const totalPages = Math.ceil(sortedComponents.length / ITEMS_PER_PAGE);

  return (
    <div className={className}>
      <div className="mb-6 space-y-4">
        <Input
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-4">
          <Select
            value={filters.sortBy}
            onChange={(e) => setFilters({ sortBy: e.target.value as any })}
            className="w-40"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="trending">Trending</option>
          </Select>
          <Select
            value={filters.framework[0] || ''}
            onChange={(e) => setFilters({ framework: e.target.value ? [e.target.value] : [] })}
            className="w-40"
          >
            <option value="">All Frameworks</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </Select>
          <Select
            value={filters.category[0] || ''}
            onChange={(e) => setFilters({ category: e.target.value ? [e.target.value] : [] })}
            className="w-40"
          >
            <option value="">All Categories</option>
            <option value="buttons">Buttons</option>
            <option value="cards">Cards</option>
            <option value="forms">Forms</option>
            <option value="navigation">Navigation</option>
          </Select>
        </div>
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {paginatedComponents.map((component) => (
          <ComponentCard key={component.id} {...component} />
        ))}
      </motion.div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            page={currentPage}
            pageCount={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
} 