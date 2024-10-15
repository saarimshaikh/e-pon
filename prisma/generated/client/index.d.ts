
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Savings
 * 
 */
export type Savings = $Result.DefaultSelection<Prisma.$SavingsPayload>
/**
 * Model Groups
 * 
 */
export type Groups = $Result.DefaultSelection<Prisma.$GroupsPayload>
/**
 * Model GroupMembers
 * 
 */
export type GroupMembers = $Result.DefaultSelection<Prisma.$GroupMembersPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SavingTypes: {
  personal: 'personal',
  group: 'group'
};

export type SavingTypes = (typeof SavingTypes)[keyof typeof SavingTypes]


export const GroupRoles: {
  admin: 'admin',
  member: 'member'
};

export type GroupRoles = (typeof GroupRoles)[keyof typeof GroupRoles]


export const TransactionTypes: {
  deposit: 'deposit',
  withdrawal: 'withdrawal'
};

export type TransactionTypes = (typeof TransactionTypes)[keyof typeof TransactionTypes]

}

export type SavingTypes = $Enums.SavingTypes

export const SavingTypes: typeof $Enums.SavingTypes

export type GroupRoles = $Enums.GroupRoles

export const GroupRoles: typeof $Enums.GroupRoles

export type TransactionTypes = $Enums.TransactionTypes

