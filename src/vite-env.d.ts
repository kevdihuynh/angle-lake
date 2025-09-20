/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_CONTENT_MANAGER: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
