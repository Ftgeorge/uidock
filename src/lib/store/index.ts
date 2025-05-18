import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

interface ComponentState {
  selectedComponent: string | null;
  setSelectedComponent: (id: string | null) => void;
  recentComponents: string[];
  addRecentComponent: (id: string) => void;
  clearRecentComponents: () => void;
}

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: {
    framework: string[];
    category: string[];
    sortBy: 'popular' | 'newest' | 'trending';
  };
  setFilters: (filters: Partial<SearchState['filters']>) => void;
  clearFilters: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
}));

export const useComponentStore = create<ComponentState>()(
  persist(
    (set) => ({
      selectedComponent: null,
      setSelectedComponent: (id) => set({ selectedComponent: id }),
      recentComponents: [],
      addRecentComponent: (id) =>
        set((state) => ({
          recentComponents: [id, ...state.recentComponents.filter((c) => c !== id)].slice(0, 5),
        })),
      clearRecentComponents: () => set({ recentComponents: [] }),
    }),
    {
      name: 'component-storage',
    }
  )
);

export const useSearchStore = create<SearchState>()((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  filters: {
    framework: [],
    category: [],
    sortBy: 'popular',
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  clearFilters: () =>
    set({
      filters: {
        framework: [],
        category: [],
        sortBy: 'popular',
      },
    }),
})); 