const Shimmer = () => {
  return (
    <div className="flex border-gray-200 pb-8 border-b-2">
      {/* Image Skeleton */}
      <div className="w-1/3 rounded-lg shrink-0 overflow-hidden mt-8 bg-gray-300 animate-pulse h-48"></div>

      {/* Content Skeleton */}
      <div className="ml-5 mr-5 m-auto w-2/3">
        {/* Location Skeleton */}
        <div className="flex items-center mb-2">
          <div className="size-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="ml-2 h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="ml-3 h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 mt-2 animate-pulse"></div>

        {/* Dates Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2.5 animate-pulse"></div>

        {/* Text Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
