define(['BaseView', "cUIInputClear","cUIImageSlider" ,"Model", "Store","text!TplNewIndex"], function (BaseView, cUIInputClear,cUIImageSlider, Model, Store,TplNewIndex) {
    var self,pic,
        listModel=Model.ListModel.getInstance();
    var View = BaseView.extend({
        ViewName: 'newindex',
        events: {

            "click .bottom-bar .rent":"toRent",
            "click .bottom-bar .mine":"toPersonal",
            "click .bottom-bar .order":"toOrder",
            "click .info_label_item1 .myhouse":"myHouse",
            "click .info_label_item1 .favourite":"toMyFavourite",
            "click .info_label_item1 .decorate":"toDecorate",

        },


        //点击'我关注的'
        toMyFavourite:function(){
            var isLogin = self.isLogin();
            if (!isLogin) {
                Lizard.goTo("login.html");
                //self.showMyToast("请先登录", 2000);
                return;
            }
            Lizard.goTo("list.html?favorite=1");
        },

        //点击装修
        toDecorate:function(){
            Lizard.goTo("decorate.html");
        },

        myHouse:function(e){
            Lizard.goTo("index.html");
        },

        onCreate: function () {
            self = this;
            self.$el.html(TplNewIndex);
        },

        onShow: function () {
            self.hideLoading();
            self.setHeader();
            self.$el.html(TplNewIndex);
             pic = [
                {id: 1, src: './resource/zlzq/images/newindex1.png', href: './res/img/1.jpg'},
                {id: 2, src: './resource/zlzq/images/newindex1.png', href: './res/img/2.jpg'},
                {id: 3, src: './resource/zlzq/images/newindex1.png', href: './res/img/3.jpg'},
                {id: 4, src: './resource/zlzq/images/newindex1.png', href: './res/img/4.jpg'}
            ];

            //var  pic=[];
            //for(var i=0;i<data.realty.media.length;i++) {
            //    pic.push({id: i + 1, src: data.realty.media[i].avatar, href: './res/img/1.jpg'});
            //}


            self.houseSlider = new cUIImageSlider({
                datamodel: {
                    data: pic,
                    itemFn: function (item) {
                        return '<img data-src="' + item.src + '" src="' + item.src + '" >';
                    }
                },
                displayNum: 1,
                wrapper: this.$('.house_slider1')
            });
            self.houseSlider.show();

        },
        //设置标题
        setHeader: function (type) {
            self.header.set({
                title: '租来租去',
                back: !0,
                backtext: '<i class="top_more left"></i> ',
                view: this,

                view: this,

                //events: {
                //    returnHandler: function () {
                //        Lizard.goTo("user.html");
                //    },
                //    commitHandler: function () {
                //
                //    }
                //}
            });
        },
        onHide: function () {

        }
    });

    return View;
})
