/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { ButtondefaultfalseprimaryProps } from "./Buttondefaultfalseprimary";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UINewNoteOverridesProps = {
    UINewNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "New Note"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4055843?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4055844?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4055845?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4055846?: PrimitiveOverrideProps<TextFieldProps>;
    "Button/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type UINewNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    notes?: any;
} & {
    overrides?: UINewNoteOverridesProps | undefined | null;
}>;
export default function UINewNote(props: UINewNoteProps): React.ReactElement;
