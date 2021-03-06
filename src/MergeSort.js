var MergeSort = function(){

};

MergeSort.prototype.sort = function(list) {
	if(!list || list.length <= 1){
		return list;
	} else if(2 == list.length){
		if(list[0] > list[1]){
			return this.swap(list, 0, 1);
		}
		return list;
	} else  {
		var firstHalf = [], secondHalf = [], result = [],
			i = 0;

		i = this.addFirstHalf(firstHalf, list, i);
		firstHalf = this.sort(firstHalf);

		this.addSecondHalf(secondHalf, list, i);
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
		this.addAllFrom(result, firstHalf, i);
		this.addAllFrom(result, secondHalf, j);
	}
	return result;
};

MergeSort.prototype.addAllFrom = function(result, list, from) {
	var i = from;
	while(i< list.length){
		result.push(list[i]);
		i++;
	}
};

MergeSort.prototype.addFirstHalf = function(result, list, i) {
	while(i < list.length / 2){
		result.push(list[i]);
		i++;
	}
	return i;
};

MergeSort.prototype.addSecondHalf = function(result, list, i) {
	while(i< list.length){
		result.push(list[i]);
		i++;	
	}
};