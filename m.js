/**
 * Created by kameron on 12/3/14.
 */

/**------------------===================================================----------------
 *-------------------===================================================----------------
 *                  			Programming Api
 *-------------------===================================================----------------
 *-------------------===================================================----------------*/

/**==================================================
 *                  Variable
 ====================================================*/

function Variable(name, value, type) {
	
}
/**==================================================
 *                  Vec2
 ====================================================*/

function Vector() {
    this.length = 0;
}
Vector.prototype.getMagnitude = function() {
    var i=0;
    var mag = 0;
    for(i=0;i<this.length;i+=1) {
        mag += this[i] * this[i];
    }
    return Math.sqrt(mag);
}
Vector.prototype.normailze = function() {
    var i=0;
    var mag = this.getMagnitude();
    for(i=0;i<this.length;i+=1) {
        this[i] = this[i] / mag;
    }
}
Vector.prototype.copyTo = function(v2) {
    var i=0;
    for(i=0;i<this.length;i+=1) {
        v2[i] = this[i];
        v2.length = this.length;
    }
}

/**==================================================
 *                  Vec2
 ====================================================*/

function Vec2(x,y){
    Vector.call(this);
    this.length = 2;
    var i = 0;
    var count = this.length;
    for(i = 0; i < count; i+=1) {
        if(arguments[i]) {
            this[i] = arguments[i];
        } else {
            this[i] = 0
        }
    }

}

Vec2.prototype = Object.create(Vector.prototype);
Vec2.prototype.constructor = Vec2;

Vec2.prototype.copy = function() {
    if(arguments[0] !== undefined) {
        if(arguments[0] instanceof Vec2) {
            this.copyTo(arguments[0]);
        } else {
            return undefined;
        }

    } else {
        return new Vec2(this[0],this[1]);
    }
}

/**==================================================
 *                  Vec3
 ====================================================*/

function Vec3() {
    Vector.call(this);
    this.length = 3;
    var i = 0;
    var count = this.length;
    for(i = 0; i < count; i+=1) {
        if(arguments[i]) {
            this[i] = arguments[i];
        } else {
            this[i] = 0
        }
    }

}

Vec3.prototype = Object.create(Vector.prototype);
Vec3.prototype.constructor = Vec3;

Vec3.prototype.copy = function() {
    if(arguments[0] !== undefined) {
        if(arguments[0] instanceof Vec3) {
            this.copyTo(arguments[0]);
        } else {
            return undefined;
        }

    } else {
        return new Vec3(this[0],this[1],this[2]);
    }
}

/**==================================================
 *                  Vec4
 ====================================================*/

function Vec4() {
    Vector.call(this);
    this.length = 4;
    var i = 0;
    var count = this.length;
    for(i = 0; i < count; i+=1) {
        if(arguments[i]) {
            this[i] = arguments[i];
        } else {
            this[i] = 0
        }
    }

}

Vec4.prototype = Object.create(Vector.prototype);
Vec4.prototype.constructor = Vec4;

Vec4.prototype.copy = function() {
    if(arguments[0] !== undefined) {
        if(arguments[0] instanceof Vec4) {
            this.copyTo(arguments[0]);
        } else {
            return undefined;
        }

    } else {
        return new Vec4(this[0],this[1],this[2],this[3]);
    }
}

/**==================================================
 *                  VectorMath
 ====================================================*/

function VectorMath() {

}
VectorMath.prototype.add = function(v1,v2) {
    var v1l = 1;
    var v2l = 1;
    var out = [];
    if(v1.length !== undefined) {
        vl1 = v1.length;
    }
    if(v2.length !== undefined) {
        v21 = v2.length;
    }
    if(v21 === v1l || v21 === 1 || v1l === 1) {

    } else {
        return undefined;
    }

}
VectorMath.prototype.subtract = function(v1,v2) {

}
VectorMath.prototype.multiply = function(v1,v2) {

}
VectorMath.prototype.divide = function(v1,v2) {

}
VectorMath.prototype.projectTo = function(v1,v2) {

}
/**==================================================
 *                  Mat2x2
 ====================================================*/

function Mat2(aa,ab,ba,bb) {
	
}
/**==================================================
 *                  Mat3x3
 ====================================================*/

