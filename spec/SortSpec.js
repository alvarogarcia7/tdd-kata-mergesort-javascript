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

	it("should sort any three numbers (2)", function(){
		expect(sorter.sort([0,10,9])).toEqual([0,9,10]);
	});

	it("should sort any five numbers", function(){
		expect(sorter.sort([0,10,9,8,1])).toEqual([0,1,8,9,10]);
	});

	it("should sort any size of  numbers", function(){
		expect(sorter.sort([10,9,8,4,5,6,7,1,2,3])).toEqual([1,2,3,4,5,6,7,8,9,10]);
	});

	it("should not sort an empty array", function(){
		expect(sorter.sort([])).toEqual([]);
	});

	it("should not sort a null array", function(){
		expect(sorter.sort(null)).toEqual(null);
	});

});