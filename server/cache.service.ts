// @ts-nocheck
import NodeCache from "node-cache";
const cache = new NodeCache();

export class CacheService {
   private defaultTtl = 600;

   /**
    * Store data in cache
    * @param key The key used to store the data
    * @param value Data to be stored
    * @param ttl Time after the cache key expires
    */
   public set<T>(key: string, value: T, ttl: number) {
      return cache.set(key, value, ttl || this.defaultTtl);
   }

   /**
    * Retrieve data from cache
    * @param key The key used to retrieve the data
    */
   public get(key: string) {
      return cache.get(key);
   }

   /**
    * Check if an item exists in cache
    * @param key The key used to check if data is cached
    * @returns A boolean whether the cache has data stored using the provided key
    */
   public has(key: string) {
      return cache.has(key);
   }

   /**
    * Remove specific data from cache
    * @param key The key that will be deleted from the cache
    * @returns A boolean depending on whether the operation failed or succeeded
    */
   public delete(key: string) {
      return cache.del(key);
   }

   /**
    * Clear the entire cache
    */
   public flush() {
      cache.flushAll();
   }
}
