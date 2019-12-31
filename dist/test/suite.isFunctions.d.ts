import { Apparatus } from "@ao-framework/acumen";
import { DataTypes } from "./model/dataTypes";
export declare class SuiteIsFunctions {
    controller({ testAll }: Apparatus): Promise<any[]>;
    isObjectLike({ expect }: Apparatus, types: DataTypes): void;
    isObject({ expect }: Apparatus, types: DataTypes): void;
    isString({ expect }: Apparatus, types: DataTypes): void;
    isStringWithLength({ expect }: Apparatus, types: DataTypes): void;
    isFunction({ expect }: Apparatus, types: DataTypes): void;
    isBoolean({ expect }: Apparatus, types: DataTypes): void;
    isNumber({ expect }: Apparatus, types: DataTypes): void;
    isArray({ expect }: Apparatus, types: DataTypes): void;
    isUndefined({ expect }: Apparatus, types: DataTypes): void;
    isNull({ expect }: Apparatus, types: DataTypes): void;
    isNill({ expect }: Apparatus, types: DataTypes): void;
    isBigInt({ expect }: Apparatus, types: DataTypes): void;
    isSymbol({ expect }: Apparatus, types: DataTypes): void;
}
