//装修页面
define(['BaseView', "cUIInputClear","cUIImageSlider" ,"Model", "Store","text!TplDecorate"], function (BaseView, cUIInputClear,cUIImageSlider, Model, Store,TplDecorate) {
    var self;
    var View = BaseView.extend({
        ViewName: 'comment',
        events: {
            "click .housing .btn":"toReserve",
            "click .location_icon" :"toLocation",
            "click .search-btn":"toSearch",
            "click .order-list .btn":"toSubscribe",
            "click .bottom-bar .rent":"toRent",
            "click .bottom-bar .mine":"toPersonal",
            "click .bottom-bar .order":"toOrder",
            //"click .bottom-bar .schedule":"toSchedule"
        },
        changeTab: function (e) {
            var target = $(e.currentTarget),
                 icon=target.find(".b-icon"),
                tab = target.data("key");
            icon.toggleClass("active");
        },
        toSubscribe:function(e){
            Lizard.goTo("subscribe.html");
        },
        toReserve:function(e){
            self.$el.find(".info_ct").hide();
            self.$el.find(".housing").hide();
            self.$el.find(".reserve_ct").show();
        },
        ajaxException: function (msg) {
            self.loginBtn.html("登录");
            self.hideLoading();
            self.showMyToast('网络错误，请重试', 2000);
        },
        onCreate: function () {
            self = this;
            // self.$el.html(TplHouse);

        },

        onShow: function () {
            self.setHeader();

            self.$el.html(TplDecorate);
            self.hideLoading();


        },
        //设置标题
        setHeader: function () {
            self.header.set({
                title: '装修',
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
