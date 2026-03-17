/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DATABASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.dockerfile' {
	const url: string;
	export default url;
}

declare module '*.dockerfile?url' {
	const url: string;
	export default url;
}