function Mat2(aa,ab,ac,ba,bb,bc,ca,cb,cc) {
	
}

/**==================================================
 *                  DataMatrix
 ====================================================*/

function DataMatrix(data,dimensions) {
    this._dimensions = [];
    this._sizeTable = [];
    this._data = data.slice(0);
    if( Object.prototype.toString.call( dimensions ) === '[object Array]' ) {
        this._dimensions = dimensions;
    } else {
        this._dimensions.push(dimensions);
    }
    this.generateSizeTable();

}
DataMatrix.prototype.generateSizeTable = function() {
    var len = this._dimensions.length;
    var i = 0;
    var b = 0;
    var s = 1;
    while(b < len-1) {
        s = 1;
        for(i=b+1;i<len;i+=1) {
            s *= this._dimensions[i];
        }
        this._sizeTable.push(s);
        b+=1;
    }
    console.log(this._sizeTable);
}
DataMatrix.prototype.getData = function() {
    var a = 0;
    var dl = Math.min(this._dimensions.length,arguments.length);
    var index1 = 0;
    var rowMult = 1;
    if(dl > 0 ) {

        for(a = 0; a < dl; a +=1) {
            if(this._sizeTable[a]) {
                rowMult = +(this._sizeTable[a]);
            } else {
                rowMult = 1;
            }
            index1 += (+(arguments[a]) * rowMult);
        }
    } else {
        return this._data;
    }
    console.log("index = "+index1);
    if(this._dimensions.length > arguments.length) {
        return this._data.slice(index1,index1+(this._sizeTable[dl-1]));
    } else {
        return this._data[index1];
    }

}
DataMatrix.prototype.setData = function() {
    var a = 0;
    var dl = Math.min(this._dimensions.length,arguments.length-1);
    var index1 = 0;
    var rowMult = 1;
    var writeIndex = 0;
    var writeSize = 1;
    var writeValue = arguments[arguments.length-1];
    if(dl > 0 ) {

        for(a = 0; a < dl; a +=1) {
            if(this._sizeTable[a]) {
                rowMult = +(this._sizeTable[a]);
            } else {
                rowMult = 1;
            }
            index1 += (+(arguments[a]) * rowMult);
        }
    } else {
        return this._data;
    }
    console.log("index = "+index1);
    if(this._dimensions.length > arguments.length-1) {
        writeSize = this._sizeTable[dl-1];
        if(writeValue.length !== undefined && writeValue.length === writeSize) {
            for(writeIndex = 0; writeIndex < writeSize;writeIndex+=1) {
                this._data[index1+writeIndex] = writeValue[writeIndex];
            }
        } else {
            console.log("incorrect datatype for datamatrix write");
        }

    } else {
        this._data[index1] = writeValue;
    }
}
DataMatrix.prototype.fromImageData = function(imageData) {
    this._dimensions = [imageData.height,imageData.width,4];
    this._sizeTable = [];
    this._data = [];
    var i, j, index;
    for(i=0;i<imageData.height;i+=1) {
        for(j=0;j<imageData.width;j+=1) {
            index = ((i * imageData.width) + j) * 4;
            this._data.push(imageData.data[index]);
            this._data.push(imageData.data[index + 1]);
            this._data.push(imageData.data[index + 2]);
            this._data.push(imageData.data[index + 3]);
        }
    }
    console.log(this._data);
    this.generateSizeTable();
}
DataMatrix.prototype.toImageData = function(imageData) {

    var i, j, index;
    for(i=0;i<imageData.height;i+=1) {
        for(j=0;j<imageData.width;j+=1) {
            index = ((i * imageData.width) + j) * 4;
            imageData.data[index] = this._data[index];
            imageData.data[index+1] = this._data[index+1];
            imageData.data[index+2] = this._data[index+2];
            imageData.data[index+3] = this._data[index+3];
        }
    }

}




/**------------------===================================================----------------
 *-------------------===================================================----------------
 *                  			Interface
 *-------------------===================================================----------------
 *-------------------===================================================----------------*/


/**==================================================
 *                  Document Setup
 ====================================================*/

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        //alert("You've tried to open context menu"); //here you draw your own menu
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        //alert("You've tried to open context menu");
        window.event.returnValue = false;
    });
}

