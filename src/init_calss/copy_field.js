/*
 * @Date: 2019-09-27 18:15:24
 * @information: 最后更新时间
 */
/**
 * @Author: 周靖松
 * @information: 字段交换赋值
 * @Date: 2019-09-27 18:23:46
 */
export default function copyField(model) {
  // 解构，默认目标是form
  let { from, to='form', config } = model;
  // 检查
  if (!from||!config) return new Error('缺少必要参数')
	// 目标源是否为当前对象
	let toObj = typeof to == 'string' ? this[to] : to;
	// 赋值源是否在this
	let fromObj = typeof from == 'string' ? this[from] : from;
	// 对应赋值
	Object.entries(config).forEach((el) => {
		toObj[el[0]] = fromObj[el[1]];
	});
}
