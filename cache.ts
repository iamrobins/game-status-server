export default class Cache {
  private static instance: Cache;
  private cachedGames = [];

  private constructor() {}

  public static getInstance(): Cache {
    if (!Cache.instance) Cache.instance = new Cache();

    return Cache.instance;
  }

  public setCachedGames(games: any) {
    Cache.instance.cachedGames = games;
  }

  public getCachedGames() {
    return Cache.instance.cachedGames;
  }
}