/**===================================================
 *                  GloablContextMenu
 =====================================================*/

function GlobalContextMenu() {
    this.element = document.createElement("div");

}


/**===================================================
 *                  jsConsole
 =====================================================*/

function JSConsole() {
    this.consoleElement = document.createElement("div");
    this.consoleElement.id = "jsconsole";
    this.consoleElement.contentEditable = "true";
    document.body.appendChild(this.consoleElement);
    var self = this;

    this.consoleElement.addEventListener('keydown', function(e) {
        if(e.keyCode == 13) {
            var line = self.consoleElement.innerHTML;
            line = line.replace(/<\/?br\/?>/g,"");
            eval(self.consoleElement.innerHTML);
            self.consoleElement.innerHTML = "";
        }
    })
}

/**===================================================
 *                  Utility Functions
 =====================================================*/
function pxToInt(inp) {
    return parseInt((inp).replace("px",""));
}
function convert(data,type) {
    var oType = typeof data;
    if(type === "int") {
        if(oType === "string") {
            return parseInt(data);
        } else {
               return data;
        }
    } else if(type === "float") {
        if(oType === "string") {
            return parseFloat(data);
        } else {
            return data;
        }
    } else if(type === "string") {
        if(oType === "string") {
            return data;
        } else {
            return data;
        }
    } else if(type === "boolean") {
        if(oType === "string") {
            return !!parseInt(data)
        } else {
            return !!data;
        }
    }
}
function isRightClick(e) {
    if (e.which) return (e.which == 3);
    else if (e.button) return (e.button == 2);
}

/**===================================================
 *                  Input Class
 =====================================================*/

function Port(name, type, value, parent) {
    this._name = name;
    this._type = type;
    this._value = value;
    this._element = null;
    this._isDirty = true;
    this._parent = parent;
    this._updateParentOnChange = false;

}

Port.prototype.getParent = function() {
    return this._parent;
}
Port.prototype.getName = function() {
    return this._name;
}
Port.prototype.getType = function() {
    return this._type;
}
Port.prototype.setValue = function(value) {

    if(this._type == "float") {
        this._value = parseFloat(value);
    } else if(this._type == "int") {
        this._value = (+value);
    } else if(this._type == "bool") {
        if(value == 'true') {
            this._value = true;
        } else if(value == 'false') {
            this._value = false;
        }
        this._value = !!(+value);
    } else {
        var i;
        if(this._value.length !== undefined && value.length !== undefined) {
            for(i=0;i<value.length;i+=1) {
                this._value[i] = parseFloat(value[i]);
            }
        } else {
            this._value = value;
        }

    }

    if(this._updateParentOnChange) {
        this.setDirty(true);
        this.notifyChange();
    } else {
        this.setDirty(true);
    }

}
Port.prototype.getValue = function() {
    if(this._type == "float") {
        return parseFloat(this._value);
    } else if(this._type == "int") {
        return (+this._value);
    } else if(this._type == "bool") {
        return !!(this._value);
    } else {
        return this._value;
    }

}
Port.prototype.setElement = function(e) {
    this._element = e;
}
Port.prototype.getElement = function() {
    return this._element;
}
Port.prototype.setName = function(name) {
    this._name = name;

    if(this._updateParentOnChange) {
        this.setDirty(true);
        this.notifyChange();
    } else {
        this.setDirty(true);
    }
}
Port.prototype.setType = function(type) {
    this._type = type;

    if(this._updateParentOnChange) {
        this.setDirty(true);
        this.notifyChange();
    } else {
        this.setDirty(true);
    }
}
Port.prototype.notifyChange = function() {
    if(this._isDirty) {
        this.setDirty(false);
        if(this._updateParentOnChange)this._parent.run();
        return true;
    } else {
        return false;
    }

}
Port.prototype.setDirty = function(isDirty) {
    this._isDirty = isDirty;
}

/**===================================================
 *                  Connection Class
 =====================================================*/

