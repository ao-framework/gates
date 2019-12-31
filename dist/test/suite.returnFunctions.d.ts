import { Apparatus } from "@ao-framework/acumen";
import { DataTypes } from "./model/dataTypes";
export declare class SuiteReturnFunctions {
    controller({ testAll }: Apparatus): Promise<any[]>;
    returnObjectLikeOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnObjectOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnStringOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnStringWithLengthOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnFunctionOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnBooleanOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnNumberOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnArrayOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnNullOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnBigIntOrNothing({ expect }: Apparatus, types: DataTypes): void;
    returnSymbolOrNothing({ expect }: Apparatus, types: DataTypes): void;
}
