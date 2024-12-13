(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"миньон2_atlas_1", frames: [[752,0,346,593],[0,0,750,563],[1100,0,119,219]]}
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



(lib.Безымянный3 = function() {
	this.initialize(ss["миньон2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["миньон2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ыыы = function() {
	this.initialize(ss["миньон2_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.тело = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Безымянный3();
	this.instance.setTransform(0,0,0.3189,0.3189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело, new cjs.Rectangle(0,0,110.4,189.1), null);


(lib.рука = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ыыы();
	this.instance.setTransform(0,0,0.2955,0.3152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рука, new cjs.Rectangle(0,0,35.2,69.1), null);


// stage content:
(lib.миньон2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Каркас_19
	this.ikNode_1 = new lib.тело();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(286.1,241.5,1,1,0,0,0,55.1,94.5);

	this.ikNode_2 = new lib.рука();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(344,262.5,1,1,0,0,0,4,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_2,p:{rotation:0,x:344,y:262.5,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0,x:286.1,y:241.5,regY:94.5}}]}).to({state:[{t:this.ikNode_2,p:{rotation:-2.2921,x:343.95,y:262.4,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:-0.0149,x:286.05,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-4.5834,x:344,y:262.5,regY:52.6,regX:4}},{t:this.ikNode_1,p:{rotation:-0.0306,x:286,y:241.4,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-6.876,x:343.95,y:262.3,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:-0.0463,x:286,y:241.4,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-9.1682,x:343.95,y:262.3,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:-0.0621,x:285.95,y:241.4,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-11.4601,x:343.95,y:262.25,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:-0.0778,x:285.95,y:241.55,regY:94.6}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-9.6592,x:343.9,y:262.35,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.014,x:285.95,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-7.8581,x:343.85,y:262.45,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.1075,x:285.85,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-6.0568,x:343.95,y:262.5,regY:52.5,regX:4.1}},{t:this.ikNode_1,p:{rotation:0.2002,x:285.85,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-4.2564,x:343.8,y:262.6,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.2938,x:285.85,y:241.5,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-2.4557,x:343.75,y:262.7,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.3864,x:285.85,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-0.6548,x:343.7,y:262.8,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.4791,x:285.85,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:1.1454,x:343.6,y:263.05,regY:52.6,regX:4}},{t:this.ikNode_1,p:{rotation:0.5727,x:285.85,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:2.9791,x:343.55,y:262.9,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.5727,x:285.85,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:4.8124,x:343.6,y:262.9,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.5727,x:285.8,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.6462,x:343.5,y:262.9,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.5727,x:285.8,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.479,x:343.5,y:262.95,regY:52.6,regX:4}},{t:this.ikNode_1,p:{rotation:0.5727,x:285.8,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.3125,x:343.55,y:262.85,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.5727,x:285.8,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.6399,x:343.45,y:262.9,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.6129,x:285.8,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.9667,x:343.45,y:262.95,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.6531,x:285.75,y:241.55,regY:94.6}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:5.2942,x:343.45,y:263,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.6942,x:285.75,y:241.4,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:3.621,x:343.45,y:263,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.7344,x:285.75,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:1.9482,x:343.4,y:263.05,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.7746,x:285.7,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:0.2754,x:343.35,y:263.05,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.8157,x:285.7,y:241.45,regY:94.5}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-1.3972,x:343.4,y:263.1,regY:52.5,regX:4}},{t:this.ikNode_1,p:{rotation:0.8559,x:285.75,y:241.4,regY:94.5}}]},1).wait(1));

	// Слой_1
	this.instance = new lib.Растровоеизображение1();
	this.instance.setTransform(2,-1,0.8293,0.6164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(314.5,171.5,309.5,174.5);
// library properties:
lib.properties = {
	id: '96D5BED576A845D89BAB747AC2ED61F2',
	width: 625,
	height: 345,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/миньон2_atlas_1.png", id:"миньон2_atlas_1"}
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
an.compositions['96D5BED576A845D89BAB747AC2ED61F2'] = {
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