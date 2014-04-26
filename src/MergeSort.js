var MergeSort = function(){

};

MergeSort.prototype.sort = function(list) {
	if(2 == list.length){
		if(list[0] > list[1]){
			return this.swap(list, 0, 1);
		}
		return list;
	}
};

MergeSort.prototype.swap = function(list, positionA, positionB) {
	var temporary = list[positionB];
	list[positionB] = list[positionA];
	list[positionA] = temporary;
	return list;	
};
