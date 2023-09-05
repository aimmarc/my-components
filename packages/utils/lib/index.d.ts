declare function createNamespace(name: string): {
    b: (blockSuffix?: string) => string;
    e: (element?: string) => string;
    m: (modifiler?: string) => string;
    be: (blockSuffix?: string, element?: string) => string;
    em: (element?: string, modifiler?: string) => string;
    bm: (blockSuffix?: string, modifiler?: string) => string;
    bem: (blockSuffix?: string, element?: string, modifiler?: string) => string;
    is: (name: string, state: boolean) => string;
};

export { createNamespace };
