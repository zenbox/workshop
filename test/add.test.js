import ConvertData from "../class/ConvertData.class.mjs";
let convert = new ConvertData();

// A test series for the `add`-function
describe("add tests", () => {
    // A common setup
    beforeAll(async () => {
        // await
        console.log("before all ...");
    });

    // A common tear down
    afterAll(async () => {
        //await
        console.log("after all ...");
    });
    // A setup for each test
    beforeEach(async () => {
        // await
        console.log("before each ...");
    });

    // A tear down for each test
    afterEach(async () => {
        //await
        console.log("after each ...");
    });

    // The test
    it("add(3,4) should be 7", async () => {
        console.log("the test 1");
        await expect(convert.add(3, 4)).toBe(7);
    });

    it("add(3,4) should be 7", async () => {
        console.log("the test 2");
        await expect(convert.add(3, 4)).toBe(7);
    });

    it("add(3,4) should be 7", async () => {
        console.log("the test 3");
        await expect(convert.add(3, 4)).toBe(7);
    });
});
