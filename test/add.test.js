// docblock

import ConvertData from "../class/ConvertData.class.mjs";
let convert = new ConvertData();
console.log(convert.add(3, 4));

// Write a test suite
describe("add() Tests", () => {
    beforeAll(async () => {
        // Set up
        // console.log("before all ...");
    });
    afterAll(async () => {
        // Tear down
        // console.log("after all ...");
    });
    beforeEach(async () => {
        // common set up per test
        // console.log("before each ...");
    });
    afterEach(async () => {
        // Common tear down per test
        // console.log("after each ...");
    });

    it("add(3, 4) should be 7", async () => {
        await expect(convert.add(3, 4)).toBe(7);
    });

    it("add(4, 8) should be 12", async () => {
        await expect(convert.add(4, 8)).toBe(12);
    });

    it("add(0.3, 0.4) should be 0.7", async () => {
        await expect(convert.add(0.3, 0.4)).toBe(0.7);
    });

        it('add("4", "8") should be undefined', async () => {
            await expect(convert.add("4", "8")).toBe(undefined);
        });


});
