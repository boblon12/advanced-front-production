export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
}

export interface BuildPaths {
    entry: string
    build: string
    html: string
}

export type BuildMode = 'development' | 'production'