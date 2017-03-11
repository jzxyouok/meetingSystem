import React, {Component} from 'react';

class NewAct extends Component {
	render() {
		return <div className="newAct">
			<p className="title">活动信息</p>
			<div className="row">
				<label htmlFor="name">活动名称 <span>*</span></label>
				<input type="text" id="name" />
			</div>
			<div className="row">
				<label htmlFor="time">活动时间 <span>*</span></label>
				<div className="begin">
					<label htmlFor="begin_time">开始时间 <span>*</span></label>
					<input type="text" id="beigin_time" />
				</div>
				<div className="end">
					<label htmlFor="end_time">开始时间 <span>*</span></label>
					<input type="text" id="end_time" />
				</div>
			</div>
			<div className="row">
				<label htmlFor="address">活动地址 <span>*</span></label>
				<div className="pc">
					<select><option value="">北京</option></select>
					<select><option value="">朝阳区</option></select>
				</div>
				<div className="detail">
					<input type="text" />
				</div>
			</div>
			<div className="row">
				<label htmlFor="offical">主办方 <span>*</span></label>
				<select id="offical"><option value="">选择主办方</option></select>
				<button>添加主办方</button>
			</div>
			<div className="row">
				<label htmlFor="catogery">活动分类</label>
				<select id="offical"><option value="">选择活动分类</option></select>
				<button>添加活动分类</button>
			</div>
			<div className="row">
				<label htmlFor="poster">活动海报 <span>*</span></label>
				<div className="poster_img"></div>
				<div className="poster_upload">
					<label>上传图片</label>
					<p>温馨提示:</p>
					<p>此图片将作为此活动的封面，一张漂亮的封面图片可以提高浏览者视觉体验，同时可以宣传活动内容。<br />建议上传尺寸 1080px*640px 的.png、.jpg、.gif图片，图片小于1M</p>
				</div>
			</div>
		</div>
	}
}