
import { sum } from "../../Helpers/Constant";

test("check sum of 2 positive numbers",()=>{

    expect(sum(2,5)).toBe(7);
    expect(sum(2,8)).toBe(10);
    expect(sum(-1,8)).not.toBe(9);
    expect(sum(0,-1)).toBe(-1);
    expect(sum(-1,8)).toBe(7);
    expect(sum(-1,8)).toBe(7);

})