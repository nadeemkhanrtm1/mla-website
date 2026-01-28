import { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Updates",
    description: "Stay informed about the latest news, development works, constituency initiatives, public meetings, and important announcements from Khanakul constituency by Shri Susanta Ghosh.",
    keywords: [
        "Khanakul news",
        "MLA updates",
        "constituency news",
        "development updates",
        "public announcements",
        "West Bengal news",
        "BJP news",
        "Susanta Ghosh news",
    ],
    openGraph: {
        title: "News & Updates | Shri Susanta Ghosh - MLA Khanakul",
        description: "Stay informed about the latest developments, initiatives, and announcements from Khanakul constituency.",
    },
};

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
