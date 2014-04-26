describe("Merge sort", function(){
	it("should exist as an object", function(){
		expect(new MergeSort()).toBeTruthy();
	});

	it("should sort any two numbers", function(){
		expect(new MergeSort().sort([1,0])).toEqual([0,1]);
	});
});