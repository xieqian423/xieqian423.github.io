/**
 * Created by Administrator on 2017/7/28.
 */

(function(){
    function Draw(pDom,options){
        options = options || {};
        this.contaniner = typeof pDom == 'object' ? pDom : document.getElementById(pDom);
        this.radius = options.radius;
        this.border = options.border;
        this.color = options.color;
        this.center = options.center;
        this.cover = options.cover;

        this.init();
    };

    Draw.prototype = {
        constructor: Draw,
        init: function(){
            this.createCanvas();
        },
        createCanvas: function(){
            var size = window.getComputedStyle(this.contaniner,null);
            var canvas = document.createElement("canvas");
            canvas.width = parseInt(size.width);
            canvas.height = parseInt(size.height);

            this.contaniner.appendChild(canvas);
            this.ctx = canvas.getContext("2d");

            return this;
        },
        drawRing: function(opts){
            opts = opts || {};
            var start = 0.625*Math.PI;
            var end = start + 2*Math.PI*this.cover;

            var ctx = this.ctx;
            ctx.beginPath();
            ctx.arc(this.center[0],this.center[1], this.radius-this.border, start,end);
            ctx.lineWidth = this.border;
            ctx.strokeStyle = this.color;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(this.center[0],this.center[1],this.radius-this.border,end,start);
            ctx.lineWidth = this.border;
            ctx.strokeStyle = "#fff";
            ctx.stroke();
            ctx.closePath();

            return this;
        },
        drawCircle: function(opts){
            opts = opts || {};

            var ctx = this.ctx;
            ctx.beginPath();
            ctx.arc(opts.center[0], opts.center[1], opts.radius, 0, 2*Math.PI);
            ctx.fillStyle = opts.color || "#fff";
            ctx.lineWidth = opts.width || 0;
            ctx.strokeStyle = opts.color;
            ctx.stroke();
            ctx.closePath();

            return this;
        },
        drawText: function(opts){
            opts = opts || {};
            var ctx = this.ctx;

            var textSize = ctx.measureText(opts.text);
            var x = this.center[0];
            var y = this.center[1];

            ctx.font = '16px Arial';
            ctx.fillStyle = opts.color || "#fff";
            ctx.textBaseline = "middle";
            ctx.textAlign = 'center';
            ctx.fillText(opts.text, x,y);

            return this;
        }
    }

    window.Draw = Draw;
})();
