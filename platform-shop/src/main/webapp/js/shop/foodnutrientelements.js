$(function () {
    let foodMaterialId = getQueryString("foodMaterialId");
    let url = '../foodnutrientelements/list';
    if (foodMaterialId) {
        url += '?foodMaterialId=' + foodMaterialId;
    }
    $("#jqGrid").Grid({
        url: url,
        colModel: [
			{label: 'id', name: 'id', index: 'id', key: true, hidden: true},
			{label: '食材名称', name: 'foodmaterialname', index: 'food_material_name', width: 80},
			{label: '营养元素名称', name: 'nutrientelementsname', index: 'nutrient_elements_name', width: 80},
			{label: '每克含量', name: 'contentG', index: 'content_g', width: 80}]
    });
});

let vm = new Vue({
	el: '#rrapp',
	data: {
        showList: true,
        title: null,
		foodNutrientElements: {},
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
			vm.foodNutrientElements = {};
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
            let url = vm.foodNutrientElements.id == null ? "../foodnutrientelements/save" : "../foodnutrientelements/update";
            Ajax.request({
			    url: url,
                params: JSON.stringify(vm.foodNutrientElements),
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
				    url: "../foodnutrientelements/delete",
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
                url: "../foodnutrientelements/info/"+id,
                async: true,
                successCallback: function (r) {
                    vm.foodNutrientElements = r.foodNutrientElements;
                    console.log(vm.foodNutrientElements)
                }
            });
		},
		reload: function (event) {
			vm.showList = true;
            let page = $("#jqGrid").jqGrid('getGridParam', 'page');
			$("#jqGrid").jqGrid('setGridParam', {
                postData: {'name': vm.q.foodmaterialname},
                page: page
            }).trigger("reloadGrid");
            vm.handleReset('formValidate');
		},
        reloadSearch: function() {
            vm.q = {
                foodmaterialname: ''
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
        }
	}
});