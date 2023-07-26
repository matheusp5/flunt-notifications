import { CompareTypes } from '@src/Enums/CompareTypesEnum';

class CompareService {
  public Compare<T>(value1: T, value2: T, type: CompareTypes) {
    switch (type) {
      case CompareTypes.BiggerThan:
        if (typeof value1 == 'number' && typeof value2 == 'number')
          return this.biggerThan(value1, value2);
        break;
      case CompareTypes.LowerThan:
        if (typeof value1 == 'number' && typeof value2 == 'number')
          return this.lowerThan(value1, value2);
        break;
      case CompareTypes.LongerThan:
        if (typeof value1 == 'string' && typeof value2 == 'string')
          return this.longerThan(value1, value2);
        break;
      case CompareTypes.ShorterThan:
        if (typeof value1 == 'string' && typeof value2 == 'string')
          return this.shorterThan(value1, value2);
        break;
    }
    return false;
  }

  private biggerThan(value1: number, value2: number) {
    return value1 > value2;
  }
  private lowerThan(value1: number, value2: number) {
    return value1 < value2;
  }
  private longerThan(value1: string, value2: string) {
    return value1.length > value2.length;
  }
  private shorterThan(value1: string, value2: string) {
    return value1.length > value2.length;
  }
}

export default new CompareService();