function Connection(port1,port2,direction) {
    this._port1 = port1;
    this._port2 = port2;
    this._direction = direction;
}
Connection.prototype.propagate = function() {
    if(this._direction > 0) {
        this._port2.setValue(this._port1.getValue());
    } else if(this._direction < 0) {
        this._port1.setValue(this._port2.getValue());
    } else {

    }
}

/**===================================================
 *                  Module Class
 =====================================================*/

function Module(name, func, x, y) {
    var self = this;
    this._name = name;
    this._inputs = [];
    this._outputs = [];
    this._func = function() {
        return 0;
    }
    this.element = document.createElement("div");
    this.element.className = "module";

    this.element.style.top = y+"px";
    this.element.style.left = x+"px";

    this.head = document.createElement("div");
    this.head.id = "head";

    this.name = document.createElement("span");
    this.name.id = "name";
    this.name.innerHTML = name;
    this.name.contentEditable = "true";

    this.handle = document.createElement("span");
    this.handle.id = "handle";
    this.handle.innerHTML = "&nbsp;";

    this.killButton = document.createElement("button");
    this.killButton.id = "kill";
    this.killButton.innerHTML = "Kill";

    this.head.appendChild(this.name);
    this.head.appendChild(this.handle);
    this.head.appendChild(this.killButton);


    this.element.appendChild(this.head);

    this.inputDiv = document.createElement("div");
    this.inputDiv.id = "inputDiv";
    this.inputDiv.innerHTML = ">";
    this.element.appendChild(this.inputDiv);

    this.body = document.createElement("div");
    this.body.id = "body";
    this.body.contentEditable = "true";
    this.element.appendChild(this.body);

    this.outputDiv = document.createElement("div");
    this.outputDiv.innerHTML = ">";
    this.outputDiv.id = "outputDiv";
    this.element.appendChild(this.outputDiv);

    document.body.appendChild(this.element);

    this._followMouse = false;

    function followMouse(e) {
        if(self._followMouse) {
            var handleX = self.handle.offsetLeft;
            var handleY = self.handle.offsetTop;
            var elementX = pxToInt(self.element.style.left);
            var elementY = pxToInt(self.element.style.top);
            self.element.style.left = (e.clientX-handleX-30)+"px";
            self.element.style.top = (e.clientY-handleY-12)+"px";
        }
    }
    this.body.addEventListener("mousedown", function(e) {
        if(isRightClick(e)) {
            $m.getContextMenu("module").open(e.clientX, e.clientY,self,"body");
        } else {

        }
    });
    this.inputDiv.addEventListener("mousedown", function(e) {
        if(isRightClick(e)) {
            $m.getContextMenu("module").open(e.clientX, e.clientY,self,"input");
        } else {

        }
    });
    this.outputDiv.addEventListener("mousedown", function(e) {
        if(isRightClick(e)) {
            $m.getContextMenu("module").open(e.clientX, e.clientY,self,"output");
        } else {

        }
    });

    this.element.addEventListener("mouseenter", function(e) {
        self.element.style.borderColor = "#99AA99";
    });
    this.element.addEventListener("mouseleave", function(e) {
        self.element.style.borderColor = "#777";
    });
    this.name.addEventListener("keyup", function(e) {
        self._name = self.name.innerHTML;
    });
    this.handle.addEventListener("mousedown", function(e) {

        self._followMouse = true;
    });
    this.handle.addEventListener("mouseup", function(e) {

        self._followMouse = false;
    });
    this.handle.addEventListener("mousemove", function(e) {
        followMouse(e);
    });
    this.head.addEventListener("mousemove", function(e) {
        followMouse(e);
    });
    this.killButton.addEventListener("click", function(e) {
        self.element.style.visibility = "hidden";
    });
    this.body.addEventListener("keyup", function(e) {
        if(e.keyCode == 18) {
            self.generateFunction();
            self.run();
            e.preventDefault();
            return false;
        } else {
            return true;
        }

    })

}
Module.prototype.getName = function() {
    return this._name;
}
Module.prototype.setName = function(name) {
    this._name = name;
}
Module.prototype.getX = function() {
    return pxToInt(this.element.style.left);
}
Module.prototype.getY = function() {
    return pxToInt(this.element.style.top);
}
Module.prototype.setX = function(x) {
    return this.element.style.left = x+"px";
}
Module.prototype.setY = function(y) {
    return this.element.style.top = y+"py";
}
Module.prototype.setBody = function(b) {
    var self = this;
    this.body.innerHTML = b.toString();
}

