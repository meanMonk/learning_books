/*
callback.
evens.
promise.
*/


/*sync*/
function add(x,y){
	console.log("[SP] adding "+x + "or" +y);
	var result = x+y;
	console.log("returning result!!!!!!!!!");
	return result;
}

function addClient(x,y){
	console.log("[SC] trriggering add");
	var result = add(x,y);
	console.log("result = "+ result);
}
addClient(100,200);

/*Async - callbacks*/
function addAsync(x,y, callback){
	console.log("[SP] adding "+x + "or" +y);
	setTimeout(function(){
		var result = x+y;
		console.log("returning result!!!!!!!!!");
		callback(result);
	},4000);
}

function addAsyncClient(x,y){
	console.log("[SC] trriggering add");
	addAsync(x,y, function(result){
		console.log("result = "+ result);

	});

}
addAsyncClient(100,200);
/* Aync - events*/
function getAdder(){
	var _callbacks = [];
	return{
		operate : function(){
			console.log("[SP] adding "+x + "or" +y);
			setTimeout(function(){
				var result = x+y;
				console.log("returning result!!!!!!!!!");
				_callbacks.forEach(function(callback){ callback(result);});
			},4000);
		},
		addListener : function(callback){
			_callbacks.push(callback);
		}
	}
}

var adder = getAdder();
adder.addListener (function(result){
	console.log("result =", result );
});
console.log("[SP] trriggering add");
adder.operate(100,200);


/*Async - Promise*/

function addAsync(x,y){
		var promise = new Promise(function(resolve,reject){
			console.log("[SP] adding "+x + "or" +y);
			setTimeout(function(){
				var result = x+y;
				console.log("returning result!!!!!!!!!");
				resolve(result);
			},4000);
		});

		return promise;
}

var p = addAsync(100,200);

p.then(function(result){
	console.log("result = " + result);
})