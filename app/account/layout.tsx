import { IRootLayoutProps } from "@/constant/types/layout";
import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }: IRootLayoutProps) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
