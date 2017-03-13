import React, {Component} from 'react';
import {connect} from 'react-redux';

import Label from './Label';
import {act_poster} from '../../Redux/Action/NewAct/NewAct.action';
import {createUrl} from '../../Resource/utils/util';

import store from '../../Redux/Store/store';


class ActPoster extends Component {
	render() {
		let {bgImg, imgUpload} = this.props;
		if(typeof bgImg !== 'string') {
			bgImg = createUrl(bgImg);
		}
		return (
			<div className="row addPoster">
				<Label htmlFor="poster" name="活动海报"/>
				<div className="poster_img" style={{backgroundImage: `url(${bgImg})`}}></div>
				<div className="poster_upload">
					<label htmlFor="p_upload">上传图片</label>
					<input 
						type="file"
						id="p_upload"
						style={{display: 'none'}}
						onChange={(e) => {
							imgUpload(e.target.files[0])
						}}
						/>
					<p>温馨提示:</p>
					<p>此图片将作为此活动的封面，一张漂亮的封面图片可以提高浏览者视觉体验，同时可以宣传活动内容。<br />建议上传尺寸 1080px*640px 的.png、.jpg、.gif图片，图片小于1M</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	bgImg: state.getIn(['act_poster', 'poster'])
});

const mapDispatchToProps = (dispatch) => ({
	imgUpload: (val) => dispatch(act_poster(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActPoster);