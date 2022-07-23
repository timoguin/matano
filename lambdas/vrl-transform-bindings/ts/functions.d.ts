export type Outcome = {
  success?: {
    output: string;
    result: any;
  };
} & { error?: string };
export function vrl_function_info(): null;
export function _vrl(program: string, event: any, tz: any): Outcome;
