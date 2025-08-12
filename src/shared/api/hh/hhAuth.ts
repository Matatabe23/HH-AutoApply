import axios from "axios";
import type { HHAccessToken } from "@/shared";

const CLIENT_ID = import.meta.env.VITE_HH_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_HH_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_HH_REDIRECT_URI;

export async function getAuthUrl(): Promise<string> {
    return `https://hh.ru/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
}

export async function getAccessToken(code: string): Promise<HHAccessToken> {
    const res = await axios.post(
        "https://hh.ru/oauth/token",
        new URLSearchParams({
            grant_type: "authorization_code",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            code,
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return res.data;
}

export async function refreshAccessToken(refreshToken: string): Promise<HHAccessToken> {
    const res = await axios.post(
        "https://hh.ru/oauth/token",
        new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return res.data;
}
