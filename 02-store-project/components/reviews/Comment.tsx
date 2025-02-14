'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

function Comment({ comment }: { comment: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const longComment = comment.length > 130;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="capitalize text-muted-foreground pl-0"
          onClick={toggleExpanded}
        >
          {isExpanded ? 'show less' : 'show more'}
        </Button>
      )}
    </div>
  );
}

export default Comment;
