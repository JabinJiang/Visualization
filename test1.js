  
    
    /********************************变量定义****************************** */
    // 指定图表的配置项和数据
    var y = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
    ];
    var x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    var timeData = [
        '7:00','7:01','7:02','7:03','7:04','7:05','7:06','7:07','7:08','7:09',
        '7:10','7:11','7:12','7:13','7:14','7:15','7:16','7:17','7:18','7:19',
        '7:20','7:21','7:22','7:23','7:24','7:25','7:26','7:27','7:28','7:29',
        '7:30','7:31','7:32','7:33','7:34','7:35','7:36','7:37','7:38','7:39',
        '7:40','7:41','7:42','7:43','7:44','7:45','7:46','7:47','7:48','7:49',
        '7:50','7:51','7:52','7:53','7:54','7:55','7:56','7:57','7:58','7:59',
        '8:00','8:01','8:02','8:03','8:04','8:05','8:06','8:07','8:08','8:09',
        '8:10','8:11','8:12','8:13','8:14','8:15','8:16','8:17','8:18','8:19',
        '8:20','8:21','8:22','8:23','8:24','8:25','8:26','8:27','8:28','8:29',
        '8:30','8:31','8:32','8:33','8:34','8:35','8:36','8:37','8:38','8:39',
        '8:40','8:41','8:42','8:43','8:44','8:45','8:46','8:47','8:48','8:49',
        '8:50','8:51','8:52','8:53','8:54','8:55','8:56','8:57','8:58','8:59',
        '9:00','9:01','9:02','9:03','9:04','9:05','9:06','9:07','9:08','9:09',
        '9:10','9:11','9:12','9:13','9:14','9:15','9:16','9:17','9:18','9:19',
        '9:20','9:21','9:22','9:23','9:24','9:25','9:26','9:27','9:28','9:29',
        '9:30','9:31','9:32','9:33','9:34','9:35','9:36','9:37','9:38','9:39',
        '9:40','9:41','9:42','9:43','9:44','9:45','9:46','9:47','9:48','9:49',
        '9:50','9:51','9:52','9:53','9:54','9:55','9:56','9:57','9:58','9:59',
        '10:00','10:01','10:02','10:03','10:04','10:05','10:06','10:07','10:08','10:09',
        '10:10','10:11','10:12','10:13','10:14','10:15','10:16','10:17','10:18','10:19',
        '10:20','10:21','10:22','10:23','10:24','10:25','10:26','10:27','10:28','10:29',
        '10:30','10:31','10:32','10:33','10:34','10:35','10:36','10:37','10:38','10:39',
        '10:40','10:41','10:42','10:43','10:44','10:45','10:46','10:47','10:48','10:49',
        '10:50','10:51','10:52','10:53','10:54','10:55','10:56','10:57','10:58','10:59',
        '11:00','11:01','11:02','11:03','11:04','11:05','11:06','11:07','11:08','11:09',
        '11:10','11:11','11:12','11:13','11:14','11:15','11:16','11:17','11:18','11:19',
        '11:20','11:21','11:22','11:23','11:24','11:25','11:26','11:27','11:28','11:29',
        '11:30','11:31','11:32','11:33','11:34','11:35','11:36','11:37','11:38','11:39',
        '11:40','11:41','11:42','11:43','11:44','11:45','11:46','11:47','11:48','11:49',
        '11:50','11:51','11:52','11:53','11:54','11:55','11:56','11:57','11:58','11:59',
        '12:00','12:01','12:02','12:03','12:04','12:05','12:06','12:07','12:08','12:09',
        '12:10','12:11','12:12','12:13','12:14','12:15','12:16','12:17','12:18','12:19',
        '12:20','12:21','12:22','12:23','12:24','12:25','12:26','12:27','12:28','12:29',
        '12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
        '12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
        '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59',
        '13:00','13:01','13:02','13:03','13:04','13:05','13:06','13:07','13:08','13:09',
        '13:10','13:11','13:12','13:13','13:14','13:15','13:16','13:17','13:18','13:19',
        '13:20','13:21','13:22','13:23','13:24','13:25','13:26','13:27','13:28','13:29',
        '13:30','13:31','13:32','13:33','13:34','13:35','13:36','13:37','13:38','13:39',
        '13:40','13:41','13:42','13:43','13:44','13:45','13:46','13:47','13:48','13:49',
        '13:50','13:51','13:52','13:53','13:54','13:55','13:56','13:57','13:58','13:59',
        '14:00','14:01','14:02','14:03','14:04','14:05','14:06','14:07','14:08','14:09',
        '14:10','14:11','14:12','14:13','14:14','14:15','14:16','14:17','14:18','14:19',
        '14:20','14:21','14:22','14:23','14:24','14:25','14:26','14:27','14:28','14:29',
        '14:30','14:31','14:32','14:33','14:34','14:35','14:36','14:37','14:38','14:39',
        '14:40','14:41','14:42','14:43','14:44','14:45','14:46','14:47','14:48','14:49',
        '14:50','14:51','14:52','14:53','14:54','14:55','14:56','14:57','14:58','14:59',
        '15:00','15:01','15:02','15:03','15:04','15:05','15:06','15:07','15:08','15:09',
        '15:10','15:11','15:12','15:13','15:14','15:15','15:16','15:17','15:18','15:19',
        '15:20','15:21','15:22','15:23','15:24','15:25','15:26','15:27','15:28','15:29',
        '15:30','15:31','15:32','15:33','15:34','15:35','15:36','15:37','15:38','15:39',
        '15:40','15:41','15:42','15:43','15:44','15:45','15:46','15:47','15:48','15:49',
        '15:50','15:51','15:52','15:53','15:54','15:55','15:56','15:57','15:58','15:59',
        '16:00','16:01','16:02','16:03','16:04','16:05','16:06','16:07','16:08','16:09',
        '16:10','16:11','16:12','16:13','16:14','16:15','16:16','16:17','16:18','16:19',
        '16:20','16:21','16:22','16:23','16:24','16:25','16:26','16:27','16:28','16:29',
        '16:30','16:31','16:32','16:33','16:34','16:35','16:36','16:37','16:38','16:39',
        '16:40','16:41','16:42','16:43','16:44','16:45','16:46','16:47','16:48','16:49',
        '16:50','16:51','16:52','16:53','16:54','16:55','16:56','16:57','16:58','16:59',
        '17:00','17:01','17:02','17:03','17:04','17:05','17:06','17:07','17:08','17:09',
        '17:10','17:11','17:12','17:13','17:14','17:15','17:16','17:17','17:18','17:19',
        '17:20','17:21','17:22','17:23','17:24','17:25','17:26','17:27','17:28','17:29',
        '17:30','17:31','17:32','17:33','17:34','17:35','17:36','17:37','17:38','17:39',
        '17:40','17:41','17:42','17:43','17:44','17:45','17:46','17:47','17:48','17:49',
        '17:50','17:51','17:52','17:53','17:54','17:55','17:56','17:57','17:58','17:59',
        '18:00','18:01','18:02','18:03','18:04','18:05','18:06','18:07','18:08','18:09',
        '18:10','18:11','18:12','18:13','18:14','18:15','18:16','18:17','18:18','18:19',
        '18:20','18:21','18:22','18:23','18:24','18:25','18:26','18:27','18:28','18:29',
        '18:30','18:31','18:32','18:33','18:34','18:35','18:36','18:37','18:38','18:39',
        '18:40','18:41','18:42','18:43','18:44','18:45','18:46','18:47','18:48','18:49',
        '18:50','18:51','18:52','18:53','18:54','18:55','18:56','18:57','18:58','18:59',
        '19:00'
        ];
    var Maxtime=0;
    var Mintime=0;

    var day =1;//第几天
    var key =1;//关键字
    var h=0; //全局变量-小时
    var m=0; //全局变量-分
    var slic=3600//时间间隔长度
    var part=43200;//整个时间的长度
    var N=parseInt(part/slic);
    var tmpdata;
    var mdata=new Array(3)
    getMaxMintime();
    for (i=0;i<3;i++)
    {   
         mdata[i]=new Array(2);
    }
    for (i=0;i<3;i++)
    {    for (j=0;j<2;j++)
        {
            day=i+1;
            getMaxMintime();
            mdata[i][j]=new Array(parseInt((Maxtime-Mintime)/60+5));
        }
    }
    var Areadata=new Array();
    var people=new Array();
    var floor = 1;
    var interval = 60;
    var opt=new Array(3)

    for (i=0;i<3;i++)
    {   
        opt[i]=new Array(2);
    }
    for (i=0;i<3;i++)
    {    for (j=0;j<2;j++)
        {
            day=i+1;
            getMaxMintime();
            opt[i][j]=new Array(parseInt((Maxtime-Mintime)/60+5));
        }
    }
    day=1;
    d=1;
    getMaxMintime();
    var minue= new Array(parseInt((Maxtime-Mintime)/60+5));
    var G2_id=new Array();
   
    /************************************************************************************** */



    /*********************************************初始数据加载*********************************** */
    //第一层数据
    
    reLoad(1,1);
    reLoad(2,1);
    reLoad(3,1);
    //第二层数据
    reLoad(1,2);
    reLoad(2,2);
    reLoad(3,2);

    day=1;
   /****************************************************************************************** */
     

    /****************************************JQuery监听事件********************************************* */
    //监听主选框事件
    $(".map_02").hide();

    $(".navigation #day ul li a").click(function(){ 
        day =  $(this).attr("rel");
        $("#day0").text("第" + day + "天");
        reSet();//设置成响应日期的数据
        myChart.setOption(option);//渲染视图
    }); 

    $(".navigation #floor ul li a").click(function(){ 
        floor =  $(this).attr("rel");
        $("#floor0").text("第" + floor + "层");
        if(floor==2){
            $(".map_01").hide();//隐藏第一层地图
            $(".map_02").show(); //展示第二层地图
            reSet();//设置成第二层数据
            myChart.setOption(option);//视图渲染
        }
        if(floor==1){
            $(".map_02").hide();//隐藏第二层地图
            $(".map_01").show();//展示第一层地图
            reSet();//设置成第一层数据
            myChart.setOption(option);//视图渲染
        }
    }); 

    
    
    $(document).ready(function(){	
        $('.navigation li').hover(
            function () {
                $('ul', this).fadeIn();
            }, 
            function () {
                $('ul', this).fadeOut();
            }
        );
    })
    $(document).on('click','.switchOn',function(){
        $("#members ul li").attr("style","background-color:white");
        $(this).toggleClass('switchOff');    
        });

        
 /**************************************************************************************************** */  


 /***************************************视图绘制******************************************************* */   
