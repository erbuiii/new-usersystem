<template>
	<div class="tags" v-if="showTags">
		<!-- <el-tabs type="card" closable @tab-remove="closeTag(index)">
			<el-tab-pane 
				:key="index"
				v-for="{item,index} in tagsList"
				:label="name"
				>
			</el-tab-pane>
		</el-tabs> -->
		<div data-v-47c5997d="" class="el-tabs el-tabs--card el-tabs--top">
			<div class="el-tabs__header is-top">
				<div class="el-tabs__nav-wrap is-top">
					<div class="el-tabs__nav-scroll">
						<div role="tablist" class="el-tabs__nav is-top" style="transform: translateX(0px);">
							<div id="tab-0" aria-controls="pane-0" role="tab" aria-selected="true" tabindex="0" 
								class="el-tabs__item is-top is-closable"
								v-for="(item,index) in tagsList"
								:key="index"
								:class="{'is-active': isActive(item.path)}">
								<router-link 
									:to="item.path" 
									class="tags-link-title">
				                    {{item.title}}
				                </router-link>
								<span 
									class="el-icon-close" 
									@click="closeTag(index)"
								></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bus from '../common/bus.js'
	export default {
		data() {
			return {
				tagsList: [],
				name: "hhhhhh"
			}
		},
		methods: {
			isActive(path) {
				return path === this.$route.fullPath;
			},
			// 设置标签
			setTags(route) {
				// some()：用于检测数组中的某个元素是否符合指定条件，遇到满足的则返回true，剩下元素不再检测
				const isExist = this.tagsList.some(item => {
					return item.path === route.fullPath;
				})

				// 如果标签未建立
				!isExist && this.tagsList.push({
					title: route.meta.title,
					path: route.fullPath,
					name: route.matched[1].components.default.name
				})
				bus.$emit('tags', this.tagsList);
			},
			// 关闭单个标签
			closeTag(index) {
				const delItem = this.tagsList.splice(index, 1)[0];
				const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
				if (item) {
					delItem.path === this.$route.fullPath && this.$router.push(item.path);
				} else {
					this.$router.push('/');
				}
			}
		},
		computed: {
			showTags() {
				return this.tagsList.length > 0;
			}
		},
		watch: {
			$route(newVal, oldVal) {
				this.setTags(newVal);
			}
		},
		created() {
			this.setTags(this.$route);
		}
	}
</script>
<style>
	.el-tabs--card>.el-tabs__header {
	    background-color: #fbfcfcbf;
	}
	.tags .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
	    border-bottom-color: #f4f8f9;
	    background-color: #f4f8f9;	
	}
</style>
<style scoped>
	.tags {
		margin-top: -1px;
		margin-left: -1px;
	}

	.tags .tags-link-title {
		color: #303133;
	}

	.tags .tags-link-title.router-link-exact-active.router-link-active {
		color: #409EFF;
	}
</style>