describe("Merge sort", function(){
	var sorter;

	beforeEach(function(){
		sorter = new MergeSort();
	});

	it("should exist as an object", function(){
		expect(sorter).toBeTruthy();
	});

	it("should sort any two numbers", function(){
		expect(sorter.sort([1,0])).toEqual([0,1]);
	});
});