export const TransactionTypes: typeof $Enums.TransactionTypes

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.savings`: Exposes CRUD operations for the **Savings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Savings
    * const savings = await prisma.savings.findMany()
    * ```
    */
  get savings(): Prisma.SavingsDelegate<ExtArgs>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **Groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.GroupsDelegate<ExtArgs>;

  /**
   * `prisma.groupMembers`: Exposes CRUD operations for the **GroupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMembers.findMany()
    * ```
    */
  get groupMembers(): Prisma.GroupMembersDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Users: 'Users',
    Savings: 'Savings',
    Groups: 'Groups',
    GroupMembers: 'GroupMembers',
    Transactions: 'Transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "savings" | "groups" | "groupMembers" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Savings: {
        payload: Prisma.$SavingsPayload<ExtArgs>
        fields: Prisma.SavingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          findFirst: {
            args: Prisma.SavingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          findMany: {
            args: Prisma.SavingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>[]
          }
          create: {
            args: Prisma.SavingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          createMany: {
            args: Prisma.SavingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>[]
          }
          delete: {
            args: Prisma.SavingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          update: {
            args: Prisma.SavingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          deleteMany: {
            args: Prisma.SavingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsPayload>
          }
          aggregate: {
            args: Prisma.SavingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavings>
          }
          groupBy: {
            args: Prisma.SavingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingsCountArgs<ExtArgs>
            result: $Utils.Optional<SavingsCountAggregateOutputType> | number
          }
        }
      }
      Groups: {
        payload: Prisma.$GroupsPayload<ExtArgs>
        fields: Prisma.GroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          findFirst: {
            args: Prisma.GroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          findMany: {
            args: Prisma.GroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>[]
          }
          create: {
            args: Prisma.GroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          createMany: {
            args: Prisma.GroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>[]
          }
          delete: {
            args: Prisma.GroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          update: {
            args: Prisma.GroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          deleteMany: {
            args: Prisma.GroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.GroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      GroupMembers: {
        payload: Prisma.$GroupMembersPayload<ExtArgs>
        fields: Prisma.GroupMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          findFirst: {
            args: Prisma.GroupMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          findMany: {
            args: Prisma.GroupMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>[]
          }
          create: {
            args: Prisma.GroupMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          createMany: {
            args: Prisma.GroupMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>[]
          }
          delete: {
            args: Prisma.GroupMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          update: {
            args: Prisma.GroupMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          deleteMany: {
            args: Prisma.GroupMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          aggregate: {
            args: Prisma.GroupMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMembers>
          }
          groupBy: {
            args: Prisma.GroupMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMembersCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMembersCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    savings: number
    groups: number
    groupMembers: number
    transaction: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings?: boolean | UsersCountOutputTypeCountSavingsArgs
    groups?: boolean | UsersCountOutputTypeCountGroupsArgs
    groupMembers?: boolean | UsersCountOutputTypeCountGroupMembersArgs
    transaction?: boolean | UsersCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSavingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type SavingsCountOutputType
   */

  export type SavingsCountOutputType = {
    transactions: number
  }

  export type SavingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | SavingsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * SavingsCountOutputType without action
   */
  export type SavingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsCountOutputType
     */
    select?: SavingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SavingsCountOutputType without action
   */
  export type SavingsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    savings: number
    members: number
    transactions: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings?: boolean | GroupsCountOutputTypeCountSavingsArgs
    members?: boolean | GroupsCountOutputTypeCountMembersArgs
    transactions?: boolean | GroupsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountSavingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembersWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    name: string
    email: string
    password: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    savings?: boolean | Users$savingsArgs<ExtArgs>
    groups?: boolean | Users$groupsArgs<ExtArgs>
    groupMembers?: boolean | Users$groupMembersArgs<ExtArgs>
    transaction?: boolean | Users$transactionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings?: boolean | Users$savingsArgs<ExtArgs>
    groups?: boolean | Users$groupsArgs<ExtArgs>
    groupMembers?: boolean | Users$groupMembersArgs<ExtArgs>
    transaction?: boolean | Users$transactionArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      savings: Prisma.$SavingsPayload<ExtArgs>[]
      groups: Prisma.$GroupsPayload<ExtArgs>[]
      groupMembers: Prisma.$GroupMembersPayload<ExtArgs>[]
      transaction: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      email: string
      password: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings<T extends Users$savingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$savingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findMany"> | Null>
    groups<T extends Users$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Users$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findMany"> | Null>
    groupMembers<T extends Users$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, Users$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findMany"> | Null>
    transaction<T extends Users$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Users$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.savings
   */
  export type Users$savingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    where?: SavingsWhereInput
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    cursor?: SavingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Users.groups
   */
  export type Users$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    where?: GroupsWhereInput
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    cursor?: GroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Users.groupMembers
   */
  export type Users$groupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    where?: GroupMembersWhereInput
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    cursor?: GroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * Users.transaction
   */
  export type Users$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Savings
   */

  export type AggregateSavings = {
    _count: SavingsCountAggregateOutputType | null
    _avg: SavingsAvgAggregateOutputType | null
    _sum: SavingsSumAggregateOutputType | null
    _min: SavingsMinAggregateOutputType | null
    _max: SavingsMaxAggregateOutputType | null
  }

  export type SavingsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type SavingsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type SavingsMinAggregateOutputType = {
    saving_id: string | null
    user_id: string | null
    group_id: string | null
    amount: Decimal | null
    type: $Enums.SavingTypes | null
    created_at: Date | null
  }

  export type SavingsMaxAggregateOutputType = {
    saving_id: string | null
    user_id: string | null
    group_id: string | null
    amount: Decimal | null
    type: $Enums.SavingTypes | null
    created_at: Date | null
  }

  export type SavingsCountAggregateOutputType = {
    saving_id: number
    user_id: number
    group_id: number
    amount: number
    type: number
    created_at: number
    _all: number
  }


  export type SavingsAvgAggregateInputType = {
    amount?: true
  }

  export type SavingsSumAggregateInputType = {
    amount?: true
  }

  export type SavingsMinAggregateInputType = {
    saving_id?: true
    user_id?: true
    group_id?: true
    amount?: true
    type?: true
    created_at?: true
  }

  export type SavingsMaxAggregateInputType = {
    saving_id?: true
    user_id?: true
    group_id?: true
    amount?: true
    type?: true
    created_at?: true
  }

  export type SavingsCountAggregateInputType = {
    saving_id?: true
    user_id?: true
    group_id?: true
    amount?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type SavingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Savings to aggregate.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Savings
    **/
    _count?: true | SavingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingsMaxAggregateInputType
  }

  export type GetSavingsAggregateType<T extends SavingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSavings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavings[P]>
      : GetScalarType<T[P], AggregateSavings[P]>
  }




  export type SavingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsWhereInput
    orderBy?: SavingsOrderByWithAggregationInput | SavingsOrderByWithAggregationInput[]
    by: SavingsScalarFieldEnum[] | SavingsScalarFieldEnum
    having?: SavingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingsCountAggregateInputType | true
    _avg?: SavingsAvgAggregateInputType
    _sum?: SavingsSumAggregateInputType
    _min?: SavingsMinAggregateInputType
    _max?: SavingsMaxAggregateInputType
  }

  export type SavingsGroupByOutputType = {
    saving_id: string
    user_id: string
    group_id: string | null
    amount: Decimal
    type: $Enums.SavingTypes
    created_at: Date
    _count: SavingsCountAggregateOutputType | null
    _avg: SavingsAvgAggregateOutputType | null
    _sum: SavingsSumAggregateOutputType | null
    _min: SavingsMinAggregateOutputType | null
    _max: SavingsMaxAggregateOutputType | null
  }

  type GetSavingsGroupByPayload<T extends SavingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingsGroupByOutputType[P]>
            : GetScalarType<T[P], SavingsGroupByOutputType[P]>
        }
      >
    >


  export type SavingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saving_id?: boolean
    user_id?: boolean
    group_id?: boolean
    amount?: boolean
    type?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Savings$groupArgs<ExtArgs>
    transactions?: boolean | Savings$transactionsArgs<ExtArgs>
    _count?: boolean | SavingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings"]>

  export type SavingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saving_id?: boolean
    user_id?: boolean
    group_id?: boolean
    amount?: boolean
    type?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Savings$groupArgs<ExtArgs>
  }, ExtArgs["result"]["savings"]>

  export type SavingsSelectScalar = {
    saving_id?: boolean
    user_id?: boolean
    group_id?: boolean
    amount?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type SavingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Savings$groupArgs<ExtArgs>
    transactions?: boolean | Savings$transactionsArgs<ExtArgs>
    _count?: boolean | SavingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SavingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Savings$groupArgs<ExtArgs>
  }

  export type $SavingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Savings"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      group: Prisma.$GroupsPayload<ExtArgs> | null
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      saving_id: string
      user_id: string
      group_id: string | null
      amount: Prisma.Decimal
      type: $Enums.SavingTypes
      created_at: Date
    }, ExtArgs["result"]["savings"]>
    composites: {}
  }

  type SavingsGetPayload<S extends boolean | null | undefined | SavingsDefaultArgs> = $Result.GetResult<Prisma.$SavingsPayload, S>

  type SavingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavingsCountAggregateInputType | true
    }

  export interface SavingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Savings'], meta: { name: 'Savings' } }
    /**
     * Find zero or one Savings that matches the filter.
     * @param {SavingsFindUniqueArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsFindUniqueArgs>(args: SelectSubset<T, SavingsFindUniqueArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Savings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavingsFindUniqueOrThrowArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Savings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsFindFirstArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsFindFirstArgs>(args?: SelectSubset<T, SavingsFindFirstArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Savings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsFindFirstOrThrowArgs} args - Arguments to find a Savings
     * @example
     * // Get one Savings
     * const savings = await prisma.savings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Savings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Savings
     * const savings = await prisma.savings.findMany()
     * 
     * // Get first 10 Savings
     * const savings = await prisma.savings.findMany({ take: 10 })
     * 
     * // Only select the `saving_id`
     * const savingsWithSaving_idOnly = await prisma.savings.findMany({ select: { saving_id: true } })
     * 
     */
    findMany<T extends SavingsFindManyArgs>(args?: SelectSubset<T, SavingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Savings.
     * @param {SavingsCreateArgs} args - Arguments to create a Savings.
     * @example
     * // Create one Savings
     * const Savings = await prisma.savings.create({
     *   data: {
     *     // ... data to create a Savings
     *   }
     * })
     * 
     */
    create<T extends SavingsCreateArgs>(args: SelectSubset<T, SavingsCreateArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Savings.
     * @param {SavingsCreateManyArgs} args - Arguments to create many Savings.
     * @example
     * // Create many Savings
     * const savings = await prisma.savings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingsCreateManyArgs>(args?: SelectSubset<T, SavingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Savings and returns the data saved in the database.
     * @param {SavingsCreateManyAndReturnArgs} args - Arguments to create many Savings.
     * @example
     * // Create many Savings
     * const savings = await prisma.savings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Savings and only return the `saving_id`
     * const savingsWithSaving_idOnly = await prisma.savings.createManyAndReturn({ 
     *   select: { saving_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SavingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Savings.
     * @param {SavingsDeleteArgs} args - Arguments to delete one Savings.
     * @example
     * // Delete one Savings
     * const Savings = await prisma.savings.delete({
     *   where: {
     *     // ... filter to delete one Savings
     *   }
     * })
     * 
     */
    delete<T extends SavingsDeleteArgs>(args: SelectSubset<T, SavingsDeleteArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Savings.
     * @param {SavingsUpdateArgs} args - Arguments to update one Savings.
     * @example
     * // Update one Savings
     * const savings = await prisma.savings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingsUpdateArgs>(args: SelectSubset<T, SavingsUpdateArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Savings.
     * @param {SavingsDeleteManyArgs} args - Arguments to filter Savings to delete.
     * @example
     * // Delete a few Savings
     * const { count } = await prisma.savings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingsDeleteManyArgs>(args?: SelectSubset<T, SavingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Savings
     * const savings = await prisma.savings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingsUpdateManyArgs>(args: SelectSubset<T, SavingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Savings.
     * @param {SavingsUpsertArgs} args - Arguments to update or create a Savings.
     * @example
     * // Update or create a Savings
     * const savings = await prisma.savings.upsert({
     *   create: {
     *     // ... data to create a Savings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Savings we want to update
     *   }
     * })
     */
    upsert<T extends SavingsUpsertArgs>(args: SelectSubset<T, SavingsUpsertArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsCountArgs} args - Arguments to filter Savings to count.
     * @example
     * // Count the number of Savings
     * const count = await prisma.savings.count({
     *   where: {
     *     // ... the filter for the Savings we want to count
     *   }
     * })
    **/
    count<T extends SavingsCountArgs>(
      args?: Subset<T, SavingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavingsAggregateArgs>(args: Subset<T, SavingsAggregateArgs>): Prisma.PrismaPromise<GetSavingsAggregateType<T>>

    /**
     * Group by Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGroupByArgs} args - Group by arguments.
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
      T extends SavingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingsGroupByArgs['orderBy'] }
        : { orderBy?: SavingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Savings model
   */
  readonly fields: SavingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Savings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    group<T extends Savings$groupArgs<ExtArgs> = {}>(args?: Subset<T, Savings$groupArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    transactions<T extends Savings$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Savings$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Savings model
   */ 
  interface SavingsFieldRefs {
    readonly saving_id: FieldRef<"Savings", 'String'>
    readonly user_id: FieldRef<"Savings", 'String'>
    readonly group_id: FieldRef<"Savings", 'String'>
    readonly amount: FieldRef<"Savings", 'Decimal'>
    readonly type: FieldRef<"Savings", 'SavingTypes'>
    readonly created_at: FieldRef<"Savings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Savings findUnique
   */
  export type SavingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings findUniqueOrThrow
   */
  export type SavingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings findFirst
   */
  export type SavingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Savings.
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Savings.
     */
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Savings findFirstOrThrow
   */
  export type SavingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Savings.
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Savings.
     */
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Savings findMany
   */
  export type SavingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter, which Savings to fetch.
     */
    where?: SavingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Savings to fetch.
     */
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Savings.
     */
    cursor?: SavingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Savings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Savings.
     */
    skip?: number
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Savings create
   */
  export type SavingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Savings.
     */
    data: XOR<SavingsCreateInput, SavingsUncheckedCreateInput>
  }

  /**
   * Savings createMany
   */
  export type SavingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Savings.
     */
    data: SavingsCreateManyInput | SavingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Savings createManyAndReturn
   */
  export type SavingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Savings.
     */
    data: SavingsCreateManyInput | SavingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Savings update
   */
  export type SavingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Savings.
     */
    data: XOR<SavingsUpdateInput, SavingsUncheckedUpdateInput>
    /**
     * Choose, which Savings to update.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings updateMany
   */
  export type SavingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Savings.
     */
    data: XOR<SavingsUpdateManyMutationInput, SavingsUncheckedUpdateManyInput>
    /**
     * Filter which Savings to update
     */
    where?: SavingsWhereInput
  }

  /**
   * Savings upsert
   */
  export type SavingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Savings to update in case it exists.
     */
    where: SavingsWhereUniqueInput
    /**
     * In case the Savings found by the `where` argument doesn't exist, create a new Savings with this data.
     */
    create: XOR<SavingsCreateInput, SavingsUncheckedCreateInput>
    /**
     * In case the Savings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingsUpdateInput, SavingsUncheckedUpdateInput>
  }

  /**
   * Savings delete
   */
  export type SavingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    /**
     * Filter which Savings to delete.
     */
    where: SavingsWhereUniqueInput
  }

  /**
   * Savings deleteMany
   */
  export type SavingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Savings to delete
     */
    where?: SavingsWhereInput
  }

  /**
   * Savings.group
   */
  export type Savings$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    where?: GroupsWhereInput
  }

  /**
   * Savings.transactions
   */
  export type Savings$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Savings without action
   */
  export type SavingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
  }


  /**
   * Model Groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsMinAggregateOutputType = {
    group_id: string | null
    group_name: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type GroupsMaxAggregateOutputType = {
    group_id: string | null
    group_name: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type GroupsCountAggregateOutputType = {
    group_id: number
    group_name: number
    created_by: number
    created_at: number
    _all: number
  }


  export type GroupsMinAggregateInputType = {
    group_id?: true
    group_name?: true
    created_by?: true
    created_at?: true
  }

  export type GroupsMaxAggregateInputType = {
    group_id?: true
    group_name?: true
    created_by?: true
    created_at?: true
  }

  export type GroupsCountAggregateInputType = {
    group_id?: true
    group_name?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to aggregate.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type GroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupsWhereInput
    orderBy?: GroupsOrderByWithAggregationInput | GroupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: GroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    group_id: string
    group_name: string
    created_by: string
    created_at: Date
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends GroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type GroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    group_id?: boolean
    group_name?: boolean
    created_by?: boolean
    created_at?: boolean
    creator?: boolean | UsersDefaultArgs<ExtArgs>
    savings?: boolean | Groups$savingsArgs<ExtArgs>
    members?: boolean | Groups$membersArgs<ExtArgs>
    transactions?: boolean | Groups$transactionsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type GroupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    group_id?: boolean
    group_name?: boolean
    created_by?: boolean
    created_at?: boolean
    creator?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type GroupsSelectScalar = {
    group_id?: boolean
    group_name?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type GroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UsersDefaultArgs<ExtArgs>
    savings?: boolean | Groups$savingsArgs<ExtArgs>
    members?: boolean | Groups$membersArgs<ExtArgs>
    transactions?: boolean | Groups$transactionsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $GroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Groups"
    objects: {
      creator: Prisma.$UsersPayload<ExtArgs>
      savings: Prisma.$SavingsPayload<ExtArgs>[]
      members: Prisma.$GroupMembersPayload<ExtArgs>[]
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      group_id: string
      group_name: string
      created_by: string
      created_at: Date
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type GroupsGetPayload<S extends boolean | null | undefined | GroupsDefaultArgs> = $Result.GetResult<Prisma.$GroupsPayload, S>

  type GroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface GroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Groups'], meta: { name: 'Groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {GroupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupsFindUniqueArgs>(args: SelectSubset<T, GroupsFindUniqueArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupsFindFirstArgs>(args?: SelectSubset<T, GroupsFindFirstArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `group_id`
     * const groupsWithGroup_idOnly = await prisma.groups.findMany({ select: { group_id: true } })
     * 
     */
    findMany<T extends GroupsFindManyArgs>(args?: SelectSubset<T, GroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Groups.
     * @param {GroupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends GroupsCreateArgs>(args: SelectSubset<T, GroupsCreateArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Groups.
     * @param {GroupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupsCreateManyArgs>(args?: SelectSubset<T, GroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupsCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `group_id`
     * const groupsWithGroup_idOnly = await prisma.groups.createManyAndReturn({ 
     *   select: { group_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupsCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Groups.
     * @param {GroupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends GroupsDeleteArgs>(args: SelectSubset<T, GroupsDeleteArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Groups.
     * @param {GroupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupsUpdateArgs>(args: SelectSubset<T, GroupsUpdateArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupsDeleteManyArgs>(args?: SelectSubset<T, GroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupsUpdateManyArgs>(args: SelectSubset<T, GroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Groups.
     * @param {GroupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends GroupsUpsertArgs>(args: SelectSubset<T, GroupsUpsertArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupsCountArgs>(
      args?: Subset<T, GroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsGroupByArgs} args - Group by arguments.
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
      T extends GroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupsGroupByArgs['orderBy'] }
        : { orderBy?: GroupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Groups model
   */
  readonly fields: GroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    savings<T extends Groups$savingsArgs<ExtArgs> = {}>(args?: Subset<T, Groups$savingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findMany"> | Null>
    members<T extends Groups$membersArgs<ExtArgs> = {}>(args?: Subset<T, Groups$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends Groups$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Groups$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Groups model
   */ 
  interface GroupsFieldRefs {
    readonly group_id: FieldRef<"Groups", 'String'>
    readonly group_name: FieldRef<"Groups", 'String'>
    readonly created_by: FieldRef<"Groups", 'String'>
    readonly created_at: FieldRef<"Groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Groups findUnique
   */
  export type GroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups findUniqueOrThrow
   */
  export type GroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups findFirst
   */
  export type GroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Groups findFirstOrThrow
   */
  export type GroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Groups findMany
   */
  export type GroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupsOrderByWithRelationInput | GroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * Groups create
   */
  export type GroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a Groups.
     */
    data: XOR<GroupsCreateInput, GroupsUncheckedCreateInput>
  }

  /**
   * Groups createMany
   */
  export type GroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupsCreateManyInput | GroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Groups createManyAndReturn
   */
  export type GroupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupsCreateManyInput | GroupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Groups update
   */
  export type GroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a Groups.
     */
    data: XOR<GroupsUpdateInput, GroupsUncheckedUpdateInput>
    /**
     * Choose, which Groups to update.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups updateMany
   */
  export type GroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupsUpdateManyMutationInput, GroupsUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupsWhereInput
  }

  /**
   * Groups upsert
   */
  export type GroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the Groups to update in case it exists.
     */
    where: GroupsWhereUniqueInput
    /**
     * In case the Groups found by the `where` argument doesn't exist, create a new Groups with this data.
     */
    create: XOR<GroupsCreateInput, GroupsUncheckedCreateInput>
    /**
     * In case the Groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupsUpdateInput, GroupsUncheckedUpdateInput>
  }

  /**
   * Groups delete
   */
  export type GroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    /**
     * Filter which Groups to delete.
     */
    where: GroupsWhereUniqueInput
  }

  /**
   * Groups deleteMany
   */
  export type GroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupsWhereInput
  }

  /**
   * Groups.savings
   */
  export type Groups$savingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Savings
     */
    select?: SavingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsInclude<ExtArgs> | null
    where?: SavingsWhereInput
    orderBy?: SavingsOrderByWithRelationInput | SavingsOrderByWithRelationInput[]
    cursor?: SavingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavingsScalarFieldEnum | SavingsScalarFieldEnum[]
  }

  /**
   * Groups.members
   */
  export type Groups$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    where?: GroupMembersWhereInput
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    cursor?: GroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * Groups.transactions
   */
  export type Groups$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Groups without action
   */
  export type GroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
  }


  /**
   * Model GroupMembers
   */

  export type AggregateGroupMembers = {
    _count: GroupMembersCountAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  export type GroupMembersMinAggregateOutputType = {
    member_id: string | null
    group_id: string | null
    user_id: string | null
    role: $Enums.GroupRoles | null
    joined_at: Date | null
  }

  export type GroupMembersMaxAggregateOutputType = {
    member_id: string | null
    group_id: string | null
    user_id: string | null
    role: $Enums.GroupRoles | null
    joined_at: Date | null
  }

  export type GroupMembersCountAggregateOutputType = {
    member_id: number
    group_id: number
    user_id: number
    role: number
    joined_at: number
    _all: number
  }


  export type GroupMembersMinAggregateInputType = {
    member_id?: true
    group_id?: true
    user_id?: true
    role?: true
    joined_at?: true
  }

  export type GroupMembersMaxAggregateInputType = {
    member_id?: true
    group_id?: true
    user_id?: true
    role?: true
    joined_at?: true
  }

  export type GroupMembersCountAggregateInputType = {
    member_id?: true
    group_id?: true
    user_id?: true
    role?: true
    joined_at?: true
    _all?: true
  }

  export type GroupMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to aggregate.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMembersMaxAggregateInputType
  }

  export type GetGroupMembersAggregateType<T extends GroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMembers[P]>
      : GetScalarType<T[P], AggregateGroupMembers[P]>
  }




  export type GroupMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembersWhereInput
    orderBy?: GroupMembersOrderByWithAggregationInput | GroupMembersOrderByWithAggregationInput[]
    by: GroupMembersScalarFieldEnum[] | GroupMembersScalarFieldEnum
    having?: GroupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMembersCountAggregateInputType | true
    _min?: GroupMembersMinAggregateInputType
    _max?: GroupMembersMaxAggregateInputType
  }

  export type GroupMembersGroupByOutputType = {
    member_id: string
    group_id: string
    user_id: string
    role: $Enums.GroupRoles
    joined_at: Date
    _count: GroupMembersCountAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  type GetGroupMembersGroupByPayload<T extends GroupMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
        }
      >
    >


  export type GroupMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    group_id?: boolean
    user_id?: boolean
    role?: boolean
    joined_at?: boolean
    group?: boolean | GroupsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembers"]>

  export type GroupMembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    group_id?: boolean
    user_id?: boolean
    role?: boolean
    joined_at?: boolean
    group?: boolean | GroupsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembers"]>

  export type GroupMembersSelectScalar = {
    member_id?: boolean
    group_id?: boolean
    user_id?: boolean
    role?: boolean
    joined_at?: boolean
  }

  export type GroupMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type GroupMembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $GroupMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMembers"
    objects: {
      group: Prisma.$GroupsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: string
      group_id: string
      user_id: string
      role: $Enums.GroupRoles
      joined_at: Date
    }, ExtArgs["result"]["groupMembers"]>
    composites: {}
  }

  type GroupMembersGetPayload<S extends boolean | null | undefined | GroupMembersDefaultArgs> = $Result.GetResult<Prisma.$GroupMembersPayload, S>

  type GroupMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupMembersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupMembersCountAggregateInputType | true
    }

  export interface GroupMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMembers'], meta: { name: 'GroupMembers' } }
    /**
     * Find zero or one GroupMembers that matches the filter.
     * @param {GroupMembersFindUniqueArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMembersFindUniqueArgs>(args: SelectSubset<T, GroupMembersFindUniqueArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GroupMembers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupMembersFindUniqueOrThrowArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindFirstArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMembersFindFirstArgs>(args?: SelectSubset<T, GroupMembersFindFirstArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GroupMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindFirstOrThrowArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const groupMembersWithMember_idOnly = await prisma.groupMembers.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends GroupMembersFindManyArgs>(args?: SelectSubset<T, GroupMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GroupMembers.
     * @param {GroupMembersCreateArgs} args - Arguments to create a GroupMembers.
     * @example
     * // Create one GroupMembers
     * const GroupMembers = await prisma.groupMembers.create({
     *   data: {
     *     // ... data to create a GroupMembers
     *   }
     * })
     * 
     */
    create<T extends GroupMembersCreateArgs>(args: SelectSubset<T, GroupMembersCreateArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GroupMembers.
     * @param {GroupMembersCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMembers = await prisma.groupMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMembersCreateManyArgs>(args?: SelectSubset<T, GroupMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMembersCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMembers = await prisma.groupMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `member_id`
     * const groupMembersWithMember_idOnly = await prisma.groupMembers.createManyAndReturn({ 
     *   select: { member_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMembersCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GroupMembers.
     * @param {GroupMembersDeleteArgs} args - Arguments to delete one GroupMembers.
     * @example
     * // Delete one GroupMembers
     * const GroupMembers = await prisma.groupMembers.delete({
     *   where: {
     *     // ... filter to delete one GroupMembers
     *   }
     * })
     * 
     */
    delete<T extends GroupMembersDeleteArgs>(args: SelectSubset<T, GroupMembersDeleteArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GroupMembers.
     * @param {GroupMembersUpdateArgs} args - Arguments to update one GroupMembers.
     * @example
     * // Update one GroupMembers
     * const groupMembers = await prisma.groupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMembersUpdateArgs>(args: SelectSubset<T, GroupMembersUpdateArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMembersDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMembersDeleteManyArgs>(args?: SelectSubset<T, GroupMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMembers = await prisma.groupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMembersUpdateManyArgs>(args: SelectSubset<T, GroupMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMembers.
     * @param {GroupMembersUpsertArgs} args - Arguments to update or create a GroupMembers.
     * @example
     * // Update or create a GroupMembers
     * const groupMembers = await prisma.groupMembers.upsert({
     *   create: {
     *     // ... data to create a GroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMembers we want to update
     *   }
     * })
     */
    upsert<T extends GroupMembersUpsertArgs>(args: SelectSubset<T, GroupMembersUpsertArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMembers.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMembersCountArgs>(
      args?: Subset<T, GroupMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMembersAggregateArgs>(args: Subset<T, GroupMembersAggregateArgs>): Prisma.PrismaPromise<GetGroupMembersAggregateType<T>>

    /**
     * Group by GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersGroupByArgs} args - Group by arguments.
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
      T extends GroupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMembersGroupByArgs['orderBy'] }
        : { orderBy?: GroupMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMembers model
   */
  readonly fields: GroupMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupsDefaultArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the GroupMembers model
   */ 
  interface GroupMembersFieldRefs {
    readonly member_id: FieldRef<"GroupMembers", 'String'>
    readonly group_id: FieldRef<"GroupMembers", 'String'>
    readonly user_id: FieldRef<"GroupMembers", 'String'>
    readonly role: FieldRef<"GroupMembers", 'GroupRoles'>
    readonly joined_at: FieldRef<"GroupMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMembers findUnique
   */
  export type GroupMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers findUniqueOrThrow
   */
  export type GroupMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers findFirst
   */
  export type GroupMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * GroupMembers findFirstOrThrow
   */
  export type GroupMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * GroupMembers findMany
   */
  export type GroupMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * GroupMembers create
   */
  export type GroupMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMembers.
     */
    data: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
  }

  /**
   * GroupMembers createMany
   */
  export type GroupMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMembersCreateManyInput | GroupMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMembers createManyAndReturn
   */
  export type GroupMembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMembersCreateManyInput | GroupMembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMembers update
   */
  export type GroupMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMembers.
     */
    data: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
    /**
     * Choose, which GroupMembers to update.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers updateMany
   */
  export type GroupMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMembersWhereInput
  }

  /**
   * GroupMembers upsert
   */
  export type GroupMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMembers to update in case it exists.
     */
    where: GroupMembersWhereUniqueInput
    /**
     * In case the GroupMembers found by the `where` argument doesn't exist, create a new GroupMembers with this data.
     */
    create: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
    /**
     * In case the GroupMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
  }

  /**
   * GroupMembers delete
   */
  export type GroupMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter which GroupMembers to delete.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers deleteMany
   */
  export type GroupMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMembersWhereInput
  }

  /**
   * GroupMembers without action
   */
  export type GroupMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionsMinAggregateOutputType = {
    transaction_id: string | null
    user_id: string | null
    group_id: string | null
    saving_id: string | null
    type: $Enums.TransactionTypes | null
    amount: Decimal | null
    created_at: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    transaction_id: string | null
    user_id: string | null
    group_id: string | null
    saving_id: string | null
    type: $Enums.TransactionTypes | null
    amount: Decimal | null
    created_at: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    transaction_id: number
    user_id: number
    group_id: number
    saving_id: number
    type: number
    amount: number
    created_at: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    transaction_id?: true
    user_id?: true
    group_id?: true
    saving_id?: true
    type?: true
    amount?: true
    created_at?: true
  }

  export type TransactionsMaxAggregateInputType = {
    transaction_id?: true
    user_id?: true
    group_id?: true
    saving_id?: true
    type?: true
    amount?: true
    created_at?: true
  }

  export type TransactionsCountAggregateInputType = {
    transaction_id?: true
    user_id?: true
    group_id?: true
    saving_id?: true
    type?: true
    amount?: true
    created_at?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    transaction_id: string
    user_id: string
    group_id: string | null
    saving_id: string
    type: $Enums.TransactionTypes
    amount: Decimal
    created_at: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    user_id?: boolean
    group_id?: boolean
    saving_id?: boolean
    type?: boolean
    amount?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Transactions$groupArgs<ExtArgs>
    saving?: boolean | SavingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    user_id?: boolean
    group_id?: boolean
    saving_id?: boolean
    type?: boolean
    amount?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Transactions$groupArgs<ExtArgs>
    saving?: boolean | SavingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    transaction_id?: boolean
    user_id?: boolean
    group_id?: boolean
    saving_id?: boolean
    type?: boolean
    amount?: boolean
    created_at?: boolean
  }

  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Transactions$groupArgs<ExtArgs>
    saving?: boolean | SavingsDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    group?: boolean | Transactions$groupArgs<ExtArgs>
    saving?: boolean | SavingsDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      group: Prisma.$GroupsPayload<ExtArgs> | null
      saving: Prisma.$SavingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: string
      user_id: string
      group_id: string | null
      saving_id: string
      type: $Enums.TransactionTypes
      amount: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.findMany({ select: { transaction_id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { transaction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    group<T extends Transactions$groupArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$groupArgs<ExtArgs>>): Prisma__GroupsClient<$Result.GetResult<Prisma.$GroupsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    saving<T extends SavingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavingsDefaultArgs<ExtArgs>>): Prisma__SavingsClient<$Result.GetResult<Prisma.$SavingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Transactions model
   */ 
  interface TransactionsFieldRefs {
    readonly transaction_id: FieldRef<"Transactions", 'String'>
    readonly user_id: FieldRef<"Transactions", 'String'>
    readonly group_id: FieldRef<"Transactions", 'String'>
    readonly saving_id: FieldRef<"Transactions", 'String'>
    readonly type: FieldRef<"Transactions", 'TransactionTypes'>
    readonly amount: FieldRef<"Transactions", 'Decimal'>
    readonly created_at: FieldRef<"Transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions.group
   */
  export type Transactions$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groups
     */
    select?: GroupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupsInclude<ExtArgs> | null
    where?: GroupsWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SavingsScalarFieldEnum: {
    saving_id: 'saving_id',
    user_id: 'user_id',
    group_id: 'group_id',
    amount: 'amount',
    type: 'type',
    created_at: 'created_at'
  };

  export type SavingsScalarFieldEnum = (typeof SavingsScalarFieldEnum)[keyof typeof SavingsScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    group_id: 'group_id',
    group_name: 'group_name',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const GroupMembersScalarFieldEnum: {
    member_id: 'member_id',
    group_id: 'group_id',
    user_id: 'user_id',
    role: 'role',
    joined_at: 'joined_at'
  };

  export type GroupMembersScalarFieldEnum = (typeof GroupMembersScalarFieldEnum)[keyof typeof GroupMembersScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    transaction_id: 'transaction_id',
    user_id: 'user_id',
    group_id: 'group_id',
    saving_id: 'saving_id',
    type: 'type',
    amount: 'amount',
    created_at: 'created_at'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'SavingTypes'
   */
  export type EnumSavingTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SavingTypes'>
    


  /**
   * Reference to a field of type 'SavingTypes[]'
   */
  export type ListEnumSavingTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SavingTypes[]'>
    


  /**
   * Reference to a field of type 'GroupRoles'
   */
  export type EnumGroupRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupRoles'>
    


  /**
   * Reference to a field of type 'GroupRoles[]'
   */
  export type ListEnumGroupRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupRoles[]'>
    


  /**
   * Reference to a field of type 'TransactionTypes'
   */
  export type EnumTransactionTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionTypes'>
    


  /**
   * Reference to a field of type 'TransactionTypes[]'
   */
  export type ListEnumTransactionTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionTypes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: UuidFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    savings?: SavingsListRelationFilter
    groups?: GroupsListRelationFilter
    groupMembers?: GroupMembersListRelationFilter
    transaction?: TransactionsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    savings?: SavingsOrderByRelationAggregateInput
    groups?: GroupsOrderByRelationAggregateInput
    groupMembers?: GroupMembersOrderByRelationAggregateInput
    transaction?: TransactionsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    savings?: SavingsListRelationFilter
    groups?: GroupsListRelationFilter
    groupMembers?: GroupMembersListRelationFilter
    transaction?: TransactionsListRelationFilter
  }, "user_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type SavingsWhereInput = {
    AND?: SavingsWhereInput | SavingsWhereInput[]
    OR?: SavingsWhereInput[]
    NOT?: SavingsWhereInput | SavingsWhereInput[]
    saving_id?: UuidFilter<"Savings"> | string
    user_id?: UuidFilter<"Savings"> | string
    group_id?: UuidNullableFilter<"Savings"> | string | null
    amount?: DecimalFilter<"Savings"> | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFilter<"Savings"> | $Enums.SavingTypes
    created_at?: DateTimeFilter<"Savings"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    group?: XOR<GroupsNullableRelationFilter, GroupsWhereInput> | null
    transactions?: TransactionsListRelationFilter
  }

  export type SavingsOrderByWithRelationInput = {
    saving_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    group?: GroupsOrderByWithRelationInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type SavingsWhereUniqueInput = Prisma.AtLeast<{
    saving_id?: string
    AND?: SavingsWhereInput | SavingsWhereInput[]
    OR?: SavingsWhereInput[]
    NOT?: SavingsWhereInput | SavingsWhereInput[]
    user_id?: UuidFilter<"Savings"> | string
    group_id?: UuidNullableFilter<"Savings"> | string | null
    amount?: DecimalFilter<"Savings"> | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFilter<"Savings"> | $Enums.SavingTypes
    created_at?: DateTimeFilter<"Savings"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    group?: XOR<GroupsNullableRelationFilter, GroupsWhereInput> | null
    transactions?: TransactionsListRelationFilter
  }, "saving_id">

  export type SavingsOrderByWithAggregationInput = {
    saving_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    _count?: SavingsCountOrderByAggregateInput
    _avg?: SavingsAvgOrderByAggregateInput
    _max?: SavingsMaxOrderByAggregateInput
    _min?: SavingsMinOrderByAggregateInput
    _sum?: SavingsSumOrderByAggregateInput
  }

  export type SavingsScalarWhereWithAggregatesInput = {
    AND?: SavingsScalarWhereWithAggregatesInput | SavingsScalarWhereWithAggregatesInput[]
    OR?: SavingsScalarWhereWithAggregatesInput[]
    NOT?: SavingsScalarWhereWithAggregatesInput | SavingsScalarWhereWithAggregatesInput[]
    saving_id?: UuidWithAggregatesFilter<"Savings"> | string
    user_id?: UuidWithAggregatesFilter<"Savings"> | string
    group_id?: UuidNullableWithAggregatesFilter<"Savings"> | string | null
    amount?: DecimalWithAggregatesFilter<"Savings"> | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesWithAggregatesFilter<"Savings"> | $Enums.SavingTypes
    created_at?: DateTimeWithAggregatesFilter<"Savings"> | Date | string
  }

  export type GroupsWhereInput = {
    AND?: GroupsWhereInput | GroupsWhereInput[]
    OR?: GroupsWhereInput[]
    NOT?: GroupsWhereInput | GroupsWhereInput[]
    group_id?: UuidFilter<"Groups"> | string
    group_name?: StringFilter<"Groups"> | string
    created_by?: UuidFilter<"Groups"> | string
    created_at?: DateTimeFilter<"Groups"> | Date | string
    creator?: XOR<UsersRelationFilter, UsersWhereInput>
    savings?: SavingsListRelationFilter
    members?: GroupMembersListRelationFilter
    transactions?: TransactionsListRelationFilter
  }

  export type GroupsOrderByWithRelationInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    creator?: UsersOrderByWithRelationInput
    savings?: SavingsOrderByRelationAggregateInput
    members?: GroupMembersOrderByRelationAggregateInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type GroupsWhereUniqueInput = Prisma.AtLeast<{
    group_id?: string
    AND?: GroupsWhereInput | GroupsWhereInput[]
    OR?: GroupsWhereInput[]
    NOT?: GroupsWhereInput | GroupsWhereInput[]
    group_name?: StringFilter<"Groups"> | string
    created_by?: UuidFilter<"Groups"> | string
    created_at?: DateTimeFilter<"Groups"> | Date | string
    creator?: XOR<UsersRelationFilter, UsersWhereInput>
    savings?: SavingsListRelationFilter
    members?: GroupMembersListRelationFilter
    transactions?: TransactionsListRelationFilter
  }, "group_id">

  export type GroupsOrderByWithAggregationInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    _count?: GroupsCountOrderByAggregateInput
    _max?: GroupsMaxOrderByAggregateInput
    _min?: GroupsMinOrderByAggregateInput
  }

  export type GroupsScalarWhereWithAggregatesInput = {
    AND?: GroupsScalarWhereWithAggregatesInput | GroupsScalarWhereWithAggregatesInput[]
    OR?: GroupsScalarWhereWithAggregatesInput[]
    NOT?: GroupsScalarWhereWithAggregatesInput | GroupsScalarWhereWithAggregatesInput[]
    group_id?: UuidWithAggregatesFilter<"Groups"> | string
    group_name?: StringWithAggregatesFilter<"Groups"> | string
    created_by?: UuidWithAggregatesFilter<"Groups"> | string
    created_at?: DateTimeWithAggregatesFilter<"Groups"> | Date | string
  }

  export type GroupMembersWhereInput = {
    AND?: GroupMembersWhereInput | GroupMembersWhereInput[]
    OR?: GroupMembersWhereInput[]
    NOT?: GroupMembersWhereInput | GroupMembersWhereInput[]
    member_id?: UuidFilter<"GroupMembers"> | string
    group_id?: UuidFilter<"GroupMembers"> | string
    user_id?: UuidFilter<"GroupMembers"> | string
    role?: EnumGroupRolesFilter<"GroupMembers"> | $Enums.GroupRoles
    joined_at?: DateTimeFilter<"GroupMembers"> | Date | string
    group?: XOR<GroupsRelationFilter, GroupsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type GroupMembersOrderByWithRelationInput = {
    member_id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    group?: GroupsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type GroupMembersWhereUniqueInput = Prisma.AtLeast<{
    member_id?: string
    AND?: GroupMembersWhereInput | GroupMembersWhereInput[]
    OR?: GroupMembersWhereInput[]
    NOT?: GroupMembersWhereInput | GroupMembersWhereInput[]
    group_id?: UuidFilter<"GroupMembers"> | string
    user_id?: UuidFilter<"GroupMembers"> | string
    role?: EnumGroupRolesFilter<"GroupMembers"> | $Enums.GroupRoles
    joined_at?: DateTimeFilter<"GroupMembers"> | Date | string
    group?: XOR<GroupsRelationFilter, GroupsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "member_id">

  export type GroupMembersOrderByWithAggregationInput = {
    member_id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    _count?: GroupMembersCountOrderByAggregateInput
    _max?: GroupMembersMaxOrderByAggregateInput
    _min?: GroupMembersMinOrderByAggregateInput
  }

  export type GroupMembersScalarWhereWithAggregatesInput = {
    AND?: GroupMembersScalarWhereWithAggregatesInput | GroupMembersScalarWhereWithAggregatesInput[]
    OR?: GroupMembersScalarWhereWithAggregatesInput[]
    NOT?: GroupMembersScalarWhereWithAggregatesInput | GroupMembersScalarWhereWithAggregatesInput[]
    member_id?: UuidWithAggregatesFilter<"GroupMembers"> | string
    group_id?: UuidWithAggregatesFilter<"GroupMembers"> | string
    user_id?: UuidWithAggregatesFilter<"GroupMembers"> | string
    role?: EnumGroupRolesWithAggregatesFilter<"GroupMembers"> | $Enums.GroupRoles
    joined_at?: DateTimeWithAggregatesFilter<"GroupMembers"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    transaction_id?: UuidFilter<"Transactions"> | string
    user_id?: UuidFilter<"Transactions"> | string
    group_id?: UuidNullableFilter<"Transactions"> | string | null
    saving_id?: UuidFilter<"Transactions"> | string
    type?: EnumTransactionTypesFilter<"Transactions"> | $Enums.TransactionTypes
    amount?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    group?: XOR<GroupsNullableRelationFilter, GroupsWhereInput> | null
    saving?: XOR<SavingsRelationFilter, SavingsWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    saving_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    group?: GroupsOrderByWithRelationInput
    saving?: SavingsOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    user_id?: UuidFilter<"Transactions"> | string
    group_id?: UuidNullableFilter<"Transactions"> | string | null
    saving_id?: UuidFilter<"Transactions"> | string
    type?: EnumTransactionTypesFilter<"Transactions"> | $Enums.TransactionTypes
    amount?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    group?: XOR<GroupsNullableRelationFilter, GroupsWhereInput> | null
    saving?: XOR<SavingsRelationFilter, SavingsWhereInput>
  }, "transaction_id">

  export type TransactionsOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    saving_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    transaction_id?: UuidWithAggregatesFilter<"Transactions"> | string
    user_id?: UuidWithAggregatesFilter<"Transactions"> | string
    group_id?: UuidNullableWithAggregatesFilter<"Transactions"> | string | null
    saving_id?: UuidWithAggregatesFilter<"Transactions"> | string
    type?: EnumTransactionTypesWithAggregatesFilter<"Transactions"> | $Enums.TransactionTypes
    amount?: DecimalWithAggregatesFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
  }

  export type UsersCreateInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsCreateNestedManyWithoutUserInput
    groups?: GroupsCreateNestedManyWithoutCreatorInput
    groupMembers?: GroupMembersCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupsUncheckedCreateNestedManyWithoutCreatorInput
    groupMembers?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUpdateManyWithoutUserNestedInput
    groups?: GroupsUpdateManyWithoutCreatorNestedInput
    groupMembers?: GroupMembersUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupMembers?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsCreateInput = {
    saving_id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutSavingsInput
    group?: GroupsCreateNestedOneWithoutSavingsInput
    transactions?: TransactionsCreateNestedManyWithoutSavingInput
  }

  export type SavingsUncheckedCreateInput = {
    saving_id?: string
    user_id: string
    group_id?: string | null
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutSavingInput
  }

  export type SavingsUpdateInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSavingsNestedInput
    group?: GroupsUpdateOneWithoutSavingsNestedInput
    transactions?: TransactionsUpdateManyWithoutSavingNestedInput
  }

  export type SavingsUncheckedUpdateInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutSavingNestedInput
  }

  export type SavingsCreateManyInput = {
    saving_id?: string
    user_id: string
    group_id?: string | null
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
  }

  export type SavingsUpdateManyMutationInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsUncheckedUpdateManyInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupsCreateInput = {
    group_id?: string
    group_name: string
    created_at?: Date | string
    creator: UsersCreateNestedOneWithoutGroupsInput
    savings?: SavingsCreateNestedManyWithoutGroupInput
    members?: GroupMembersCreateNestedManyWithoutGroupInput
    transactions?: TransactionsCreateNestedManyWithoutGroupInput
  }

  export type GroupsUncheckedCreateInput = {
    group_id?: string
    group_name: string
    created_by: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupsUpdateInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutGroupsNestedInput
    savings?: SavingsUpdateManyWithoutGroupNestedInput
    members?: GroupMembersUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUpdateManyWithoutGroupNestedInput
  }

  export type GroupsUncheckedUpdateInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMembersUncheckedUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupsCreateManyInput = {
    group_id?: string
    group_name: string
    created_by: string
    created_at?: Date | string
  }

  export type GroupsUpdateManyMutationInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupsUncheckedUpdateManyInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersCreateInput = {
    member_id?: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
    group: GroupsCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMembersUncheckedCreateInput = {
    member_id?: string
    group_id: string
    user_id: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
  }

  export type GroupMembersUpdateInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupsUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMembersUncheckedUpdateInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersCreateManyInput = {
    member_id?: string
    group_id: string
    user_id: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
  }

  export type GroupMembersUpdateManyMutationInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUncheckedUpdateManyInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    transaction_id?: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutTransactionInput
    group?: GroupsCreateNestedOneWithoutTransactionsInput
    saving: SavingsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    transaction_id?: string
    user_id: string
    group_id?: string | null
    saving_id: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type TransactionsUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionNestedInput
    group?: GroupsUpdateOneWithoutTransactionsNestedInput
    saving?: SavingsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    saving_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyInput = {
    transaction_id?: string
    user_id: string
    group_id?: string | null
    saving_id: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type TransactionsUpdateManyMutationInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    saving_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type SavingsListRelationFilter = {
    every?: SavingsWhereInput
    some?: SavingsWhereInput
    none?: SavingsWhereInput
  }

  export type GroupsListRelationFilter = {
    every?: GroupsWhereInput
    some?: GroupsWhereInput
    none?: GroupsWhereInput
  }

  export type GroupMembersListRelationFilter = {
    every?: GroupMembersWhereInput
    some?: GroupMembersWhereInput
    none?: GroupMembersWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type SavingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumSavingTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingTypes | EnumSavingTypesFieldRefInput<$PrismaModel>
    in?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumSavingTypesFilter<$PrismaModel> | $Enums.SavingTypes
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type GroupsNullableRelationFilter = {
    is?: GroupsWhereInput | null
    isNot?: GroupsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SavingsCountOrderByAggregateInput = {
    saving_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type SavingsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SavingsMaxOrderByAggregateInput = {
    saving_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type SavingsMinOrderByAggregateInput = {
    saving_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type SavingsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumSavingTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingTypes | EnumSavingTypesFieldRefInput<$PrismaModel>
    in?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumSavingTypesWithAggregatesFilter<$PrismaModel> | $Enums.SavingTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSavingTypesFilter<$PrismaModel>
    _max?: NestedEnumSavingTypesFilter<$PrismaModel>
  }

  export type GroupsCountOrderByAggregateInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type GroupsMaxOrderByAggregateInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type GroupsMinOrderByAggregateInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type EnumGroupRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRoles | EnumGroupRolesFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRolesFilter<$PrismaModel> | $Enums.GroupRoles
  }

  export type GroupsRelationFilter = {
    is?: GroupsWhereInput
    isNot?: GroupsWhereInput
  }

  export type GroupMembersCountOrderByAggregateInput = {
    member_id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type GroupMembersMaxOrderByAggregateInput = {
    member_id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type GroupMembersMinOrderByAggregateInput = {
    member_id?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type EnumGroupRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRoles | EnumGroupRolesFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRolesWithAggregatesFilter<$PrismaModel> | $Enums.GroupRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupRolesFilter<$PrismaModel>
    _max?: NestedEnumGroupRolesFilter<$PrismaModel>
  }

  export type EnumTransactionTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionTypes | EnumTransactionTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypesFilter<$PrismaModel> | $Enums.TransactionTypes
  }

  export type SavingsRelationFilter = {
    is?: SavingsWhereInput
    isNot?: SavingsWhereInput
  }

  export type TransactionsCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    saving_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    saving_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    saving_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionTypes | EnumTransactionTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypesWithAggregatesFilter<$PrismaModel> | $Enums.TransactionTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypesFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypesFilter<$PrismaModel>
  }

  export type SavingsCreateNestedManyWithoutUserInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
  }

  export type GroupsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupsCreateWithoutCreatorInput, GroupsUncheckedCreateWithoutCreatorInput> | GroupsCreateWithoutCreatorInput[] | GroupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutCreatorInput | GroupsCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupsCreateManyCreatorInputEnvelope
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
  }

  export type GroupMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type SavingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
  }

  export type GroupsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupsCreateWithoutCreatorInput, GroupsUncheckedCreateWithoutCreatorInput> | GroupsCreateWithoutCreatorInput[] | GroupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutCreatorInput | GroupsCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupsCreateManyCreatorInputEnvelope
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
  }

  export type GroupMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SavingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    upsert?: SavingsUpsertWithWhereUniqueWithoutUserInput | SavingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    set?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    disconnect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    delete?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    update?: SavingsUpdateWithWhereUniqueWithoutUserInput | SavingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavingsUpdateManyWithWhereWithoutUserInput | SavingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
  }

  export type GroupsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupsCreateWithoutCreatorInput, GroupsUncheckedCreateWithoutCreatorInput> | GroupsCreateWithoutCreatorInput[] | GroupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutCreatorInput | GroupsCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupsUpsertWithWhereUniqueWithoutCreatorInput | GroupsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupsCreateManyCreatorInputEnvelope
    set?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    disconnect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    delete?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    update?: GroupsUpdateWithWhereUniqueWithoutCreatorInput | GroupsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupsUpdateManyWithWhereWithoutCreatorInput | GroupsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
  }

  export type GroupMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutUserInput | GroupMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutUserInput | GroupMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutUserInput | GroupMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type SavingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput> | SavingsCreateWithoutUserInput[] | SavingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutUserInput | SavingsCreateOrConnectWithoutUserInput[]
    upsert?: SavingsUpsertWithWhereUniqueWithoutUserInput | SavingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavingsCreateManyUserInputEnvelope
    set?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    disconnect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    delete?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    update?: SavingsUpdateWithWhereUniqueWithoutUserInput | SavingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavingsUpdateManyWithWhereWithoutUserInput | SavingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
  }

  export type GroupsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupsCreateWithoutCreatorInput, GroupsUncheckedCreateWithoutCreatorInput> | GroupsCreateWithoutCreatorInput[] | GroupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupsCreateOrConnectWithoutCreatorInput | GroupsCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupsUpsertWithWhereUniqueWithoutCreatorInput | GroupsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupsCreateManyCreatorInputEnvelope
    set?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    disconnect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    delete?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    connect?: GroupsWhereUniqueInput | GroupsWhereUniqueInput[]
    update?: GroupsUpdateWithWhereUniqueWithoutCreatorInput | GroupsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupsUpdateManyWithWhereWithoutCreatorInput | GroupsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
  }

  export type GroupMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutUserInput | GroupMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutUserInput | GroupMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutUserInput | GroupMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutSavingsInput = {
    create?: XOR<UsersCreateWithoutSavingsInput, UsersUncheckedCreateWithoutSavingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavingsInput
    connect?: UsersWhereUniqueInput
  }

  export type GroupsCreateNestedOneWithoutSavingsInput = {
    create?: XOR<GroupsCreateWithoutSavingsInput, GroupsUncheckedCreateWithoutSavingsInput>
    connectOrCreate?: GroupsCreateOrConnectWithoutSavingsInput
    connect?: GroupsWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutSavingInput = {
    create?: XOR<TransactionsCreateWithoutSavingInput, TransactionsUncheckedCreateWithoutSavingInput> | TransactionsCreateWithoutSavingInput[] | TransactionsUncheckedCreateWithoutSavingInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSavingInput | TransactionsCreateOrConnectWithoutSavingInput[]
    createMany?: TransactionsCreateManySavingInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutSavingInput = {
    create?: XOR<TransactionsCreateWithoutSavingInput, TransactionsUncheckedCreateWithoutSavingInput> | TransactionsCreateWithoutSavingInput[] | TransactionsUncheckedCreateWithoutSavingInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSavingInput | TransactionsCreateOrConnectWithoutSavingInput[]
    createMany?: TransactionsCreateManySavingInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumSavingTypesFieldUpdateOperationsInput = {
    set?: $Enums.SavingTypes
  }

  export type UsersUpdateOneRequiredWithoutSavingsNestedInput = {
    create?: XOR<UsersCreateWithoutSavingsInput, UsersUncheckedCreateWithoutSavingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavingsInput
    upsert?: UsersUpsertWithoutSavingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSavingsInput, UsersUpdateWithoutSavingsInput>, UsersUncheckedUpdateWithoutSavingsInput>
  }

  export type GroupsUpdateOneWithoutSavingsNestedInput = {
    create?: XOR<GroupsCreateWithoutSavingsInput, GroupsUncheckedCreateWithoutSavingsInput>
    connectOrCreate?: GroupsCreateOrConnectWithoutSavingsInput
    upsert?: GroupsUpsertWithoutSavingsInput
    disconnect?: GroupsWhereInput | boolean
    delete?: GroupsWhereInput | boolean
    connect?: GroupsWhereUniqueInput
    update?: XOR<XOR<GroupsUpdateToOneWithWhereWithoutSavingsInput, GroupsUpdateWithoutSavingsInput>, GroupsUncheckedUpdateWithoutSavingsInput>
  }

  export type TransactionsUpdateManyWithoutSavingNestedInput = {
    create?: XOR<TransactionsCreateWithoutSavingInput, TransactionsUncheckedCreateWithoutSavingInput> | TransactionsCreateWithoutSavingInput[] | TransactionsUncheckedCreateWithoutSavingInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSavingInput | TransactionsCreateOrConnectWithoutSavingInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutSavingInput | TransactionsUpsertWithWhereUniqueWithoutSavingInput[]
    createMany?: TransactionsCreateManySavingInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutSavingInput | TransactionsUpdateWithWhereUniqueWithoutSavingInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutSavingInput | TransactionsUpdateManyWithWhereWithoutSavingInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TransactionsUncheckedUpdateManyWithoutSavingNestedInput = {
    create?: XOR<TransactionsCreateWithoutSavingInput, TransactionsUncheckedCreateWithoutSavingInput> | TransactionsCreateWithoutSavingInput[] | TransactionsUncheckedCreateWithoutSavingInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutSavingInput | TransactionsCreateOrConnectWithoutSavingInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutSavingInput | TransactionsUpsertWithWhereUniqueWithoutSavingInput[]
    createMany?: TransactionsCreateManySavingInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutSavingInput | TransactionsUpdateWithWhereUniqueWithoutSavingInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutSavingInput | TransactionsUpdateManyWithWhereWithoutSavingInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UsersCreateWithoutGroupsInput, UsersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupsInput
    connect?: UsersWhereUniqueInput
  }

  export type SavingsCreateNestedManyWithoutGroupInput = {
    create?: XOR<SavingsCreateWithoutGroupInput, SavingsUncheckedCreateWithoutGroupInput> | SavingsCreateWithoutGroupInput[] | SavingsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutGroupInput | SavingsCreateOrConnectWithoutGroupInput[]
    createMany?: SavingsCreateManyGroupInputEnvelope
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
  }

  export type GroupMembersCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutGroupInput = {
    create?: XOR<TransactionsCreateWithoutGroupInput, TransactionsUncheckedCreateWithoutGroupInput> | TransactionsCreateWithoutGroupInput[] | TransactionsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutGroupInput | TransactionsCreateOrConnectWithoutGroupInput[]
    createMany?: TransactionsCreateManyGroupInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type SavingsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<SavingsCreateWithoutGroupInput, SavingsUncheckedCreateWithoutGroupInput> | SavingsCreateWithoutGroupInput[] | SavingsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutGroupInput | SavingsCreateOrConnectWithoutGroupInput[]
    createMany?: SavingsCreateManyGroupInputEnvelope
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
  }

  export type GroupMembersUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TransactionsCreateWithoutGroupInput, TransactionsUncheckedCreateWithoutGroupInput> | TransactionsCreateWithoutGroupInput[] | TransactionsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutGroupInput | TransactionsCreateOrConnectWithoutGroupInput[]
    createMany?: TransactionsCreateManyGroupInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UsersCreateWithoutGroupsInput, UsersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupsInput
    upsert?: UsersUpsertWithoutGroupsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutGroupsInput, UsersUpdateWithoutGroupsInput>, UsersUncheckedUpdateWithoutGroupsInput>
  }

  export type SavingsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SavingsCreateWithoutGroupInput, SavingsUncheckedCreateWithoutGroupInput> | SavingsCreateWithoutGroupInput[] | SavingsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutGroupInput | SavingsCreateOrConnectWithoutGroupInput[]
    upsert?: SavingsUpsertWithWhereUniqueWithoutGroupInput | SavingsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SavingsCreateManyGroupInputEnvelope
    set?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    disconnect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    delete?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    update?: SavingsUpdateWithWhereUniqueWithoutGroupInput | SavingsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SavingsUpdateManyWithWhereWithoutGroupInput | SavingsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
  }

  export type GroupMembersUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutGroupInput | GroupMembersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutGroupInput | GroupMembersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutGroupInput | GroupMembersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TransactionsCreateWithoutGroupInput, TransactionsUncheckedCreateWithoutGroupInput> | TransactionsCreateWithoutGroupInput[] | TransactionsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutGroupInput | TransactionsCreateOrConnectWithoutGroupInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutGroupInput | TransactionsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TransactionsCreateManyGroupInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutGroupInput | TransactionsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutGroupInput | TransactionsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type SavingsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SavingsCreateWithoutGroupInput, SavingsUncheckedCreateWithoutGroupInput> | SavingsCreateWithoutGroupInput[] | SavingsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SavingsCreateOrConnectWithoutGroupInput | SavingsCreateOrConnectWithoutGroupInput[]
    upsert?: SavingsUpsertWithWhereUniqueWithoutGroupInput | SavingsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SavingsCreateManyGroupInputEnvelope
    set?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    disconnect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    delete?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    connect?: SavingsWhereUniqueInput | SavingsWhereUniqueInput[]
    update?: SavingsUpdateWithWhereUniqueWithoutGroupInput | SavingsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SavingsUpdateManyWithWhereWithoutGroupInput | SavingsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
  }

  export type GroupMembersUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutGroupInput | GroupMembersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutGroupInput | GroupMembersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutGroupInput | GroupMembersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TransactionsCreateWithoutGroupInput, TransactionsUncheckedCreateWithoutGroupInput> | TransactionsCreateWithoutGroupInput[] | TransactionsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutGroupInput | TransactionsCreateOrConnectWithoutGroupInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutGroupInput | TransactionsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TransactionsCreateManyGroupInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutGroupInput | TransactionsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutGroupInput | TransactionsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type GroupsCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupsCreateWithoutMembersInput, GroupsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupsCreateOrConnectWithoutMembersInput
    connect?: GroupsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<UsersCreateWithoutGroupMembersInput, UsersUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupMembersInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumGroupRolesFieldUpdateOperationsInput = {
    set?: $Enums.GroupRoles
  }

  export type GroupsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupsCreateWithoutMembersInput, GroupsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupsCreateOrConnectWithoutMembersInput
    upsert?: GroupsUpsertWithoutMembersInput
    connect?: GroupsWhereUniqueInput
    update?: XOR<XOR<GroupsUpdateToOneWithWhereWithoutMembersInput, GroupsUpdateWithoutMembersInput>, GroupsUncheckedUpdateWithoutMembersInput>
  }

  export type UsersUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<UsersCreateWithoutGroupMembersInput, UsersUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupMembersInput
    upsert?: UsersUpsertWithoutGroupMembersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutGroupMembersInput, UsersUpdateWithoutGroupMembersInput>, UsersUncheckedUpdateWithoutGroupMembersInput>
  }

  export type UsersCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransactionInput
    connect?: UsersWhereUniqueInput
  }

  export type GroupsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<GroupsCreateWithoutTransactionsInput, GroupsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GroupsCreateOrConnectWithoutTransactionsInput
    connect?: GroupsWhereUniqueInput
  }

  export type SavingsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<SavingsCreateWithoutTransactionsInput, SavingsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SavingsCreateOrConnectWithoutTransactionsInput
    connect?: SavingsWhereUniqueInput
  }

  export type EnumTransactionTypesFieldUpdateOperationsInput = {
    set?: $Enums.TransactionTypes
  }

  export type UsersUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransactionInput
    upsert?: UsersUpsertWithoutTransactionInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTransactionInput, UsersUpdateWithoutTransactionInput>, UsersUncheckedUpdateWithoutTransactionInput>
  }

  export type GroupsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<GroupsCreateWithoutTransactionsInput, GroupsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GroupsCreateOrConnectWithoutTransactionsInput
    upsert?: GroupsUpsertWithoutTransactionsInput
    disconnect?: GroupsWhereInput | boolean
    delete?: GroupsWhereInput | boolean
    connect?: GroupsWhereUniqueInput
    update?: XOR<XOR<GroupsUpdateToOneWithWhereWithoutTransactionsInput, GroupsUpdateWithoutTransactionsInput>, GroupsUncheckedUpdateWithoutTransactionsInput>
  }

  export type SavingsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<SavingsCreateWithoutTransactionsInput, SavingsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SavingsCreateOrConnectWithoutTransactionsInput
    upsert?: SavingsUpsertWithoutTransactionsInput
    connect?: SavingsWhereUniqueInput
    update?: XOR<XOR<SavingsUpdateToOneWithWhereWithoutTransactionsInput, SavingsUpdateWithoutTransactionsInput>, SavingsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumSavingTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingTypes | EnumSavingTypesFieldRefInput<$PrismaModel>
    in?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumSavingTypesFilter<$PrismaModel> | $Enums.SavingTypes
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumSavingTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingTypes | EnumSavingTypesFieldRefInput<$PrismaModel>
    in?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.SavingTypes[] | ListEnumSavingTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumSavingTypesWithAggregatesFilter<$PrismaModel> | $Enums.SavingTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSavingTypesFilter<$PrismaModel>
    _max?: NestedEnumSavingTypesFilter<$PrismaModel>
  }

  export type NestedEnumGroupRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRoles | EnumGroupRolesFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRolesFilter<$PrismaModel> | $Enums.GroupRoles
  }

  export type NestedEnumGroupRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRoles | EnumGroupRolesFieldRefInput<$PrismaModel>
    in?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupRoles[] | ListEnumGroupRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupRolesWithAggregatesFilter<$PrismaModel> | $Enums.GroupRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupRolesFilter<$PrismaModel>
    _max?: NestedEnumGroupRolesFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionTypes | EnumTransactionTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypesFilter<$PrismaModel> | $Enums.TransactionTypes
  }

  export type NestedEnumTransactionTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionTypes | EnumTransactionTypesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionTypes[] | ListEnumTransactionTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypesWithAggregatesFilter<$PrismaModel> | $Enums.TransactionTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypesFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypesFilter<$PrismaModel>
  }

  export type SavingsCreateWithoutUserInput = {
    saving_id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
    group?: GroupsCreateNestedOneWithoutSavingsInput
    transactions?: TransactionsCreateNestedManyWithoutSavingInput
  }

  export type SavingsUncheckedCreateWithoutUserInput = {
    saving_id?: string
    group_id?: string | null
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutSavingInput
  }

  export type SavingsCreateOrConnectWithoutUserInput = {
    where: SavingsWhereUniqueInput
    create: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput>
  }

  export type SavingsCreateManyUserInputEnvelope = {
    data: SavingsCreateManyUserInput | SavingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupsCreateWithoutCreatorInput = {
    group_id?: string
    group_name: string
    created_at?: Date | string
    savings?: SavingsCreateNestedManyWithoutGroupInput
    members?: GroupMembersCreateNestedManyWithoutGroupInput
    transactions?: TransactionsCreateNestedManyWithoutGroupInput
  }

  export type GroupsUncheckedCreateWithoutCreatorInput = {
    group_id?: string
    group_name: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupsCreateOrConnectWithoutCreatorInput = {
    where: GroupsWhereUniqueInput
    create: XOR<GroupsCreateWithoutCreatorInput, GroupsUncheckedCreateWithoutCreatorInput>
  }

  export type GroupsCreateManyCreatorInputEnvelope = {
    data: GroupsCreateManyCreatorInput | GroupsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type GroupMembersCreateWithoutUserInput = {
    member_id?: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
    group: GroupsCreateNestedOneWithoutMembersInput
  }

  export type GroupMembersUncheckedCreateWithoutUserInput = {
    member_id?: string
    group_id: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
  }

  export type GroupMembersCreateOrConnectWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    create: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput>
  }

  export type GroupMembersCreateManyUserInputEnvelope = {
    data: GroupMembersCreateManyUserInput | GroupMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutUserInput = {
    transaction_id?: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    group?: GroupsCreateNestedOneWithoutTransactionsInput
    saving: SavingsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    transaction_id?: string
    group_id?: string | null
    saving_id: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavingsUpsertWithWhereUniqueWithoutUserInput = {
    where: SavingsWhereUniqueInput
    update: XOR<SavingsUpdateWithoutUserInput, SavingsUncheckedUpdateWithoutUserInput>
    create: XOR<SavingsCreateWithoutUserInput, SavingsUncheckedCreateWithoutUserInput>
  }

  export type SavingsUpdateWithWhereUniqueWithoutUserInput = {
    where: SavingsWhereUniqueInput
    data: XOR<SavingsUpdateWithoutUserInput, SavingsUncheckedUpdateWithoutUserInput>
  }

  export type SavingsUpdateManyWithWhereWithoutUserInput = {
    where: SavingsScalarWhereInput
    data: XOR<SavingsUpdateManyMutationInput, SavingsUncheckedUpdateManyWithoutUserInput>
  }

  export type SavingsScalarWhereInput = {
    AND?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
    OR?: SavingsScalarWhereInput[]
    NOT?: SavingsScalarWhereInput | SavingsScalarWhereInput[]
    saving_id?: UuidFilter<"Savings"> | string
    user_id?: UuidFilter<"Savings"> | string
    group_id?: UuidNullableFilter<"Savings"> | string | null
    amount?: DecimalFilter<"Savings"> | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFilter<"Savings"> | $Enums.SavingTypes
    created_at?: DateTimeFilter<"Savings"> | Date | string
  }

  export type GroupsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: GroupsWhereUniqueInput
    update: XOR<GroupsUpdateWithoutCreatorInput, GroupsUncheckedUpdateWithoutCreatorInput>
    create: XOR<GroupsCreateWithoutCreatorInput, GroupsUncheckedCreateWithoutCreatorInput>
  }

  export type GroupsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: GroupsWhereUniqueInput
    data: XOR<GroupsUpdateWithoutCreatorInput, GroupsUncheckedUpdateWithoutCreatorInput>
  }

  export type GroupsUpdateManyWithWhereWithoutCreatorInput = {
    where: GroupsScalarWhereInput
    data: XOR<GroupsUpdateManyMutationInput, GroupsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type GroupsScalarWhereInput = {
    AND?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
    OR?: GroupsScalarWhereInput[]
    NOT?: GroupsScalarWhereInput | GroupsScalarWhereInput[]
    group_id?: UuidFilter<"Groups"> | string
    group_name?: StringFilter<"Groups"> | string
    created_by?: UuidFilter<"Groups"> | string
    created_at?: DateTimeFilter<"Groups"> | Date | string
  }

  export type GroupMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    update: XOR<GroupMembersUpdateWithoutUserInput, GroupMembersUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput>
  }

  export type GroupMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    data: XOR<GroupMembersUpdateWithoutUserInput, GroupMembersUncheckedUpdateWithoutUserInput>
  }

  export type GroupMembersUpdateManyWithWhereWithoutUserInput = {
    where: GroupMembersScalarWhereInput
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMembersScalarWhereInput = {
    AND?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
    OR?: GroupMembersScalarWhereInput[]
    NOT?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
    member_id?: UuidFilter<"GroupMembers"> | string
    group_id?: UuidFilter<"GroupMembers"> | string
    user_id?: UuidFilter<"GroupMembers"> | string
    role?: EnumGroupRolesFilter<"GroupMembers"> | $Enums.GroupRoles
    joined_at?: DateTimeFilter<"GroupMembers"> | Date | string
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    transaction_id?: UuidFilter<"Transactions"> | string
    user_id?: UuidFilter<"Transactions"> | string
    group_id?: UuidNullableFilter<"Transactions"> | string | null
    saving_id?: UuidFilter<"Transactions"> | string
    type?: EnumTransactionTypesFilter<"Transactions"> | $Enums.TransactionTypes
    amount?: DecimalFilter<"Transactions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Transactions"> | Date | string
  }

  export type UsersCreateWithoutSavingsInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    groups?: GroupsCreateNestedManyWithoutCreatorInput
    groupMembers?: GroupMembersCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSavingsInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    groups?: GroupsUncheckedCreateNestedManyWithoutCreatorInput
    groupMembers?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSavingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSavingsInput, UsersUncheckedCreateWithoutSavingsInput>
  }

  export type GroupsCreateWithoutSavingsInput = {
    group_id?: string
    group_name: string
    created_at?: Date | string
    creator: UsersCreateNestedOneWithoutGroupsInput
    members?: GroupMembersCreateNestedManyWithoutGroupInput
    transactions?: TransactionsCreateNestedManyWithoutGroupInput
  }

  export type GroupsUncheckedCreateWithoutSavingsInput = {
    group_id?: string
    group_name: string
    created_by: string
    created_at?: Date | string
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupsCreateOrConnectWithoutSavingsInput = {
    where: GroupsWhereUniqueInput
    create: XOR<GroupsCreateWithoutSavingsInput, GroupsUncheckedCreateWithoutSavingsInput>
  }

  export type TransactionsCreateWithoutSavingInput = {
    transaction_id?: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutTransactionInput
    group?: GroupsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutSavingInput = {
    transaction_id?: string
    user_id: string
    group_id?: string | null
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutSavingInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutSavingInput, TransactionsUncheckedCreateWithoutSavingInput>
  }

  export type TransactionsCreateManySavingInputEnvelope = {
    data: TransactionsCreateManySavingInput | TransactionsCreateManySavingInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutSavingsInput = {
    update: XOR<UsersUpdateWithoutSavingsInput, UsersUncheckedUpdateWithoutSavingsInput>
    create: XOR<UsersCreateWithoutSavingsInput, UsersUncheckedCreateWithoutSavingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSavingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSavingsInput, UsersUncheckedUpdateWithoutSavingsInput>
  }

  export type UsersUpdateWithoutSavingsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupsUpdateManyWithoutCreatorNestedInput
    groupMembers?: GroupMembersUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSavingsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupMembers?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupsUpsertWithoutSavingsInput = {
    update: XOR<GroupsUpdateWithoutSavingsInput, GroupsUncheckedUpdateWithoutSavingsInput>
    create: XOR<GroupsCreateWithoutSavingsInput, GroupsUncheckedCreateWithoutSavingsInput>
    where?: GroupsWhereInput
  }

  export type GroupsUpdateToOneWithWhereWithoutSavingsInput = {
    where?: GroupsWhereInput
    data: XOR<GroupsUpdateWithoutSavingsInput, GroupsUncheckedUpdateWithoutSavingsInput>
  }

  export type GroupsUpdateWithoutSavingsInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutGroupsNestedInput
    members?: GroupMembersUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUpdateManyWithoutGroupNestedInput
  }

  export type GroupsUncheckedUpdateWithoutSavingsInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUncheckedUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutSavingInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutSavingInput, TransactionsUncheckedUpdateWithoutSavingInput>
    create: XOR<TransactionsCreateWithoutSavingInput, TransactionsUncheckedCreateWithoutSavingInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutSavingInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutSavingInput, TransactionsUncheckedUpdateWithoutSavingInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutSavingInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutSavingInput>
  }

  export type UsersCreateWithoutGroupsInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsCreateNestedManyWithoutUserInput
    groupMembers?: GroupMembersCreateNestedManyWithoutUserInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutGroupsInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
    groupMembers?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutGroupsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutGroupsInput, UsersUncheckedCreateWithoutGroupsInput>
  }

  export type SavingsCreateWithoutGroupInput = {
    saving_id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutSavingsInput
    transactions?: TransactionsCreateNestedManyWithoutSavingInput
  }

  export type SavingsUncheckedCreateWithoutGroupInput = {
    saving_id?: string
    user_id: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutSavingInput
  }

  export type SavingsCreateOrConnectWithoutGroupInput = {
    where: SavingsWhereUniqueInput
    create: XOR<SavingsCreateWithoutGroupInput, SavingsUncheckedCreateWithoutGroupInput>
  }

  export type SavingsCreateManyGroupInputEnvelope = {
    data: SavingsCreateManyGroupInput | SavingsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMembersCreateWithoutGroupInput = {
    member_id?: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
    user: UsersCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMembersUncheckedCreateWithoutGroupInput = {
    member_id?: string
    user_id: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
  }

  export type GroupMembersCreateOrConnectWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    create: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembersCreateManyGroupInputEnvelope = {
    data: GroupMembersCreateManyGroupInput | GroupMembersCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutGroupInput = {
    transaction_id?: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutTransactionInput
    saving: SavingsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutGroupInput = {
    transaction_id?: string
    user_id: string
    saving_id: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutGroupInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutGroupInput, TransactionsUncheckedCreateWithoutGroupInput>
  }

  export type TransactionsCreateManyGroupInputEnvelope = {
    data: TransactionsCreateManyGroupInput | TransactionsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutGroupsInput = {
    update: XOR<UsersUpdateWithoutGroupsInput, UsersUncheckedUpdateWithoutGroupsInput>
    create: XOR<UsersCreateWithoutGroupsInput, UsersUncheckedCreateWithoutGroupsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutGroupsInput, UsersUncheckedUpdateWithoutGroupsInput>
  }

  export type UsersUpdateWithoutGroupsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMembersUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutGroupsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
    groupMembers?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavingsUpsertWithWhereUniqueWithoutGroupInput = {
    where: SavingsWhereUniqueInput
    update: XOR<SavingsUpdateWithoutGroupInput, SavingsUncheckedUpdateWithoutGroupInput>
    create: XOR<SavingsCreateWithoutGroupInput, SavingsUncheckedCreateWithoutGroupInput>
  }

  export type SavingsUpdateWithWhereUniqueWithoutGroupInput = {
    where: SavingsWhereUniqueInput
    data: XOR<SavingsUpdateWithoutGroupInput, SavingsUncheckedUpdateWithoutGroupInput>
  }

  export type SavingsUpdateManyWithWhereWithoutGroupInput = {
    where: SavingsScalarWhereInput
    data: XOR<SavingsUpdateManyMutationInput, SavingsUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMembersUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    update: XOR<GroupMembersUpdateWithoutGroupInput, GroupMembersUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembersUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    data: XOR<GroupMembersUpdateWithoutGroupInput, GroupMembersUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMembersUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMembersScalarWhereInput
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyWithoutGroupInput>
  }

  export type TransactionsUpsertWithWhereUniqueWithoutGroupInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutGroupInput, TransactionsUncheckedUpdateWithoutGroupInput>
    create: XOR<TransactionsCreateWithoutGroupInput, TransactionsUncheckedCreateWithoutGroupInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutGroupInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutGroupInput, TransactionsUncheckedUpdateWithoutGroupInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutGroupInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupsCreateWithoutMembersInput = {
    group_id?: string
    group_name: string
    created_at?: Date | string
    creator: UsersCreateNestedOneWithoutGroupsInput
    savings?: SavingsCreateNestedManyWithoutGroupInput
    transactions?: TransactionsCreateNestedManyWithoutGroupInput
  }

  export type GroupsUncheckedCreateWithoutMembersInput = {
    group_id?: string
    group_name: string
    created_by: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutGroupInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupsCreateOrConnectWithoutMembersInput = {
    where: GroupsWhereUniqueInput
    create: XOR<GroupsCreateWithoutMembersInput, GroupsUncheckedCreateWithoutMembersInput>
  }

  export type UsersCreateWithoutGroupMembersInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsCreateNestedManyWithoutUserInput
    groups?: GroupsCreateNestedManyWithoutCreatorInput
    transaction?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutGroupMembersInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupsUncheckedCreateNestedManyWithoutCreatorInput
    transaction?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutGroupMembersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutGroupMembersInput, UsersUncheckedCreateWithoutGroupMembersInput>
  }

  export type GroupsUpsertWithoutMembersInput = {
    update: XOR<GroupsUpdateWithoutMembersInput, GroupsUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupsCreateWithoutMembersInput, GroupsUncheckedCreateWithoutMembersInput>
    where?: GroupsWhereInput
  }

  export type GroupsUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupsWhereInput
    data: XOR<GroupsUpdateWithoutMembersInput, GroupsUncheckedUpdateWithoutMembersInput>
  }

  export type GroupsUpdateWithoutMembersInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutGroupsNestedInput
    savings?: SavingsUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUpdateManyWithoutGroupNestedInput
  }

  export type GroupsUncheckedUpdateWithoutMembersInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UsersUpsertWithoutGroupMembersInput = {
    update: XOR<UsersUpdateWithoutGroupMembersInput, UsersUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<UsersCreateWithoutGroupMembersInput, UsersUncheckedCreateWithoutGroupMembersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutGroupMembersInput, UsersUncheckedUpdateWithoutGroupMembersInput>
  }

  export type UsersUpdateWithoutGroupMembersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUpdateManyWithoutUserNestedInput
    groups?: GroupsUpdateManyWithoutCreatorNestedInput
    transaction?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutGroupMembersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupsUncheckedUpdateManyWithoutCreatorNestedInput
    transaction?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutTransactionInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsCreateNestedManyWithoutUserInput
    groups?: GroupsCreateNestedManyWithoutCreatorInput
    groupMembers?: GroupMembersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTransactionInput = {
    user_id?: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupsUncheckedCreateNestedManyWithoutCreatorInput
    groupMembers?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTransactionInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
  }

  export type GroupsCreateWithoutTransactionsInput = {
    group_id?: string
    group_name: string
    created_at?: Date | string
    creator: UsersCreateNestedOneWithoutGroupsInput
    savings?: SavingsCreateNestedManyWithoutGroupInput
    members?: GroupMembersCreateNestedManyWithoutGroupInput
  }

  export type GroupsUncheckedCreateWithoutTransactionsInput = {
    group_id?: string
    group_name: string
    created_by: string
    created_at?: Date | string
    savings?: SavingsUncheckedCreateNestedManyWithoutGroupInput
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupsCreateOrConnectWithoutTransactionsInput = {
    where: GroupsWhereUniqueInput
    create: XOR<GroupsCreateWithoutTransactionsInput, GroupsUncheckedCreateWithoutTransactionsInput>
  }

  export type SavingsCreateWithoutTransactionsInput = {
    saving_id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutSavingsInput
    group?: GroupsCreateNestedOneWithoutSavingsInput
  }

  export type SavingsUncheckedCreateWithoutTransactionsInput = {
    saving_id?: string
    user_id: string
    group_id?: string | null
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
  }

  export type SavingsCreateOrConnectWithoutTransactionsInput = {
    where: SavingsWhereUniqueInput
    create: XOR<SavingsCreateWithoutTransactionsInput, SavingsUncheckedCreateWithoutTransactionsInput>
  }

  export type UsersUpsertWithoutTransactionInput = {
    update: XOR<UsersUpdateWithoutTransactionInput, UsersUncheckedUpdateWithoutTransactionInput>
    create: XOR<UsersCreateWithoutTransactionInput, UsersUncheckedCreateWithoutTransactionInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTransactionInput, UsersUncheckedUpdateWithoutTransactionInput>
  }

  export type UsersUpdateWithoutTransactionInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUpdateManyWithoutUserNestedInput
    groups?: GroupsUpdateManyWithoutCreatorNestedInput
    groupMembers?: GroupMembersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTransactionInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupMembers?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupsUpsertWithoutTransactionsInput = {
    update: XOR<GroupsUpdateWithoutTransactionsInput, GroupsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<GroupsCreateWithoutTransactionsInput, GroupsUncheckedCreateWithoutTransactionsInput>
    where?: GroupsWhereInput
  }

  export type GroupsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: GroupsWhereInput
    data: XOR<GroupsUpdateWithoutTransactionsInput, GroupsUncheckedUpdateWithoutTransactionsInput>
  }

  export type GroupsUpdateWithoutTransactionsInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneRequiredWithoutGroupsNestedInput
    savings?: SavingsUpdateManyWithoutGroupNestedInput
    members?: GroupMembersUpdateManyWithoutGroupNestedInput
  }

  export type GroupsUncheckedUpdateWithoutTransactionsInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMembersUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SavingsUpsertWithoutTransactionsInput = {
    update: XOR<SavingsUpdateWithoutTransactionsInput, SavingsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<SavingsCreateWithoutTransactionsInput, SavingsUncheckedCreateWithoutTransactionsInput>
    where?: SavingsWhereInput
  }

  export type SavingsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: SavingsWhereInput
    data: XOR<SavingsUpdateWithoutTransactionsInput, SavingsUncheckedUpdateWithoutTransactionsInput>
  }

  export type SavingsUpdateWithoutTransactionsInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSavingsNestedInput
    group?: GroupsUpdateOneWithoutSavingsNestedInput
  }

  export type SavingsUncheckedUpdateWithoutTransactionsInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsCreateManyUserInput = {
    saving_id?: string
    group_id?: string | null
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
  }

  export type GroupsCreateManyCreatorInput = {
    group_id?: string
    group_name: string
    created_at?: Date | string
  }

  export type GroupMembersCreateManyUserInput = {
    member_id?: string
    group_id: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
  }

  export type TransactionsCreateManyUserInput = {
    transaction_id?: string
    group_id?: string | null
    saving_id: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type SavingsUpdateWithoutUserInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupsUpdateOneWithoutSavingsNestedInput
    transactions?: TransactionsUpdateManyWithoutSavingNestedInput
  }

  export type SavingsUncheckedUpdateWithoutUserInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutSavingNestedInput
  }

  export type SavingsUncheckedUpdateManyWithoutUserInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupsUpdateWithoutCreatorInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUpdateManyWithoutGroupNestedInput
    members?: GroupMembersUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUpdateManyWithoutGroupNestedInput
  }

  export type GroupsUncheckedUpdateWithoutCreatorInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings?: SavingsUncheckedUpdateManyWithoutGroupNestedInput
    members?: GroupMembersUncheckedUpdateManyWithoutGroupNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupsUncheckedUpdateManyWithoutCreatorInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUpdateWithoutUserInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMembersUncheckedUpdateWithoutUserInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUncheckedUpdateManyWithoutUserInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpdateWithoutUserInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupsUpdateOneWithoutTransactionsNestedInput
    saving?: SavingsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    saving_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    saving_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManySavingInput = {
    transaction_id?: string
    user_id: string
    group_id?: string | null
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type TransactionsUpdateWithoutSavingInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionNestedInput
    group?: GroupsUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutSavingInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutSavingInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsCreateManyGroupInput = {
    saving_id?: string
    user_id: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.SavingTypes
    created_at?: Date | string
  }

  export type GroupMembersCreateManyGroupInput = {
    member_id?: string
    user_id: string
    role: $Enums.GroupRoles
    joined_at?: Date | string
  }

  export type TransactionsCreateManyGroupInput = {
    transaction_id?: string
    user_id: string
    saving_id: string
    type: $Enums.TransactionTypes
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type SavingsUpdateWithoutGroupInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSavingsNestedInput
    transactions?: TransactionsUpdateManyWithoutSavingNestedInput
  }

  export type SavingsUncheckedUpdateWithoutGroupInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutSavingNestedInput
  }

  export type SavingsUncheckedUpdateManyWithoutGroupInput = {
    saving_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumSavingTypesFieldUpdateOperationsInput | $Enums.SavingTypes
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUpdateWithoutGroupInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMembersUncheckedUpdateWithoutGroupInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUncheckedUpdateManyWithoutGroupInput = {
    member_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupRolesFieldUpdateOperationsInput | $Enums.GroupRoles
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpdateWithoutGroupInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionNestedInput
    saving?: SavingsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutGroupInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    saving_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutGroupInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    saving_id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypesFieldUpdateOperationsInput | $Enums.TransactionTypes
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingsCountOutputTypeDefaultArgs instead
     */
    export type SavingsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupsCountOutputTypeDefaultArgs instead
     */
    export type GroupsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingsDefaultArgs instead
     */
    export type SavingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupsDefaultArgs instead
     */
    export type GroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupMembersDefaultArgs instead
     */
    export type GroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupMembersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsDefaultArgs instead
     */
    export type TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsDefaultArgs<ExtArgs>

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