Module.prototype.generateInputObject = function() {
    var $in = {};
    var type = "";
    var name = "";
    for (i=0,  tot=this._inputs.length; i < tot; i++) {
        type = this._inputs[i].getType();
        name = this._inputs[i].getName();
        if(type == 'float') {
            $in[name] = parseFloat(this._inputs[i].getValue());
        } else if(type == 'int') {
            $in[name] = +(this._inputs[i].getValue());
        } else if(type == 'bool') {
            $in[name] = !!(this._inputs[i].getValue());
        } else {
            $in[name] = this._inputs[i].getValue();
        }

    }
    return $in;
}
Module.prototype.generateOutputObject = function() {
    var $out = {};
    var type = "";
    var name = "";
    for (i=0,  tot=this._outputs.length; i < tot; i++) {
        type = this._outputs[i].getType();
        name = this._outputs[i].getName();
        if(type == 'float') {
            $out[name] = parseFloat(this._outputs[i].getValue());
        } else if(type == 'int') {
            $out[name] = +(this._outputs[i].getValue());
        } else if(type == 'bool') {
            $out[name] = !!(this._outputs[i].getValue());
        } else {
            $out[name] = this._inputs[i].getValue();
        }

    }
    return $out;
}
Module.prototype.generateFunction = function() {
    var functionBody = this.body.innerHTML;

    functionBody = functionBody.replace(/<\/?br\/?>/g,"");
    functionBody = functionBody.replace(/&nbsp;/g,"");

    functionBody = "var $in = $self.generateInputObject(); var $out = $self.generateOutputObject();"+functionBody+" ;return $out;";
    try {
        this._func = Function('$self',functionBody);
    } catch (err) {
        console.error("Error in Module '"+this._name+"' : "+err.message);
    }


}
Module.prototype.run = function() {

    var name = "";
    var element = null;
    var value = "";
    var result = 0;
    try {
        if(this._func) {
            result = this._func(this);
            for (i=0,  tot=this._outputs.length; i < tot; i++) {
                name = this._outputs[i].getName();
                element = this._outputs[i].getElement();
                value = result[this._outputs[i].getName()];

                this._outputs[i].setValue(value);


            }
        }
    } catch (err) {
        console.error("Error in Module '"+this._name+"' : "+err.message);
    }


}

Module.prototype.addInput = function(name,type,value) {
    var self = this;
    var inp = new Port(name,type,value,this);
    inp._updateParentOnChange = true;
    var inputElement = document.createElement('div');
    inputElement.className = "module_input "+type;
    inputElement.innerHTML = "&nbsp;";
    inputElement.id = name;
    inp.setElement(inputElement);
    self.inputDiv.appendChild(inputElement);
    this._inputs.push(inp);

    inputElement.addEventListener("mousedown", function(e) {
        if(isRightClick(e)) {
            $m.getContextMenu("port").open(e.clientX, e.clientY,inp);
        } else {

        }
        e.stopPropagation();
    });
}
Module.prototype.addOutput = function(name,type,value) {
    var self = this;
    var outp = new Port(name,type,value,this);
    outp._updateParentOnChange = false;
    var outputElement = document.createElement('div');
    outputElement.className = "module_output "+type;
    outputElement.innerHTML = "&nbsp;";
    outputElement.id = name;
    outp.setElement(outputElement);
    self.outputDiv.appendChild(outputElement);
    this._outputs.push(outp);

    outputElement.addEventListener("mousedown", function(e) {
        if(isRightClick(e)) {
            $m.getContextMenu("port").open(e.clientX, e.clientY,outp);
        } else {

        }
        e.stopPropagation();
    });
}



/**===================================================
 *                  PortContextMenu
 =====================================================*/

