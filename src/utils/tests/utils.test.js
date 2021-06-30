import { filterCountries, columnSort, matchRowData } from "../utils";
import Confirmed from "../../assets/confirmed.svg";

describe("utils", () => {
  describe("filterCountries", () => {
    it("should return correct value", () => {
      const countries = [{ Country: "Ukraine" }];
      const expected = [{ Country: "Ukraine" }];
      const result = filterCountries(countries, "uk");
      expect(expected).toEqual(result);
    });

    it("should return empty array", () => {
      const expected = [];
      const result = filterCountries();
      expect(expected).toEqual(result);
    });

    it("should return empty array when countries not array", () => {
      const expected = [];
      const result = filterCountries("ukraine");
      expect(expected).toEqual(result);
    });

    it("should return empty array when countries not array and str not string ", () => {
      const expected = [];
      const result = filterCountries([{ Country: "Ukraine" }], []);
      expect(expected).toEqual(result);
    });
  });

  describe("columnSort", () => {
    it("should return -1 when a < b and sortDirection true", () => {
      const a = 30;
      const b = 31;
      const sortDirection = true;
      const expected = -1;

      const result = columnSort(a, b, sortDirection);
      expect(expected).toEqual(result);
    });

    it("should return 0 with one parameters", () => {
      const a = 30;
      const expected = 0;

      const result = columnSort(a);
      expect(expected).toEqual(result);
    });

    it("should return 0 without parameters", () => {
      const expected = 0;
      const result = columnSort();
      expect(expected).toEqual(result);
    });
  });

  describe("matchRowData", () => {
    it("should return correct value object if key was string totalConfirmed", () => {
      const expected = { icon: Confirmed, text: "Total Confirmed" };
      const key = "totalConfirmed";
      const result = matchRowData(key);

      expect(expected).toEqual(result);
    });

    it("should return empty object if key was not a string", () => {
      const expected = {};
      const key = {};
      const result = matchRowData(key);

      expect(expected).toEqual(result);
    });

    it("should return empty object if key was undefined", () => {
      const expected = {};
      const result = matchRowData();

      expect(expected).toEqual(result);
    });
  });
});
