type Callback = (error: Error | null, result: string) => unknown;
export default function markdownLoader(this: {
    async: () => Callback;
}, markdown: string): unknown;
export {};
//# sourceMappingURL=markdownLoader.d.ts.map