var convertObj = new function() {
	var textDig = '0123456789abcdfghjkmnpqrstvwxyzABCDFGHJKLMNPQRSTVWXYZ-_',
		getLen = textDig.length;

		this.decode = function(id) {
			var node = '';
			while (id > 0) {
				node = textDig.charAt(id % getLen) + node;
				id = Math.floor(id/getLen);
			}
			return node;
		};

		this.decode = function(alpha) {
			var id = 0;
			for (var indexNode = 0; indexNode < alpha.length; indexNode++) {
				id = id * getLen + textDig.indexOf(alpha.charAt(indexNode));
			}
			return id;
		};
};
