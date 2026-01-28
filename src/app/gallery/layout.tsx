import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Explore the photo and video gallery of Shri Susanta Ghosh's public events, community interactions, and development initiatives in Khanakul constituency.",
    keywords: [
        "MLA gallery",
        "Khanakul events",
        "public meetings",
        "community interaction",
        "development initiatives",
        "photo gallery",
        "video gallery",
    ],
    openGraph: {
        title: "Gallery | Shri Susanta Ghosh - MLA Khanakul",
        description: "Explore photos and videos from public events and community interactions in Khanakul.",
    },
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
