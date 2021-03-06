export interface DeprecatedLoggerOptions {
    options: Record<string, unknown>;
    deprecatedOption: string;
    newOption: string;
    msg?: string;
    scope?: string;
}
export declare const deprecatedLogger: ({ options, deprecatedOption, newOption, msg, scope, }: DeprecatedLoggerOptions) => void;
export declare const droppedLogger: (options: Record<string, unknown>, droppedOption: string, hint?: string, newOption?: string) => void;
