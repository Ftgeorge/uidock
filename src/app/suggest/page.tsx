import * as React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { SuggestionBox } from '@/components/features/suggestion-box';

export default function SuggestPage() {
  const handleSuggestion = async (data: { title: string; message: string; email?: string }) => {
    // TODO: Implement suggestion submission logic
    console.log('Suggestion submitted:', data);
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Suggestion Box</h1>
          <SuggestionBox onSubmit={handleSuggestion} />
        </div>
      </div>
    </MainLayout>
  );
} 