import { Skeleton } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react/card";
import { SkeletonText } from "./ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="300px" />
      <Card.Body display="inline-block">
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default MovieCardSkeleton;
