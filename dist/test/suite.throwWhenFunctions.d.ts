import { Apparatus } from "@ao-framework/acumen";
import { DataTypes } from "./model/dataTypes";
export declare class SuiteThrowWhenFunctions {
    controller({ testAll }: Apparatus): Promise<any[]>;
    throwException({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenObjectLike({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenObject({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenString({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenStringWithLength({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenFunction({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenBoolean({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNumber({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenArray({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenUndefined({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNull({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenNill({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenBigInt({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenSymbol({ expect }: Apparatus, types: DataTypes, message: string): void;
    throwWhenTrue({ expect }: Apparatus, types: DataTypes, message: string): void;
}
