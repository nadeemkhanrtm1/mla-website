import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Shri Susanta Ghosh, MLA Khanakul. For suggestions, grievances, or public matters, feel free to connect. We are here to serve you.",
    keywords: [
        "contact MLA Khanakul",
        "Susanta Ghosh contact",
        "MLA office contact",
        "grievance redressal",
        "public queries",
        "constituency office",
    ],
    openGraph: {
        title: "Contact Shri Susanta Ghosh | MLA Khanakul",
        description: "Get in touch with Shri Susanta Ghosh for suggestions, grievances, or public matters.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
