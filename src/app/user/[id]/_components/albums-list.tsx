interface Album {
  userId: number;
  id: number;
  title: string;
}

const getAlbums = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const albums = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`
  );
  return albums.json();
};

const AlbumsList = async ({ id }: { id: number }) => {
  const albums = await getAlbums(id);

  return (
    <div className="space-y-4">
      {albums.map((album: Album) => (
        <div key={album.id} className="border-b pb-4 last:border-b-0">
          <h3 className="font-medium text-lg mb-2">{album.title}</h3>
          <p className="text-sm text-gray-500">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
