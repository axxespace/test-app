export function buildGameUrl(lang: string) {
  const base = process.env.APP_GAME_BASE_URL;
  const gameId = process.env.APP_GAME_ID;
  const partnerKey = process.env.APP_PARTNER_KEY;
  const lobbyUrl = process.env.APP_LOBBY_URL;

  if (!base || !gameId || !partnerKey || !lobbyUrl) {
    throw new Error("Missing required APP_* env variables for game-modal URL");
  }

  const params = new URLSearchParams({
    gameId,
    channel: "desktop",
    partnerKey,
    lobbyUrl,
    mode: "demo",
    language: lang
  });

  return `${base}/v0/casino/games/launch?${params.toString()}`;
}
