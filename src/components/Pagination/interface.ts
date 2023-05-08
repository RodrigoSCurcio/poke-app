export interface IPaginationValues {
  pokeNumber: number;
  page: number;
}
export interface IPagination {
  handleClick: (value: number) => void;
  pagination: IPaginationValues;
  setPagination: (pagination: IPaginationValues) => void;
}