function PortContextMenu() {
    var self = this;
    this._currentPort = null;
    this.element = document.createElement("div");
    this.element.id = "portContextMenu"
    var nameLabel = document.createElement("span");
    nameLabel.innerHTML = "Name:";
    this.nameElement = document.createElement("input");
    this.nameElement.type = "text";
    this.nameElement.value = "identifier";
    this.nameElement.id  = "nameElement"

    var valueLabel = document.createElement("span");
    valueLabel.innerHTML = "Value:";
    this.valueElement = document.createElement("input");
    this.valueElement.type = "text";
    this.valueElement.value = "0";
    this.valueElement.id  = "valueElement";

    this.element.appendChild(nameLabel);
    this.element.appendChild(this.nameElement);

    this.element.appendChild(valueLabel);
    this.element.appendChild(this.valueElement);

    document.body.appendChild(this.element);

    this.element.addEventListener('mouseleave', function(e) {
        self.close();
    });

    this.nameElement.addEventListener("keyup", function(e) {
        self.updateName();
    });
    this.valueElement.addEventListener("keyup", function(e) {
        self.updateValue();
    });


}
PortContextMenu.prototype.setPort = function (port) {
    this.nameElement.value = port.getName();
}
PortContextMenu.prototype.open = function (x,y,port) {
    var value = null;
    var i =0;
    this._currentPort = port;
    this.element.style.visibility = "visible";

    this.nameElement.value= port.getName();

    value = port.getValue();

    if(value.length !== undefined) {
        this.valueElement.value = '';
        for(i=0;i<value.length;i+=1) {
            if(i>0) {this.valueElement.value += ','};
            this.valueElement.value += value[i];
        }
    } else {
        this.valueElement.value = port.getValue();
    }



    this.element.style.left = x+"px";
    this.element.style.top = y+"px";
}
PortContextMenu.prototype.close = function () {
    this._currentPort.notifyChange();
    this.element.style.visibility = "hidden";
}
PortContextMenu.prototype.updateName = function () {
    this._currentPort.setName(this.nameElement.value);
}
PortContextMenu.prototype.updateValue = function () {
    var value = null;
    var i =0;
    value = this._currentPort.getValue();
    if(value.length !== undefined) {
        var arr = this.valueElement.value.split(/[, ]/);
        for(i=0;i<arr.length;i+=1) {

            this._currentPort.setValue(arr);
        }
    } else {
        this._currentPort.setValue(this.valueElement.value);
    }

}

/**===================================================
 *                  ModuleContextMenu
 =====================================================*/

function ModuleContextMenu() {
    var self = this;
    this._currentPort = null;
    this.element = document.createElement("div");
    this.element.id = "moduleContextMenu"
    var nameLabel = document.createElement("span");
    nameLabel.innerHTML = "Name:";
    this.nameElement = document.createElement("input");
    this.nameElement.type = "text";
    this.nameElement.value = "identifier";
    this.nameElement.id  = "nameElement"

    this.element.appendChild(nameLabel);
    this.element.appendChild(this.nameElement);

    document.body.appendChild(this.element);

    this.element.addEventListener('mouseleave', function(e) {
        self.close();
    });

    this.nameElement.addEventListener("keyup", function(e) {
        self.updateName();
    });

    this.element.appendChild(document.createElement("hr"));

    this.compileElement = document.createElement('div');
    this.compileElement.innerHTML = "Compile";
    this.element.appendChild(this.compileElement);
    this.compileElement.addEventListener("click", function (e){
        self.compileModule();
    });

    this.element.appendChild(document.createElement("hr"));

    this.addBoolInElement = document.createElement('div');
    this.addBoolInElement.innerHTML = "Add bool input";
    this.element.appendChild(this.addBoolInElement);
    this.addBoolInElement.addEventListener("click", function (e){
        self.addInput('bool');
    });
    this.addBoolOutElement = document.createElement('div');
    this.addBoolOutElement.innerHTML = "Add bool output";
    this.element.appendChild(this.addBoolOutElement);
    this.addBoolOutElement.addEventListener("click", function (e){
        self.addOutput('bool');
    });
    this.addIntInElement = document.createElement('div');
    this.addIntInElement.innerHTML = "Add int input";
    this.element.appendChild(this.addIntInElement);
    this.addIntInElement.addEventListener("click", function (e){
        self.addInput('int');
    });
    this.addIntOutElement = document.createElement('div');
    this.addIntOutElement.innerHTML = "Add int output";
    this.element.appendChild(this.addIntOutElement);
    this.addIntOutElement.addEventListener("click", function (e){
        self.addOutput('int');
    });
    this.addFloatInElement = document.createElement('div');
    this.addFloatInElement.innerHTML = "Add float input";
    this.element.appendChild(this.addFloatInElement);
    this.addFloatInElement.addEventListener("click", function (e){
        self.addInput('float');
    });
    this.addFloatOutElement = document.createElement('div');
    this.addFloatOutElement.innerHTML = "Add float output";
    this.element.appendChild(this.addFloatOutElement);
    this.addFloatOutElement.addEventListener("click", function (e){
        self.addOutput('float');
    });

}

