export interface GalleryAlbum {
  id: string;
  image: string;
  text: string;
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    image: "https://picsum.photos/seed/1/800/600?grayscale",
    text: "Summer Camp 2023",
    id: "summer-2023",
  },
  {
    image: "https://picsum.photos/seed/2/800/600?grayscale",
    text: "Winter Skiing",
    id: "winter-skiing",
  },
  {
    image: "https://picsum.photos/seed/3/800/600?grayscale",
    text: "Charity Run",
    id: "charity-run",
  },
  {
    image: "https://picsum.photos/seed/4/800/600?grayscale",
    text: "Forest Adventure",
    id: "forest-adventure",
  },
  {
    image: "https://picsum.photos/seed/5/800/600?grayscale",
    text: "City Trip",
    id: "city-trip",
  },
];
