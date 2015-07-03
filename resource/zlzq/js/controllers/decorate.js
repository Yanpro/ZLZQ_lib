//装修页面
define(['BaseView', "cUIInputClear","cUIImageSlider" ,"Model", "Store","text!TplDecorate"], function (BaseView, cUIInputClear,cUIImageSlider, Model, Store,TplDecorate) {
    var self;
    var View = BaseView.extend({
        ViewName: 'comment',
        events: {
            "click .house-list li": "toOrderDetail",
            "click .bottom-bar .rent":"toRent",
            "click .bottom-bar .mine":"toPersonal",
            "click .bottom-bar .order":"toOrder",
            "click .bottom-bar .schedule":"toSchedule",
            "click .search-icon":"toSearch",
        },

        ajaxException: function (msg) {
            self.hideLoading();
            self.showMyToast('网络错误，请重试', 2000);
        },
        onCreate: function () {
            self = this;

        },

        getList:function(callback){
            var url=Lizard.host+Lizard.apiUrl+"companies",
                paras={},
                method="get";
            var orderDate=new Array(2);
            $.ajax({
                url: url,
                dataType: "json",
                type: method,
                data:paras,
                success: function (data) {
                    self.hideLoading();

                    for(var i=0;i<data.realties.length;i++){
                        data.realties[i].state=data.orders[i].state;
                    }
                    //self.$el.html(_.template(TplOrderList, {list: data.realties}));

                },
                error: function (e) {
                    self.showMyToast("服务器异常", 1000);
                    self.hideLoading();
                }
            });
        },

        onShow: function () {
            $("#headerview").hide();
            self.setHeader();
            //self.$el.html(TplDecorate);
            self.hideLoading();
            self.getList();



        },
        //设置标题
        setHeader: function () {
            self.header.set({
                title: '装修公司',
                back: true,
                backtext: '<i class="icon-back "></i> ',
                view: this,
                events: {
                    returnHandler: function () {
                        Lizard.goTo("newindex.html");
                    },
                    commitHandler: function () {

                    }
                }
            });
        },
        onHide: function () {

        }
    });

    return View;
})
