import { sum } from "../sum";
test("sum method testing", () => {
    const result = sum(2,3);

    //Assertion
    expect(result).toBe(7);
});