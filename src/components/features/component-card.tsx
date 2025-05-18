import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { FiStar, FiDownload, FiEye } from 'react-icons/fi';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ComponentCardProps {
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
  className?: string;
}

export function ComponentCard({
  id,
  title,
  description,
  author,
  framework,
  category,
  stats,
  image,
  className,
}: ComponentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/components/${id}`}>
        <Card className={cn('group cursor-pointer transition-all hover:shadow-lg', className)}>
          {image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
          )}
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="line-clamp-1">{title}</CardTitle>
              <Badge variant="secondary">{framework}</Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Avatar
                src={author.avatar}
                name={author.name}
                size={24}
              />
              <span className="text-sm text-muted-foreground">{author.name}</span>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
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
            <Badge variant="outline">{category}</Badge>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
} 