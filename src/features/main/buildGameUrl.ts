export function buildGameUrl(lang: string) {
    const base = process.env.APP_GAME_BASE_URL;
    const gameId = process.env.APP_GAME_ID;
    const partnerKey = process.env.APP_PARTNER_KEY;
    const lobbyUrl = process.env.APP_LOBBY_URL;

    if (!base || !gameId || !partnerKey || !lobbyUrl) {
        // fail fast so you don't silently generate "undefined" URLs
        throw new Error("Missing required APP_* env variables for game URL");
    }

    const params = new URLSearchParams({
        gameId,
        channel: "desktop",
        partnerKey,
        lobbyUrl, // URLSearchParams will encode it
        mode: "demo",
        language: lang
    });

    return `${base}/v0/casino/games/launch?${params.toString()}`;
}
