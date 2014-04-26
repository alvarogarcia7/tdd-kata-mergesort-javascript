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

	it("should not sort two numbers already in order", function(){
		expect(sorter.sort([0,1])).toEqual([0,1]);
	});

	it("should sort any three numbers", function(){
		expect(sorter.sort([1,0,2])).toEqual([0,1,2]);
	});
});