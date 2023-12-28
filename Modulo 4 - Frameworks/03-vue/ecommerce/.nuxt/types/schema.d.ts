import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt:vitest:mock-transform"]?: typeof import("nuxt:vitest:mock-transform").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vitest-env"]?: typeof import("vitest-environment-nuxt/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vitest"]?: typeof import("nuxt-vitest").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt:vitest:mock-transform", Exclude<NuxtConfig["nuxt:vitest:mock-transform"], boolean>] | ["vitest-environment-nuxt/module", Exclude<NuxtConfig["vitest-env"], boolean>] | ["nuxt-vitest", Exclude<NuxtConfig["vitest"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }