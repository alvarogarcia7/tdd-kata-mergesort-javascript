var MergeSort = function(){

};

MergeSort.prototype.sort = function(list) {
	if(1 == list.length){
		return list;
	} else if(2 == list.length){
		if(list[0] > list[1]){
			return this.swap(list, 0, 1);
		}
		return list;
	} else  {
		var firstHalf = [], secondHalf = [], result = [];

		firstHalf.push(list[0]);
		firstHalf.push(list[1]);
		firstHalf = this.sort(firstHalf);

		secondHalf.push(list[2]);
		secondHalf = this.sort(secondHalf);

		this.merge(result, firstHalf, secondHalf);
		return result;
	}
};

MergeSort.prototype.swap = function(list, positionA, positionB) {
	var temporary = list[positionB];
	list[positionB] = list[positionA];
	list[positionA] = temporary;
	return list;	
};

MergeSort.prototype.merge = function(result, firstHalf, secondHalf) {
	var i = 0, j = 0;
	while(i < firstHalf.length && j < secondHalf.length){
		if (firstHalf[i] < secondHalf[j]){
			result.push(firstHalf[i]);
			i++;
		} else {
			result.push(secondHalf[j]);
			j++;
		}
	}
	if(i != firstHalf.length || j != secondHalf.length){
		while(j< secondHalf.length){
			result.push(secondHalf[j]);
			j++;
		}
	}
	return result;
};
