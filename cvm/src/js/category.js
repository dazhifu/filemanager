window.onload=function(){
    new Vue({
        el: '#category',
        data: {
            manufacturers: [],                 //制造商
            manufacturerIndex:0,
            brands:[],                         //品牌
            brandIndex:0,
            models:[],                         //车型
            modelIndex:0

        },

        //页面渲染完成回调
        ready: function () {                                           //这里是vue初始化完成后执行的函数
            var self = this;
            // 初始化
            this.updateManufacturers();
            this.updateBrand(this.manufacturerIndex);
            this.updateModel(this.brandIndex);

        },

        methods: {                                                  //自定义的方法

            manufacturerOnclick: function ($index) {
                this.manufacturerIndex = $index
            },

            brandOnclick: function ($index) {
                this.brandIndex = $index

            },
            modelOnclick: function ($index) {
                this.modelIndex = $index
            },
            // 更新厂商数据
            updateManufacturers:function () {
                var self = this;
                var renderbrand = function (response) {
                    var col = response.table[0];
                    self.manufacturers= [];
                    var fundList = response.table.slice(1);

                    for (var i = 0; i < fundList.length; i++) {
                        var row = fundList[i];
                        self.manufacturers.push(array2Object(col, row))
                    }
                };
                ajaxDownload('/api/MERCHANTSSECURITIES/category', null, renderbrand, null);
            },

            // 更新品牌数据
            updateBrand:function (index) {
                var self = this;
                var result = function (response) {
                    var col = response.table[0];
                    self.brands= [];
                    var fundList = response.table.slice(1);

                    for (var i = 0; i < fundList.length; i++) {
                        var row = fundList[i];
                        self.brands.push(array2Object(col, row))
                    }
                };
                ajaxDownload('/api/MERCHANTSSECURITIES/brand', {index:index}, result, null);
            },
            // 更新车型数据
            updateModel:function (index) {
                var self = this;
                var result = function (response) {
                    var col = response.table[0];
                    self.models= [];
                    var fundList = response.table.slice(1);

                    for (var i = 0; i < fundList.length; i++) {
                        var row = fundList[i];
                        self.models.push(array2Object(col, row))
                    }
                };
                ajaxDownload('/api/MERCHANTSSECURITIES/model', {index:index}, result, null);
            },
        },



    })
}
