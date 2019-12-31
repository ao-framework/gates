import { Apparatus } from "@ao-framework/acumen";
export declare class SuiteEnsureFunctions {
    controller({ testAll }: Apparatus): Promise<any[]>;
    ensureObject({ expect, spotlight }: Apparatus): void;
    ensureArray({ expect }: Apparatus): void;
    ensureFunction({ expect, tagger }: Apparatus): void;
}
