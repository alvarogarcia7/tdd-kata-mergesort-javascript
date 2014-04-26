var MergeSort = function(){

};

MergeSort.prototype.sort = function(list) {
	if(2 == list.length){
		return this.swap(list, 0, 1);
	}
};

MergeSort.prototype.swap = function(list, positionA, positionB) {
	var temporary = list[positionB];
	list[positionB] = list[positionA];
	list[positionA] = temporary;
	return list;	
};
