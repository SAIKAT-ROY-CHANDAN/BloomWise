import { ReduxProvider } from "@/components/ReduxProvider/ReduxProvider";
import LeftSidebar from "@/components/shared/LeftSidebar";
import MobileLeftSidebar from "@/components/shared/MobileLeftSidebar";
import RightNavbar from "@/components/shared/RightSidebar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReduxProvider>
            <section className="flex bg-gray-50 overflow-hidden h-screen">
                <LeftSidebar />
                <MobileLeftSidebar />
                <div className="flex flex-col flex-1">
                    <div className="flex flex-1 overflow-y-auto">
                        {children}
                    </div>
                </div>
                    <RightNavbar />
            </section>
        </ReduxProvider>

    );
}
