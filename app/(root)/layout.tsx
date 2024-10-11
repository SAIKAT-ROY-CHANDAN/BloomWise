import LeftSidebar from "@/components/shared/LeftSidebar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="flex bg-gray-50">
            <LeftSidebar />
            {children}
        </section>
    );
}
