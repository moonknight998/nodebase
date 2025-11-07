"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authClient.signOut(); // Đăng xuất
      router.push("/login"); // Chuyển hướng về trang login
    } catch (error) {
      console.error("Đăng xuất thất bại:", error);
    }
  };

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
};
