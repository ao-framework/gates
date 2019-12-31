import { Apparatus } from "@ao-framework/acumen";
import { DataTypes } from "./model/dataTypes";
export declare class SuiteThrowers {
    controller({ testAll }: Apparatus): Promise<any[]>;
    throwWhenNotObjectLike({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotObject({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotString({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotStringWithLength({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotFunction({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotBoolean({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotNumber({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotArray({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotUndefined({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotNull({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotNill({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotBigInt({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotSymbol({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNotTrue({ expect }: Apparatus, types: DataTypes, message: string): void;
}
