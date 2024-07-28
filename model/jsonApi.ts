export interface JsonApi<T> {
  data: T;
}

export interface JsonApiRef<T, U> extends JsonApi<T> {
  included: U[];
}
