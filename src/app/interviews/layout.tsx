import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interviews & Articles",
    description: "Watch video interviews, read press coverage, and explore articles featuring Shri Susanta Ghosh, MLA Khanakul. Stay updated with media appearances and public statements.",
    keywords: [
        "Susanta Ghosh interviews",
        "MLA interviews",
        "press coverage",
        "news articles",
        "media appearances",
        "political interviews",
        "Khanakul MLA media",
    ],
    openGraph: {
        title: "Interviews & Articles | Shri Susanta Ghosh - MLA Khanakul",
        description: "Watch interviews and read articles featuring Shri Susanta Ghosh, MLA from Khanakul constituency.",
    },
};

export default function InterviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
