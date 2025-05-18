import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiGithub, FiTwitter, FiGlobe, FiEdit2 } from 'react-icons/fi';
import { cn } from '@/lib/utils';

export interface Profile {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  location?: string;
  joinedAt: string;
  stats: {
    components: number;
    followers: number;
    following: number;
  };
  social?: {
    github?: string;
    twitter?: string;
    website?: string;
  };
}

interface ProfileCardProps {
  profile: Profile;
  isOwnProfile?: boolean;
  onEdit?: () => void;
  className?: string;
}

export function ProfileCard({ profile, isOwnProfile, onEdit, className }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <Card>
        <CardHeader className="relative">
          <div className="absolute -top-16 left-6">
            <Avatar
              src={profile.avatar}
              name={profile.name}
              size={96}
              className="border-4 border-background"
            />
          </div>
          {isOwnProfile && (
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4"
              onClick={onEdit}
            >
              <FiEdit2 className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </CardHeader>
        <CardContent className="pt-20">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-muted-foreground">@{profile.username}</p>
            </div>

            {profile.bio && (
              <p className="text-sm">{profile.bio}</p>
            )}

            {profile.location && (
              <p className="text-sm text-muted-foreground">{profile.location}</p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Joined {new Date(profile.joinedAt).toLocaleDateString()}</span>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <span className="font-semibold">{profile.stats.components}</span>
                <span className="text-muted-foreground ml-1">Components</span>
              </div>
              <div>
                <span className="font-semibold">{profile.stats.followers}</span>
                <span className="text-muted-foreground ml-1">Followers</span>
              </div>
              <div>
                <span className="font-semibold">{profile.stats.following}</span>
                <span className="text-muted-foreground ml-1">Following</span>
              </div>
            </div>

            {profile.social && (
              <div className="flex items-center gap-4">
                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                )}
                {profile.social.twitter && (
                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FiTwitter className="h-5 w-5" />
                  </a>
                )}
                {profile.social.website && (
                  <a
                    href={profile.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FiGlobe className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 