import { expect } from "chai";
import { royalRumble } from "../index";

describe("royalRumbe() test", function() {
  it('argumen : Array["Aab III", "Aab I", "Aab II"]', function() {
    const arg = ["Aab III", "Aab I", "Aab II"];
    const expected = ["Aab I", "Aab II", "Aab III"];
    const result = royalRumble(arg);
    expect(result).to.deep.equal(expected);
  });

  it('argumen : Array["Zuhri II", "Aab I", "Yussan IV"]', function() {
    const arg = ["Zuhri II", "Aab I", "Yussan IV"];
    const expected = ["Aab I", "Yussan IV", "Zuhri II"];
    const result = royalRumble(arg);
    expect(result).to.deep.equal(expected);
  });

  it("argumen is not array", function(){
    const arg = "Vania XI";
    const expected = "Vania XI";
    const result = royalRumble(arg);
    expect(result).to.deep.equal(expected)
  })
});
