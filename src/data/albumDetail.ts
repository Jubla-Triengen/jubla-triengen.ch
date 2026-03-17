export interface AlbumPhoto {
  id: string;
  img: string;
  url: string;
  height: number;
}

export interface AlbumDetailContent {
  notFoundTitle: string;
  backLabel: string;
}

export const albumDetailContent: AlbumDetailContent = {
  notFoundTitle: "Album not found",
  backLabel: "Back to Gallery",
};

export function getAlbumPhotos(albumId: string): AlbumPhoto[] {
  return Array.from({ length: 12 }).map((_, i) => ({
    id: `${albumId}-${i}`,
    img: `https://picsum.photos/seed/${albumId}${i}/600/${
      Math.floor(Math.random() * 300) + 300
    }?grayscale`,
    url: `https://picsum.photos/seed/${albumId}${i}/1200/800`,
    height: Math.floor(Math.random() * 300) + 300,
  }));
}
