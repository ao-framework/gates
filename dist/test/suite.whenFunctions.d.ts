import { Apparatus } from "@ao-framework/acumen";
import { DataTypes } from "./model/dataTypes";
export declare class SuiteWhenFunctions {
    controller({ testAll }: Apparatus): Promise<any[]>;
    whenObjectLike({ expect, spotlight, beforeThrowing, tagger }: Apparatus, types: DataTypes): void;
    whenObject({ expect, tagger, spotlight, beforeThrowing }: Apparatus, types: DataTypes): void;
    whenString({ expect, tagger, spotlight, beforeThrowing }: Apparatus, types: DataTypes): void;
    whenStringWithLength({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenFunction({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenBoolean({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenNumber({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenArray({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenUndefined({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenNull({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenNill({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenBigInt({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
    whenSymbol({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes): void;
}
