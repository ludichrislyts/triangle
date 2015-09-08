describe('triangle', function(){
    it("is false if one side is longer than the sum of the other 2 sides", function(){
        expect(triangle(8, 2, 2)).to.equal(false);
    });
});
