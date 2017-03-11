import React, {Component} from 'react';
import Label from './Label';
export default class ActName extends Component {
	render() {
		return (
			<div className="row addPoster">
				<Label htmlfor="poster" name="活动海报"/>
				<div className="poster_img"></div>
				<div className="poster_upload">
					<label>上传图片</label>
					<p>温馨提示:</p>
					<p>此图片将作为此活动的封面，一张漂亮的封面图片可以提高浏览者视觉体验，同时可以宣传活动内容。<br />建议上传尺寸 1080px*640px 的.png、.jpg、.gif图片，图片小于1M</p>
				</div>
			</div>
		)
	}
}