ModuleContextMenu.prototype.addInput = function (type) {
    if(type == 'bool' ) {
        this._currentModule.addInput('b',type,'0');
    } else if(type == 'int' ) {
        this._currentModule.addInput('i',type,'0');
    } else if(type == 'float' ) {
        this._currentModule.addInput('f',type,'0');
    } else if(type == 'vec2' ) {

    } else if(type == 'vec3' ) {

    } else if(type == 'vec4' ) {

    }
}
ModuleContextMenu.prototype.addOutput = function (type) {
    if(type == 'bool' ) {
        this._currentModule.addOutput('b',type,'0');
    } else if(type == 'int' ) {
        this._currentModule.addOutput('i',type,'0');
    } else if(type == 'float' ) {
        this._currentModule.addOutput('f',type,'0');
    } else if(type == 'vec2' ) {

    } else if(type == 'vec3' ) {

    } else if(type == 'vec4' ) {

    }
}

ModuleContextMenu.prototype.open = function (x,y,mod,type) {
    this._currentModule = mod;
    this.element.style.visibility = "visible";

    this.nameElement.value = mod.getName();


    this.element.style.left = x+"px";
    this.element.style.top = y+"px";
    this.handleOpenType(type);
}
ModuleContextMenu.prototype.handleOpenType = function(type) {
    if(type == "input") {
        this.addBoolInElement.style.display = "block";
        this.addIntInElement.style.display = "block";
        this.addFloatInElement.style.display = "block";

        this.addBoolOutElement.style.display = "none";
        this.addIntOutElement.style.display = "none";
        this.addFloatOutElement.style.display = "none";
    } else if (type == "output") {
        this.addBoolInElement.style.display = "none";
        this.addIntInElement.style.display = "none";
        this.addFloatInElement.style.display = "none";

        this.addBoolOutElement.style.display = "block";
        this.addIntOutElement.style.display = "block";
        this.addFloatOutElement.style.display = "block";
    } else if(type == "body") {
        this.addBoolInElement.style.display = "none";
        this.addIntInElement.style.display= "none";
        this.addFloatInElement.style.display = "none";

        this.addBoolOutElement.style.display = "none";
        this.addIntOutElement.style.display = "none";
        this.addFloatOutElement.style.display = "none";
    } else {

    }
}
ModuleContextMenu.prototype.close = function () {
    this.element.style.visibility = "hidden";
}
ModuleContextMenu.prototype.updateName = function () {
    this._currentModule.setName(this.nameElement.value);
}
ModuleContextMenu.prototype.compileModule = function() {
    this._currentModule.generateFunction();
    this._currentModule.run();
}



/**===================================================
 *                  Environment Manager
 =====================================================*/

function MDotJS() {
    this.portContextMenu = null;
    this.moduleContextMenu = null;
    this.modules = {};
}
MDotJS.prototype.addModule = function(name, func, x,y) {
    if(this.modules[name]) {
        console.log('Error: A module with that name already exists');
    } else {
        this.modules[name] = new Module(name, func, x, y);
    }
}
MDotJS.prototype.init = function() {
    this.portContextMenu = new PortContextMenu();
    this.moduleContextMenu = new ModuleContextMenu();
    this.jsConsole = new JSConsole();
}
MDotJS.prototype.getContextMenu = function(name) {
    if(name == "port") {
        return this.portContextMenu;
    } else if(name == "module") {
        return this.moduleContextMenu;
    } else if(name == "global") {

    } else {

    }
}
var $m = new MDotJS();