//主视图-热力图的设计
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        baseOption: {
            timeline: {

                data: minue,//这里数据的多少决定了时间轴的长短
                show: true,
                axisType: 'category',
                top: '423px',
                playInterval:'500',
                tooltip:{
                    show:false,
                }
                },

            title: {

                //text: '会场一楼地图',

                //subtext: '人员热力图',
                top:'409px' ,
                left: 'center',

            },

            tooltip: {

                position: 'top',
                formatter: function (datas) {
                    var sid=strFormat(floor,parseInt(datas.data[1]),parseInt(datas.data[0]));
                    var area_name=getAddressName(floor,datas.data[1]+1,datas.data[0]+1);
                    var res ='传感器id:'+ sid + '<br/>区域：'+area_name+'<br/>人数：'+datas.data[2]+'人';
                    return res
                   }
            },

            animation: false,

            grid: {

                height: '50%',

                show: true,

            },

            xAxis: {
                type: 'category',
                name: 'y',
                data: y,
                show:false,
                position: 'top',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#000000']
                    }
                },
                splitArea: {
                    show: true,
                }
            },
            yAxis: {
                type: 'category',
                name: 'x',
                data: x,
                show:false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#000000']
                    }
                },
                inverse: true,
                splitArea: {
                    show: true
                }
            },
            itemStyle:{
                opacity:0.85,
            },
            visualMap: {
                min: 0,
                max: 100,
                calculable: true,
                left:'60px',
                bottom: '55%',
            },
            series: [{
                name: '人员数量',
                type: 'heatmap',
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        },
        options:opt[0][0]
    };
    myChart.setOption(option);

    //辅助视图-地区人员流动图的设计
    var myChart3 = echarts.init(document.getElementById("back3"));
    var option_view3 = {
        // 标题
    title: {
       
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['流入量'],
        x: 'center'
    },
    toolbox: {
        
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
    
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 0,
            end: 70,
            xAxisIndex: 0
        },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 70,
            xAxisIndex: 0
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        height: '60%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        }
    ],
    yAxis : [
        {
            
            type : 'value',
        }
    ],
    
    series : [
        {
             name:'流入量',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:[]
        }
    ]
    };
    myChart3.setOption(option_view3);

    //辅助视图-人员状态图的设计
    var myChart2 = echarts.init(document.getElementById("back2"));
    var option_view2 = {
        style:{
            bgcolor:'#ffffff'
        },
        // 标题
        title: {
           
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
             data:['人员1'],
            x: 'center'
        },
        toolbox: {
            
        },
        axisPointer: {
        link: {xAxisIndex: 'all'}
        },
        
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 0,
                end: 70,
                xAxisIndex: [0]
            },
            {
                type: 'inside',
                realtime: true,
                start: 0,
                end: 70,
                xAxisIndex: [0]
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '60%'
        }],
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: true},
                data: timeData
            }
        ],
        yAxis : [
            {
                
                type : 'value',
            }
        ],
        
        series : [
            {
                name:'人员1',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[  ]
            }
        ]
    };
    myChart2.setOption(option_view2);
