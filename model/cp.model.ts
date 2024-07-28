export interface Cp {
  type: string;
  id: string;
  attributes: CpAttributes;
}

interface CpAttributes {
  changed: string;
}
 