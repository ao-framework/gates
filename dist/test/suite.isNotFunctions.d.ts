import { Apparatus } from "@ao-framework/acumen";
import { DataTypes } from "./model/dataTypes";
export declare class SuiteIsNotFunctions {
    controller({ testAll }: Apparatus): Promise<any[]>;
    isNotObjectLike({ expect }: Apparatus, types: DataTypes): void;
    isNotObject({ expect }: Apparatus, types: DataTypes): void;
    isNotString({ expect }: Apparatus, types: DataTypes): void;
    isNotStringWithLength({ expect }: Apparatus, types: DataTypes): void;
    isNotFunction({ expect }: Apparatus, types: DataTypes): void;
    isNotBoolean({ expect }: Apparatus, types: DataTypes): void;
    isNotNumber({ expect }: Apparatus, types: DataTypes): void;
    isNotArray({ expect }: Apparatus, types: DataTypes): void;
    isNotUndefined({ expect }: Apparatus, types: DataTypes): void;
    isNotNull({ expect }: Apparatus, types: DataTypes): void;
    isNotNill({ expect }: Apparatus, types: DataTypes): void;
    isNotBigInt({ expect }: Apparatus, types: DataTypes): void;
    isNotSymbol({ expect }: Apparatus, types: DataTypes): void;
}
