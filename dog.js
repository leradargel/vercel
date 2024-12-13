(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"собачки кости_1_atlas_1", frames: [[504,822,138,83],[524,672,89,116],[524,790,39,30],[0,672,214,296],[400,822,102,119],[400,672,122,148],[216,672,182,303],[0,0,670,670]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2202_w026_n002_1409b_p1_1409 = function() {
	this.initialize(img._2202_w026_n002_1409b_p1_1409);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,3000);


(lib.Растровоеизображение5 = function() {
	this.initialize(ss["собачки кости_1_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Растровоеизображение5();
	this.instance.setTransform(0,0,0.1015,0.1015);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,68,68), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkoGIIAAsPIJRAAIAAMPg");
	mask.setTransform(29.65,39.15);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2E5C3").s().p("AA6BBQgKAAgNgMQgOgNgIgDQgFgBgHAAIgLAAIgNgDIgkhGQgLgVARgFQAQgFAMAMQArAsAvBNIgFAAIgCAAg");
	this.shape.setTransform(44.1995,6.4826);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B87D51").s().p("AiOFqQhhgbg4ALQgBguAaglQAZgkAogNQAvgOBbAYQBgAaArgIQA3gKAogvQAmgtAKg7QAKg4gHg9QgIg9gWg1QgchEgmhKIglhIQgKgUARgFQAQgFALALQAsAsAvBOQAgA1APAqQAgBaAGBUQAHBfgcBQQgeBXhHA7QhKA+hXABIgBAAQgsAAhtgeg");
	this.shape_1.setTransform(29.6367,39.1246);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,59.3,78.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfAQIAAgfIA/AAIAAAfg");
	mask.setTransform(3.2,1.625);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAQQgLgCgCgFQgBgGAHgFQAJgHANgEQAMgDALABQALABABAGQABAFgHAGQgJAHgNADQgIADgJAAIgFAAg");
	this.shape.setTransform(3.2,1.6093);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,6.4,3.3), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aj+CbIAAk1IH9AAIAAE1g");
	mask_1.setTransform(25.5,15.475);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C09C").s().p("AAQCZQhmgFhagsQhfgwAUhsQAKg3AdgtQAaAYAnAXQBPAwBCgCQAggBB0gSQBKgNAPAUQAYAggFAvQgHA8g6ArQg4AqhfAAIgWAAg");
	this.shape_1.setTransform(25.5015,15.3243);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,51,30.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAQCZQhmgFhagsQhOgoAAhRIAAgBQAAgrAVgyQAKgZALgQQAaAYAnAXQBPAwBCgCQAggBB0gSQBKgNAPAUQAYAggFAvQgHA8g6ArQg4AqhfAAIgWAAg");
	mask_1.setTransform(25.5004,15.3243);

	// Слой_3
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(25,15.8,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(25,15.8,19.5,14.899999999999999), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AoVLjIAA3FIQrAAIAAXFg");
	mask_2.setTransform(53.4,73.875);

	// Слой_3
	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,106.8,147.8), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhDA/IAAh9ICHAAIAAB9g");
	mask.setTransform(6.75,6.25);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE897E").s().p("AgKA+QgVgDgQgOQgKgIgEgJQgEgIgBgMQgCgMAGgRQAIgWAQgKQAPgJAYAAQAeAAAUAUQAXAYgJAfQgIAegcANQgOAHgPAAIgKgBg");
	this.shape.setTransform(6.7747,6.2625);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,13.5,12.5), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhCA/IAAh9ICFAAIAAB9g");
	mask_2.setTransform(6.725,6.25);

	// Слой_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AE897E").s().p("AgcA4QgcgNgIgeQgJgfAXgYQATgUAeAAQAZAAAPAJQAQAKAIAWQAGARgCAMQgBAMgEAIQgFAJgJAIQgQAOgVADIgLABQgOAAgOgHg");
	this.shape_2.setTransform(6.7253,6.2625);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,13.5,12.5), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AnGL1IAA3pIONAAIAAXpg");
	mask_3.setTransform(45.475,75.7);

	// Слой_3
	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(0,-0.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,91,151.4), null);


(lib.хвост2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(28.55,21.6,1,1,-14.9983,0,0,25.4,15.5);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(28.55,21.6,1,1,-14.9983,0,0,25.4,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.хвост2, new cjs.Rectangle(0,0,57.3,43.1), null);


(lib.хвост1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(29.7,39.1,1,1,0,0,0,29.7,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.хвост1, new cjs.Rectangle(0,0,59.3,78.3), null);


(lib.тело2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(35.45,48.95,0.6626,0.6626,0,0,0,53.5,73.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело2, new cjs.Rectangle(0,0,70.9,98.1), null);


(lib.тело1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.ikNode_1 = new lib.ClipGroup_4();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(45.5,75.35,1,1,0,0,0,45.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело1, new cjs.Rectangle(0,-0.5,91,151.5), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(3.2,1.6,1,1,0,0,0,3.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,6.4,3.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlZEhIAApBIKzAAIAAJBg");
	mask.setTransform(34.6,28.925);

	// Слой_3
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,4.6,0.5,0.5);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(39.6,32.85,1,1,0,0,0,3.2,1.6);
	this.instance_1.alpha = 0.3984;

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(14.7,-0.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,69,57.9), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AlZEhIAApBIKzAAIAAJBg");
	mask_4.setTransform(34.6,28.925);

	// Слой_3
	this.instance_3 = new lib.ClipGroup_0();
	this.instance_3.setTransform(34.6,28.9,1,1,0,0,0,34.6,28.9);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,69.2,57.9), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ClipGroup_1_2();
	this.instance.setTransform(6.7,6.2,1,1,0,0,0,6.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,13.5,12.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance_1 = new lib.ClipGroup_2_1();
	this.instance_1.setTransform(6.8,6.2,1,1,0,0,0,6.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,13.6,12.5), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkwFxIAArhIJhAAIAALhg");
	mask_1.setTransform(30.45,36.875);

	// Слой_3
	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(5.15,14.1,0.5,0.5);

	this.instance_4 = new lib.Group_2();
	this.instance_4.setTransform(15.85,31.95,1,1,0,0,0,6.8,6.2);
	this.instance_4.alpha = 0.3008;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Group_1();
	this.instance_5.setTransform(45.05,31.95,1,1,0,0,0,6.7,6.2);
	this.instance_5.alpha = 0.3008;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_3,this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,60.9,73.8), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkwFxIAArhIJhAAIAALhg");
	mask_5.setTransform(30.45,36.875);

	// Слой_3
	this.instance_4 = new lib.ClipGroup_0_1();
	this.instance_4.setTransform(30.4,37.2,1,1,0,0,0,30.4,37.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,60.9,73.8), null);


(lib.голова2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(26.8,22.4,0.7751,0.7751,0,0,0,34.6,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова2, new cjs.Rectangle(0,0,53.7,44.9), null);


(lib.голова1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(30.4,37.2,1,1,0,0,0,30.4,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова1, new cjs.Rectangle(0,0,61,74), null);


// stage content:
(lib.собачкикости1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_9
	this.instance = new lib.Символ1();
	this.instance.setTransform(37,316.65,1,1,0,0,0,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:42.7,y:311.15},0).wait(1).to({x:49.6,y:306.8},0).wait(1).to({x:57.75,y:303.55},0).wait(1).to({x:67.1,y:301.35},0).wait(1).to({x:77.65,y:300.25},0).wait(1).to({x:89.35},0).wait(1).to({x:102.3,y:301.35},0).wait(1).to({x:116.5,y:303.55},0).wait(1).to({x:131.85,y:306.8},0).wait(1).to({x:148.45,y:311.15},0).wait(1).to({x:166.25,y:316.65},0).wait(1).to({x:171.15,y:320.05},0).wait(1).to({x:176.45,y:322.9},0).wait(1).to({x:182.05,y:325.15},0).wait(1).to({x:187.95,y:326.85},0).wait(1).to({x:194.2,y:327.9},0).wait(1).to({x:200.75,y:328.4},0).wait(1).to({x:207.6,y:328.3},0).wait(1).to({x:214.8,y:327.65},0).wait(1).to({x:222.35,y:326.35},0).wait(1).to({x:230.2,y:324.5},0).wait(1).to({x:238.35,y:322.05},0).wait(1).to({x:246.85,y:319.05},0).wait(1).to({x:255.65,y:315.45},0).wait(1).to({x:264.8,y:311.25},0).wait(1).to({x:274.25,y:306.5},0).wait(1).to({x:284.05,y:301.1},0).wait(1).to({x:294.2,y:295.2},0).wait(1).to({x:304.25,y:289.7},0).wait(1).to({x:314,y:285.05},0).wait(1).to({x:323.55,y:281.25},0).wait(1).to({x:332.75,y:278.2},0).wait(1).to({x:341.7,y:276},0).wait(1).to({x:350.4,y:274.6},0).wait(1).to({x:358.8,y:274},0).wait(1).to({x:366.95,y:274.25},0).wait(1).to({x:374.8,y:275.25},0).wait(1).to({x:382.35,y:277.1},0).wait(1).to({x:389.7,y:279.75},0).wait(1).to({x:396.75,y:283.2},0).wait(1).to({x:403.5,y:287.5},0).wait(1).to({x:410,y:292.6},0).wait(1).to({x:416.2,y:298.5},0).wait(1).to({x:422.2,y:305.25},0).wait(1).to({x:435.8,y:309.05},0).wait(1).to({x:449,y:312.25},0).wait(1).to({x:461.75,y:314.75},0).wait(1).to({x:474.05,y:316.6},0).wait(1).to({x:485.9,y:317.75},0).wait(1).to({x:497.3,y:318.3},0).wait(1).to({x:508.25,y:318.15},0).wait(1).to({x:518.75,y:317.35},0).wait(1).to({x:528.85,y:315.9},0).wait(1).to({x:538.45,y:313.75},0).wait(1).to({x:547.65,y:311},0).wait(1).to({x:556.4,y:307.55},0).wait(1).to({x:564.7,y:303.45},0).wait(1).to({x:572.55,y:298.65},0).wait(1).to({x:580,y:293.25},0).wait(1));

	// Каркас_9
	this.ikNode_8 = new lib.голова2();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(516.35,170.85,0.9998,0.9998,0,0,0,30.2,15.2);

	this.ikNode_7 = new lib.тело2();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.setTransform(517.15,231.65,1,1,0,0,0,35.4,49);

	this.ikNode_10 = new lib.хвост2();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(560.9,243.35,0.9979,0.9979,0,0,0,36.1,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_10,p:{rotation:0,x:560.9,y:243.35,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.65}},{t:this.ikNode_8,p:{scaleX:0.9998,scaleY:0.9998,rotation:0,x:516.35,y:170.85,regX:30.2}}]}).to({state:[{t:this.ikNode_10,p:{rotation:-2.6144,x:562,y:243.75,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.3241,x:516.95,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-5.2317,x:562.1,y:243.15,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.6498,x:517.6,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.8485,x:562.25,y:242.7,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.9753,x:518.2,y:170.8,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-10.4657,x:562.35,y:242,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.3017,x:518.85,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-13.0812,x:562.45,y:241.4,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.6271,x:519.5,y:170.75,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-15.6982,x:562.5,y:240.85,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:19.9537,x:520.15,y:170.75,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-18.3158,x:562.6,y:240.2,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:23.2795,x:520.75,y:170.75,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-16.005,x:562.5,y:240.55,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:19.9537,x:520.15,y:170.75,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-13.6939,x:562.45,y:240.9,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.6271,x:519.5,y:170.75,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.3806,x:562.35,y:241.3,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.3017,x:518.85,y:170.8,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.0708,x:562.3,y:241.65,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.9753,x:518.2,y:170.8,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-6.7585,x:562.2,y:242,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.6498,x:517.6,y:170.8,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.4474,x:562.15,y:242.35,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.3241,x:516.95,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.1356,x:562.05,y:242.7,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.0142,x:562.1,y:242.35,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.3811,x:516.55,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-5.892,x:562.05,y:241.8,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.7646,x:516.9,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.7707,x:562.1,y:241.4,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.1493,x:517.1,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.6491,x:562.05,y:240.8,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.5333,x:517.4,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.5273,x:562,y:240.35,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.9162,x:517.7,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-13.4055,x:562.05,y:239.85,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:14.3014,x:517.95,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-15.2831,x:562,y:239.35,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.6847,x:518.2,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-17.1615,x:561.9,y:238.85,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:19.0685,x:518.7,y:171,regX:30.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-19.0392,x:561.9,y:238.35,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:21.4521,x:518.75,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-16.5373,x:561.55,y:238.6,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:18.3871,x:518.4,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-14.0337,x:561.15,y:238.9,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:15.3219,x:518.05,y:171,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.5318,x:560.75,y:239.15,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:12.257,x:517.75,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.0292,x:560.35,y:239.4,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.1922,x:517.35,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-6.5266,x:560,y:239.65,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.1271,x:517,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.0239,x:559.55,y:239.9,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.0622,x:516.7,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.5211,x:559.15,y:240.25,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.9626,x:559.1,y:240.25,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.4052,x:559.1,y:240.3,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-5.848,x:559.1,y:240.35,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.2899,x:559.1,y:240.4,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-8.732,x:559.1,y:240.6,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-10.1736,x:559.05,y:240.5,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.6166,x:559.1,y:240.65,regY:27.3,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-13.0587,x:559,y:240.6,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.3501,x:558.95,y:240.95,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.5139,x:516.4,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.6421,x:558.9,y:241.3,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.0316,x:516.35,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.9333,x:558.85,y:241.85,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.5479,x:516.45,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-6.2259,x:558.85,y:242.1,regY:27.2,scaleX:0.9978,scaleY:0.9978}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.0656,x:516.45,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.5168,x:558.8,y:242.45,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.5823,x:516.55,y:170.9,regX:30.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.8091,x:558.7,y:242.85,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0992,x:516.45,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.1005,x:558.65,y:243.2,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.617,x:516.45,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:0.6028,x:558.55,y:243.75,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:12.1335,x:516.55,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:2.311,x:558.5,y:244,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.6506,x:516.5,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:4.0195,x:558.45,y:244.35,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:15.1668,x:516.55,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:2.6346,x:558.5,y:244,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.7885,x:516.5,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:1.2512,x:558.55,y:243.8,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:12.4092,x:516.65,y:170.95,regX:30.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.1279,x:558.65,y:243.3,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.0302,x:516.5,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.5124,x:558.7,y:242.95,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.6512,x:516.5,y:170.85,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.8968,x:558.8,y:242.6,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.272,x:516.45,y:170.95,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.2804,x:558.85,y:242.25,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.8929,x:516.4,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-5.6647,x:558.95,y:241.9,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:5.5136,x:516.4,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-7.0487,x:558.95,y:241.7,regY:27.3,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.1339,x:516.35,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-8.4326,x:559.05,y:241.2,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.7558,x:516.35,y:170.9,regX:30.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-9.8168,x:559.1,y:240.85,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.3766,x:516.55,y:170.9,regX:30.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-11.2008,x:559.1,y:240.5,regY:27.2,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_7,p:{y:231.6}},{t:this.ikNode_8,p:{scaleX:0.9997,scaleY:0.9997,rotation:0,x:516.35,y:170.85,regX:30.2}}]},1).wait(1));

	// Каркас_5
	this.ikNode_3 = new lib.голова1();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.setTransform(154.8,203.3,0.9999,0.9999,0,0,0,31.2,46.6);

	this.ikNode_2 = new lib.тело1();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(154.8,258.1,1,1,0,0,0,45.5,75.4);

	this.ikNode_5 = new lib.хвост1();
	this.ikNode_5.name = "ikNode_5";
	this.ikNode_5.setTransform(211.15,305.85,0.9992,0.9992,0,0,0,30.4,71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.7,rotation:0,x:211.15,y:305.85}},{t:this.ikNode_2,p:{y:258.1}},{t:this.ikNode_3,p:{regX:31.2,rotation:0,x:154.8,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]}).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-0.9616,x:211.25,y:306.35}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:0.397,x:155,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-1.9253,x:211.2,y:306.15}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:0.7957,x:154.9,y:203.45,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-2.8886,x:211.1,y:305.95}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:1.1944,x:155,y:203.4,scaleX:1,scaleY:1,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-3.8519,x:210.95,y:305.9}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:1.5933,x:154.85,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-4.8154,x:210.7,y:305.7}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:1.9922,x:154.95,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-5.7794,x:210.55,y:305.6}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:2.3911,x:154.8,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-6.7441,x:210.45,y:305.45}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:2.7903,x:154.85,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-7.7073,x:210.4,y:305.25}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:3.1895,x:154.8,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.7,rotation:-8.6709,x:210.3,y:305.05}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:3.5881,x:154.95,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-9.6342,x:210.2,y:305}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:3.9868,x:154.85,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-10.5986,x:210.05,y:304.8}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:4.3857,x:154.85,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-11.5615,x:209.85,y:304.75}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:4.7848,x:154.8,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-12.526,x:209.8,y:304.6}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:5.1841,x:154.8,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-13.4896,x:209.7,y:304.45}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:5.5829,x:154.8,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-14.4535,x:209.55,y:304.3}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:5.9819,x:154.95,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-15.417,x:209.35,y:304.15}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:6.3811,x:154.8,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-16.3804,x:209.3,y:304}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:6.7807,x:154.95,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-17.345,x:209.15,y:303.85}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:7.1788,x:154.85,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-16.3194,x:208.9,y:303.9}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:5.9976,x:154.75,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-15.2956,x:208.6,y:303.95}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:4.8172,x:154.6,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-14.2712,x:208.35,y:304.05}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:3.6363,x:154.4,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-13.2468,x:208.05,y:304}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:2.4559,x:154.05,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.6,regY:71.8,rotation:-12.2224,x:207.95,y:304.1}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:1.2749,x:153.9,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-11.1984,x:207.5,y:304.1}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:0.0936,x:153.75,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.7,rotation:-10.1742,x:207.3,y:304}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:-1.0825,x:153.7,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-9.15,x:207.05,y:304.25}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-2.2634,x:153.4,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-8.1243,x:206.75,y:304.2}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-3.4444,x:153.25,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-7.1002,x:206.5,y:304.35}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-4.6251,x:153.05,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.7}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-6.0758,x:206.2,y:304.3}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-5.8052,x:152.85,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.7,rotation:-5.0516,x:205.95,y:304.25}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-6.9859,x:152.65,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-4.0273,x:205.65,y:304.4}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:-8.167,x:152.65,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-3.0025,x:205.4,y:304.45}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:-9.348,x:152.4,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-1.9787,x:205.15,y:304.55}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-10.5287,x:152.1,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-0.9546,x:204.85,y:304.55}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-11.7086,x:151.95,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:0.0647,x:204.55,y:304.65}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-12.8889,x:151.75,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:1.0902,x:204.3,y:304.7}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-14.0704,x:151.6,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:2.1144,x:204,y:304.7}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-15.2508,x:151.4,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.6,regY:71.8,rotation:3.1383,x:203.8,y:304.75}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-16.4324,x:151.25,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:2.5233,x:203.7,y:304.8}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-15.3087,x:151.35,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:1.9078,x:203.6,y:304.75}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:-14.1841,x:151.6,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:1.2924,x:203.7,y:304.85}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-13.0594,x:151.7,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.7}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:0.6772,x:203.55,y:304.85}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-11.9363,x:151.75,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:0.0621,x:203.65,y:304.85}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-10.8116,x:151.95,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-0.5477,x:203.65,y:304.8}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-9.6876,x:152.1,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.7}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-1.1629,x:203.5,y:304.9}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-8.5638,x:152.25,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.7}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-1.7782,x:203.5,y:304.9}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:-7.4397,x:152.45,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-2.3937,x:203.6,y:304.9}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-6.316,x:152.5,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-3.0095,x:203.5,y:304.9}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-5.1912,x:152.55,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-3.6239,x:203.55,y:304.9}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-4.0674,x:152.75,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.7}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-4.2396,x:203.55,y:304.95}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-2.9435,x:152.9,y:203.25,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-4.8549,x:203.35,y:305.05}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:-1.819,x:153.15,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.6,regY:71.8,rotation:-5.4707,x:203.55,y:304.95}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:-0.6951,x:153.15,y:203.2,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-6.0855,x:203.45,y:305}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:0.4249,x:153.25,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.4,regY:71.8,rotation:-6.7009,x:203.3,y:305.05}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.3,rotation:1.5487,x:153.5,y:203.4,scaleX:0.9999,scaleY:0.9999,regY:46.7}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.6,regY:71.8,rotation:-7.3154,x:203.5,y:305.05}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:2.673,x:153.55,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-7.9316,x:203.4,y:305.1}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:3.7966,x:153.65,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-8.5461,x:203.4,y:305.05}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:4.9208,x:153.8,y:203.3,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.8,rotation:-9.1624,x:203.35,y:305.15}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:6.0451,x:153.95,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).to({state:[{t:this.ikNode_5,p:{regX:30.5,regY:71.7,rotation:-9.7772,x:203.3,y:305}},{t:this.ikNode_2,p:{y:258.05}},{t:this.ikNode_3,p:{regX:31.2,rotation:7.1692,x:154.1,y:203.35,scaleX:0.9999,scaleY:0.9999,regY:46.6}}]},1).wait(1));

	// Слой_1
	this.instance_1 = new lib._2202_w026_n002_1409b_p1_1409();
	this.instance_1.setTransform(2,2,0.1037,0.1139);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(314.5,174.5,309.70000000000005,187.89999999999998);
// library properties:
lib.properties = {
	id: '342669BDC17149FEA11AE802291B06B5',
	width: 625,
	height: 345,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2202_w026_n002_1409b_p1_1409.jpg", id:"_2202_w026_n002_1409b_p1_1409"},
		{src:"images/собачки кости_1_atlas_1.png", id:"собачки кости_1_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['342669BDC17149FEA11AE802291B06B5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;