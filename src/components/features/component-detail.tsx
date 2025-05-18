import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FiStar, FiDownload, FiEye, FiCode, FiMessageSquare, FiFlag } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/toast';

export interface ComponentDetailProps {
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
  code: string;
  language: string;
  image?: string;
  className?: string;
}

export function ComponentDetail({
  id,
  title,
  description,
  author,
  framework,
  category,
  stats,
  code,
  language,
  image,
  className,
}: ComponentDetailProps) {
  const [isStarred, setIsStarred] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  const handleStar = () => {
    setIsStarred(!isStarred);
    toast.success(isStarred ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleReport = () => {
    toast.error('Report functionality coming soon');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <Card>
        {image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{framework}</Badge>
              <Badge variant="outline">{category}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex items-center gap-2">
            <Avatar
              src={author.avatar}
              name={author.name}
              size={32}
            />
            <span className="text-sm text-muted-foreground">By {author.name}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <FiStar className="h-4 w-4" />
                <span>{stats.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiDownload className="h-4 w-4" />
                <span>{stats.downloads}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiEye className="h-4 w-4" />
                <span>{stats.views}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleStar}
                className={cn(isStarred && 'text-yellow-500')}
              >
                <FiStar className="h-4 w-4 mr-2" />
                {isStarred ? 'Starred' : 'Star'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCode(!showCode)}
              >
                <FiCode className="h-4 w-4 mr-2" />
                {showCode ? 'Hide Code' : 'Show Code'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleReport}
              >
                <FiFlag className="h-4 w-4 mr-2" />
                Report
              </Button>
            </div>
          </div>

          {showCode && (
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-2"
                onClick={handleCopyCode}
              >
                Copy
              </Button>
              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                className="rounded-lg"
              >
                {code}
              </SyntaxHighlighter>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <div className="space-y-4">
              {/* TODO: Add comments section */}
              <p className="text-muted-foreground">Comments coming soon...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 