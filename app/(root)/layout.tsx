import LeftSidebar from "@/components/shared/LeftSidebar";
import RightNavbar from "@/components/shared/RightSidebar";
import TopNavbar from "@/components/shared/TopNavbar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="flex bg-gray-50 overflow-hidden h-screen">
            <LeftSidebar />
            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="flex flex-1">
                    {children}
                </div>
            </div>
            <RightNavbar />
        </section>

    );
}
