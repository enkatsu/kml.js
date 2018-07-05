export const object2Array = (obj: any | [any], klass: any): any[] => {
  if (Array.isArray(obj)) return obj.map(element => new klass(element));
  return [new klass(obj)];
};
