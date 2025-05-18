import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FiMessageSquare, FiThumbsUp, FiFlag } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/toast';

export interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
  likes: number;
  replies?: Comment[];
}

interface CommentThreadProps {
  comments: Comment[];
  onAddComment: (content: string, parentId?: string) => void;
  className?: string;
}

export function CommentThread({ comments, onAddComment, className }: CommentThreadProps) {
  const [newComment, setNewComment] = React.useState('');
  const [replyingTo, setReplyingTo] = React.useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    onAddComment(newComment, replyingTo || undefined);
    setNewComment('');
    setReplyingTo(null);
    toast.success('Comment added successfully');
  };

  const handleLike = (commentId: string) => {
    toast.success('Like functionality coming soon');
  };

  const handleReport = (commentId: string) => {
    toast.error('Report functionality coming soon');
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <motion.div
      key={comment.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn('space-y-4', isReply && 'ml-8')}
    >
      <Card>
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <Avatar
              src={comment.author.avatar}
              name={comment.author.name}
              size={32}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(comment.id)}
                  >
                    <FiThumbsUp className="h-4 w-4 mr-1" />
                    {comment.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleReport(comment.id)}
                  >
                    <FiFlag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="mt-2 text-sm">{comment.content}</p>
              {!isReply && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => setReplyingTo(comment.id)}
                >
                  <FiMessageSquare className="h-4 w-4 mr-1" />
                  Reply
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      {comment.replies?.map((reply) => renderComment(reply, true))}
    </motion.div>
  );

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          placeholder={replyingTo ? "Write a reply..." : "Write a comment..."}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2"
        />
        <div className="flex justify-end gap-2">
          {replyingTo && (
            <Button
              variant="ghost"
              onClick={() => setReplyingTo(null)}
            >
              Cancel
            </Button>
          )}
          <Button type="submit">
            {replyingTo ? "Reply" : "Comment"}
          </Button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => renderComment(comment))}
      </div>
    </div>
  );
} 