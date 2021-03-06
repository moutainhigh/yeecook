$(function () {
    $("#jqGrid").Grid({
        url: '../cloudclassroom/list',
        colModel: [
			{label: 'id', name: 'id', index: 'id', key: true, hidden: true},
			{label: '视频主标题', name: 'videoTitle', index: 'video_title', width: 80},
			{label: '视频副标题', name: 'videoSubtitle', index: 'video_subtitle', width: 80},
            {label: '视频描述', name: 'videoDescribe', index: 'video_describe', width: 80},
			{label: '视频封面图片', name: 'videoCoverPic', index: 'video_cover_pic', width: 80,
                formatter: function (value) {
                    return transImg(value);},
            },
			{label: '视频地址', name: 'videoAdress', index: 'video_adress', width: 80
                },
            {  label:'查看',name:'check', width: 80,index:'check',sortable:false, formatter: function(value,col,row){
                    return  '<button  style="width: 80px;line-height: 30px;border: none;outline" onclick="vm.getGoods('+  row.id  +')">关联商品</button>'+
                        '<button  style="width: 80px;line-height: 30px;margin-left:10px;border: none;outline" onclick="vm.getUserCom('+  row.id  +')">用户评论</button>'

                }
            }]
    });
    $('#jqGrid').css("textAlign","center");
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		cloudClassroom: {},
		ruleValidate: {
			name: [
				{required: true, message: '名称不能为空', trigger: 'blur'}
			]
		},
		q: {
		    name: ''
		}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function () {
			vm.showList = false;
			vm.title = "新增";
			vm.cloudClassroom = {};
		},
		update: function (event) {
            let id = getSelectedRow("#jqGrid");
			if (id == null) {
				return;
			}
			vm.showList = false;
            vm.title = "修改";

            vm.getInfo(id)
		},
		saveOrUpdate: function (event) {
            let url = vm.cloudClassroom.id == null ? "../cloudclassroom/save" : "../cloudclassroom/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.cloudClassroom),
                type: "POST",
			    contentType: "application/json",
                successCallback: function (r) {
                    alert('操作成功', function (index) {
                        vm.reload();
                    });
                }
			});
		},
		del: function (event) {
            let ids = getSelectedRows("#jqGrid");
			if (ids == null){
				return;
			}

			confirm('确定要删除选中的记录？', function () {
                Ajax.request({
				    url: "../cloudclassroom/delete",
                    params: JSON.stringify(ids),
                    type: "POST",
				    contentType: "application/json",
                    successCallback: function () {
                        alert('操作成功', function (index) {
                            vm.reload();
                        });
					}
				});
			});
		},
		getInfo: function(id){
            Ajax.request({
                url: "../cloudclassroom/info/"+id,
                async: true,
                successCallback: function (r) {
                    vm.cloudClassroom = r.cloudClassroom;
                }
            });
		},
        getGoods:function(rowId){
            openWindow({
                type: 2,
                title: '关联商品',
                content: '../shop/cloudclassroomgood.html?videoId=' + rowId
            })
        },
        getUserCom:function(rowId){
            openWindow({
                type: 2,
                title: '用户评论',
                content: '../shop/usercomments.html?videoId=' + rowId
            })
        },
		reload: function (event) {
			vm.showList = true;
            let page = $("#jqGrid").jqGrid('getGridParam', 'page');
			$("#jqGrid").jqGrid('setGridParam', {
                postData: {'name': vm.q.videoTitle},
                page: page
            }).trigger("reloadGrid");
            vm.handleReset('formValidate');
		},
        reloadSearch: function() {
            vm.q = {
                videoTitle: ''
            }
            vm.reload();
        },
        handleSubmit: function (name) {
            handleSubmitValidate(this, name, function () {
                vm.saveOrUpdate()
            });
        },
        handleReset: function (name) {
            handleResetForm(this, name);
        },
        handleFormatError: function (file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleSuccessvideoCoverPic: function (res, file) {
            vm.cloudClassroom.videoCoverPic = file.response.url;
        },
        handleSuccessvideoAdress: function (res, file) {
            vm.cloudClassroom.videoAdress = file.response.url;
        },
        handleMaxSize: function (file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 20m。'
            });
        },
        eyeImagevideoCoverPic: function () {
            var url =vm.cloudClassroom.videoCoverPic;
            eyeImage(url);
        }
	}
});