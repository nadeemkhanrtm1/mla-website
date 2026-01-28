import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Shri Susanta Ghosh, MLA from Khanakul constituency and State Secretary of BJP West Bengal. Discover his journey, vision, mission, and commitment to serving the people with transparency and integrity.",
    keywords: [
        "Susanta Ghosh biography",
        "Khanakul MLA about",
        "BJP leader West Bengal",
        "political journey",
        "vision and mission",
        "public service",
        "grassroots leadership",
    ],
    openGraph: {
        title: "About Shri Susanta Ghosh | MLA Khanakul",
        description: "Learn about Shri Susanta Ghosh's journey, vision, and commitment to serving Khanakul constituency.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
