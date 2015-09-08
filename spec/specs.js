describe('triangle', function(){
    it("is false if one side is longer than the sum of the other 2 sides", function(){
        expect(triangle(8, 2, 2)).to.equal("not a");
    });

    it("is equilateral if all sides are equal", function(){
        expect(triangle(3, 3, 3)).to.equal("an equilateral");
    });

    it("is isosceles if two sides are exactly equal", function(){
        expect(triangle(4, 4, 2)).to.equal("an isoceles");
    });

    it("is scalene if no sides are equal", function(){
        expect(triangle(2, 5, 6)).to.equal("a scalene");
    });
});
