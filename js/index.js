/**
 * 乐购商城首页js
 * 2022-10-26 ty
 */

 //当页面加载完毕
 $(function(){
    //  首页大图轮播
    $('#banner').tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });

    /** 图书电子书小轮播 */
    $('#ebooks-banner').tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });

    /** 电子书table切换 */ 
    $('.books-nav > li').mouseenter(function(){
        //导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.ebooksList').eq(index).show().siblings('.ebooks-list').hide();
    })
    

    /** 新书列表手风琴效果 */
    $('.books .right-box ul>li').mouseenter(function(){
        // 所有兄弟：隐藏详情，显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();
        
        // 当前:隐藏标题，显示详情
        $(this).find('.ebooks-title').hide();
        $(this).find('.desc').show();
    })

    /** 服装轮播 */
    $('#clothes-banner').tyslide({
        boxh:336,//盒子的高度
        w:472,//盒子的宽度
        h:336,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    })

    /* 童装小轮播 */
    $("#children-banner").tyslide({
        boxh:352,//盒子的高度
        w:472,//盒子的宽度
        h:352,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#f60000",//当前控制按钮的颜色
    });

    /* 户外运动小轮播 */ 
    $("#sport-banner").tyslide({
        boxh:352,//盒子的高度
        w:472,//盒子的宽度
        h:352,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#f60000",//当前控制按钮的颜色
    });

    /** 服装tab切换 */
    $('.clothes .clothes-nav li').mouseenter(function(){
        //导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.cloth .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })
    
    /** 户外运动tab切换 */
    $('.sport .sport-nav li').mouseenter(function(){
        //导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.sports .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /** 童装tab切换 */
    $('.children-clothes .clothes-nav li').mouseenter(function(){
        //导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.children-clothes .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /** 家居日用tab切换 */
    $('.daily .clothes-nav li').mouseenter(function(){
        //导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('.daily .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /** 推广商品交互切换 */
    $('.promotion .promotion-title ul li').mouseenter(function(){
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
        // 内容切换
        // 获取对应的索引
        console.log(index)
        console.log($('.promotion .promotion-content .inner-box'))
        var index = $(this).index(); // 0 => left:0*1170, 1 => left:-1*1170, 3 =>left:-2*1170
        //左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left':-index*1170
        },300)
    })


    

    /** 二维码滑出效果 */
    $('.qr-code .ticket').hover(function(){
        // 二维码滑出来
        $('.qr-code div').stop(true).animate({
            left:'-100px'
        })
        },function(){
        // 让二维码回去
        $('.qr-code div').stop(true).animate({
            left:0
        })
    })

    /** 顶部搜索框交互 */
    $(document).scroll(function(){
        // 获取到顶部的距离
        var topDistance = $('html,body').scrollTop();
        // 判断
        if(topDistance>500){
            // 如果滚动距离大于500就滑下来
            $(".top-search-box").slideDown(300);
        }else{
            // 否则手回去
            $('.top-search-box').slideUp(300);
        }
    })

    /** 楼梯跳转 */
    $('.floor li').click(function(){
        // 获取索引
        var index = $(this).index();
        // 选中每一个板块到顶部的偏移
        var topOffset = $('.floorBox').eq(index).offset().top;
        // 让滚动条滚到这个位置
        $('html,body').animate({
            scrollTop:topOffset - 50
        })
    })
})

