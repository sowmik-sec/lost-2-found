
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FoundItemCategory
 * 
 */
export type FoundItemCategory = $Result.DefaultSelection<Prisma.$FoundItemCategoryPayload>
/**
 * Model FoundItem
 * 
 */
export type FoundItem = $Result.DefaultSelection<Prisma.$FoundItemPayload>
/**
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foundItemCategory`: Exposes CRUD operations for the **FoundItemCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoundItemCategories
    * const foundItemCategories = await prisma.foundItemCategory.findMany()
    * ```
    */
  get foundItemCategory(): Prisma.FoundItemCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foundItem`: Exposes CRUD operations for the **FoundItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoundItems
    * const foundItems = await prisma.foundItem.findMany()
    * ```
    */
  get foundItem(): Prisma.FoundItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    FoundItemCategory: 'FoundItemCategory',
    FoundItem: 'FoundItem',
    Claim: 'Claim',
    Profile: 'Profile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "foundItemCategory" | "foundItem" | "claim" | "profile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FoundItemCategory: {
        payload: Prisma.$FoundItemCategoryPayload<ExtArgs>
        fields: Prisma.FoundItemCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoundItemCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoundItemCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>
          }
          findFirst: {
            args: Prisma.FoundItemCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoundItemCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>
          }
          findMany: {
            args: Prisma.FoundItemCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>[]
          }
          create: {
            args: Prisma.FoundItemCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>
          }
          createMany: {
            args: Prisma.FoundItemCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoundItemCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>[]
          }
          delete: {
            args: Prisma.FoundItemCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>
          }
          update: {
            args: Prisma.FoundItemCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FoundItemCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoundItemCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoundItemCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>[]
          }
          upsert: {
            args: Prisma.FoundItemCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemCategoryPayload>
          }
          aggregate: {
            args: Prisma.FoundItemCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoundItemCategory>
          }
          groupBy: {
            args: Prisma.FoundItemCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoundItemCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoundItemCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FoundItemCategoryCountAggregateOutputType> | number
          }
        }
      }
      FoundItem: {
        payload: Prisma.$FoundItemPayload<ExtArgs>
        fields: Prisma.FoundItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoundItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoundItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          findFirst: {
            args: Prisma.FoundItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoundItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          findMany: {
            args: Prisma.FoundItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>[]
          }
          create: {
            args: Prisma.FoundItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          createMany: {
            args: Prisma.FoundItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoundItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>[]
          }
          delete: {
            args: Prisma.FoundItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          update: {
            args: Prisma.FoundItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          deleteMany: {
            args: Prisma.FoundItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoundItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoundItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>[]
          }
          upsert: {
            args: Prisma.FoundItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          aggregate: {
            args: Prisma.FoundItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoundItem>
          }
          groupBy: {
            args: Prisma.FoundItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoundItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoundItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoundItemCountAggregateOutputType> | number
          }
        }
      }
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    foundItemCategory?: FoundItemCategoryOmit
    foundItem?: FoundItemOmit
    claim?: ClaimOmit
    profile?: ProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    foundItems: number
    claims: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foundItems?: boolean | UserCountOutputTypeCountFoundItemsArgs
    claims?: boolean | UserCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoundItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoundItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Count Type FoundItemCategoryCountOutputType
   */

  export type FoundItemCategoryCountOutputType = {
    foundItems: number
  }

  export type FoundItemCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foundItems?: boolean | FoundItemCategoryCountOutputTypeCountFoundItemsArgs
  }

  // Custom InputTypes
  /**
   * FoundItemCategoryCountOutputType without action
   */
  export type FoundItemCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategoryCountOutputType
     */
    select?: FoundItemCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoundItemCategoryCountOutputType without action
   */
  export type FoundItemCategoryCountOutputTypeCountFoundItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoundItemWhereInput
  }


  /**
   * Count Type FoundItemCountOutputType
   */

  export type FoundItemCountOutputType = {
    claims: number
  }

  export type FoundItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | FoundItemCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * FoundItemCountOutputType without action
   */
  export type FoundItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCountOutputType
     */
    select?: FoundItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoundItemCountOutputType without action
   */
  export type FoundItemCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foundItems?: boolean | User$foundItemsArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foundItems?: boolean | User$foundItemsArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      foundItems: Prisma.$FoundItemPayload<ExtArgs>[]
      claims: Prisma.$ClaimPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foundItems<T extends User$foundItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$foundItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claims<T extends User$claimsArgs<ExtArgs> = {}>(args?: Subset<T, User$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.foundItems
   */
  export type User$foundItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    where?: FoundItemWhereInput
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    cursor?: FoundItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * User.claims
   */
  export type User$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FoundItemCategory
   */

  export type AggregateFoundItemCategory = {
    _count: FoundItemCategoryCountAggregateOutputType | null
    _min: FoundItemCategoryMinAggregateOutputType | null
    _max: FoundItemCategoryMaxAggregateOutputType | null
  }

  export type FoundItemCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoundItemCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoundItemCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoundItemCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoundItemCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoundItemCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoundItemCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoundItemCategory to aggregate.
     */
    where?: FoundItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItemCategories to fetch.
     */
    orderBy?: FoundItemCategoryOrderByWithRelationInput | FoundItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoundItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoundItemCategories
    **/
    _count?: true | FoundItemCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoundItemCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoundItemCategoryMaxAggregateInputType
  }

  export type GetFoundItemCategoryAggregateType<T extends FoundItemCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFoundItemCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoundItemCategory[P]>
      : GetScalarType<T[P], AggregateFoundItemCategory[P]>
  }




  export type FoundItemCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoundItemCategoryWhereInput
    orderBy?: FoundItemCategoryOrderByWithAggregationInput | FoundItemCategoryOrderByWithAggregationInput[]
    by: FoundItemCategoryScalarFieldEnum[] | FoundItemCategoryScalarFieldEnum
    having?: FoundItemCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoundItemCategoryCountAggregateInputType | true
    _min?: FoundItemCategoryMinAggregateInputType
    _max?: FoundItemCategoryMaxAggregateInputType
  }

  export type FoundItemCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: FoundItemCategoryCountAggregateOutputType | null
    _min: FoundItemCategoryMinAggregateOutputType | null
    _max: FoundItemCategoryMaxAggregateOutputType | null
  }

  type GetFoundItemCategoryGroupByPayload<T extends FoundItemCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoundItemCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoundItemCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoundItemCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FoundItemCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FoundItemCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foundItems?: boolean | FoundItemCategory$foundItemsArgs<ExtArgs>
    _count?: boolean | FoundItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foundItemCategory"]>

  export type FoundItemCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foundItemCategory"]>

  export type FoundItemCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foundItemCategory"]>

  export type FoundItemCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoundItemCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["foundItemCategory"]>
  export type FoundItemCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foundItems?: boolean | FoundItemCategory$foundItemsArgs<ExtArgs>
    _count?: boolean | FoundItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoundItemCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoundItemCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoundItemCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoundItemCategory"
    objects: {
      foundItems: Prisma.$FoundItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foundItemCategory"]>
    composites: {}
  }

  type FoundItemCategoryGetPayload<S extends boolean | null | undefined | FoundItemCategoryDefaultArgs> = $Result.GetResult<Prisma.$FoundItemCategoryPayload, S>

  type FoundItemCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoundItemCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoundItemCategoryCountAggregateInputType | true
    }

  export interface FoundItemCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoundItemCategory'], meta: { name: 'FoundItemCategory' } }
    /**
     * Find zero or one FoundItemCategory that matches the filter.
     * @param {FoundItemCategoryFindUniqueArgs} args - Arguments to find a FoundItemCategory
     * @example
     * // Get one FoundItemCategory
     * const foundItemCategory = await prisma.foundItemCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoundItemCategoryFindUniqueArgs>(args: SelectSubset<T, FoundItemCategoryFindUniqueArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoundItemCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoundItemCategoryFindUniqueOrThrowArgs} args - Arguments to find a FoundItemCategory
     * @example
     * // Get one FoundItemCategory
     * const foundItemCategory = await prisma.foundItemCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoundItemCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FoundItemCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoundItemCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCategoryFindFirstArgs} args - Arguments to find a FoundItemCategory
     * @example
     * // Get one FoundItemCategory
     * const foundItemCategory = await prisma.foundItemCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoundItemCategoryFindFirstArgs>(args?: SelectSubset<T, FoundItemCategoryFindFirstArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoundItemCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCategoryFindFirstOrThrowArgs} args - Arguments to find a FoundItemCategory
     * @example
     * // Get one FoundItemCategory
     * const foundItemCategory = await prisma.foundItemCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoundItemCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FoundItemCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoundItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoundItemCategories
     * const foundItemCategories = await prisma.foundItemCategory.findMany()
     * 
     * // Get first 10 FoundItemCategories
     * const foundItemCategories = await prisma.foundItemCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foundItemCategoryWithIdOnly = await prisma.foundItemCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoundItemCategoryFindManyArgs>(args?: SelectSubset<T, FoundItemCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoundItemCategory.
     * @param {FoundItemCategoryCreateArgs} args - Arguments to create a FoundItemCategory.
     * @example
     * // Create one FoundItemCategory
     * const FoundItemCategory = await prisma.foundItemCategory.create({
     *   data: {
     *     // ... data to create a FoundItemCategory
     *   }
     * })
     * 
     */
    create<T extends FoundItemCategoryCreateArgs>(args: SelectSubset<T, FoundItemCategoryCreateArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoundItemCategories.
     * @param {FoundItemCategoryCreateManyArgs} args - Arguments to create many FoundItemCategories.
     * @example
     * // Create many FoundItemCategories
     * const foundItemCategory = await prisma.foundItemCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoundItemCategoryCreateManyArgs>(args?: SelectSubset<T, FoundItemCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoundItemCategories and returns the data saved in the database.
     * @param {FoundItemCategoryCreateManyAndReturnArgs} args - Arguments to create many FoundItemCategories.
     * @example
     * // Create many FoundItemCategories
     * const foundItemCategory = await prisma.foundItemCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoundItemCategories and only return the `id`
     * const foundItemCategoryWithIdOnly = await prisma.foundItemCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoundItemCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FoundItemCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoundItemCategory.
     * @param {FoundItemCategoryDeleteArgs} args - Arguments to delete one FoundItemCategory.
     * @example
     * // Delete one FoundItemCategory
     * const FoundItemCategory = await prisma.foundItemCategory.delete({
     *   where: {
     *     // ... filter to delete one FoundItemCategory
     *   }
     * })
     * 
     */
    delete<T extends FoundItemCategoryDeleteArgs>(args: SelectSubset<T, FoundItemCategoryDeleteArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoundItemCategory.
     * @param {FoundItemCategoryUpdateArgs} args - Arguments to update one FoundItemCategory.
     * @example
     * // Update one FoundItemCategory
     * const foundItemCategory = await prisma.foundItemCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoundItemCategoryUpdateArgs>(args: SelectSubset<T, FoundItemCategoryUpdateArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoundItemCategories.
     * @param {FoundItemCategoryDeleteManyArgs} args - Arguments to filter FoundItemCategories to delete.
     * @example
     * // Delete a few FoundItemCategories
     * const { count } = await prisma.foundItemCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoundItemCategoryDeleteManyArgs>(args?: SelectSubset<T, FoundItemCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoundItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoundItemCategories
     * const foundItemCategory = await prisma.foundItemCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoundItemCategoryUpdateManyArgs>(args: SelectSubset<T, FoundItemCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoundItemCategories and returns the data updated in the database.
     * @param {FoundItemCategoryUpdateManyAndReturnArgs} args - Arguments to update many FoundItemCategories.
     * @example
     * // Update many FoundItemCategories
     * const foundItemCategory = await prisma.foundItemCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoundItemCategories and only return the `id`
     * const foundItemCategoryWithIdOnly = await prisma.foundItemCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoundItemCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FoundItemCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoundItemCategory.
     * @param {FoundItemCategoryUpsertArgs} args - Arguments to update or create a FoundItemCategory.
     * @example
     * // Update or create a FoundItemCategory
     * const foundItemCategory = await prisma.foundItemCategory.upsert({
     *   create: {
     *     // ... data to create a FoundItemCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoundItemCategory we want to update
     *   }
     * })
     */
    upsert<T extends FoundItemCategoryUpsertArgs>(args: SelectSubset<T, FoundItemCategoryUpsertArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoundItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCategoryCountArgs} args - Arguments to filter FoundItemCategories to count.
     * @example
     * // Count the number of FoundItemCategories
     * const count = await prisma.foundItemCategory.count({
     *   where: {
     *     // ... the filter for the FoundItemCategories we want to count
     *   }
     * })
    **/
    count<T extends FoundItemCategoryCountArgs>(
      args?: Subset<T, FoundItemCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoundItemCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoundItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoundItemCategoryAggregateArgs>(args: Subset<T, FoundItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetFoundItemCategoryAggregateType<T>>

    /**
     * Group by FoundItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoundItemCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoundItemCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FoundItemCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoundItemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoundItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoundItemCategory model
   */
  readonly fields: FoundItemCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoundItemCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoundItemCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foundItems<T extends FoundItemCategory$foundItemsArgs<ExtArgs> = {}>(args?: Subset<T, FoundItemCategory$foundItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoundItemCategory model
   */
  interface FoundItemCategoryFieldRefs {
    readonly id: FieldRef<"FoundItemCategory", 'String'>
    readonly name: FieldRef<"FoundItemCategory", 'String'>
    readonly createdAt: FieldRef<"FoundItemCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"FoundItemCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoundItemCategory findUnique
   */
  export type FoundItemCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoundItemCategory to fetch.
     */
    where: FoundItemCategoryWhereUniqueInput
  }

  /**
   * FoundItemCategory findUniqueOrThrow
   */
  export type FoundItemCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoundItemCategory to fetch.
     */
    where: FoundItemCategoryWhereUniqueInput
  }

  /**
   * FoundItemCategory findFirst
   */
  export type FoundItemCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoundItemCategory to fetch.
     */
    where?: FoundItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItemCategories to fetch.
     */
    orderBy?: FoundItemCategoryOrderByWithRelationInput | FoundItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoundItemCategories.
     */
    cursor?: FoundItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoundItemCategories.
     */
    distinct?: FoundItemCategoryScalarFieldEnum | FoundItemCategoryScalarFieldEnum[]
  }

  /**
   * FoundItemCategory findFirstOrThrow
   */
  export type FoundItemCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoundItemCategory to fetch.
     */
    where?: FoundItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItemCategories to fetch.
     */
    orderBy?: FoundItemCategoryOrderByWithRelationInput | FoundItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoundItemCategories.
     */
    cursor?: FoundItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoundItemCategories.
     */
    distinct?: FoundItemCategoryScalarFieldEnum | FoundItemCategoryScalarFieldEnum[]
  }

  /**
   * FoundItemCategory findMany
   */
  export type FoundItemCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoundItemCategories to fetch.
     */
    where?: FoundItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItemCategories to fetch.
     */
    orderBy?: FoundItemCategoryOrderByWithRelationInput | FoundItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoundItemCategories.
     */
    cursor?: FoundItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItemCategories.
     */
    skip?: number
    distinct?: FoundItemCategoryScalarFieldEnum | FoundItemCategoryScalarFieldEnum[]
  }

  /**
   * FoundItemCategory create
   */
  export type FoundItemCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FoundItemCategory.
     */
    data: XOR<FoundItemCategoryCreateInput, FoundItemCategoryUncheckedCreateInput>
  }

  /**
   * FoundItemCategory createMany
   */
  export type FoundItemCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoundItemCategories.
     */
    data: FoundItemCategoryCreateManyInput | FoundItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoundItemCategory createManyAndReturn
   */
  export type FoundItemCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many FoundItemCategories.
     */
    data: FoundItemCategoryCreateManyInput | FoundItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoundItemCategory update
   */
  export type FoundItemCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FoundItemCategory.
     */
    data: XOR<FoundItemCategoryUpdateInput, FoundItemCategoryUncheckedUpdateInput>
    /**
     * Choose, which FoundItemCategory to update.
     */
    where: FoundItemCategoryWhereUniqueInput
  }

  /**
   * FoundItemCategory updateMany
   */
  export type FoundItemCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoundItemCategories.
     */
    data: XOR<FoundItemCategoryUpdateManyMutationInput, FoundItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoundItemCategories to update
     */
    where?: FoundItemCategoryWhereInput
    /**
     * Limit how many FoundItemCategories to update.
     */
    limit?: number
  }

  /**
   * FoundItemCategory updateManyAndReturn
   */
  export type FoundItemCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * The data used to update FoundItemCategories.
     */
    data: XOR<FoundItemCategoryUpdateManyMutationInput, FoundItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoundItemCategories to update
     */
    where?: FoundItemCategoryWhereInput
    /**
     * Limit how many FoundItemCategories to update.
     */
    limit?: number
  }

  /**
   * FoundItemCategory upsert
   */
  export type FoundItemCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FoundItemCategory to update in case it exists.
     */
    where: FoundItemCategoryWhereUniqueInput
    /**
     * In case the FoundItemCategory found by the `where` argument doesn't exist, create a new FoundItemCategory with this data.
     */
    create: XOR<FoundItemCategoryCreateInput, FoundItemCategoryUncheckedCreateInput>
    /**
     * In case the FoundItemCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoundItemCategoryUpdateInput, FoundItemCategoryUncheckedUpdateInput>
  }

  /**
   * FoundItemCategory delete
   */
  export type FoundItemCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
    /**
     * Filter which FoundItemCategory to delete.
     */
    where: FoundItemCategoryWhereUniqueInput
  }

  /**
   * FoundItemCategory deleteMany
   */
  export type FoundItemCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoundItemCategories to delete
     */
    where?: FoundItemCategoryWhereInput
    /**
     * Limit how many FoundItemCategories to delete.
     */
    limit?: number
  }

  /**
   * FoundItemCategory.foundItems
   */
  export type FoundItemCategory$foundItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    where?: FoundItemWhereInput
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    cursor?: FoundItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * FoundItemCategory without action
   */
  export type FoundItemCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCategory
     */
    select?: FoundItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItemCategory
     */
    omit?: FoundItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemCategoryInclude<ExtArgs> | null
  }


  /**
   * Model FoundItem
   */

  export type AggregateFoundItem = {
    _count: FoundItemCountAggregateOutputType | null
    _min: FoundItemMinAggregateOutputType | null
    _max: FoundItemMaxAggregateOutputType | null
  }

  export type FoundItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    foundItemName: string | null
    description: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoundItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    foundItemName: string | null
    description: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoundItemCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    foundItemName: number
    description: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoundItemMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    foundItemName?: true
    description?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoundItemMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    foundItemName?: true
    description?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoundItemCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    foundItemName?: true
    description?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoundItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoundItem to aggregate.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoundItems
    **/
    _count?: true | FoundItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoundItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoundItemMaxAggregateInputType
  }

  export type GetFoundItemAggregateType<T extends FoundItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoundItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoundItem[P]>
      : GetScalarType<T[P], AggregateFoundItem[P]>
  }




  export type FoundItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoundItemWhereInput
    orderBy?: FoundItemOrderByWithAggregationInput | FoundItemOrderByWithAggregationInput[]
    by: FoundItemScalarFieldEnum[] | FoundItemScalarFieldEnum
    having?: FoundItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoundItemCountAggregateInputType | true
    _min?: FoundItemMinAggregateInputType
    _max?: FoundItemMaxAggregateInputType
  }

  export type FoundItemGroupByOutputType = {
    id: string
    userId: string
    categoryId: string
    foundItemName: string
    description: string
    location: string
    createdAt: Date
    updatedAt: Date
    _count: FoundItemCountAggregateOutputType | null
    _min: FoundItemMinAggregateOutputType | null
    _max: FoundItemMaxAggregateOutputType | null
  }

  type GetFoundItemGroupByPayload<T extends FoundItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoundItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoundItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoundItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoundItemGroupByOutputType[P]>
        }
      >
    >


  export type FoundItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    foundItemName?: boolean
    description?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | FoundItemCategoryDefaultArgs<ExtArgs>
    claims?: boolean | FoundItem$claimsArgs<ExtArgs>
    _count?: boolean | FoundItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foundItem"]>

  export type FoundItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    foundItemName?: boolean
    description?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | FoundItemCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foundItem"]>

  export type FoundItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    foundItemName?: boolean
    description?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | FoundItemCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foundItem"]>

  export type FoundItemSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    foundItemName?: boolean
    description?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoundItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "foundItemName" | "description" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["foundItem"]>
  export type FoundItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | FoundItemCategoryDefaultArgs<ExtArgs>
    claims?: boolean | FoundItem$claimsArgs<ExtArgs>
    _count?: boolean | FoundItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoundItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | FoundItemCategoryDefaultArgs<ExtArgs>
  }
  export type FoundItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | FoundItemCategoryDefaultArgs<ExtArgs>
  }

  export type $FoundItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoundItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$FoundItemCategoryPayload<ExtArgs>
      claims: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      categoryId: string
      foundItemName: string
      description: string
      location: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foundItem"]>
    composites: {}
  }

  type FoundItemGetPayload<S extends boolean | null | undefined | FoundItemDefaultArgs> = $Result.GetResult<Prisma.$FoundItemPayload, S>

  type FoundItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoundItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoundItemCountAggregateInputType | true
    }

  export interface FoundItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoundItem'], meta: { name: 'FoundItem' } }
    /**
     * Find zero or one FoundItem that matches the filter.
     * @param {FoundItemFindUniqueArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoundItemFindUniqueArgs>(args: SelectSubset<T, FoundItemFindUniqueArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoundItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoundItemFindUniqueOrThrowArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoundItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoundItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoundItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemFindFirstArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoundItemFindFirstArgs>(args?: SelectSubset<T, FoundItemFindFirstArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoundItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemFindFirstOrThrowArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoundItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoundItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoundItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoundItems
     * const foundItems = await prisma.foundItem.findMany()
     * 
     * // Get first 10 FoundItems
     * const foundItems = await prisma.foundItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foundItemWithIdOnly = await prisma.foundItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoundItemFindManyArgs>(args?: SelectSubset<T, FoundItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoundItem.
     * @param {FoundItemCreateArgs} args - Arguments to create a FoundItem.
     * @example
     * // Create one FoundItem
     * const FoundItem = await prisma.foundItem.create({
     *   data: {
     *     // ... data to create a FoundItem
     *   }
     * })
     * 
     */
    create<T extends FoundItemCreateArgs>(args: SelectSubset<T, FoundItemCreateArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoundItems.
     * @param {FoundItemCreateManyArgs} args - Arguments to create many FoundItems.
     * @example
     * // Create many FoundItems
     * const foundItem = await prisma.foundItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoundItemCreateManyArgs>(args?: SelectSubset<T, FoundItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoundItems and returns the data saved in the database.
     * @param {FoundItemCreateManyAndReturnArgs} args - Arguments to create many FoundItems.
     * @example
     * // Create many FoundItems
     * const foundItem = await prisma.foundItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoundItems and only return the `id`
     * const foundItemWithIdOnly = await prisma.foundItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoundItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoundItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoundItem.
     * @param {FoundItemDeleteArgs} args - Arguments to delete one FoundItem.
     * @example
     * // Delete one FoundItem
     * const FoundItem = await prisma.foundItem.delete({
     *   where: {
     *     // ... filter to delete one FoundItem
     *   }
     * })
     * 
     */
    delete<T extends FoundItemDeleteArgs>(args: SelectSubset<T, FoundItemDeleteArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoundItem.
     * @param {FoundItemUpdateArgs} args - Arguments to update one FoundItem.
     * @example
     * // Update one FoundItem
     * const foundItem = await prisma.foundItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoundItemUpdateArgs>(args: SelectSubset<T, FoundItemUpdateArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoundItems.
     * @param {FoundItemDeleteManyArgs} args - Arguments to filter FoundItems to delete.
     * @example
     * // Delete a few FoundItems
     * const { count } = await prisma.foundItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoundItemDeleteManyArgs>(args?: SelectSubset<T, FoundItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoundItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoundItems
     * const foundItem = await prisma.foundItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoundItemUpdateManyArgs>(args: SelectSubset<T, FoundItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoundItems and returns the data updated in the database.
     * @param {FoundItemUpdateManyAndReturnArgs} args - Arguments to update many FoundItems.
     * @example
     * // Update many FoundItems
     * const foundItem = await prisma.foundItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoundItems and only return the `id`
     * const foundItemWithIdOnly = await prisma.foundItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoundItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FoundItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoundItem.
     * @param {FoundItemUpsertArgs} args - Arguments to update or create a FoundItem.
     * @example
     * // Update or create a FoundItem
     * const foundItem = await prisma.foundItem.upsert({
     *   create: {
     *     // ... data to create a FoundItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoundItem we want to update
     *   }
     * })
     */
    upsert<T extends FoundItemUpsertArgs>(args: SelectSubset<T, FoundItemUpsertArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoundItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCountArgs} args - Arguments to filter FoundItems to count.
     * @example
     * // Count the number of FoundItems
     * const count = await prisma.foundItem.count({
     *   where: {
     *     // ... the filter for the FoundItems we want to count
     *   }
     * })
    **/
    count<T extends FoundItemCountArgs>(
      args?: Subset<T, FoundItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoundItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoundItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoundItemAggregateArgs>(args: Subset<T, FoundItemAggregateArgs>): Prisma.PrismaPromise<GetFoundItemAggregateType<T>>

    /**
     * Group by FoundItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoundItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoundItemGroupByArgs['orderBy'] }
        : { orderBy?: FoundItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoundItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoundItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoundItem model
   */
  readonly fields: FoundItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoundItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoundItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends FoundItemCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoundItemCategoryDefaultArgs<ExtArgs>>): Prisma__FoundItemCategoryClient<$Result.GetResult<Prisma.$FoundItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    claims<T extends FoundItem$claimsArgs<ExtArgs> = {}>(args?: Subset<T, FoundItem$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoundItem model
   */
  interface FoundItemFieldRefs {
    readonly id: FieldRef<"FoundItem", 'String'>
    readonly userId: FieldRef<"FoundItem", 'String'>
    readonly categoryId: FieldRef<"FoundItem", 'String'>
    readonly foundItemName: FieldRef<"FoundItem", 'String'>
    readonly description: FieldRef<"FoundItem", 'String'>
    readonly location: FieldRef<"FoundItem", 'String'>
    readonly createdAt: FieldRef<"FoundItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FoundItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoundItem findUnique
   */
  export type FoundItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem findUniqueOrThrow
   */
  export type FoundItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem findFirst
   */
  export type FoundItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoundItems.
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoundItems.
     */
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * FoundItem findFirstOrThrow
   */
  export type FoundItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoundItems.
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoundItems.
     */
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * FoundItem findMany
   */
  export type FoundItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItems to fetch.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoundItems.
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * FoundItem create
   */
  export type FoundItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoundItem.
     */
    data: XOR<FoundItemCreateInput, FoundItemUncheckedCreateInput>
  }

  /**
   * FoundItem createMany
   */
  export type FoundItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoundItems.
     */
    data: FoundItemCreateManyInput | FoundItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoundItem createManyAndReturn
   */
  export type FoundItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * The data used to create many FoundItems.
     */
    data: FoundItemCreateManyInput | FoundItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoundItem update
   */
  export type FoundItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoundItem.
     */
    data: XOR<FoundItemUpdateInput, FoundItemUncheckedUpdateInput>
    /**
     * Choose, which FoundItem to update.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem updateMany
   */
  export type FoundItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoundItems.
     */
    data: XOR<FoundItemUpdateManyMutationInput, FoundItemUncheckedUpdateManyInput>
    /**
     * Filter which FoundItems to update
     */
    where?: FoundItemWhereInput
    /**
     * Limit how many FoundItems to update.
     */
    limit?: number
  }

  /**
   * FoundItem updateManyAndReturn
   */
  export type FoundItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * The data used to update FoundItems.
     */
    data: XOR<FoundItemUpdateManyMutationInput, FoundItemUncheckedUpdateManyInput>
    /**
     * Filter which FoundItems to update
     */
    where?: FoundItemWhereInput
    /**
     * Limit how many FoundItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoundItem upsert
   */
  export type FoundItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoundItem to update in case it exists.
     */
    where: FoundItemWhereUniqueInput
    /**
     * In case the FoundItem found by the `where` argument doesn't exist, create a new FoundItem with this data.
     */
    create: XOR<FoundItemCreateInput, FoundItemUncheckedCreateInput>
    /**
     * In case the FoundItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoundItemUpdateInput, FoundItemUncheckedUpdateInput>
  }

  /**
   * FoundItem delete
   */
  export type FoundItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter which FoundItem to delete.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem deleteMany
   */
  export type FoundItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoundItems to delete
     */
    where?: FoundItemWhereInput
    /**
     * Limit how many FoundItems to delete.
     */
    limit?: number
  }

  /**
   * FoundItem.claims
   */
  export type FoundItem$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * FoundItem without action
   */
  export type FoundItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoundItem
     */
    omit?: FoundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
  }


  /**
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimMinAggregateOutputType = {
    id: string | null
    userId: string | null
    foundItemId: string | null
    status: $Enums.Status | null
    distinguishingFeatures: string | null
    lostDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    foundItemId: string | null
    status: $Enums.Status | null
    distinguishingFeatures: string | null
    lostDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    userId: number
    foundItemId: number
    status: number
    distinguishingFeatures: number
    lostDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClaimMinAggregateInputType = {
    id?: true
    userId?: true
    foundItemId?: true
    status?: true
    distinguishingFeatures?: true
    lostDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    userId?: true
    foundItemId?: true
    status?: true
    distinguishingFeatures?: true
    lostDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    userId?: true
    foundItemId?: true
    status?: true
    distinguishingFeatures?: true
    lostDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: string
    userId: string
    foundItemId: string
    status: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date
    createdAt: Date
    updatedAt: Date
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foundItemId?: boolean
    status?: boolean
    distinguishingFeatures?: boolean
    lostDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foundItem?: boolean | FoundItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foundItemId?: boolean
    status?: boolean
    distinguishingFeatures?: boolean
    lostDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foundItem?: boolean | FoundItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foundItemId?: boolean
    status?: boolean
    distinguishingFeatures?: boolean
    lostDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foundItem?: boolean | FoundItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    userId?: boolean
    foundItemId?: boolean
    status?: boolean
    distinguishingFeatures?: boolean
    lostDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foundItemId" | "status" | "distinguishingFeatures" | "lostDate" | "createdAt" | "updatedAt", ExtArgs["result"]["claim"]>
  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foundItem?: boolean | FoundItemDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foundItem?: boolean | FoundItemDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foundItem?: boolean | FoundItemDefaultArgs<ExtArgs>
  }

  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foundItem: Prisma.$FoundItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      foundItemId: string
      status: $Enums.Status
      distinguishingFeatures: string
      lostDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimFindUniqueArgs>(args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimFindFirstArgs>(args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimFindManyArgs>(args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends ClaimCreateArgs>(args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimCreateManyArgs>(args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {ClaimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends ClaimDeleteArgs>(args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimUpdateArgs>(args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimDeleteManyArgs>(args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimUpdateManyArgs>(args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {ClaimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends ClaimUpsertArgs>(args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foundItem<T extends FoundItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoundItemDefaultArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Claim model
   */
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'String'>
    readonly userId: FieldRef<"Claim", 'String'>
    readonly foundItemId: FieldRef<"Claim", 'String'>
    readonly status: FieldRef<"Claim", 'Status'>
    readonly distinguishingFeatures: FieldRef<"Claim", 'String'>
    readonly lostDate: FieldRef<"Claim", 'DateTime'>
    readonly createdAt: FieldRef<"Claim", 'DateTime'>
    readonly updatedAt: FieldRef<"Claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }

  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claim createManyAndReturn
   */
  export type ClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claim updateManyAndReturn
   */
  export type ClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }

  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to delete.
     */
    limit?: number
  }

  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    age: number | null
  }

  export type ProfileSumAggregateOutputType = {
    age: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    age: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    age?: true
  }

  export type ProfileSumAggregateInputType = {
    age?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    age?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    age?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string
    age: number
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "age" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string
      age: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly age: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoundItemCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoundItemCategoryScalarFieldEnum = (typeof FoundItemCategoryScalarFieldEnum)[keyof typeof FoundItemCategoryScalarFieldEnum]


  export const FoundItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    foundItemName: 'foundItemName',
    description: 'description',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoundItemScalarFieldEnum = (typeof FoundItemScalarFieldEnum)[keyof typeof FoundItemScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foundItemId: 'foundItemId',
    status: 'status',
    distinguishingFeatures: 'distinguishingFeatures',
    lostDate: 'lostDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    age: 'age',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    foundItems?: FoundItemListRelationFilter
    claims?: ClaimListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foundItems?: FoundItemOrderByRelationAggregateInput
    claims?: ClaimOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    foundItems?: FoundItemListRelationFilter
    claims?: ClaimListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FoundItemCategoryWhereInput = {
    AND?: FoundItemCategoryWhereInput | FoundItemCategoryWhereInput[]
    OR?: FoundItemCategoryWhereInput[]
    NOT?: FoundItemCategoryWhereInput | FoundItemCategoryWhereInput[]
    id?: StringFilter<"FoundItemCategory"> | string
    name?: StringFilter<"FoundItemCategory"> | string
    createdAt?: DateTimeFilter<"FoundItemCategory"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItemCategory"> | Date | string
    foundItems?: FoundItemListRelationFilter
  }

  export type FoundItemCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foundItems?: FoundItemOrderByRelationAggregateInput
  }

  export type FoundItemCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: FoundItemCategoryWhereInput | FoundItemCategoryWhereInput[]
    OR?: FoundItemCategoryWhereInput[]
    NOT?: FoundItemCategoryWhereInput | FoundItemCategoryWhereInput[]
    createdAt?: DateTimeFilter<"FoundItemCategory"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItemCategory"> | Date | string
    foundItems?: FoundItemListRelationFilter
  }, "id" | "name">

  export type FoundItemCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoundItemCategoryCountOrderByAggregateInput
    _max?: FoundItemCategoryMaxOrderByAggregateInput
    _min?: FoundItemCategoryMinOrderByAggregateInput
  }

  export type FoundItemCategoryScalarWhereWithAggregatesInput = {
    AND?: FoundItemCategoryScalarWhereWithAggregatesInput | FoundItemCategoryScalarWhereWithAggregatesInput[]
    OR?: FoundItemCategoryScalarWhereWithAggregatesInput[]
    NOT?: FoundItemCategoryScalarWhereWithAggregatesInput | FoundItemCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoundItemCategory"> | string
    name?: StringWithAggregatesFilter<"FoundItemCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FoundItemCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoundItemCategory"> | Date | string
  }

  export type FoundItemWhereInput = {
    AND?: FoundItemWhereInput | FoundItemWhereInput[]
    OR?: FoundItemWhereInput[]
    NOT?: FoundItemWhereInput | FoundItemWhereInput[]
    id?: StringFilter<"FoundItem"> | string
    userId?: StringFilter<"FoundItem"> | string
    categoryId?: StringFilter<"FoundItem"> | string
    foundItemName?: StringFilter<"FoundItem"> | string
    description?: StringFilter<"FoundItem"> | string
    location?: StringFilter<"FoundItem"> | string
    createdAt?: DateTimeFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<FoundItemCategoryScalarRelationFilter, FoundItemCategoryWhereInput>
    claims?: ClaimListRelationFilter
  }

  export type FoundItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    foundItemName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: FoundItemCategoryOrderByWithRelationInput
    claims?: ClaimOrderByRelationAggregateInput
  }

  export type FoundItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoundItemWhereInput | FoundItemWhereInput[]
    OR?: FoundItemWhereInput[]
    NOT?: FoundItemWhereInput | FoundItemWhereInput[]
    userId?: StringFilter<"FoundItem"> | string
    categoryId?: StringFilter<"FoundItem"> | string
    foundItemName?: StringFilter<"FoundItem"> | string
    description?: StringFilter<"FoundItem"> | string
    location?: StringFilter<"FoundItem"> | string
    createdAt?: DateTimeFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<FoundItemCategoryScalarRelationFilter, FoundItemCategoryWhereInput>
    claims?: ClaimListRelationFilter
  }, "id">

  export type FoundItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    foundItemName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoundItemCountOrderByAggregateInput
    _max?: FoundItemMaxOrderByAggregateInput
    _min?: FoundItemMinOrderByAggregateInput
  }

  export type FoundItemScalarWhereWithAggregatesInput = {
    AND?: FoundItemScalarWhereWithAggregatesInput | FoundItemScalarWhereWithAggregatesInput[]
    OR?: FoundItemScalarWhereWithAggregatesInput[]
    NOT?: FoundItemScalarWhereWithAggregatesInput | FoundItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoundItem"> | string
    userId?: StringWithAggregatesFilter<"FoundItem"> | string
    categoryId?: StringWithAggregatesFilter<"FoundItem"> | string
    foundItemName?: StringWithAggregatesFilter<"FoundItem"> | string
    description?: StringWithAggregatesFilter<"FoundItem"> | string
    location?: StringWithAggregatesFilter<"FoundItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoundItem"> | Date | string
  }

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: StringFilter<"Claim"> | string
    userId?: StringFilter<"Claim"> | string
    foundItemId?: StringFilter<"Claim"> | string
    status?: EnumStatusFilter<"Claim"> | $Enums.Status
    distinguishingFeatures?: StringFilter<"Claim"> | string
    lostDate?: DateTimeFilter<"Claim"> | Date | string
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foundItem?: XOR<FoundItemScalarRelationFilter, FoundItemWhereInput>
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foundItemId?: SortOrder
    status?: SortOrder
    distinguishingFeatures?: SortOrder
    lostDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    foundItem?: FoundItemOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    userId?: StringFilter<"Claim"> | string
    foundItemId?: StringFilter<"Claim"> | string
    status?: EnumStatusFilter<"Claim"> | $Enums.Status
    distinguishingFeatures?: StringFilter<"Claim"> | string
    lostDate?: DateTimeFilter<"Claim"> | Date | string
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foundItem?: XOR<FoundItemScalarRelationFilter, FoundItemWhereInput>
  }, "id">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foundItemId?: SortOrder
    status?: SortOrder
    distinguishingFeatures?: SortOrder
    lostDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Claim"> | string
    userId?: StringWithAggregatesFilter<"Claim"> | string
    foundItemId?: StringWithAggregatesFilter<"Claim"> | string
    status?: EnumStatusWithAggregatesFilter<"Claim"> | $Enums.Status
    distinguishingFeatures?: StringWithAggregatesFilter<"Claim"> | string
    lostDate?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    bio?: StringFilter<"Profile"> | string
    age?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    bio?: StringFilter<"Profile"> | string
    age?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    bio?: StringWithAggregatesFilter<"Profile"> | string
    age?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemCreateNestedManyWithoutUserInput
    claims?: ClaimCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemUncheckedCreateNestedManyWithoutUserInput
    claims?: ClaimUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUpdateManyWithoutUserNestedInput
    claims?: ClaimUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUncheckedUpdateManyWithoutUserNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemCreateNestedManyWithoutCategoryInput
  }

  export type FoundItemCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type FoundItemCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUpdateManyWithoutCategoryNestedInput
  }

  export type FoundItemCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FoundItemCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemCreateInput = {
    id?: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoundItemsInput
    category: FoundItemCategoryCreateNestedOneWithoutFoundItemsInput
    claims?: ClaimCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemUncheckedCreateInput = {
    id?: string
    userId: string
    categoryId: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoundItemsNestedInput
    category?: FoundItemCategoryUpdateOneRequiredWithoutFoundItemsNestedInput
    claims?: ClaimUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemCreateManyInput = {
    id?: string
    userId: string
    categoryId: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateInput = {
    id?: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimsInput
    foundItem: FoundItemCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: string
    userId: string
    foundItemId: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimsNestedInput
    foundItem?: FoundItemUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foundItemId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyInput = {
    id?: string
    userId: string
    foundItemId: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foundItemId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    bio: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    bio: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FoundItemListRelationFilter = {
    every?: FoundItemWhereInput
    some?: FoundItemWhereInput
    none?: FoundItemWhereInput
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type FoundItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FoundItemCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoundItemCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoundItemCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoundItemCategoryScalarRelationFilter = {
    is?: FoundItemCategoryWhereInput
    isNot?: FoundItemCategoryWhereInput
  }

  export type FoundItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    foundItemName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoundItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    foundItemName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoundItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    foundItemName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type FoundItemScalarRelationFilter = {
    is?: FoundItemWhereInput
    isNot?: FoundItemWhereInput
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundItemId?: SortOrder
    status?: SortOrder
    distinguishingFeatures?: SortOrder
    lostDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundItemId?: SortOrder
    status?: SortOrder
    distinguishingFeatures?: SortOrder
    lostDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundItemId?: SortOrder
    status?: SortOrder
    distinguishingFeatures?: SortOrder
    lostDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FoundItemCreateNestedManyWithoutUserInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
  }

  export type ClaimCreateNestedManyWithoutUserInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type FoundItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FoundItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    upsert?: FoundItemUpsertWithWhereUniqueWithoutUserInput | FoundItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    set?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    disconnect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    delete?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    update?: FoundItemUpdateWithWhereUniqueWithoutUserInput | FoundItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoundItemUpdateManyWithWhereWithoutUserInput | FoundItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
  }

  export type ClaimUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutUserInput | ClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutUserInput | ClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutUserInput | ClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type FoundItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    upsert?: FoundItemUpsertWithWhereUniqueWithoutUserInput | FoundItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    set?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    disconnect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    delete?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    update?: FoundItemUpdateWithWhereUniqueWithoutUserInput | FoundItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoundItemUpdateManyWithWhereWithoutUserInput | FoundItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutUserInput | ClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutUserInput | ClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutUserInput | ClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type FoundItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoundItemCreateWithoutCategoryInput, FoundItemUncheckedCreateWithoutCategoryInput> | FoundItemCreateWithoutCategoryInput[] | FoundItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutCategoryInput | FoundItemCreateOrConnectWithoutCategoryInput[]
    createMany?: FoundItemCreateManyCategoryInputEnvelope
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
  }

  export type FoundItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoundItemCreateWithoutCategoryInput, FoundItemUncheckedCreateWithoutCategoryInput> | FoundItemCreateWithoutCategoryInput[] | FoundItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutCategoryInput | FoundItemCreateOrConnectWithoutCategoryInput[]
    createMany?: FoundItemCreateManyCategoryInputEnvelope
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
  }

  export type FoundItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoundItemCreateWithoutCategoryInput, FoundItemUncheckedCreateWithoutCategoryInput> | FoundItemCreateWithoutCategoryInput[] | FoundItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutCategoryInput | FoundItemCreateOrConnectWithoutCategoryInput[]
    upsert?: FoundItemUpsertWithWhereUniqueWithoutCategoryInput | FoundItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoundItemCreateManyCategoryInputEnvelope
    set?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    disconnect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    delete?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    update?: FoundItemUpdateWithWhereUniqueWithoutCategoryInput | FoundItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoundItemUpdateManyWithWhereWithoutCategoryInput | FoundItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
  }

  export type FoundItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoundItemCreateWithoutCategoryInput, FoundItemUncheckedCreateWithoutCategoryInput> | FoundItemCreateWithoutCategoryInput[] | FoundItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutCategoryInput | FoundItemCreateOrConnectWithoutCategoryInput[]
    upsert?: FoundItemUpsertWithWhereUniqueWithoutCategoryInput | FoundItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoundItemCreateManyCategoryInputEnvelope
    set?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    disconnect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    delete?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    update?: FoundItemUpdateWithWhereUniqueWithoutCategoryInput | FoundItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoundItemUpdateManyWithWhereWithoutCategoryInput | FoundItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFoundItemsInput = {
    create?: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoundItemsInput
    connect?: UserWhereUniqueInput
  }

  export type FoundItemCategoryCreateNestedOneWithoutFoundItemsInput = {
    create?: XOR<FoundItemCategoryCreateWithoutFoundItemsInput, FoundItemCategoryUncheckedCreateWithoutFoundItemsInput>
    connectOrCreate?: FoundItemCategoryCreateOrConnectWithoutFoundItemsInput
    connect?: FoundItemCategoryWhereUniqueInput
  }

  export type ClaimCreateNestedManyWithoutFoundItemInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutFoundItemInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFoundItemsNestedInput = {
    create?: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoundItemsInput
    upsert?: UserUpsertWithoutFoundItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoundItemsInput, UserUpdateWithoutFoundItemsInput>, UserUncheckedUpdateWithoutFoundItemsInput>
  }

  export type FoundItemCategoryUpdateOneRequiredWithoutFoundItemsNestedInput = {
    create?: XOR<FoundItemCategoryCreateWithoutFoundItemsInput, FoundItemCategoryUncheckedCreateWithoutFoundItemsInput>
    connectOrCreate?: FoundItemCategoryCreateOrConnectWithoutFoundItemsInput
    upsert?: FoundItemCategoryUpsertWithoutFoundItemsInput
    connect?: FoundItemCategoryWhereUniqueInput
    update?: XOR<XOR<FoundItemCategoryUpdateToOneWithWhereWithoutFoundItemsInput, FoundItemCategoryUpdateWithoutFoundItemsInput>, FoundItemCategoryUncheckedUpdateWithoutFoundItemsInput>
  }

  export type ClaimUpdateManyWithoutFoundItemNestedInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutFoundItemInput | ClaimUpsertWithWhereUniqueWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutFoundItemInput | ClaimUpdateWithWhereUniqueWithoutFoundItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutFoundItemInput | ClaimUpdateManyWithWhereWithoutFoundItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutFoundItemNestedInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutFoundItemInput | ClaimUpsertWithWhereUniqueWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutFoundItemInput | ClaimUpdateWithWhereUniqueWithoutFoundItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutFoundItemInput | ClaimUpdateManyWithWhereWithoutFoundItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClaimsInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    connect?: UserWhereUniqueInput
  }

  export type FoundItemCreateNestedOneWithoutClaimsInput = {
    create?: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: FoundItemCreateOrConnectWithoutClaimsInput
    connect?: FoundItemWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    upsert?: UserUpsertWithoutClaimsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClaimsInput, UserUpdateWithoutClaimsInput>, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type FoundItemUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: FoundItemCreateOrConnectWithoutClaimsInput
    upsert?: FoundItemUpsertWithoutClaimsInput
    connect?: FoundItemWhereUniqueInput
    update?: XOR<XOR<FoundItemUpdateToOneWithWhereWithoutClaimsInput, FoundItemUpdateWithoutClaimsInput>, FoundItemUncheckedUpdateWithoutClaimsInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FoundItemCreateWithoutUserInput = {
    id?: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: FoundItemCategoryCreateNestedOneWithoutFoundItemsInput
    claims?: ClaimCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemUncheckedCreateWithoutUserInput = {
    id?: string
    categoryId: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemCreateOrConnectWithoutUserInput = {
    where: FoundItemWhereUniqueInput
    create: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput>
  }

  export type FoundItemCreateManyUserInputEnvelope = {
    data: FoundItemCreateManyUserInput | FoundItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClaimCreateWithoutUserInput = {
    id?: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItem: FoundItemCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutUserInput = {
    id?: string
    foundItemId: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutUserInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput>
  }

  export type ClaimCreateManyUserInputEnvelope = {
    data: ClaimCreateManyUserInput | ClaimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    bio: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type FoundItemUpsertWithWhereUniqueWithoutUserInput = {
    where: FoundItemWhereUniqueInput
    update: XOR<FoundItemUpdateWithoutUserInput, FoundItemUncheckedUpdateWithoutUserInput>
    create: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput>
  }

  export type FoundItemUpdateWithWhereUniqueWithoutUserInput = {
    where: FoundItemWhereUniqueInput
    data: XOR<FoundItemUpdateWithoutUserInput, FoundItemUncheckedUpdateWithoutUserInput>
  }

  export type FoundItemUpdateManyWithWhereWithoutUserInput = {
    where: FoundItemScalarWhereInput
    data: XOR<FoundItemUpdateManyMutationInput, FoundItemUncheckedUpdateManyWithoutUserInput>
  }

  export type FoundItemScalarWhereInput = {
    AND?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
    OR?: FoundItemScalarWhereInput[]
    NOT?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
    id?: StringFilter<"FoundItem"> | string
    userId?: StringFilter<"FoundItem"> | string
    categoryId?: StringFilter<"FoundItem"> | string
    foundItemName?: StringFilter<"FoundItem"> | string
    description?: StringFilter<"FoundItem"> | string
    location?: StringFilter<"FoundItem"> | string
    createdAt?: DateTimeFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItem"> | Date | string
  }

  export type ClaimUpsertWithWhereUniqueWithoutUserInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutUserInput, ClaimUncheckedUpdateWithoutUserInput>
    create: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutUserInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutUserInput, ClaimUncheckedUpdateWithoutUserInput>
  }

  export type ClaimUpdateManyWithWhereWithoutUserInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutUserInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: StringFilter<"Claim"> | string
    userId?: StringFilter<"Claim"> | string
    foundItemId?: StringFilter<"Claim"> | string
    status?: EnumStatusFilter<"Claim"> | $Enums.Status
    distinguishingFeatures?: StringFilter<"Claim"> | string
    lostDate?: DateTimeFilter<"Claim"> | Date | string
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemCreateWithoutCategoryInput = {
    id?: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoundItemsInput
    claims?: ClaimCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    userId: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemCreateOrConnectWithoutCategoryInput = {
    where: FoundItemWhereUniqueInput
    create: XOR<FoundItemCreateWithoutCategoryInput, FoundItemUncheckedCreateWithoutCategoryInput>
  }

  export type FoundItemCreateManyCategoryInputEnvelope = {
    data: FoundItemCreateManyCategoryInput | FoundItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FoundItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FoundItemWhereUniqueInput
    update: XOR<FoundItemUpdateWithoutCategoryInput, FoundItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<FoundItemCreateWithoutCategoryInput, FoundItemUncheckedCreateWithoutCategoryInput>
  }

  export type FoundItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FoundItemWhereUniqueInput
    data: XOR<FoundItemUpdateWithoutCategoryInput, FoundItemUncheckedUpdateWithoutCategoryInput>
  }

  export type FoundItemUpdateManyWithWhereWithoutCategoryInput = {
    where: FoundItemScalarWhereInput
    data: XOR<FoundItemUpdateManyMutationInput, FoundItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutFoundItemsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoundItemsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoundItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
  }

  export type FoundItemCategoryCreateWithoutFoundItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemCategoryUncheckedCreateWithoutFoundItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemCategoryCreateOrConnectWithoutFoundItemsInput = {
    where: FoundItemCategoryWhereUniqueInput
    create: XOR<FoundItemCategoryCreateWithoutFoundItemsInput, FoundItemCategoryUncheckedCreateWithoutFoundItemsInput>
  }

  export type ClaimCreateWithoutFoundItemInput = {
    id?: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutFoundItemInput = {
    id?: string
    userId: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutFoundItemInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput>
  }

  export type ClaimCreateManyFoundItemInputEnvelope = {
    data: ClaimCreateManyFoundItemInput | ClaimCreateManyFoundItemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFoundItemsInput = {
    update: XOR<UserUpdateWithoutFoundItemsInput, UserUncheckedUpdateWithoutFoundItemsInput>
    create: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoundItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoundItemsInput, UserUncheckedUpdateWithoutFoundItemsInput>
  }

  export type UserUpdateWithoutFoundItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoundItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FoundItemCategoryUpsertWithoutFoundItemsInput = {
    update: XOR<FoundItemCategoryUpdateWithoutFoundItemsInput, FoundItemCategoryUncheckedUpdateWithoutFoundItemsInput>
    create: XOR<FoundItemCategoryCreateWithoutFoundItemsInput, FoundItemCategoryUncheckedCreateWithoutFoundItemsInput>
    where?: FoundItemCategoryWhereInput
  }

  export type FoundItemCategoryUpdateToOneWithWhereWithoutFoundItemsInput = {
    where?: FoundItemCategoryWhereInput
    data: XOR<FoundItemCategoryUpdateWithoutFoundItemsInput, FoundItemCategoryUncheckedUpdateWithoutFoundItemsInput>
  }

  export type FoundItemCategoryUpdateWithoutFoundItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemCategoryUncheckedUpdateWithoutFoundItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUpsertWithWhereUniqueWithoutFoundItemInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutFoundItemInput, ClaimUncheckedUpdateWithoutFoundItemInput>
    create: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutFoundItemInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutFoundItemInput, ClaimUncheckedUpdateWithoutFoundItemInput>
  }

  export type ClaimUpdateManyWithWhereWithoutFoundItemInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutFoundItemInput>
  }

  export type UserCreateWithoutClaimsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClaimsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClaimsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
  }

  export type FoundItemCreateWithoutClaimsInput = {
    id?: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoundItemsInput
    category: FoundItemCategoryCreateNestedOneWithoutFoundItemsInput
  }

  export type FoundItemUncheckedCreateWithoutClaimsInput = {
    id?: string
    userId: string
    categoryId: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemCreateOrConnectWithoutClaimsInput = {
    where: FoundItemWhereUniqueInput
    create: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
  }

  export type UserUpsertWithoutClaimsInput = {
    update: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClaimsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type UserUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FoundItemUpsertWithoutClaimsInput = {
    update: XOR<FoundItemUpdateWithoutClaimsInput, FoundItemUncheckedUpdateWithoutClaimsInput>
    create: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
    where?: FoundItemWhereInput
  }

  export type FoundItemUpdateToOneWithWhereWithoutClaimsInput = {
    where?: FoundItemWhereInput
    data: XOR<FoundItemUpdateWithoutClaimsInput, FoundItemUncheckedUpdateWithoutClaimsInput>
  }

  export type FoundItemUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoundItemsNestedInput
    category?: FoundItemCategoryUpdateOneRequiredWithoutFoundItemsNestedInput
  }

  export type FoundItemUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemCreateNestedManyWithoutUserInput
    claims?: ClaimCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemUncheckedCreateNestedManyWithoutUserInput
    claims?: ClaimUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUpdateManyWithoutUserNestedInput
    claims?: ClaimUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUncheckedUpdateManyWithoutUserNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoundItemCreateManyUserInput = {
    id?: string
    categoryId: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateManyUserInput = {
    id?: string
    foundItemId: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: FoundItemCategoryUpdateOneRequiredWithoutFoundItemsNestedInput
    claims?: ClaimUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItem?: FoundItemUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foundItemId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foundItemId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemCreateManyCategoryInput = {
    id?: string
    userId: string
    foundItemName: string
    description: string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoundItemsNestedInput
    claims?: ClaimUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foundItemName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyFoundItemInput = {
    id?: string
    userId: string
    status?: $Enums.Status
    distinguishingFeatures: string
    lostDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateWithoutFoundItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutFoundItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutFoundItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    distinguishingFeatures?: StringFieldUpdateOperationsInput | string
    lostDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}