/***************************************************************************************************** */



/*****************************************视图监听以及访问服务器**************************************** */

//监听主视图事件
    myChart.on('click' ,'series',function (params) {
        people=[];
        console.log('选中了'+params.data[0]+params.data[1]+params.componentType);
        var sid=strFormat(floor,params.data[1],params.data[0]);//拿到当前坐标的传感器id
        var a=myChart.getOption().title[0].text.split(":");
        var hour=parseInt(a[0]);
        var minue=parseInt(a[1]);
        h=hour;
        m=minue;
        var locname=getAddressName(floor,params.data[1]+1,params.data[0]+1)//地区的名字
        var members = '<h4> 位置：('+params.data[0]+','+params.data[1]+')</h4><h4>'+locname+'</h4><ul>';
        getAreaID(sid,hour,minue,0);
        setGraph2(sid); 
        for(var i=0;i<people.length;i++){
            members += "<li onclick='getid(this)'>" + people[i] + "</li>";
        }
        members += '</ul>'
        document.getElementById("members").innerHTML = members;
    });
    myChart3.on('click' ,'series',function (params) {
        console.log('选中了'+params.data+params.name);
        var time_chuo = params.name;
        var number;
        var map='^([0-1]{1}/d|2[0-3]):([0-5]/d)$'
        if(!time_chuo.match(map))
        { 
            var time=time_chuo.split(':');
            number=(parseInt(time[0])-7)*60+parseInt(time[1]);
        }
        else
        {
            alert("输入时间格式错误，请按照‘hh:mm’格式输入");
        }
        myChart.dispatchAction({
                type: 'timelineChange',
                // 时间点的 index
                currentIndex: number
            })
    });

    //根据id绘制人员活动视图
    function getid(id){
        var mid=id.innerHTML;
        if(document.getElementById('onoffswitch').checked)
        {   
            $.ajax({
                type : "post",
                async : false, //同步执行
                url : "http://129.28.146.92:9999/hello",    
                data : {"key":"3","hour":h.toString(),"minue":m.toString(),"id":mid.toString(),"day":day.toString()},
                dataType : "json", //返回数据形式为json
                success : function(result) {
                    if (result) {
                        length=result.length;
                        var datax=new Array(parseInt((Maxtime-Mintime)/60));
                        var datay=new Array(parseInt((Maxtime-Mintime)/60));
                        var area_name=new Array(parseInt((Maxtime-Mintime)/60));
                        var idx=0;
                        for (var i=0;i<result.length;i++)
                        {
                            idx=parseInt(result[i].time)-parseInt(Mintime/60)-1
                            datax[idx]=result[i].time;
                            datay[idx]=result[i].stayTime;
                            area_name[idx]=getAddressName(floor,result[i].x,result[i].y);
                        } 
                        for(var i=0;i<parseInt((Maxtime-Mintime)/60);i++)
                        {
                            datax[i]=timeFormat(parseInt((Mintime+i*60)/3600),(parseInt(((Mintime+i*60)/60))%60));
                            if(datay[i]==null)
                                datay[i]=datay[i-1];
                        }
                        var item={
                            name: mid.toString(),
                            type:'line',
                            areaStyle: {},
                            data:datay,
                        }
                        console.log(datax); 
                        
                        //判断mid.toString()是否在G2_id中，不在则加入
                        console.log(G2_id.indexOf(mid.toString()));
                        if(G2_id.indexOf(mid.toString())==-1){
                            option_view2.series.push(item);
                            G2_id.push(mid.toString());
                        }
                        console.log(G2_id);
                        option_view2.legend.data=G2_id;
                        myChart2.setOption(option_view2);
                       
                    }     
                            
                }        
            });
        }
        else{
            G2_id=[]    ;
            myChart2.clear();
            option_view2 = {
                style:{
                    bgcolor:'#ffffff'
                },
                // 标题
                title: {
                   
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false
                    }
                },
                legend: {
                     data:[],
                    x: 'center'
                },
                toolbox: {
                    
                },
                axisPointer: {
                link: {xAxisIndex: 'all'}
                },
                
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 0,
                        end: 100,
                        xAxisIndex: [0]
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 100,
                        xAxisIndex: [0]
                    }
                ],
                grid: [{
                    left: 50,
                    right: 50,
                    height: '60%'
                }],
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        axisLine: {onZero: true},
                        data: timeData
                    }
                ],
                yAxis : [
                    {
                        
                        type : 'value',
                    }
                ],
                
                series : []
            };
            myChart2.setOption(option_view2);
            $("#members ul li").attr("style","background-color:white");
            $.ajax({
                type : "post",
                async : false, //同步执行
                url : "http://129.28.146.92:9999/hello",    
                data : {"key":"3","hour":h.toString(),"minue":m.toString(),"id":mid.toString(),"day":day.toString()},
                dataType : "json", //返回数据形式为json
                success : function(result) {
                    if (result) {
                        length=result.length;
                        var datax=new Array(parseInt((Maxtime-Mintime)/60));
                        var datay=new Array(parseInt((Maxtime-Mintime)/60));
                        var area_name=new Array(parseInt((Maxtime-Mintime)/60));
                        var idx=0;
                        for (var i=0;i<result.length;i++)
                        {
                            idx=parseInt(result[i].time)-parseInt(Mintime/60)-1
                            datax[idx]=result[i].time;
                            datay[idx]=result[i].stayTime;
                            area_name[idx]=getAddressName(floor,result[i].x,result[i].y);
                        } 
                        for(var i=0;i<parseInt((Maxtime-Mintime)/60);i++)
                        {
                            datax[i]=timeFormat(parseInt((Mintime+i*60)/3600),(parseInt(((Mintime+i*60)/60))%60));
                            if(datay[i]==null)
                                datay[i]=datay[i-1];
                        }
                        G2_id.push(mid.toString());
                        option_view2 = {
                            style:{
                                bgcolor:'#ffffff'
                            },
                            // 标题
                            title: {
                               
                            },
                            tooltip: {
                                trigger: 'axis',
                                
                                axisPointer: {
                                    animation: false
                                }
                            },
                            legend: {
                                 data:[],
                                x: 'center'
                            },
                            toolbox: {
                                
                            },
                            axisPointer: {
                            link: {xAxisIndex: 'all'}
                            },
                            
                            dataZoom: [
                                {
                                    show: true,
                                    realtime: true,
                                    start: 0,
                                    end: 100,
                                    xAxisIndex: [0]
                                },
                                {
                                    type: 'inside',
                                    realtime: true,
                                    start: 0,
                                    end: 100,
                                    xAxisIndex: [0]
                                }
                            ],
                            grid: [{
                                left: 50,
                                right: 50,
                                height: '60%',
                                containLabel: true
                            }],
                            xAxis : [
                                {
                                    type : 'category',
                                    boundaryGap : false,
                                    axisLine: {onZero: true},
                                    data: datax,
                                }
                            ],
                            yAxis : [
                                {
                                    
                                    type : 'value',
                                }
                            ],
                            
                            series : [
                                {
                                    name:mid.toString(),
                                    type:'line',
                                    stack: '总量',
                                    areaStyle: {},
                                    data:datay,
                                }
                                
                            ]
                        };
                        option_view2.legend.data=G2_id;
                        myChart2.setOption(option_view2);
                    }     
                            
                }        
            });
        }
        id.style="background-color:WhiteSmoke";
        //访问服务器
        getMaxMintime();
       
    }

    //绘制区域流动图
    function setGraph2(area_id)
    {
        $.ajax({
            type : "post",
            async : false, //同步执行
            url : "http://129.28.146.92:9999/hello",    
            data : {"key":"4","day":day,"hour":h,"minue":m,"sid":area_id},
            dataType : "json", //返回数据形式为json
            success : function(result) {
                if (result) {
                        var datax=new Array(700);
                        var datay=new Array(700);
                        for(var i=0;i<result.length;i++)
                        {
                            var idx=parseInt(result[i].time);
                            //datax[idx]=result[i].time;
                            datay[idx]=result[i].count;

                        }  
                        for(var i=0;i<700;i++)
                        {
                            datax[i]=timeFormat(parseInt(7+i/60),parseInt(i%60));
                            if(datay[i]==null)
                                datay[i]=0;
                        }
                        option_view3 = {
                            // 标题
                        title: {
                           
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                animation: false
                            }
                        },
                        legend: {
                            data:['流入量'],
                            x: 'center'
                        },
                        toolbox: {
                            
                        },
                        axisPointer: {
                            link: {xAxisIndex: 'all'}
                        },
                        
                        dataZoom: [
                            {
                                show: true,
                                realtime: true,
                                start: 0,
                                end: 100,
                                xAxisIndex: 0
                            },
                            {
                                type: 'inside',
                                realtime: true,
                                start: 0,
                                end: 100,
                                xAxisIndex: 0
                            }
                        ],
                        grid: [{
                            left: 50,
                            right: 50,
                            height: '60%'
                        }],
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                axisLine: {onZero: true},
                                data: datax,
                            }
                        ],
                        yAxis : [
                            {
                                
                                type : 'value',
                            }
                        ],
                        
                        series : [
                            {
                                 name:'流入量',
                                type:'line',
                                symbolSize: 8,
                                hoverAnimation: false,
                                data:datay,
                            }
                        ]
                        };
                    myChart3.setOption(option_view3);
                }     
            
            }        
        }); 
    }

    function getAreaID(area_id,h,m,s){
        $.ajax({
            type : "post",
            async : false, //同步执行
            url : "http://129.28.146.92:9999/hello",    
            data : {"key":"2","day":day,"hour":h,"minue":m,"second":s,"sid":area_id},
            dataType : "json", //返回数据形式为json
            success : function(result) {
                if (result) {
                        for(var i=0;i<result.length;i++){
                        people.push([result[i].id]);
                        }  
                }     
            
            }        
        }); 
        getMaxMintime();   
 
    }

    function loadData(d,f) {
        day=d;
        getMaxMintime();
        $.ajax({
            type : "post",
            async : false, //同步执行
            url : "http://129.28.146.92:9999/hello",    
            data : {"key":"1","day":d.toString(),"floor":f.toString()},
            dataType : "json", //返回数据形式为json
            success : function(result) {
                console.log(d,f);
                if (result) {
                        for(var j=0;j<(Maxtime-Mintime)/60+5;j++){
                            var tmp=new Array();
                            for(var i=0;i<result[j].list.length;i++){
                            tmp.push([result[j].list[i].y,result[j].list[i].x,result[j].list[i].count]);
                        }  
                        mdata[d-1][f-1][j]=tmp;
                    }
                }     
                        
            }        
        }); 
    }  
    //获取某个区域的数据 
    function strFormat(floor,x,y)
    {
        var tmp=floor.toString();
        if(x<10)
            tmp+="0"+x.toString();
        else 
            tmp+=x.toString();
        if(y<10)
            tmp+="0"+y.toString();
        else 
            tmp+=y.toString();
        return tmp;
    }
    function quperson(){
        var mid;
        mid=document.getElementById('person_id').value;
        if(mid!='')
            {
                if(document.getElementById('onoffswitch').checked)
                {   
                    $.ajax({
                        type : "post",
                        async : false, //同步执行
                        url : "http://129.28.146.92:9999/hello",    
                        data : {"key":"3","hour":h.toString(),"minue":m.toString(),"id":mid.toString(),"day":day.toString()},
                        dataType : "json", //返回数据形式为json
                        success : function(result) {
                            if (result) {
                                length=result.length;
                                var datax=new Array(parseInt((Maxtime-Mintime)/60));
                                var datay=new Array(parseInt((Maxtime-Mintime)/60));
                                var area_name=new Array(parseInt((Maxtime-Mintime)/60));
                                var idx=0;
                                for (var i=0;i<result.length;i++)
                                {
                                    idx=parseInt(result[i].time)-parseInt(Mintime/60)-1
                                    datax[idx]=result[i].time;
                                    datay[idx]=result[i].stayTime;
                                    area_name[idx]=getAddressName(floor,result[i].x,result[i].y);
                                } 
                                for(var i=0;i<parseInt((Maxtime-Mintime)/60);i++)
                                {
                                    datax[i]=(parseInt((Mintime+i*60)/3600)).toString()+":"+(parseInt(((Mintime+i*60)/60))%60).toString()+":"+"00";
                                    if(datay[i]==null)
                                        datay[i]=datay[i-1];
                                }
                                var item={
                                    name: mid.toString(),
                                    type:'line',
                                    areaStyle: {},
                                    data:datay,
                                }
                                console.log(datax); 
                                option_view2.series.push(item);
                                G2_id.push(mid.toString());
                                console.log(G2_id);
                                option_view2.legend.data=G2_id;
                                myChart2.setOption(option_view2);
                               
                            }     
                                    
                        }        
                    });
                }
                else{
                    G2_id=[]    ;
                    myChart2.clear();
                    option_view2 = {
                        style:{
                            bgcolor:'#ffffff'
                        },
                        // 标题
                        title: {
                           
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                animation: false
                            }
                        },
                        legend: {
                             data:[],
                            x: 'center'
                        },
                        toolbox: {
                            
                        },
                        axisPointer: {
                        link: {xAxisIndex: 'all'}
                        },
                        
                        dataZoom: [
                            {
                                show: true,
                                realtime: true,
                                start: 0,
                                end: 100,
                                xAxisIndex: [0]
                            },
                            {
                                type: 'inside',
                                realtime: true,
                                start: 0,
                                end: 100,
                                xAxisIndex: [0]
                            }
                        ],
                        grid: [{
                            left: 50,
                            right: 50,
                            height: '60%'
                        }],
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                axisLine: {onZero: true},
                                data: timeData
                            }
                        ],
                        yAxis : [
                            {
                                
                                type : 'value',
                            }
                        ],
                        
                        series : []
                    };
                    myChart2.setOption(option_view2);
                    $("#members ul li").attr("style","background-color:white");
                    $.ajax({
                        type : "post",
                        async : false, //同步执行
                        url : "http://129.28.146.92:9999/hello",    
                        data : {"key":"3","hour":h.toString(),"minue":m.toString(),"id":mid.toString(),"day":day.toString()},
                        dataType : "json", //返回数据形式为json
                        success : function(result) {
                            if (result) {
                                length=result.length;
                                var datax=new Array(parseInt((Maxtime-Mintime)/60));
                                var datay=new Array(parseInt((Maxtime-Mintime)/60));
                                var area_name=new Array(parseInt((Maxtime-Mintime)/60));
                                var idx=0;
                                for (var i=0;i<result.length;i++)
                                {
                                    idx=parseInt(result[i].time)-parseInt(Mintime/60)-1
                                    datax[idx]=result[i].time;
                                    datay[idx]=result[i].stayTime;
                                    area_name[idx]=getAddressName(floor,result[i].x,result[i].y);
                                } 
                                for(var i=0;i<parseInt((Maxtime-Mintime)/60);i++)
                                {
                                    datax[i]=(parseInt((Mintime+i*60)/3600)).toString()+":"+(parseInt(((Mintime+i*60)/60))%60).toString()+":"+"00";
                                    if(datay[i]==null)
                                        datay[i]=datay[i-1];
                                }
                                G2_id.push(mid.toString());
                                option_view2 = {
                                    style:{
                                        bgcolor:'#ffffff'
                                    },
                                    // 标题
                                    title: {
                                       
                                    },
                                    tooltip: {
                                        trigger: 'axis',
                                        
                                        axisPointer: {
                                            animation: false
                                        }
                                    },
                                    legend: {
                                         data:[],
                                        x: 'center'
                                    },
                                    toolbox: {
                                        
                                    },
                                    axisPointer: {
                                    link: {xAxisIndex: 'all'}
                                    },
                                    
                                    dataZoom: [
                                        {
                                            show: true,
                                            realtime: true,
                                            start: 0,
                                            end: 100,
                                            xAxisIndex: [0]
                                        },
                                        {
                                            type: 'inside',
                                            realtime: true,
                                            start: 0,
                                            end: 100,
                                            xAxisIndex: [0]
                                        }
                                    ],
                                    grid: [{
                                        left: 50,
                                        right: 50,
                                        height: '60%',
                                        containLabel: true
                                    }],
                                    xAxis : [
                                        {
                                            type : 'category',
                                            boundaryGap : false,
                                            axisLine: {onZero: true},
                                            data: datax,
                                        }
                                    ],
                                    yAxis : [
                                        {
                                            
                                            type : 'value',
                                        }
                                    ],
                                    
                                    series : [
                                        {
                                            name:mid.toString(),
                                            type:'line',
                                            stack: '总量',
                                            areaStyle: {},
                                            data:datay,
                                        }
                                        
                                    ]
                                };
                                option_view2.legend.data=G2_id;
                                myChart2.setOption(option_view2);
                            }     
                                    
                        }        
                    });
                }
                //访问服务器
                getMaxMintime();
            }
    }
    function qutime(){
        var time_chuo;
        var number;
        time_chuo=document.getElementById('time_chuo').value;
        var map='^([0-1]{1}/d|2[0-3]):([0-5]/d)$'
        if(!time_chuo.match(map))
        { 
            var time=time_chuo.split(':');
            if(day==1){
                number=(parseInt(time[0])-7)*60+parseInt(time[1]);
            }
            else{
                number=(parseInt(time[0])-7)*60+parseInt(time[1]-30);
            }
        }
        else
        {
            alert("输入时间格式错误，请按照‘hh:mm’格式输入");
        }
        myChart.dispatchAction({
                type: 'timelineChange',
                // 时间点的 index
                currentIndex: number
            })
    }
    //加载数据
    function reLoad(d,f)
    {
        loadData(d,f);
        day=d;
        getMaxMintime();
        for (var i=0;i<parseInt((Maxtime-Mintime)/60+5);i++)
        {
            opt[d-1][f-1][i]= { // 第一天
                title: {
                    text: timeFormat(parseInt((Mintime/60+i)/60),parseInt((Mintime/60+i)%60))
                },
                series: [
                    {data: mdata[d-1][f-1][i]}, // 系列一的数据  
                ]
            }
        }
    }
    //重新设置主视图的option
    function reSet()
    {
        getMaxMintime();
        console.log(day,Maxtime,Mintime);
        var mun=new Array(parseInt((Maxtime-Mintime)/60+5));
        option = {
            baseOption: {
                timeline: {
    
                    data: mun,//这里数据的多少决定了时间轴的长短
                    show: true,
                    axisType: 'category',
                    top: '423px',
                    playInterval:'500',
                    tooltip:{
                        show:false,
                    }
                    },
    
                title: {
    
                    //text: '会场一楼地图',
    
                //subtext: '人员热力图',
                top: '409px',
                left: 'center',
    
                },
    
                tooltip: {
    
                    position: 'top',
                    formatter:  function (datas) {
                        var sid=strFormat(floor,parseInt(datas.data[1]),parseInt(datas.data[0]));
                        var area_name=getAddressName(floor,datas.data[1]+1,datas.data[0]+1);
                        var res ='传感器id:'+ sid + '<br/>区域：'+area_name+'<br/>人数：'+datas.data[2]+'人';
                        return res
                       }
    
                },
    
                animation: false,
    
                grid: {
    
                    height: '50%',
    
                    show: true,
    
                },
    
                xAxis: {
                    type: 'category',
                    name: 'y',
                    data: y,
                    show:false,
                    position: 'top',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#000000']
                        }
                    },
                    splitArea: {
                        show: true,
                    }
                },
                yAxis: {
                    type: 'category',
                    name: 'x',
                    data: x,
                    show:false,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#000000']
                        }
                    },
                    inverse: true,
                    splitArea: {
                        show: true
                    }
                },
            itemStyle:{
                opacity:0.85,
            },
                visualMap: {
                    min: 0,
                    max: 100,
                    calculable: true,
                    left: '60px',
                    bottom: '55%'
                },
                series: [{
                    name: '人员数量',
                    type: 'heatmap',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            },
            options:opt[day-1][floor-1]
        };
    }

    function getMaxMintime()
    {
        $.ajax({
            type : "post",
            async : false, //同步执行
            url : "http://129.28.146.92:9999/hello",    
            data : {"key":"0","day":day.toString()},
            dataType : "json", //返回数据形式为json
            success : function(result) {
                if (result) {
                        Maxtime=parseInt(result.max);
                        Mintime=parseInt(result.min);
                    }
            }                        
        }); 
    }

    function getAddressName(floor,x,y)
    {
        if(floor==1)
        {
            if(x>=3&&x<=4&&y>=2&&y<=6)
            return '分会场A';
            else if(x>=5&&x<=6&&y>=2&&y<=6)
            return '分会场B';
            else if(x>=7&&x<=8&&y>=2&&y<=6)
            return '分会场C';
            else if(x>=9&&x<=10&&y>=2&&y<=6)
            return '分会场D';
            else if(x>=13&&x<=14&&y>=3&&y<=6)
            return '签到处';
            else if(x>=4&&x<=10&&y>=8&&y<=9)
            return '海报区';
            else if(x==2&&y>=11&&y<=12)
            return '扶梯';
            else if(x>=5&&x<=6&&y>=11&&y<=12)
            return '厕所1';
            else if(x>=7&&x<=10&&y>=11&&y<=12)
            return 'room1';
            else if(x>=11&&x<=12&&y>=11&&y<=12)
            return 'room2';
            else if(x==15&&y>=11&&y<=12)
            return '扶梯';
            else if(x>=3&&x<=12&&y>=16&&y<=19)
            return '展厅';
            else if(x>=3&&x<=12&&y>=20&&y<=29)
            return '主会场';
            else if(x>=15&&x<=16&&y>=20&&y<=21)
            return '服务台';
            else if(x>=15&&x<=16&&y>=22&&y<=25)
            return 'room3';
            else if(x>=15&&x<=16&&y>=26&&y<=27)
            return 'room4';
            else if(x>=15&&x<=16&&y>=28&&y<=29)
            return '厕所2';
            else if((x==14&&y==1)||(x==16&&y==3)||(x==16&&y==5)||(x==16&&y==8))
            return '入口';
            else if((x==16&&y==6)||(x==16&&y==16)||(x==16&&y==18)||(x==1&&y==20))
            return '出口';
            else
            return '走廊等';
        }
        else if(floor==2)
        {
            if(x>=3&&x<=10&&y>=2&&y<=6)
            return '餐厅';
            else if(x>=11&&x<=12&&y>=2&&y<=6)
            return 'room5';
            else if(x>=14&&x<=16&&y>=1&&y<=6)
            return '休闲区';
            else if(x==2&&y>=11&&y<=12)
            return '扶梯';
            else if(x>=5&&x<=6&&y>=11&&y<=12)
            return '厕所3';
            else if(x>=7&&x<=8&&y>=11&&y<=12)
            return 'room6';
            else if(x==15&&y>=11&&y<=12)
            return '扶梯';
            else
            return '走廊等';
        }
    }

    function timeFormat(h,m)
    {
        var time=h;
        if(h<10)
            time='0'+time;
        if(m<10)
            time=time+":0"+m;
        else 
            time=time+":"+m;
        return time;
    }


    function reView()
    {
        day=1;
        getMaxMintime();
        var mun=new Array(parseInt((Maxtime-Mintime)/60+5));
        option = {
            baseOption: {
                timeline: {
    
                    data: mun,//这里数据的多少决定了时间轴的长短
                    show: true,
                    axisType: 'category',
                    top: '423px',
                    playInterval:'500',
                    tooltip:{
                        show:false,
                    }
                    },
    
                title: {
    
                    //text: '会场一楼地图',
    
                    //subtext: '人员热力图',
                    top:'409px' ,
                    left: 'center',
    
                },
    
                tooltip: {
    
                    position: 'top',
                    formatter: function (datas) {
                        var sid=strFormat(floor,parseInt(datas.data[1]),parseInt(datas.data[0]));
                        var area_name=getAddressName(floor,datas.data[1]+1,datas.data[0]+1);
                        var res ='传感器id:'+ sid + '<br/>区域：'+area_name+'<br/>人数：'+datas.data[2]+'人';
                        return res
                       }
    
                },
    
                animation: false,
    
                grid: {
    
                    height: '50%',
    
                    show: true,
    
                },
    
                xAxis: {
                    type: 'category',
                    name: 'y',
                    data: y,
                    show:false,
                    position: 'top',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#000000']
                        }
                    },
                    splitArea: {
                        show: true,
                    }
                },
                yAxis: {
                    type: 'category',
                    name: 'x',
                    data: x,
                    show:false,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#000000']
                        }
                    },
                    inverse: true,
                    splitArea: {
                        show: true
                    }
                },
                itemStyle:{
                    opacity:0.85,
                },
                visualMap: {
                    min: 0,
                    max: 100,
                    calculable: true,
                    left:'60px',
                    bottom: '55%',
                },
                series: [{
                    name: '人员数量',
                    type: 'heatmap',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            },
            options:opt[0][0]
        };
        
       // myChart.setOption(option);
        myChart.dispatchAction({
            type: 'timelineChange',
            // 时间点的 index
            currentIndex: 0
        })
        //辅助视图-地区人员流动图的设计
        option_view3 = {
            // 标题
        title: {
           
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
            data:['流入量'],
            x: 'center'
        },
        toolbox: {
            
        },
        axisPointer: {
            link: {xAxisIndex: 'all'}
        },
        
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 0,
                end: 70,
                xAxisIndex: 0
            },
            {
                type: 'inside',
                realtime: true,
                start: 0,
                end: 70,
                xAxisIndex: 0
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '60%'
        }],
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: true},
                data: timeData
            }
        ],
        yAxis : [
            {
                
                type : 'value',
            }
        ],
        
        series : [
            {
                 name:'流入量',
                type:'line',
                symbolSize: 8,
                hoverAnimation: false,
                data:[]
            }
        ]
        };
        myChart3.setOption(option_view3);
    
        //辅助视图-人员状态图的设计
        option_view2 = {
            style:{
                bgcolor:'#ffffff'
            },
            // 标题
            title: {
               
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            legend: {
                 data:['人员1'],
                x: 'center'
            },
            toolbox: {
                
            },
            axisPointer: {
            link: {xAxisIndex: 'all'}
            },
            
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 70,
                    xAxisIndex: [0]
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 70,
                    xAxisIndex: [0]
                }
            ],
            grid: [{
                left: 50,
                right: 50,
                height: '60%'
            }],
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: true},
                    data: timeData
                }
            ],
            yAxis : [
                {
                    
                    type : 'value',
                }
            ],
            
            series : [
                {
                    name:'人员1',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[  ]
                }
            ]
        };
        myChart2.setOption(option_view2);
        document.getElementById("members").innerHTML = ""
        document.getElementById("bar1").innerHTML = "<form><input type=\"text\" placeholder=\"请输入人员ID\" id='person_id'><button type=\"button\" onclick=\"quperson()\">查询</button></form>";
        document.getElementById("bar2").innerHTML = "<form><input type=\"text\" placeholder=\"请输入时间戳\" id='time_chuo'><button type=\"button\" onclick=\"qutime()\">查询</button></form>";
       // document.getElementById('sel').innerHTML =  "<br/><br/><br/><ul class=\"navigation\"><li id=\"day\"><a href=\"#\" id=\"day0\">天数  </a><ul><li><a href=\"#\" rel=\"1\">第1天</a></li><li><a href=\"#\" rel=\"2\">第2天</a></li><li><a href=\"#\" rel=\"3\">第3天</a></li></ul><div class=\"clear\"></div></li><li id=\"floor\"><a href=\"#\" id=\"floor0\">层数 </a><ul><li><a href=\"#\" rel=\"1\">第1层</a></li><li><a href=\"#\" rel=\"2\">第2层</a></li></ul><div class=\"clear\"></div></li></ul><div class=\"clear\"></div>";
       // $(".map_02").hide();//隐藏第二层地图
       // $(".map_01").show();//展示第一层地图
        
    }
/***************************************************************************************************** */