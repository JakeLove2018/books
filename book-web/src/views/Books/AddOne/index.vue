<template>
	<div>
		<a-modal title="添加书籍" :visible="props.show" @ok="submit" @cancel="close">
			<a-form :label-col="labelCol" :wrapper-col="wrapperCol">
				<a-form-item label="书名">
					<a-input v-model:value="addForm.name" />
				</a-form-item>
				<a-form-item label="价格">
					<a-input-number :min="1" :max="100" v-model:value="addForm.price"></a-input-number>
				</a-form-item>
				<a-form-item label="作者">
					<a-input v-model:value="addForm.author" />
				</a-form-item>
				<a-form-item label="出版日期">
					<a-date-picker v-model:value="addForm.publishData" />
				</a-form-item>
				<a-form-item label="分类">
					<a-input v-model:value="addForm.classify" />
				</a-form-item>
				<a-form-item label="库存">
					<a-input v-model:value="addForm.count" />
				</a-form-item>
			</a-form>
		</a-modal>
	</div>
</template>

<script src="./index.js"></script>

<style>
</style>