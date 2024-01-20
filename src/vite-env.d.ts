/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DRUPAL_API: string
  readonly VITE_DRUPAL_USER_UUID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
