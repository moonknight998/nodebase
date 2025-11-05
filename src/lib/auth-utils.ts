import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

/**
 * Require the user to be authorized (i.e. logged in)
 *
 * @throws If the user is not logged in, redirect to the login page
 * @returns The user session
 */
export const requireAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        // If the user is not logged in, redirect to the login page
        await redirect("/login");
    }

    return session;
};

/**
 * Require user to be unauthorized (i.e. not logged in)
 *
 * @throws If the user is logged in, redirect to the homepage
 */
export const requireUnAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session) {
        // If the user is logged in, redirect to the homepage
        await redirect("/");
    }
};
