<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item><i class="el-icon-tickets">基础表格</i></el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<el-container class="col">
			<div class="handle-box row">
				<el-button type="primary" icon="delete" @click="removeSelection">批量删除</el-button>
				<el-button type="primary" plain>自定义查询</el-button>
				<el-input placeholder="输入关键词"></el-input>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			</div>

			<el-table 
				:data="tableData" 
				border 
				style="width: 100%" 
				ref="multipleTable" 
				@selection-change="selectionChange">
				<el-table-column
					type="selection"
					width="50">
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					>
				</el-table-column>
				<el-table-column
					prop="grade"
					label="年级"
					>
				</el-table-column>
				<el-table-column
					prop="division"
					label="年级"
					>
				</el-table-column>
				<el-table-column
					prop="college"
					label="学院"
					>
				</el-table-column>
				<el-table-column
					prop="major"
					label="专业"
					>
				</el-table-column>
				<el-table-column
					label="操作"
					>
					<template slot-scope="scope" class="row">
						<el-button size="small" @click="">编辑</el-button>
						<el-button size="small" type="danger" @click="deleteClick(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>

			<div class="pagination">
				<el-pagination :total="total" @current-change="" layout="prev, pager, next">
					
				</el-pagination>
			</div>
	
		</el-container>
		<!-- 编辑弹出框 -->
		<el-dialog  title="编辑" :visible.sync="editVisible" width="30%">
			<el-form>
				hhh
			</el-form>
			<span>
				fndkfnakf
			</span>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		name: 'usertable',
		data() {
			return {
				//url: './static/usertable.json',
				tableData: [{
					"name": "offer到手",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				},{
					"name": "小王",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				},{
					"name": "小王",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				},{
					"name": "小王",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				},{
					"name": "小王",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				},{
					"name": "小王",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				},{
					"name": "小王",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				},{
					"name": "小王",
					"grade": "大三",
					"division": "理工学部",
					"college": "信息工程学院",
					"major": "什么都学不动"
				}],
				loading: false,			// 显示加载中的样式
				cur_page: 1,			// 当前页
				pageSize: 100,			// 分页大小
				total: 800,				// 总记录数
				multipleSelection: [],	// 多选值
				editVisible: false,		// 编辑界面是否显示
				delVisible: false,		// 删除的弹出框
				del_list: [],
				form: {
					name: '',
					grade: '',
					division: '',
					college: '',
					major: ''
				},
				idx: -1
			}
		},
		/*created() {
			this.getData();
		},*/
		/*computed: {
			data() {
				return this.tableData.filter((d) => {
					let is_del = false;
					for (var i = 0; i < this.del_list.length; i++) {
						this.del_list[i]
					}
				})
			}
		},*/
		methods: {
			// 表格重新加载数据
			loadingData() {
				var _self = this;
				_self.loading = true;
				setTimeout(function() {
					console.info('加载数据成功');
					_self.loading = false;
				}, 300);
			},
			// 获取表格数据
			getData() {
				// 开发环境使用 easy-mock 数据，正式环节使用json文件
				/*if (process.env.NODE_ENV === 'development') {
					alert('development!')
					this.url = '';
				};
				this.$axios.post(this.url, {
					page: cur_page
				}).then((res) => {
					this.tableData = res.data.list;
				})*/

				/*var vm = this;
				const url = '../../../static/usertable.json';
				// var instance = this;
				this.$http.get(url).then((res) => {
					vm.tableData = res.list;
				}).catch((err) => {
					console.log(err);
					vm.errorMsg = err;
				});*/
				/*this.$axios.post('static/usertable.json', {
					page: this.cur_page
				}).then((res) => {
					this.tableData = res.data.list;
				})*/
			},

			// 删除事件
			deleteClick(row) {
				var _self = this;
				this.$confirm('确认删除' + row.name + '吗？', '提示', {
					type: 'warning'
				}).then(function(){
					_self.$message({
						message: row.name + '删除成功',
						type: 'success'
					});
					_self.loadingData(); //重新加载数据
				}).catch(function(e){
					if (e != 'cancel') {
						console.log('出现错误：' + e);
					}
				});
			},

			// 勾选框事件
			selectionChange(val) {
				for (var i = 0; i < val.length; i++) {
					var row = val[i];
				}
				this.multipleSelection = val;
				console.info(val);
			},
			// 删除所选事件，批量删除
			removeSelection() {
				var _self = this;
				var multipleSelection = this.multipleSelection;
				if (multipleSelection.length < 1) {
					_self.$message({
						message: '请至少选中一条记录',
						type: 'error'
					});
					return;
				}
				var ids = "";
				for (var i = 0; i < multipleSelection.length; i++) {
					var row = multipleSelection[i];
					ids += row.name + ","
				}
				this.$confirm('确认删除' + ids + '吗？', '提示', {
					type: 'warning'
				}).then(function(){
					_self.message({
						message: ids + '删除成功',
						type: 'success'
					});
					_self.loadingData();
				}).catch(function(e){
					if (e != 'cancel') {
						console.log('出现错误：' + e);
					}
				});
			}
		}
	}
</script>