import { RevoGrid } from '../interfaces';

type FakeData<T> = {
  rows: T[];
  headers: RevoGrid.ColumnRegular[];
};
type Data = { [key: string]: string }[];
declare var generateFakeDataObject: { (rowsNumber: number, colsNumber: number): FakeData<{ [key: string]: string }> };
declare var generateFakeData: { (rowsNumber: number, colsNumber: number): FakeData<string[]> };
declare var generateData: { (rowsNumber: number, colsNumber: number): Data };
declare module 'generate-data' {
  export = generateFakeDataObject;
}
export { generateFakeDataObject, generateFakeData, generateData };
