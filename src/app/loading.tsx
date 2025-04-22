const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Loading...
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Please wait while we load your content
        </p>
      </div>
    </div>
  );
};

export default Loading;
