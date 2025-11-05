import { AuthLogout } from "@/features/auth/components/auth-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthLogout>{children}</AuthLogout>
    );
}

export default Layout