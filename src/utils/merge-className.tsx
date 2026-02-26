export const mergeClassName = ({base, className}: {className?:string, base?:string}) =>
 className ? `${base} ${className}` : base;
